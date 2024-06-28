import NewsletterModal from "../../common/Newsletter/NewsletterModal";

const Home = () => {
  return (
  <>
    <section className="bg-[url('/src/assets/jumbotron.png')] h-[650px] bg-center bg-no-repeat bg-auto inset-x-0"></section>
    <div className="w-full pt-40 flex flex-col h-[650px]">
      <header className="px-4 mx-auto max-w-screen-xl align-center justify-center text-center py-24">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">Investing in the planets future.</h1>
        <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <button className="inline-flex justify-center items-center py-3 px-5 text-base text-center rounded-3xl bg-lime-700 hover:bg-lime-600 focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-900">
            Download the app
          </button>
        </div>
      </header>
    </div>
    <NewsletterModal />
  </>
        
  );
};

export default Home;
