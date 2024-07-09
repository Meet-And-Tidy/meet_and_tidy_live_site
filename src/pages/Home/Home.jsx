import Banner from "../../components/Banner/Banner";
import Mission from "../../components/About/Mission";
import WhyUs from "../../components/About/WhyUs";
import Newsletter from "../../components/Newsletter/Newsletter";
import FAQs from "../../components/FAQs/FAQs";

const Home = () => {

  return (
  <div className="bg-brandGreen">
    <Banner />
    <Mission />
    <WhyUs />
    <Newsletter />
    <FAQs />
  </div>
  );
};

export default Home;
