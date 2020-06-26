import React, { useState } from "react";
import ContactForm from "./ContactForm";
import "../Contact/Contact.css";

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
    contactIcon: "facebook",
  },
];

const Contact = () => {
  const [contacts, setContacts] = useState(allContacts);

  return (
    <section id="contact" class="contact-section">
      <ContactForm />
      <div class="contact-links-div">
        {contacts.map(({ contactTitle, contactIcon, contactLink }) => (
          <a
            href={contactLink}
            target="_blank"
            id="profile-link"
            class="contact-link"
          >
            <i class={`fab fa-${contactIcon} fa-2x`}></i>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
