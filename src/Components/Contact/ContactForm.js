import React from "react";
import "./Contact.css";

const ContactForm = () => {
  /**
   * <Form>


<input type="hidden" name="bot-field" />
<input type="hidden" name="form-name" value="contact" />


</Form>
   */
  return (
    <>
      <form name="contactform" method="POST" className="contactForm">
        <input type="hidden" name="form-name" value="contactform" />
        {/* <input type="hidden" name="form-name" value="contact" /> */}
        <fieldset>
          <legend>GET IN TOUCH</legend>
          <div class="form-group">
            <label for="name">Name:</label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
            />
          </div>
          <div class="form-group">
            <label for="lname">Phone:</label>
            <input
              className="form-control"
              type="tel"
              minlength="10"
              required
              id="phone"
              name="phone"
              placeholder="Cell No"
            />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              required
              placeholder="mailaddress@mail.com"
            />
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea
              className="form-control"
              type="textarea"
              id="message"
              name="message"
              placeholder="Write your message"
            ></textarea>
          </div>
          <div class="form-group">
            <div data-netlify-recaptcha="true"></div>
            <input
              name="send"
              className="btn btn-secondary"
              type="submit"
              value="Send to Us"
            />
          </div>
        </fieldset>
      </form>
      {/* <form name="contactSab" netlify className="contactForm">
        <p class="form-group">
          <label>
            Name <input type="text" name="name" />
          </label>
        </p>
        <p class="form-group">
          <label>
            Email <input type="email" name="email" />
          </label>
        </p>
        <p class="form-group">
          <label>
            Message <textarea type="text" name="message" />
          </label>
        </p>
        <p class="form-group">
          <button type="submit">Send</button>
        </p>
      </form> */}
    </>
  );
};
// return (
//   <>
//     <button class="open-button" onClick={openForm}>
//       Contact With Us
//     </button>

//     <div class="form-popup" id="myForm">
//       <form action="/action_page.php" class="form-container">
//         <h1>Login</h1>

//         <label for="email">
//           <b>Email</b>
//         </label>
//         <input type="text" placeholder="Enter Email" name="email" required />
//         <label for="email">
//           <b>Email</b>
//         </label>
//         <input type="text" placeholder="Enter Email" name="email" required />
//         <label for="email">
//           <b>Email</b>
//         </label>
//         <input type="text" placeholder="Enter Email" name="email" required />

//         <label for="psw">
//           <b>Password</b>
//         </label>
//         <input
//           type="password"
//           placeholder="Enter Password"
//           name="psw"
//           required
//         />

//         <button type="submit" class="btn">
//           Login
//         </button>
//         <button type="button" class="btn cancel" onClick={closeForm}>
//           Close
//         </button>
//       </form>
//     </div>
//   </>
// );
//};

export default ContactForm;
