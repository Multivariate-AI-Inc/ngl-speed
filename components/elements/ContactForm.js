import React, { useRef, useEffect, useState } from "react"
import { useAtom } from "jotai"
import {
  formSubmitted,
  formInputData,
  formError,
  formSuccess,
} from "../../state/atoms"
import Loader from "./Loader"
const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useAtom(formSubmitted)
  const [formInput, setFormInput] = useAtom(formInputData)
  const [isError, setIsError] = useAtom(formError)
  const [isSuccess, setIsSuccess] = useAtom(formSuccess)
  const [isLoading, setLoading] = useState(false)
  const formRef = useRef(null)

  const handleInput = e => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value })
  }
  const handleFormSubmission = e => {
    e.preventDefault()
    setLoading(true)
    hideForm()
    const { name, email, phone, message, appURL } = formInput
    const pageURL = window.location.href

    const domains = [
      "yahoo",
      "protonmail",
      "aol",
      "mail",
      "gmail",
      "outlook",
      "hotmail",
      "zoho",
      "icloud",
      "gmx",
    ]
    const domain = email.slice(email.indexOf("@") + 1, email.lastIndexOf("."))
    let con_value
    if (domains.includes(domain)) {
      con_value = 331
    } else if (email === "") {
      con_value = 331
    } else {
      con_value = 1237
    }

    // const eventNameW = appURL.includes("apple")
    //   ? "iOS_hsForm_field"
    //   : "play_hsForm_field"

    // if (typeof dataLayer !== "undefined" && Array.isArray(dataLayer)) {
    //   dataLayer.push({
    //     event: eventNameW,
    //     "gtm.username": name,
    //     "gtm.email": email,
    //     "gtm.elementUrl": appURL,
    //     "gtm.uniqueAnalyticsReports": "AnalyticsHSFormWeb_nl",
    //     "gtm.phone": phone,
    //     "gtm.currency": "INR",
    //     "gtm.value": con_value,
    //     "gtm.message": message,
    //   })
    // }

    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const fields = [
      { name: "firstname", value: name },
      { name: "email", value: email },
      { name: "phone", value: phone },
      { name: "appURL", value: appURL },
      { name: "message", value: message },
    ]

    const raw = JSON.stringify({
      fields,
      context: { pageUri: pageURL },
    })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    }
    fetch(
      "https://api.hsforms.com/submissions/v3/integration/submit/3885214/efaf7e24-de65-496d-9983-ffb476f65524",
      requestOptions,
    )
      .then(response => {
        if (response.ok) {
          response.text().then(result => {
            setLoading(false)
            setIsSubmitted(true)
            localStorage.setItem("userMailId", formInput.email)
            console.log(result)
          })
        } else {
          setLoading(false)
          showErrorMessage()
          localStorage.setItem("userMailId", formInput.email)
        }
      })
      .catch(error => {
        setLoading(false)
        showErrorMessage()
        localStorage.setItem("userMailId", formInput.email)
      })
  }

  const showErrorMessage = () => {
    unHideForm()
    setIsError(true)
  }

  const hideForm = () => {
    formRef.current.style.display = "none"
  }
  const unHideForm = () => {
    formRef.current.style.display = "block"
  }

  useEffect(() => {
    const submitted = () => {
      setIsSuccess(true)
      hideForm()
    }
    if (isSubmitted) {
      submitted()
    }
  }, [isSubmitted])

  return (
    <div
      className="col-lg-7"
      id="contact"
    >
      {isLoading && <Loader />}
      <form
        id="contact-form"
        name="contact-form"
        data-name="Contact us"
        method="get"
        onSubmit={handleFormSubmission}
        ref={formRef}
      >
        <div className="box-form-contact">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="form-group mb-25">
                <input
                  className="form-control icon-user"
                  type="text"
                  placeholder="Your name"
                  required
                  name="name"
                  value={formInput.name}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="form-group mb-25">
                <input
                  className="form-control icon-email"
                  type="text"
                  placeholder="Work email"
                  required
                  name="email"
                  value={formInput.email}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="form-group mb-25">
                <input
                  className="form-control icon-phone"
                  type="text"
                  placeholder="Phone"
                  required
                  name="phone"
                  value={formInput.phone}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="form-group mb-25">
                <input
                  className="form-control icon-company"
                  type="text"
                  placeholder="App URL"
                  name="appURL"
                  value={formInput.appURL}
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group mb-25">
                <textarea
                  className="form-control textarea-control"
                  placeholder="Message"
                  required
                  name="message"
                  value={formInput.message}
                  onChange={handleInput}
                ></textarea>
              </div>
            </div>

            <div className="form-group">
              {/* <Button text={"Send message"} showIcon={false} onClick={handleFormSubmission} customBtnSize={false} /> */}
              <input
                type="submit"
                className="btn btn-brand-1-full hover-up"
              />
            </div>
          </div>
          {isError && (
            <div className="error-message w-form-fail">
              <div>Oops! Something went wrong.</div>
            </div>
          )}
        </div>
      </form>
      {isSuccess && (
        <div className="success-message w-form-done">
          <div>
            Request submitted! Our team will get in touch within 24-48 hours
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactForm
