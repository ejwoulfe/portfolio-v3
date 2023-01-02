import "./about.scss";
import selfHiking from "../../assets/about/compressed-hiking.jpg";

export default function About() {
  return (
    <section className="about">
      <h2>About</h2>
      <div className="about-info">
        <div className="selfie-container">
          <img src={selfHiking} alt="self portrait" />
        </div>
        <div className="description" data-testid="test-about-description">
          <p>Hello, my name is Edmond Woulfe, but you can call me Ed.</p>
          <p>I attended the University of Wisconsin - Parkside where I persued a degree in Computer Science.</p>
          <p>
            During a web concepts course at university, I learned about web development and how the front-end and
            back-end technologies work together to form the modern web that we have today.
          </p>
          <em>I was hooked.</em>
          <p>
            Ever since, I have been researching concepts, learning new languages, and utilizing frameworks to expand my
            developer skills and knowledge. I find the best way to learn new material is to build something with them!
            I'm excited to work with a talented team to create and maintain amazing websites.
          </p>
          <p>
            If you'd like to contact me, please fill out the contact form below or send me a message to my email listed
            on my resume.
          </p>
          <p>Thanks!</p>
        </div>
      </div>
    </section>
  );
}
