import "./Home.scss";

const Home = () => {
  return (
  <>
    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Investing in the planets future.</h1>
    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
      <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900">
        Download the app
      </button>
    </div>
  </>
  );
};

export default Home;
