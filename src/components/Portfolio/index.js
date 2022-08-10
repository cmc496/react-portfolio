import React from 'react';
import Project from "../Project";

const projects = [
    {
        id: 0,
        title: "Dog-Meet-Dog",
        languages: "HTML, CSS, JavaScript",
        packages: "bcrypt, bootstrap, cloudinary, connect-session-sequelize, dotenv, express, express-handlebars, express-session, handlebars, multer, mysql2, sequelize",
        image: "/img/Dog-Meet-Dog.png",
        description: "Have you ever wanted to make puppy play dates but don't know who to ask? Dog-Meet-Dog is the newest social platform for dog owners and solves all this problem! Create a user account, and add your pets! Then begin creating posts with content and photos! Users will even be able to comment on each other's posts as well! What are you waiting for? Download Dog Meet Dog today!",
        repo: "https://github.com/AlexPap1/Dog-Meet-Dog",
        live: "https://dog-meet-dog-final.herokuapp.com/"
    },
    {
        id: 1,
        title: "Search Party",
        languages: "HTML, CSS, JavaScript",
        packages: "none",
        image: "/img/SearchPartyMobile1.png",
        description: "An application that allows the user to plan a night of events. The user is prompted with the choice to either plan a night out or a night in. When a user selects to plan a night out, they are prompted to enter their zip code and shown a list of events, restaurants, and movies in theaters near them. When a user selects to plan a night in, they are given a random recipe to prepare.",
        repo: "https://github.com/tmenture/Front-End-Project",
        live: "https://tmenture.github.io/Front-End-Project/"
    },
    {
        id: 2,
        title: "Better Reads 2.0",
        languages: "HTML, CSS, JavaScript, Node.js, MongoDB",
        packages: "Concurrently, apollo-server-express, bcrypt, express, jsonwebtoken, moment, mongoose, nodemon, @apollo/react-hooks, @stripe/react-stripe-js, @stripe/stripe-js, @testing-library/jest-dom, stripe, react-toastify, react-stripe-checkout, react-scripts, react-router-dom, react-dom, react-bootstrap, react, jwt-decode, graphql-tag, graphql, bootstrap, axios, apollo-boost, @testing-library/user-event, @testing-library/react",
        image: "/img/Better-Reads-scrnshot.png",
        description: "Better Reads 2.0 is a digital library for avid readers!",
        repo: "https://github.com/tmenture/Better-Reads-2.0",
        live: "https://better-reads-2.herokuapp.com/"
    },
    {
        id: 3,
        title: "Paramore Fanpage",
        languages: "HTML",
        packages: "none",
        image: "/img/FanpageScreenshot.png",
        description: "This Paramore fanpage was the initial assignment given to us in our pre-work before starting the Coding Bootcamp. It is so rewarding to see how far I've come as a developer since then!",
        repo: "none",
        live: "https://cmc496.github.io/Challenge2_ProfessionalPortfolio/Fanpage/fanpage.html"
    }
];
function Portfolio() {
    return (
        <div>
            <p>Portfolio</p>

            <Project projects={projects} />
        </div>
    );
}
export default Portfolio;