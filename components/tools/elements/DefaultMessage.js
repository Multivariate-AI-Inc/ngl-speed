import React from "react"

const DefaultMessage = ({ message, customClass }) => {
  return (
    <div
    className="format-suggestions"
      style={{
        textAlign: "center",
        padding: "2rem",
        fontWeight: "500",
        fontSize: "20px",
        color: "#778ba5",
      }}
    >
      <p className={`${customClass ? customClass : ""}`}>{message}</p>
    </div>
  )
}

export default DefaultMessage
