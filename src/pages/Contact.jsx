import React from "react";
import Contackform from "../components/Contactform";

const Contact = () => {
  return (
    <div>
      <div className="p-5 flex flex-col items-center justify-center">
        <p className="mb-5 mt-5 text-custom-beige">
          Send mig en besked eller find mig på{" "}
          <a
            href="https://www.linkedin.com/in/sebastian-heiberg-683763232"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </div>
      <Contackform />
    </div>
  );
};

export default Contact;
