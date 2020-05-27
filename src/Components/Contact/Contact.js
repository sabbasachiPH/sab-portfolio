import React, { useState } from "react";
import ContactForm from "./ContactForm";

const allContacts = [
  {
    contactTitle: "LinkedIn",
    contactLink: "https://www.linkedin.com/in/sabbasachi-saha/",
    contactIcon: "linkedin",
  },
  {
    contactTitle: "GitHub",
    contactLink: "https://github.com/sabbasachiPH",
    contactIcon: "github",
  },
  {
    contactTitle: "CodePen",
    contactLink: "https://codepen.io/sabbasachi-saha",
    contactIcon: "codepen",
  },
  {
    contactTitle: "Facebook",
    contactLink: "https://www.facebook.com/rentustat",
    contactIcon: "facebook-square",
  },
];

const Contact = () => {
  const [contacts, setContacts] = useState(allContacts);

  return (
    <section id="contact" class="contact-section">
      {/* <div class="contact-section-header">
        <h1>Let's work together...</h1>
        <p>How do you take your coffee?</p>
      </div> */}
      <ContactForm />
      <div class="contact-links">
        {contacts.map(({ contactTitle, contactIcon, contactLink }) => (
          <a
            href="https://www.linkedin.com/in/sabbasachi-saha/"
            target="_blank"
            id="profile-link"
            class="contact-details"
          >
            <i class={`fab fa-${contactIcon} fa-2x`}></i> {contactTitle}
          </a>
        ))}
      </div>
      {/* <div class="contact-links">
        <a
          href="#"
          //   target="_blank"
          id="profile-link"
          class="contact-details"
          onClick="alert('Fee Free to Call @ 01676122302')"
        >
          <i class="far fa-envelope fa-2x"></i> Contact Us
        </a>
      </div> */}
    </section>
  );
};

export default Contact;
