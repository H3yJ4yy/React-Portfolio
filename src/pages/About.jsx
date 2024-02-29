import "../styles/about.css"


export default function About() {
  return (
    <div>
      <div className="nameHeader">
        <h1>Andrea Gonzalez</h1>
        <h2>Junior Developer</h2>
      </div>

    

      <div className="scholarAboutMe">
        <p className="scholarAboutMe">
          I am a junior-level developer who recently
          graduated and obtained certification in full-stack web development.
          Throughout my academic and practical journey, I have gained a
          comprehensive understanding of both front-end and back-end
          technologies, including HTML, CSS, JavaScript, React.js, Node.js, and
          databases such as MongoDB. My certification signifies not only my
          technical proficiency but also my dedication to mastering the skills
          necessary for creating dynamic and responsive web applications. As a
          junior developer, I am eager to apply my knowledge and continue
          learning in a professional environment, collaborating with experienced
          teams to contribute to innovative projects and further expand my
          expertise.
        </p>
      </div>
      <div className="card quoteCard">
      <div class="card-header">
    Favorite Quote 
  </div>
        <div className="card-body ">
          <blockquote className="blockquote mb-0">
            <p className="quote">You are going to fail a lot before things work out. Even though you
          fail over and over again, you have to try every time. You can not quit
          because you are afraid you will fail.</p>
            <footer className="blockquote-footer quote" >
            Zuko <cite title="Source Title" className="quote"> Avatar: the Last Airbender</cite>
            </footer>
          </blockquote>
        </div>
     </div>


      <div className="funAboutMe">
        <p className="funAboutMe">
          Outside of the coding space, i still like to partake in crosscountry
          travel when given the chance or even just sit by a cozy fire and
          crochet till my hearts content!
        </p>
      </div>
    </div>
  );
}
