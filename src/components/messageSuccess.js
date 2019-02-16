import React from 'react'

const MessageSuccess = () => {
  return (
    <article
      style={{
        margin: '30% auto 0 auto',
        textAlign: 'center',
      }}
    >
      <h2>Message Sent!</h2>
      <p>
        <span role="img" aria-label="mail">
          📩
        </span>{' '}
        Your message is on it's way to me and I'll get back to you as soon as I
        can. Thanks for getting in touch.
      </p>
    </article>
  )
}

export default MessageSuccess
