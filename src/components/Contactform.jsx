import React from "react";

function Contackform() {
  return (
    <div className="flex flex-col mb-10 mx-auto mx-2">
      <div className="flex justify-center item-center">
        <form
          action="https://getform.io/slug"
          method="POST"
          className="flex flex-col w-full md:w-10/12"
        >
          <input
            type="text"
            name="name"
            placeholder="Dit navn"
            className="p-2 bg-custom-beige border-2 rounded-md focus:outline-none placeholder-custom-navy"
          />
          <input
            type="email"
            name="email"
            placeholder="Din email"
            className="p-2 my-2 bg-custom-beige border-2 rounded-md focus:outline-none placeholder-custom-navy"
          />
          <textarea
            name="message"
            placeholder="Din besked"
            rows="10"
            className="p-2 mb-4 bg-custom-beige border-2 rounded-md focus:outline-none placeholder-custom-navy"
          />
          <button
            type="button"
            className="text-center inline-block px-8 py-3 w-max 
           font-medium rounded-md text-black drop-shadow-md bg-custom-beige text-custom-navy"
          >
            Kontakt mig
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contackform;
