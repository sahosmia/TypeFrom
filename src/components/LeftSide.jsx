import BgImage from "../assets/bg.webp";

const LeftSide = () => {
  return (
    <div className="hidden lg:flex flex-1 relative  flex-col min-h-[90vh] overflow-hidden ">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <h1 className="sc-4e85dbf4-3 jfDCYB text-white text-[36px] mb-[35px] text-center leading-10 w-[366px]">
          Sign up <br /> and come on in
        </h1>

        <img src={BgImage} alt="singup-image" className="max-w-[432px]" />
        <p className="text-sm leading-5 absolute bottom-[44px] text-white">
          © Typeform
        </p>
      </div>
    </div>
  );
};

export default LeftSide;
