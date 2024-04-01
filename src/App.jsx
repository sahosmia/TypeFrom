import { MdKeyboardArrowDown } from "react-icons/md";
import LeftSide from "./components/LeftSide";
import HeadSection from "./components/HeadSection";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

function App() {
  const [isOption, setIsOption] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleChange = () => {
    if (!getValues("terms")) {
      setValue("option-1", "Yes");
      setValue("option-2", "Yes");
      setValue("option-3", "Yes");
    }
    console.log(getValues("terms"));
  };
  return (
    <div className="flex h-screen overflow-hidden">
      <LeftSide />
      <div className="flex-[1_1_10%] flex flex-col justify-center items-center h-full w-full relative overflow-auto bg-white lg:rounded-s-2xl">
        <HeadSection />
        <div className="flex flex-col justify-self-center justify-center items-center max-w-[276px] md:max-w-[584px] ">
          <div className="flex flex-col justify-center items-start mb-20">
            <a
              aria-label="Typeform"
              href="#"
              title="Typeform"
              className="flex gap-2 m-auto h-10 mt-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="22"
                fill="none"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M0 5.34C0 1.82 1.39 0 3.72 0c2.34 0 3.73 1.82 3.73 5.34V16c0 3.52-1.4 5.34-3.73 5.34S0 19.52 0 16V5.34ZM25.08 0h-7.7c-6.9 0-7.44 2.98-7.44 6.96l-.01 7.42c0 4.14.52 6.96 7.48 6.96h7.67c6.92 0 7.43-2.97 7.43-6.94V6.97c0-3.99-.53-6.97-7.43-6.97Z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sc-da9128ae-0 bmXElW">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="108"
                  height="24"
                  fill="none"
                  className="sc-da9128ae-1 bOQHzD"
                >
                  <path
                    fill="currentColor"
                    d="M69.87 16.61c-2.22 0-3.37-1.83-3.37-4.08s1.13-3.99 3.37-3.99c2.29 0 3.37 1.82 3.37 3.99-.02 2.29-1.16 4.08-3.37 4.08ZM48.1 8.54c1.3 0 1.84.76 1.84 1.42 0 1.6-1.62 2.29-5.01 2.39 0-1.97 1.12-3.8 3.17-3.8Zm-14.44 8.07c-2.1 0-2.99-1.71-2.99-4.08 0-2.35.9-3.99 3-3.99 2.12 0 3.12 1.7 3.12 3.99 0 2.39-1.04 4.08-3.13 4.08Zm-17.8-10.4h-3.3l5.46 12.51c-1.04 2.31-1.6 2.89-2.32 2.89-.77 0-1.49-.62-2-1.16l-1.45 1.92a5.14 5.14 0 0 0 3.7 1.63c1.73 0 3.05-1 3.82-2.79l6.3-15.02h-3.24l-3.28 8.97-3.7-8.95Zm87.1 2.33c1.6 0 1.92 1.1 1.92 3.67v6.75h2.85v-8.52c0-3.07-2.1-4.4-4.05-4.4-1.73 0-3.31 1.07-4.2 3.06a4.01 4.01 0 0 0-3.96-3.07c-1.63 0-3.25 1.04-4.13 2.97V6.21h-2.85v12.73h2.85V13.5c0-2.74 1.44-4.96 3.4-4.96 1.6 0 1.9 1.1 1.9 3.67v6.75h2.86l-.02-5.46c0-2.74 1.46-4.96 3.42-4.96ZM80.14 6.21h-1.36v12.73h2.85v-4.88c0-3.09 1.36-5.18 3.39-5.18.52 0 .96.02 1.44.22l.44-3c-.36-.05-.68-.09-1-.09-2 0-3.45 1.38-4.29 3.15V6.21h-1.47Zm-10.28-.2c-3.77 0-6.31 2.87-6.31 6.5 0 3.76 2.58 6.57 6.31 6.57 3.8 0 6.38-2.89 6.38-6.57C76.23 8.86 73.6 6 69.87 6Zm-21.61 10.6a2.98 2.98 0 0 1-3.05-2.29c3.77-.16 7.46-1.08 7.46-4.4 0-1.91-1.89-3.89-4.6-3.89-3.64 0-6.1 2.97-6.1 6.5 0 3.68 2.42 6.57 6.05 6.57a6.62 6.62 0 0 0 5.39-2.49l-1.38-1.87c-1.47 1.5-2.37 1.87-3.77 1.87ZM34.22 6.01c-1.44 0-2.89.84-3.45 2.16V6.2h-2.84v17.73h2.84v-6.33c.6.91 1.99 1.51 3.21 1.51 3.8 0 5.8-2.8 5.8-6.6-.02-3.74-1.99-6.5-5.56-6.5Zm-19.97-4.9H.82v2.77h5.25v15.06h2.99V3.88h5.2V1.12Zm42.33 5.1h-1.7v2.55h1.7v10.18h2.85V8.76h2.76V6.21h-2.76V4.22c0-1.27.52-1.71 1.7-1.71.44 0 .84.12 1.38.3l.65-2.4A5.44 5.44 0 0 0 60.9 0c-2.73 0-4.33 1.63-4.33 4.46v1.75Z"
                  ></path>
                </svg>
              </span>
            </a>
            <h2 className="text-2xl mb-6 text-center font-extralight text-gray-500">
              Get better data with conversational forms, surveys, quizzes &amp;
              more.
            </h2>
            <div className="m-auto w-[256px]">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center w-full outline-none"
              >
                {/* email  */}
                <div className="mb-4">
                  <input
                    type="text"
                    className="py-[8px] px-2  rounded-[3px] border border-[#C2C1C1] hover:border-black transition-all ease-in-out w-full"
                    placeholder="Email"
                    autoFocus
                    {...register("email", {
                      required: {
                        value: true,
                        message: "This field cannot be left blank",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />

                  {errors.email && (
                    <p className="error text-sm text-[#C13B2F] mt-1 pt-1 px-5 relative">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* password  */}
                <div className="mb-4">
                  <div className=" relative">
                    <input
                      type={`${showPassword ? "text" : "password"}`}
                      className="py-[8px] px-2  rounded-[3px] border border-[#C2C1C1] hover:border-black transition-all ease-in-out w-full"
                      placeholder="Password"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "This field cannot be left blank",
                        },
                        validate: (value) => {
                          if (
                            !/[a-zA-Z]/.test(value) ||
                            !/\d/.test(value) ||
                            !/[^a-zA-Z0-9]/.test(value) ||
                            value.length < 8
                          ) {
                            return "Use 8 or more characters with a mix of letters, numbers and symbols";
                          }
                        },
                      })}
                    />
                    <button
                      onClick={() => setShowPassword((prev) => !prev)}
                      type="button"
                      className="flex items-center justify-center opacity-30  absolute top-[58%] right-2 -translate-y-1/2"
                    >
                      {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="error text-sm text-[#C13B2F] mt-1 pt-1 pl-5 relative">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="check"
                    className="block text-sm pl-[30px] relative"
                  >
                    <input
                      type="checkbox"
                      {...register("terms", {
                        required: {
                          value: true,
                          message:
                            "Please accept the terms and conditions to finish the signup",
                        },
                      })}
                      onClick={handleChange}
                      className="dtRSVL absolute top-0 left-0 w-5 h-5 m-0 appearance-none rounded-[3px] transition-all inset-shadow focus:outline-none checked:bg-black"
                    />
                    I agree to Typeform’s{" "}
                    <a href="#" className="underline">
                      Terms of Service
                    </a>
                    ,{" "}
                    <a href="#" className="underline">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline">
                      Data Processing Agreement
                    </a>
                    .
                  </label>
                  {errors.terms && (
                    <p className="error text-sm text-[#C13B2F] mt-1 pt-1 pl-5 relative">
                      {errors.terms.message}
                    </p>
                  )}
                </div>

                <div>
                  <div className="pl-[30px] mt-6 text-sm">
                    <div
                      onClick={() => setIsOption(!isOption)}
                      className="flex justify-between pb-2 cursor-pointer"
                    >
                      <p className="text-sm">See options</p>
                      <div
                        className={` transition-all ease-in-out duration-300 ${
                          isOption && "rotate-180"
                        }`}
                      >
                        <MdKeyboardArrowDown />
                      </div>
                    </div>

                    <div
                      className={`toggle-element overflow-hidden mb-4 ${
                        isOption ? "open" : "closed "
                      } `}
                    >
                      <div>
                        <label className="">
                          Get useful tips, inspiration, and offers via
                          e-communication.
                        </label>
                        <div className="my-3 flex">
                          <label className="inline-flex cursor-pointer">
                            <input
                              type="radio"
                              name="option-1"
                              className="w-5 h-5 cursor-pointer appearance-none rounded-full outline-none transition-all bg-white border border-[#C2C2C1] checked:border-[6px] checked:border-black"
                              value="Yes"
                              {...register("option-1")}
                            />
                            <div>
                              <p className="px-4">Yes</p>
                            </div>
                          </label>
                          <label className="inline-flex cursor-pointer">
                            <input
                              type="radio"
                              name="option-1"
                              className="w-5 h-5 cursor-pointer appearance-none rounded-full outline-none transition-all bg-white border border-[#C2C2C1] checked:border-[6px] checked:border-black"
                              value="No"
                              {...register("option-1")}
                            />
                            <div>
                              <p className="px-4">No</p>
                            </div>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label>
                          Tailor Typeform to my needs based on my activity.
                          <a
                            href="#"
                            className="text-[#5E5E5E] hover:underline transition-all"
                          >
                            See Privacy Policy
                          </a>
                        </label>
                        <div className="my-3 flex">
                          <label className="inline-flex cursor-pointer">
                            <input
                              type="radio"
                              name="option-2"
                              className="w-5 h-5 cursor-pointer appearance-none rounded-full outline-none transition-all bg-white border border-[#C2C2C1] checked:border-[6px] checked:border-black"
                              value="Yes"
                              {...register("option-2")}
                            />
                            <div>
                              <p className="px-4">Yes</p>
                            </div>
                          </label>
                          <label className="inline-flex cursor-pointer">
                            <input
                              type="radio"
                              name="option-2"
                              className="w-5 h-5 cursor-pointer appearance-none rounded-full outline-none transition-all bg-white border border-[#C2C2C1] checked:border-[6px] checked:border-black"
                              value="No"
                              {...register("option-2")}
                            />
                            <div>
                              <p className="px-4">No</p>
                            </div>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label>
                          Enrich my data with select third parties for more
                          relevant content.
                          <a
                            href="#"
                            className="text-[#5E5E5E] hover:underline transition-all"
                          >
                            See Privacy Policy
                          </a>
                        </label>
                        <div className="my-3 flex">
                          <label className="inline-flex cursor-pointer">
                            <input
                              type="radio"
                              name="option-3"
                              className="w-5 h-5 cursor-pointer appearance-none rounded-full outline-none transition-all bg-white border border-[#C2C2C1] checked:border-[6px] checked:border-black"
                              value="Yes"
                              {...register("option-3")}
                            />
                            <div>
                              <p className="px-4">Yes</p>
                            </div>
                          </label>
                          <label className="inline-flex cursor-pointer">
                            <input
                              type="radio"
                              name="option-3"
                              className="w-5 h-5 cursor-pointer appearance-none rounded-full outline-none transition-all bg-white border border-[#C2C2C1] checked:border-[6px] checked:border-black"
                              value="No"
                              {...register("option-3")}
                            />
                            <div>
                              <p className="px-4">No</p>
                            </div>
                          </label>
                        </div>
                      </div>

                      <p className="text-[#7F7F7F]">
                        You can update your preferences in your Profile at any
                        time
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-black text-white w-full rounded-[3px] border-none cursor-pointer h-10"
                >
                  Create my free account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
