import api from "../styles/icons/Api.png";
import bootstrap from "../styles/icons/Bootstrap.png";
import css from "../styles/icons/CSS.png";
import express from "../styles/icons/Express.png";
import graphql from "../styles/icons/Graphql.png";
import html from "../styles/icons/HTML.png";
import jquery from "../styles/icons/jQuery.png";
import js from "../styles/icons/JS.png";
import mongodb from "../styles/icons/MongoDB.png";
import mysql from "../styles/icons/MySQL.png";
import node from "../styles/icons/Node.png";
import react from "../styles/icons/React.png";
import social from "../styles/applicationImages/socialNetworkApi.png";
import ecommerce from "../styles/applicationImages/eCommerce.png";
import tracker from "../styles/applicationImages/workplaceTracker.png";
import mvc from "../styles/applicationImages/mvc.png"
import secret from "../styles/applicationImages/secretSanta.png";
import taste from "../styles/applicationImages/tasteBudsUnite.png";
import "../styles/portfolio.css";

export default function Portfolio() {
  return (
    <div className="porfolio">


      
<h3 className="subTitle">Collaborative Projects</h3>
      <div className="collaborativeProjects" style={{ display: "flex" }}>
        

<div className="individualCard">
  <div className="card" style={{ width: "20em" }}>
          <img
            src={secret}
            className="card-img-top"
            alt="SecretSanta home page"
            
          />
          
          <div className="card-body">
            <h4 className="card-title">Secret Santa</h4>
            <p className="card-text">
              This application allows the users to partake in Secret Santa
              without the hassle. With the help from our application, we are
              able to simplify the holiday season by helping you pick your
              chosen person, and be able to create a wishlist
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Bcrypt</li>
            <li className="list-group-item">express</li>
            <li className="list-group-item">MySQL</li>
          </ul>
          <div className="card-body">
            <a
              href="https://github.com/H3yJ4yy/Secret-Santa"
              className="card-link"
            >
              GitHub Repo
            </a>
            <a
              href="https://serene-island-03400-7f50cf6a1d37.herokuapp.com/"
              className="card-link"
            >
              Live Link
            </a>
          </div>
        </div>
</div>
<div className="individualCard">
   <div className="card" style={{ width: "20em" }}>
          <img src={taste} className="card-img-top" alt="TasteBuds homepage" />
          <div className="card-body">
            <h4 className="card-title">Taste Buds</h4>
            <p className="card-text">
              {" "}
              This applicstion allows the user to look for recepies based on the
              type of cuisine, the type of food, and even helps them pair it
              with a glass of wine.{" "}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Third part API's</li>
            <li className="list-group-item">Materialize</li>
            <li className="list-group-item">Javascript</li>
          </ul>
          <div className="card-body">
            <a
              href="https://github.com/H3yJ4yy/TasteBudsUnite"
              className="card-link"
            >
              GitHub Repo
            </a>
            <a
              href="https://tishaanderson.github.io/TasteBudsUnite/"
              className="card-link"
            >
              Live Web
            </a>
          </div>
        </div>
</div>
       
      </div>



<h3 className="subTitle">Skills</h3>
      <div className="skillsList">
        <ul className=" list-group-horizontal-sm skillsIcons">
          <li className="list-group-item">
            <img src={api} alt="icon" className="icon" />
            <p className="skillName">API</p>
          </li>
          <li className="list-group-item">
            <img src={bootstrap} alt="icon" className="icon" />
            <p className="skillName">Bootstrap</p>
          </li>
          <li className="list-group-item">
            <img src={css} alt="icon" className="icon" />
            <p className="skillName">CSS</p>
          </li>
          <li className="list-group-item">
            <img src={express} alt="icon" className="icon" />
            <p className="skillName">Express.js</p>
          </li>
        </ul>
        <ul className=" list-group-horizontal-sm skillsIcons">
          <li className="list-group-item">
            <img src={graphql} alt="icon" className="icon" />
            <p className="skillName">GrapgQl</p>
          </li>
          <li className="list-group-item">
            <img src={html} alt="icon" className="icon" />
            <p className="skillName">HTML</p>
          </li>
          <li className="list-group-item">
            <img src={jquery} alt="icon" className="icon" />
            <p className="skillName">jQuery</p>
          </li>
          <li className="list-group-item">
            <img src={js} alt="icon" className="icon" />
            <p className="skillName">JavaScript</p>
          </li>
        </ul>
        <ul className=" list-group-horizontal-sm skillsIcons">
          <li className="list-group-item">
            <img src={mongodb} alt="icon" className="icon" />
            <p className="skillName">MongoDB</p>
          </li>
          <li className="list-group-item">
            <img src={mysql} alt="icon" className="icon" />
            <p className="skillName">MySQL</p>
          </li>
          <li className="list-group-item">
            <img src={node} alt="icon" className="icon" />
            <p className="skillName">Node.js</p>
          </li>
          <li className="list-group-item">
            <img src={react} alt="icon" className="icon" />
            <p className="skillName">React</p>
          </li>
        </ul>
      </div>

      <h3 className="subTitle">Solo Projects</h3>
      <div
        className="soloProjects"
      >
        <div className="individualCard">
        <div className="card" style={{ width: "20em" }}>
          <img
            src={social}
            className="card-img-top"
            alt="social network api screenshot"
          />
          <div className="card-body">
            <h5 className="card-title">Social Network API</h5>
            <p className="card-text">
              This is an API designed for a social notwork platform, allowing
              the user to befriend one another, share their thoughts and
              interact with one another. Built using NoSQL Routes.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">MongoDB</li>
            <li className="list-group-item">Express</li>
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">Insomnia</li>
          </ul>
          <div className="card-body">
            <a
              href="https://github.com/H3yJ4yy/Social-Network-API"
              className="card-link"
            >
              GitHub Repo
            </a>
            <a
              href="https://github.com/H3yJ4yy/Social-Media-API/assets/143395836/22987712-cf87-4aca-afaf-a670a0a832b4"
              className="card-link"
            >
              Demo Video
            </a>
          </div>
        </div>
  </div>
       
        <div className="individualCard">
        <div className="card" style={{ width: "20em" }}>
          <img
            src={ecommerce}
            className="card-img-top"
            alt="e-commerce screenshot"
          />
          <div className="card-body">
            <h5 className="card-title">Back End for E-Commerce</h5>
            <p className="card-text">
              This backend E-Commerce application allows the user to be able to
              operate standard CRUD operations with the use of Sequelized
              Routes.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Express</li>
            <li className="list-group-item">MySQL</li>
            <li className="list-group-item">CRUD Operations</li>
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">Insomnia</li>
            <li className="list-group-item">ORM</li>
          </ul>
          <div className="card-body">
            <a
              href="https://github.com/H3yJ4yy/E-Commerce"
              className="card-link"
            >
              GitHub Link
            </a>
            <a
              href="https://github.com/H3yJ4yy/E-Commerce/assets/143395836/5891e020-47fc-4917-91f2-40bd4e0a90ac"
              className="card-link"
            >
              Demo Video
            </a>
          </div>
        </div>
  </div>
        
        <div className="individualCard">
        <div className="card" style={{ width: "20em" }}>
          <img src={tracker} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Workplace Tracker</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">MySQL</li>
            <li className="list-group-item">Node</li>
            <li className="list-group-item">Express</li>
            <li className="list-group-item">Sequelize</li>
          </ul>
          <div className="card-body">
            <a href="https://github.com/H3yJ4yy/workplace-tracker" className="card-link">
              GitHub
            </a>
            <a href="https://github-production-user-asset-6210df.s3.amazonaws.com/143395836/289316184-707265cd-0148-46af-b123-9d8170d9b40d.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240229%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240229T133911Z&X-Amz-Expires=300&X-Amz-Signature=8d2cc99fa21779b657c8698c5b698d7f363b14598ab335fe3af61e19df21f8f9&X-Amz-SignedHeaders=host&actor_id=143395836&key_id=0&repo_id=725618287" className="card-link">
              Demo Video
            </a>
          </div>
        </div>
  </div>
        
        <div className="individualCard">
        <div className="card" style={{ width: "20em" }}>
          <img src={mvc} className="card-img-top" alt="mvc screenshot" />
          <div className="card-body">
            <h5 className="card-title">MVC Blog</h5>
            <p className="card-text">
            This is a blogcite dedicated to talk all things tech. Userews are able to inteact with one another and even learn from one another!
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Bcrypt</li>
            <li className="list-group-item">DotEnv</li>
            <li className="list-group-item">Express</li>
            <li className="list-group-item">An item</li>
            <li className="list-group-item">MySQL2</li>
            <li className="list-group-item">Sequelize</li>
          </ul>
          <div className="card-body">
            <a href="https://github.com/H3yJ4yy/Blog-Website" className="card-link">
              GitHub Link
            </a>
            {/* <a href="#" className="card-link">
              Another link
            </a> */}
          </div>
        </div>
  </div>
        
      </div>
    </div>
  );
}
