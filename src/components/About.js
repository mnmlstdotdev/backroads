import aboutImg from "../images/about.jpeg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
            molestias ipsam pariatur ea officiis, labore eius cum alias
            temporibus iste, quisquam veniam expedita eveniet accusamus aperiam
            quas eaque aliquid? Esse!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In alias
            dicta quas? Saepe quae, ad accusamus delectus velit iste ullam
            perspiciatis debitis? Quas autem blanditiis, quaerat soluta
            doloremque non necessitatibus doloribus tempora laboriosam, unde,
            minus ut delectus eos a! Repellendus?
          </p>
          <a href="#about" className="btn">
            learn more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
