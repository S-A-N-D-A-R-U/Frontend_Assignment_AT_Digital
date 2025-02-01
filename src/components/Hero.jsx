import React from "react";

const Hero = () => {
  return (
    <section
      className={`relative min-h-screen  flex flex-col  text-white`}
    >
        <div className=" md:absolute inset-0 z-0">
            <img  src="/hero-bg.webp" className="h-screen object-cover w-full" />
        </div>
      <div className="md:absolute md:bottom-14 md:left-20 md:w-[640px] bg-gradient-to-r from-analogous-3 to-analogous-2 py-5 px-8" >
        <h2 className="  text-3xl md:text-5xl font-bold text-white">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h2>
        <button className="mt-6 px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:opacity-80 transition">
          GET FREE CONSULTATION
        </button>
      </div>
     
    </section>
  );
};

export default Hero;
