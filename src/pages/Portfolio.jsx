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
import social from "../styles/applicationImages/socialNetworkApi.png"
import ecommerce from "../styles/applicationImages/eCommerce.png"
import tracker from "../styles/applicationImages/workplaceTracker.png"

import secret from "../styles/applicationImages/secretSanta.png"
import taste from "../styles/applicationImages/tasteBudsUnite.png"




export default function Portfolio() {
  return (
    <div className="porfolio">

        <div className="skillsList">
            <ul class="list-group list-group-horizontal-sm">
                <li class="list-group-item">
                    <img src={api} alt="icon" className="icon" />
                    <p className="skillName">API</p>
                </li>
                <li class="list-group-item">
                    <img src={bootstrap} alt="icon" className="icon" />
                    <p className="skillName">Bootstrap</p>
                </li>
                <li class="list-group-item">
                    <img src={css} alt="icon" className="icon" />
                    <p className="skillName">CSS</p>
                </li>
                <li class="list-group-item">
                    <img src={express} alt="icon" className="icon" />
                    <p className="skillName">Express.js</p>
                </li>
            </ul>
            <ul class="list-group list-group-horizontal-sm">
                <li class="list-group-item">
                    <img src={graphql} alt="icon" className="icon" />
                    <p className="skillName">GrapgQl</p>
                </li>
                <li class="list-group-item">
                    <img src={html} alt="icon" className="icon" />
                    <p className="skillName">HTML</p>
                </li>
                <li class="list-group-item">
                    <img src={jquery} alt="icon" className="icon" />
                    <p className="skillName">jQuery</p>
                </li>
                <li class="list-group-item">
                    <img src={js} alt="icon" className="icon" />
                    <p className="skillName">JavaScript</p>
                </li>
            </ul>
            <ul class="list-group list-group-horizontal-sm">
                <li class="list-group-item">
                    <img src={mongodb} alt="icon" className="icon" />
                    <p className="skillName">MongoDB</p>
                </li>
                <li class="list-group-item">
                    <img src={mysql} alt="icon" className="icon" />
                    <p className="skillName">MySQL</p>
                </li>
                <li class="list-group-item">
                    <img src={node} alt="icon" className="icon" />
                    <p className="skillName">Node.js</p>
                </li>
                <li class="list-group-item">
                    <img src={react} alt="icon" className="icon" />
                    <p className="skillName">React</p>
                </li>
            </ul>
        </div>

        <div className="soloProjects">
            <div class="card" style="width: 18rem;">
                <img src={social} class="card-img-top" alt="social network api screenshot"/>
                <div class="card-body">
                    <h5 class="card-title">Social Network API</h5>
                    <p class="card-text">This is an API designed for a social notwork platform, allowing the user to befriend one another, share their thoughts and interact with one another. Built using NoSQL Routes.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">MongoDB</li>
                    <li class="list-group-item">Express</li>
                    <li class="list-group-item">JavaScript</li>
                    <li class="list-group-item">Insomnia</li>
                </ul>
                <div class="card-body">
                    <a href="https://github.com/H3yJ4yy/Social-Network-API" class="card-link">GitHub Repo</a>
                    <a href="https://github.com/H3yJ4yy/Social-Media-API/assets/143395836/22987712-cf87-4aca-afaf-a670a0a832b4" class="card-link">Demo Video</a>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src={ecommerce} class="card-img-top" alt="e-commerce screenshot"/>
                <div class="card-body">
                    <h5 class="card-title">Back End for E-Commerce</h5>
                    <p class="card-text">This backend E-Commerce application allows the user to be able to operate standard CRUD operations with the use of Sequelized Routes.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Express</li>
                    <li class="list-group-item">MySQL</li>
                    <li class="list-group-item">CRUD Operations</li>
                    <li class="list-group-item">JavaScript</li>
                    <li class="list-group-item">Insomnia</li>
                    <li class="list-group-item">ORM</li>
                </ul>
                <div class="card-body">
                    <a href="https://github.com/H3yJ4yy/E-Commerce" class="card-link">GitHub Link</a>
                    <a href="https://github.com/H3yJ4yy/E-Commerce/assets/143395836/5891e020-47fc-4917-91f2-40bd4e0a90ac" class="card-link">Demo Video</a>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src={tracker} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Workplace Tracker</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

        </div>

        <div className="collaborativeProjects">
        <div class="card" style="width: 18rem;">
                <img src={secret} class="card-img-top" alt="SecretSanta home page"/>
                <div class="card-body">
                    <h5 class="card-title">Secret Santa</h5>
                    <p class="card-text">This application allows the users to partake in Secret Santa without the hassle. With the help from our application, we are able to simplify the holiday season by helping you pick your chosen person, and be able to create a wishlist</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Bcrypt</li>
                    <li class="list-group-item">express</li>
                    <li class="list-group-item">MySQL</li>
                </ul>
                <div class="card-body">
                    <a href="https://github.com/H3yJ4yy/Secret-Santa" class="card-link">GitHub Repo</a>
                    <a href="https://serene-island-03400-7f50cf6a1d37.herokuapp.com/" class="card-link">Live Link</a>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src={taste} class="card-img-top" alt="TasteBuds homepage"/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text"> This applicstion allows the user to look for recepies based on the type of cuisine, the type of food, and even helps them pair it with a glass of wine. </p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Third part API's</li>
                    <li class="list-group-item">Materialize</li>
                    <li class="list-group-item">Javascript</li>
                </ul>
                <div class="card-body">
                    <a href="https://github.com/H3yJ4yy/TasteBudsUnite" class="card-link">GitHub Repo</a>
                    <a href="https://tishaanderson.github.io/TasteBudsUnite/" class="card-link">Live Web</a>
                </div>
            </div>
        </div>
    </div>
  );
}
