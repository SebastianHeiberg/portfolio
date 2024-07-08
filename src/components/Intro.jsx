import React from "react";

function Intro() {
  return (
    <div className="pt-10 pb-10 flex flex-col items-center justify-center">
      {/* <h1 className="text-5xl md:text-7xl mb-1 md:mb-3 sm:text-xl front-bold">Sebastian Heiberg</h1> */}
      <h1 className="text-3xl sm:text-5xl md:text-7xl mb-1 md:mb-3 font-bold">Sebastian Heiberg</h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Softwareudvikler og kodeentusiast
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold text-center">
        Se nogle af mine projekter og læs om mine erfaringer
      </p>
    </div>
  );
}

export default Intro;