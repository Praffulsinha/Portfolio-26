import React, { useRef } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import emailjs from "@emailjs/browser";
import "./styles.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_05hfmvj",   // ✅ your service ID
        "template_4gsdvqe",  // 🔥 replace if different
        form.current,
        "f6ZG9bmv6PnCG2QG7"    // 🔥 MUST replace
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message!");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="contact__content">
        
        {/* LEFT TEXT */}
        <Animate
          play
          duration={1}
          start={{ transform: "translateX(-200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>

        {/* FORM */}
        <Animate
          play
          duration={1}
          start={{ transform: "translateX(200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact__content__form"
          >
            <div className="contact__content__form__controlswrapper">
              
              <div>
                <input
                  required
                  name="name"
                  type="text"
                  className="inputName"
                />
                <label className="nameLabel">Name</label>
              </div>

              <div>
                <input
                  required
                  name="email"
                  type="email"
                  className="inputEmail"
                />
                <label className="emailLabel">Email</label>
              </div>

              <div>
                <textarea
                  required
                  name="message"
                  rows="5"
                  className="inputDescription"
                />
                <label className="descriptionLabel">Message</label>
              </div>

            </div>

            <button type="submit">Send Message</button>

            {/* EXTRA */}
            <p style={{ marginTop: "10px", fontSize: "14px", color: "white"}}>
              Or email me directly: <b>praffulsinha.india@gmail.com</b>
            </p>

          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;