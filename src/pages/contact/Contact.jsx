import { useRef, useState } from "react";
import emailIcon from "../../assets/email.png";
import linkedinIcon from "../../assets/linkedin.png";
import "./contact.css";
import { validateForm } from "./validateForm";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const formRef = useRef();
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validateForm(formValue);
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length > 0) {
      toast.error("Please fix the form errors");
      return;
    }
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success("Message sent Successfully!");
          setFormValue({ name: "", email: "", message: "" });
          setErrors({});
          setLoading(false);
        },
        () => {
          toast.error("Failed to send message, Please try again.");
          setLoading(false);
        },
      );
  };

  return (
    <div id="contact">
      <h2>Contact Me</h2>
      <div className="contact-me">
        <div className="contact-link">
          <div className="email">
            <img src={emailIcon} alt="email" />
            <div className="link-detail">
              <p>Email:</p>
              <a
                href="mailto:venugopalsp.95@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                venugopalsp.95@gmail.com
              </a>
            </div>
          </div>
          <div className="email">
            <img src={linkedinIcon} alt="email" />
            <div className="link-detail">
              <p>LinkedIn:</p>
              <a
                href="https://www.linkedin.com/in/venugopalsp95"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/venugopalsp95
              </a>
            </div>
          </div>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} noValidate action="">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formValue.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formValue.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formValue.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
          <button type="submit" disabled={loading}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </form>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
        />
      </div>
    </div>
  );
};

export default Contact;
