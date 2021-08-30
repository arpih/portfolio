import React from 'react';

class Contact extends React.Component<{}> {
  private nameRef = React.createRef<HTMLInputElement>();

  private lastnameRef = React.createRef<HTMLInputElement>();

  private emailRef = React.createRef<HTMLInputElement>();

  private messageRef = React.createRef<HTMLTextAreaElement>();


  contactToDev = () => {
    const firstname: string = this.nameRef.current ? this.nameRef.current.value : '';
    const lastname: string = this.lastnameRef.current ? this.lastnameRef.current.value : '';
    const email: string = this.emailRef.current ? this.emailRef.current.value : '';
    const msg: string = this.messageRef.current ? this.messageRef.current.value : '';

    if (!firstname || !lastname || !email || !msg) return;

    fetch('http://localhost:5000/mail', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        msg,
      }),
    })
      .then(res => res.json())
      .then(data => {
        alert(data);
      });
  }

  render() {
    return (
      <div className="contact-page">
        <h2 className="heading">Contact<span className="highlight"> Me</span></h2>
        <p className="sub-heading">If you have any questions or notes, please write me.</p>
        <div className="seperator"></div>

        <div className="contact-form">
          <div className="name">
            <input
              type="text"
              required
              className="first-name"
              placeholder="First name"
              ref={this.nameRef}
            />
            <input
              type="text"
              required
              className="last-name"
              placeholder="Last name"
              ref={this.lastnameRef}
            />
          </div>
          <input
            type="email"
            required
            className="email"
            placeholder="Email"
            ref={this.emailRef}
          />
          <textarea
            required
            className="message"
            placeholder="Message"
            ref={this.messageRef}
          ></textarea>
          <button
            className="btn contact-btn"
            type="button"
            onKeyUp={this.contactToDev}
            onClick={this.contactToDev}
          >
            Contact
          </button>
        </div>
      </div>
    );
  }
}

export default Contact;
