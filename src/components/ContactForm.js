import React, { useState } from 'react'
import styled from 'styled-components'

import Button from '../components/layout/button'

const Field = styled.div`
  margin: 0 auto;
  label {
    display: block;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.5em;
  }
  input,
  textarea {
    outline: none;
    padding: 0 2rem;
    border: 1px solid
      ${({ length, valid }) =>
        length === 0 ? '#dbdbdb' : valid ? 'rgb(60, 179, 113)' : '#a94442'};
    border-radius: 3px;
    font-size: 1rem;
    height: 2.25em;
    line-height: 1.5;
    padding: calc(0.375em - 1px) calc(0.625em - 1px);
    background-color: whitesmoke;
    color: #363636;
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
    :focus,
    :active {
      outline: none;
      box-shadow: inset 0 1px 5px
        ${({ length, valid }) =>
          length === 0
            ? 'rgba(10, 10, 10, 0.1)'
            : valid
            ? 'rgba(60, 179, 113, 0.5)'
            : 'rgba(169, 68, 66, 0.5)'};
    }
    width: 100%;
  }
  textarea {
    max-height: 600px;
    min-height: 120px;
  }
`

const BtnField = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 780px) {
    justify-content: space-around;
  }
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const CheckValid = (...fields) =>
  fields.every(({ text, regex }) => regex.test(text))

// Component
const ContactForm = ({ setMessageSent }) => {
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
    if (CheckValid(name, email, message)) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name: name.text,
          email: email.text,
          message: message.text,
        }),
      })
        .then(res => {
          if (res.ok) {
            clearForm()
            setMessageSent(true)
          } else {
            throw Error(
              `Something went wrong and your message was not sent! 🤯 ${
                res.status
              } ${res.message}`
            )
          }
        })
        .catch(error => alert(error))
    }
    e.preventDefault()
  }

  const clearForm = () => {
    setName({ ...name, text: '' })
    setEmail({ ...email, text: '' })
    setMessage({ ...message, text: '' })
  }

  const handleChange = (state, set) => ({ target: { value } }) => {
    state.regex.test(value)
      ? set({ ...state, valid: true, text: value })
      : set({ ...state, valid: false, text: value })
  }

  return (
    <form
      onSubmit={handleSubmit}
      data-netlify="true"
      name="contact"
      method="post"
    >
      <input type="hidden" name="form-name" value="contact" />
      <Field valid={name.valid} length={name.text.length}>
        <label>Your Name: </label>
        <input
          type="text"
          name="name"
          value={name.text}
          placeholder="Your Name"
          onChange={handleChange(name, setName)}
        />
      </Field>
      <Field valid={email.valid} length={email.text.length}>
        <label>Your Email: </label>
        <input
          type="email"
          name="email"
          value={email.text}
          placeholder="you@youremail.com"
          onChange={handleChange(email, setEmail)}
        />
      </Field>
      <Field valid={message.valid} length={message.text.length}>
        <label>Message: </label>
        <textarea
          name="message"
          value={message.text}
          placeholder="What do you want to say?"
          onChange={handleChange(message, setMessage)}
        />
      </Field>
      <BtnField>
        <Button type="submit" disabled={!CheckValid(name, email, message)}>
          Send Message
        </Button>
        <Button onClick={clearForm}>Clear Form</Button>
      </BtnField>
    </form>
  )
}

export default ContactForm
