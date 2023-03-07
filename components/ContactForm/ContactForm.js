import { useState, useReducer } from 'react'
import { Container, Row, Col } from 'react-grid'
import ReCAPTCHA from 'react-google-recaptcha'
import * as emailjs from 'emailjs-com'
import style from './ContactForm.module.scss'
import HeadingsParagraphs from '../HeadingsParagraphs/HeadingsParagraph'

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const formReducer = (state, action) => {
  switch (action.type) {
    case 'NAME':
      return { ...state, name: action.value }
    case 'EMAIL':
      return { ...state, email: action.value }
    case 'SUBJECT':
      return { ...state, subject: action.value }
    case 'MESSAGE':
      return { ...state, message: action.value }
    default:
      throw new Error()
  }
}

const ContactForm = ({ content }) => {
  const [labelState, setLabelState] = useState(false)
  const [formState, dispatch] = useReducer(formReducer, initialState)
  const [showFormErr, setShowFormErr] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState({
    title: '',
    paragraph: '',
  })
  const [showCaptcha, setShowCaptcha] = useState(false)
  const { name, email, subject, message } = formState

  const focusInput = () => setLabelState(!labelState)

  let toggle = labelState ? `${style.animateLabel}` : `${style.resetLabel}`

  const submitFormAndShowCaptcha = (e) => {
    e.preventDefault()
    setShowCaptcha(true)
  }

  const sendEmail = (captchaValue) => {
    if (name === '' || email === '' || subject === '' || message === '') {
      setShowFormErr(true)
      return
    }

    const params = {
      from_name: email,
      to_name: 'Niall',
      subject: subject,
      message: message,
      'g-recaptcha-response': captchaValue,
    }

    setFormSubmitted({ title: 'Sending message...', paragraph: '' })

    emailjs
      .send(
        'service_xaggurf',
        'template_4rj8let',
        params,
        'user_gn7hNUi1KB9jeyD2T016F',
      )
      .then(
        ({ status }) => {
          if (status === 200) {
            setFormSubmitted({
              title: 'Your message has been sent',
              paragraph: "I'll get back to you as soon as possible",
            })
          } else {
            setFormSubmitted({
              title:
                'Please try again later or email me directly at mckenna.niall@gmail.com or you can contact me via LinkedIn',
            })
          }
        },
        (err) => {
          // eslint-disable-next-line no-console
          console.log(err)
          setFormSubmitted({
            title: 'Error sending message',
            paragraph:
              'Please try again later or email me directly at mckenna.niall@gmail.com or you can contact me via LinkedIn',
          })
        },
      )
  }

  return formSubmitted.title === '' ? (
    <Container>
      {!showCaptcha ? (
        <form
          id="contact-form"
          className={style.contactForm}
          onSubmit={submitFormAndShowCaptcha}
        >
          <Row>
            <div className={style.content}>
              <HeadingsParagraphs content={content} />
            </div>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12} className={style.formGroup}>
              <label className={`${style.name} ${toggle}`}>Name</label>
              <input
                required
                type="text"
                name="name"
                className={style.formControl}
                onChange={(e) =>
                  dispatch({ type: 'NAME', value: e.target.value })
                }
                onBlur={focusInput}
                value={name}
              />
            </Col>
            <Col lg={6} md={6} sm={12} className={style.formGroup}>
              <label className={style.email}>Email</label>
              <input
                required
                type="email"
                name="email"
                className={style.formControl}
                aria-describedby="emailHelp"
                onChange={(e) =>
                  dispatch({ type: 'EMAIL', value: e.target.value })
                }
                value={email}
              />
            </Col>
          </Row>
          <div lg={12} md={12} sm={12} className={style.formGroup}>
            <label className={style.subject}>Subject</label>
            <input
              required
              type="text"
              className={style.formControl}
              name="subject"
              onChange={(e) =>
                dispatch({ type: 'SUBJECT', value: e.target.value })
              }
              value={subject}
            />
          </div>
          <div lg={12} md={12} sm={12} className={style.formGroup}>
            <label className={style.message}>Message</label>
            <textarea
              required
              as="textarea"
              name="message"
              className={style.formControl}
              rows={5}
              onChange={(e) =>
                dispatch({ type: 'MESSAGE', value: e.target.value })
              }
              value={message}
            />
          </div>
          <div className={style.formGroup}>
            {showFormErr && <p>Please complete all fields to send a message</p>}
            <button type="submit" className={style.button}>
              Send Message
            </button>
          </div>
        </form>
      ) : (
        <Container>
          <Row>
            <div className={style.content}>
              <ReCAPTCHA
                sitekey={`${process.env.SITE_KEY}`}
                onChange={sendEmail}
              />
            </div>
          </Row>
        </Container>
      )}
    </Container>
  ) : (
    <Container>
      <Row>
        <div className={style.content}>
          <h3>{formSubmitted.title}</h3>
          <p>{formSubmitted.paragraph}</p>
        </div>
      </Row>
    </Container>
  )
}

export { ContactForm as default }
