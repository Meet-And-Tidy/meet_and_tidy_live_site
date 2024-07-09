import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Mission from "../../components/Mission/Mission";
import About from "../../components/About/About";
import Aims from "../../components/Aims/Aims";
import Newsletter from "../../components/Newsletter/Newsletter";

const Home = () => {

  return (
  <div className="bg-brandGreen">
    <Jumbotron />
    <Mission />
    <About />
    <Aims />
    <Newsletter />
  </div>
  );
};

export default Home;
