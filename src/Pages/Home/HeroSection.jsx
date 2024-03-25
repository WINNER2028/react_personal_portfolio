import { Link } from "react-scroll"

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi, I'm OBI CHIEMERIE CHUKWUEMEKA</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">FrontEnd</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
             From Imo State, Nigeria.
            <br /> As a frontend engineer, my job is all about making websites
             and web applications look great and run smoothly.
             I work with a variety of technologies like HTML, CSS, JavaScript,
            <br /> and React to create the user interface of a web application, 
             making sure that it's not only visually appealing 
             but also user-friendly and responsive across different devices.
          </p><br></br>
        </div>
        <Link
              spy={true}
              smooth={true}
              to="MyPortfolio"
              >
          <button className="btn btn-primary">
            Check out My Portfolio
            </button>
            </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
