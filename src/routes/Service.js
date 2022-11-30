import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/1.jpg";

function Services() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={AboutImg}
        title="Welcome to Wonderland"
        text="Lorem ipsum"
        buttonText="Sign up"
        url="/"
        buttonClass="show"
      />
    </>
  );
}
export default Services;
