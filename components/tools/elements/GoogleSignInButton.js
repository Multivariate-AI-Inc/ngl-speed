import React, { useRef, useEffect } from "react"
import { GoogleLogin } from "@react-oauth/google"
import { useAtom } from "jotai"
import { googleSignInAtom } from "../../../state/atoms"
const LoginPopup = () => {
  const [showSignUpButton, setShowSignUpButton] = useAtom(googleSignInAtom)
  const popupRef = useRef(null)
  const handleSuccess = response => {
    if (response.credential) {
      try {
        const jwtToken = response.credential
        const payloadBase64 = jwtToken.split(".")[1]
        const payloadJson = atob(payloadBase64)
        const payload = JSON.parse(payloadJson)
        const { email, name, picture: photo } = payload
        // Store user information in localStorage
        localStorage.setItem("userMailId", email)
        localStorage.setItem("userFullName", name)
        localStorage.setItem("userPicture", photo)
        // Hide the sign-in button if sign-in is successful
        setShowSignUpButton(false)
      } catch (error) {
        console.error("Error processing credential response:", error)
      }
    } else {
      console.error("Invalid Google response:", response)
    }
  }
  const handleClickOutside = event => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowSignUpButton(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <>
      <div className="loginPopupContainer d-flex">
        <div
          className="popup-content"
          ref={popupRef}
        >
          <h6 className="mb-10">Login to download</h6>
          {showSignUpButton && (
            <GoogleLogin
              onSuccess={handleSuccess}
              onFailure={error => console.error("Google Login Error:", error)}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default LoginPopup
