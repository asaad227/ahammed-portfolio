import React from 'react'
import "./index.css"

export default function SocialLink() {
  return (
    <footer className="social-links">
    <a href="https://www.linkedin.com/in/ahammed-saad-5341b3231/">
      {" "}
      <i className="fa fa-linkedin"></i>
    </a>
    <a href="https://github.com/asaad227">
      {" "}
      <i className="fa fa-github"></i>
    </a>
    <a href="https://twitter.com/a_saad227">
      {" "}
      <i className="fa fa-twitter"></i>
    </a>
    <a href="mailto:a.saad227@gmail.com? subject=subject text">
      {" "}
      <i className="fa fa-google"></i>
    </a>
    <a href="mailto:a.saad227@yahoo.com? subject=subject text">
      {" "}
      <i className="fa fa-yahoo"></i>
    </a>
    </footer>

  )
}
