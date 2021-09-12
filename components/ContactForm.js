import { useState } from "react";
import styles from "../styles/Spinner.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    if (email !== "" && name !== "" && message !== "") {
      e.preventDefault();
      setIsLoading(true);
      let data = {
        name,
        email,
        message,
      };
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 200) {
          setSubmitted(true);
          setName("");
          setEmail("");
          setMessage("");
          setIsLoading(false);
        }
      });
    }
  };

  return (
    <form className="pb-5 mx-1 md:mx-0 px-10 md:w-1/2 border-l relative border-gray-200 rounded-sm  shadow-xl flex flex-col gap-2">
      <h3 className="pt-5 font-cab text-lg text-indigo-800 font-bold leading-9">
        Let's work together!
      </h3>
      <p className="text-sm mb-1 pt-5 text-gray-500">
        I'll reply in ~24 hours.
      </p>
      <input
        className="bg-blue-50 border-b border-gray-200  p-2 focus:outline-none focus:shadow-xl focus:bg-gray-50 transition duration-200 shadow-sm"
        type="text"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        maxLength="20"
        placeholder="Your name"
        required={true}
      />
      <input
        className="bg-blue-50 border-b border-gray-200 p-2 focus:outline-none focus:shadow-xl focus:bg-gray-50 transition duration-200 shadow-sm"
        type="email"
        name="email"
        value={email}
        required={true}
        maxLength="30"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Your email"
      />
      <textarea
        className="bg-blue-50 border-b border-gray-200 p-2 focus:outline-none focus:shadow-xl focus:bg-gray-50 transition duration-200 shadow-sm"
        name="content"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        rows="7"
        placeholder="Briefly describe what your business is about and what your goals are"
        maxLength="600"
        required={true}
      ></textarea>
      {isLoading ? (
        <div className={`${styles.ldsRipple} mx-auto`}>
          <div></div>
          <div></div>
        </div>
      ) : (
        <input
          className={
            submitted
              ? "bg-gray-darkest text-white py-2 cursor-not-allowed outline-none focus:outline-none rounded-md mt-2 shadow-md"
              : "bg-blue-600 text-white py-2 cursor-pointer hover:bg-blue-500 transition duration-200 outline-none focus:outline-none rounded-md mt-2 shadow-md"
          }
          type="submit"
          value={submitted ? "Thanks for reaching out!" : "Submit"}
          disabled={submitted}
          onClick={(e) => handleSubmit(e)}
        />
      )}
    </form>
  );
};

export default ContactForm;
