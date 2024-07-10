const WhyUs = () => {
  return (
    <div className="w-full bg-brandLightGreen py-32">
      <header className="flex-col justify-center text-center pb-10">
        <h3 className="mb-5 text-5xl font-extrabold">Why use</h3>
        <h1 className="text-8xl text-brandGreen">Meet&Tidy?</h1>
      </header>
      <div className="flex flex-col justify-center items-center text-center pb-10">       
        <p className="mb-8 text-4xl">Our mission is threefold:</p>
        <img
          src="https://images.unsplash.com/photo-1618277043431-1c85e8462f70?q=80&w=2910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="man with plastic bottles"
          className="rounded-xl h-96 w-[]150"
        />
        <div className="flex justify-center pt-10">
          <h1 className="uppercase my-2.5 text-brandGreen text-4xl font-extrabold">Improve the environment &nbsp;</h1>
          <span className="text-brandDarkGreen text-6xl">|</span>
          <h1 className="uppercase my-2.5 text-brandGreen text-4xl font-extrabold"> &nbsp;Improve Community bonds &nbsp;</h1>
          <span className="text-brandDarkGreen text-6xl">|</span>
          <h1 className="uppercase my-2.5 text-brandGreen text-4xl font-extrabold"> &nbsp;Improve your mindset</h1>
        </div>

      </div>
    </div>
  )
}
export default WhyUs;
