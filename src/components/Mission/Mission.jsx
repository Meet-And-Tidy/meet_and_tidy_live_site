import appleStore from "../../assets/app-store.png"
import googleStore from "../../assets/google-store.png"

const Mission = () => {  
  return (
    <div className="w-full h-[900px] bg-brandLightGreen py-32">
      <header className="px-4 mx-auto max-w-screen-xl align-center justify-center text-center py-24">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
          Meet&Tidy is a environmental impact company on a mission to inspire and empower everyone to tidy the planet.
        </h1>
        <p className="mb-8 text-3xl font-normal lg:text-xl sm:px-16 lg:px-48">
          Our app is the aims to help users organise litter clean ups, offering a user friendly, on the go app to help makes a difference to the environment.
        </p>
      </header>
      <div className="flex justify-between px-[550px]">
        <img src={appleStore} alt="apple store" className="h-24" />
        <img src={googleStore} alt="google store" className="h-24" />
      </div>
    </div>
  );
};

export default Mission;