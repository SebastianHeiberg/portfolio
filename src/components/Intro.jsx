import React from "react";

function Intro() {
  return (
    <div className="pt-10 pb-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-5xl md:text-7xl mb-1 md:mb-3 font-bold text-custom-brown">Sebastian Heiberg</h1>
      <p className="text-base md:text-xl mb-3 font-medium text-custom-beige">
        Softwareudvikler
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold text-center text-custom-beige">
        Se nogle af mine projekter eller læs mere om mig
      </p>
    </div>
  );
}

export default Intro;