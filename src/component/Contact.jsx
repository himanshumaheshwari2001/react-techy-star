import React from "react";
import "../styles/Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form action="">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" required placeholder="your Name" />
            </div>
            <div>
            <label htmlFor="">Email</label>
            <input type="email" required placeholder="your email" />
            </div>
            <div>
            <label htmlFor="Name">Message</label>
            <input
              type="message"
              required
              placeholder="Tell Us About Your Query ..."
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
