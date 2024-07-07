import Jumbotron from "../../components/Jumbotron/Jumbotron";
import AboutModal from "../../components/About/AboutModal";
import Aims from "../../components/Aims/Aims";
import DownloadModal from "../../components/Download/DownloadModal";
import FAQs from "../../components/FAQs/FAQs";
import NewsletterModal from "../../components/Newsletter/NewsletterModal";

const Home = () => {
  return (
  <>
    <Jumbotron />
    <div className="w-full pt-48 h-[600px] bg-brandGreen">
      <header className="px-4 mx-auto max-w-screen-xl align-center justify-center text-center py-24">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">Saving Our Planet, One Litter Pick At A Time</h1>
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48">Littering is not just a nuisance but a serious threat to our ecosystem, economy, and human health.</p>
      </header>
    </div>
    <AboutModal />
    <Aims />
    <DownloadModal />
    <FAQs />
    <NewsletterModal />
  </>
  );
};

export default Home;
