import Profile from "../../assets/home.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I&apos;m Umashankar.</span> Web Developer
          </h1>
          <p className="home__description">
            As a front-end developer, I specialize in crafting beautiful and
            functional user interfaces using HTML, CSS, JavaScript, React.js,
            and Bootstrap. Explore my portfolio to see examples of my work and
            how I can help bring your ideas to life!
          </p>
          <Link to="/about" className="button">
            More About Me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
