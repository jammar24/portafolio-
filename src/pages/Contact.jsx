import React from 'react'
import './styles/contact.css'

const Contact = () => {
  return (
    <>
  <div className='container'>
      <h1 id='container__name'> Contacta Conmigo 🌐</h1>
      <form className="container__form">
        <div className="grups">
          <input type="text" id="input-name" placeholder="Name" />
          <input type="email" id="input-email" placeholder="Email address" />
          <input type="text" id="input-subject" placeholder="Subject" />
        </div>
        <div className="btn">
          <textarea name="message" type="text" id="input-message" placeholder="Message" />
        </div>
        <input type="submit" value="Submit" id="input-submit" />
      </form>
    </div>

 </>
  )
}

export default Contact