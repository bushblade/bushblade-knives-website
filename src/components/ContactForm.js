import React, { useState } from 'react'
import styled from 'styled-components'

const Field = styled.div`
  margin: 1.75rem auto;
  max-width: 600px;
  label {
    color: #363636;
    display: block;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.5em;
  }
  input,
  textarea {
    outline: none;
    padding: 0 2rem;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 1rem;
    height: 2.25em;
    line-height: 1.5;
    padding-bottom: calc(0.375em - 1px);
    padding-left: calc(0.625em - 1px);
    padding-right: calc(0.625em - 1px);
    padding-top: calc(0.375em - 1px);
    background-color: #fff;
    border-color: ${({ length, valid }) =>
      length === 0 ? '#dbdbdb' : valid ? 'green' : 'red'};
    color: #363636;
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
    :focus,
    :active {
      outline: none;
      box-shadow: inset 0 1px 2px
        ${({ length, valid }) =>
          length === 0 ? 'rgba(10, 10, 10, 0.1)' : valid ? 'green' : 'red'};
    }
    width: 100%;
  }
  textarea {
    max-height: 600px;
    min-height: 120px;
  }
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm = () => {
  const [name, setName] = useState({
    text: '',
    valid: false,
    regex: /\S/,
  })
  const [email, setEmail] = useState({
    text: '',
    valid: false,
    regex: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
  })
  const [message, setMessage] = useState({
    text: '',
    valid: false,
    regex: /\S/,
  })

  const handleSubmit = e => {
    if ([name, email, message].every(({ text, regex }) => regex.test(text))) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', name, email, message }),
      })
        .then(() => alert('Success!'))
        .catch(error => alert(error))
    }

    e.preventDefault()
  }

  const handleChange = (value, field, set) => {
    field.regex.test(value)
      ? set({ ...field, valid: true, text: value })
      : set({ ...field, valid: false, text: value })
  }

  return (
    <form onSubmit={handleSubmit} data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <Field valid={name.valid} length={name.text.length}>
        <label>Your Name: </label>
        <input
          type="text"
          name="name"
          value={name.text}
          placeholder="Your Name"
          onChange={({ target: { value } }) =>
            handleChange(value, name, setName)
          }
        />
      </Field>
      <Field valid={email.valid} length={email.text.length}>
        <label>Your Email: </label>
        <input
          type="email"
          name="email"
          value={email.text}
          placeholder="you@youremail.com"
          onChange={({ target: { value } }) =>
            handleChange(value, email, setEmail)
          }
        />
      </Field>
      <Field valid={message.valid} length={message.text.length}>
        <label>Message: </label>
        <textarea
          name="message"
          value={message.text}
          placeholder="What do you want to say?"
          onChange={({ target: { value } }) =>
            handleChange(value, message, setMessage)
          }
        />
      </Field>
      <Field>
        <button type="submit">Send</button>
      </Field>
    </form>
  )
}

export default ContactForm
