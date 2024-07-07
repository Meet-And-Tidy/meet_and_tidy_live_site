const Jumbotron = () => {
  return (
    <section className="bg-[url('/src/assets/jumbotron.png')] h-[600px] bg-center bg-no-repeat bg-auto inset-x-0">
      <div className="pt-[420px] flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <button className="lg:flex lg:gap-x-12 m-0 p-4 text-xl rounded-2xl bg-brandGreen hover:bg-brandGreenDark hover:text-white">
          Download the app
        </button>
      </div>
    </section>
  );
};

export default Jumbotron;

