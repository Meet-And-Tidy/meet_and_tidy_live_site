import NewsletterModal from "../../common/Newsletter/NewsletterModal";

const Home = () => {
  return (
  <>
    <section className="bg-[url('/src/assets/jumbotron.png')] h-[800px] bg-center bg-no-repeat bg-auto inset-x-0">
      <div className=" pt-[550px] flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <button className="lg:flex lg:gap-x-12 m-0 p-4 text-xl rounded-2xl bg-brandGreen hover:bg-brandGreenDark hover:text-white">
          Download the app
        </button>
      </div>
    </section>
    <div className="w-full pt-48 flex flex-col h-[800px] bg-brandGreen">
      <header className="px-4 mx-auto max-w-screen-xl align-center justify-center text-center py-24">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">Investing in the planets future.</h1>
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
      </header>
    </div>
    <NewsletterModal />
  </>
  );
};

export default Home;
