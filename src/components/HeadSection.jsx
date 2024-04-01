import React, { useState } from "react";

const HeadSection = () => {
  const [language, setLanguage] = useState("English");
  const [isLanguage, setIsLanguage] = useState(false);
  const handleClick = (lan) => {
    setLanguage(lan);
    setIsLanguage(false);
  };
  return (
    <div className=" absolute top-0 left-0 w-full flex justify-between py-2 px-6">
      <div className="hidden xs:block">
        <button
          onClick={() => setIsLanguage((prev) => !prev)}
          className=" cursor-pointer flex items-center justify-center gap-2 outline-none border-none"
        >
          <div>
            <svg
              height="17"
              viewBox="0 0 20 20"
              width="17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z"
                fill="#5E5E5E"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <span className="text-sm text-gray-500">{language}</span>
          <div>
            <svg
              fill="none"
              height="5"
              viewBox="0 0 9 5"
              width="9"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M4.35156 2.80708L2.33394 0.789472C1.78653 0.24205 0.898985 0.242052 0.351563 0.789472L4.35156 4.78946L8.35156 0.789472C7.80411 0.242052 6.91658 0.242052 6.36917 0.789472L4.35156 2.80708Z"
                fill="#5E5E5E"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
        {isLanguage && (
          <div className="rounded-lg py-2 absolute shadow w-28 mt-3">
            <div
              onClick={() => handleClick("English")}
              className="text-center cursor-pointer text-gray-500 text-sm h-12 flex justify-center items-center hover:bg-gray-200"
            >
              <span>English</span>
            </div>
            <div
              onClick={() => handleClick("Español")}
              className="text-center cursor-pointer text-gray-500 text-sm h-12 flex justify-center items-center hover:bg-gray-200"
            >
              <span>Español</span>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between max-xs:justify-between">
        <p className="mr-2 text-sm max-xs:flex-1">Already have an account?</p>
        <button className="max-xs:flex-1 max-xs:w-full inline-flex justify-center cursor-pointer text-center font-medium text-xs text-black py-[3px] px-[10px] border border-solid border-black rounded-md bg-transparent">
          Log In
        </button>
      </div>
    </div>
  );
};

export default HeadSection;
