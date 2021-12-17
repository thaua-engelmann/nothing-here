// Importing images;
import netflix_logo from "./assets/images/netflix_logo.png";
import daviPalets_logo from "./assets/images/daviPalets_logo.png";
import portfolio_logo from "./assets/images/portfolio_logo.png";
import weatherApp_logo from "./assets/images/weatherApp_logo.png";
import github_logo from "./assets/images/github_logo.png";
import thePlanets_logo from "./assets/images/thePlanets_logo.png";

export const projects = [
  {
    id: 1,
    name: "Netflix Clone",
    image: netflix_logo,
    alt: "Netflix Logo",
    description: (
      <>
        <p>Netflix Clone App using ReactJS & TMDB API.</p>
        <p>
          This is a simplified Netflix Front-End application developed using
          ReactJS and <em>The Movie Database API</em> free available on{" "}
          <a href="https://www.themoviedb.org" target="_blank">
            https://www.themoviedb.org
          </a>
        </p>
        <p>
          Developing it helped me a lot to understand very important topics just
          like api's requests, async functions, DOM manipulations and so other
          cool stuff.{" "}
        </p>
      </>
    ),
    techs: ["HTML", "CSS", "JAVASCRIPT", "SASS", "REACT JS", "RESPONSIVE"],
    links: {
      demo: "https://netflix-clone-engelmann.netlify.app/",
      code: "https://github.com/thaua-engelmann/netflix-clone",
    },
  },
  {
    id: 2,
    name: "Davi Palets",
    image: daviPalets_logo,
    alt: "Davi Palets Logo",
    description: (
      <>
        <p>A simple Landing Page to my father's company.</p>
        <p>
          For this project, I started making it as simple as possible, just
          using HTML, SASS & JAVASCRIPT, but along the way I saw the necessity
          of using a database. Here's when I found Firebase.
        </p>
        <p>
          This is one of my first projects, so I went through some challenges
          that helped me to grew up.
        </p>
      </>
    ),
    techs: [
      "HTML",
      "CSS",
      "SASS",
      "JAVASCRIPT",
      "FIREBASE",
      "DESIGN",
      "RESPONSIVE",
    ],
    links: {
      demo: "http://davipalets.com.br",
      code: "https://github.com/thaua-engelmann/davi-palets",
    },
  },
  {
    id: 3,
    name: "Portfolio",
    image: portfolio_logo,
    alt: "Portfolio Logo",
    description: (
      <>
        <p>Here's we got what you're seeing now: my portfolio</p>
        <p>
          I would say that this project is the best one I've ever made, because
          it joins everything I learned for the past months, since HTML to CSS
          and SASS, simple Javascript to ReactJS applications and good design
          patterns on this website.{" "}
        </p>
        <p>
          Here, I'll show some of my good projects and tell a little about who I
          am, and of course, also promote my work.{" "}
        </p>
      </>
    ),
    techs: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "SASS",
      "REACT JS",
      "DESIGN",
      "RESPONSIVE",
    ],
    links: {
      demo: "https://thauaengelmann.netlify.app",
      code: "https://github.com/thaua-engelmann/react-portfolio-uncompleted",
    },
  },
  {
    id: 4,
    name: "Weather App",
    image: weatherApp_logo,
    alt: "Weather App Logo",
    description: (
      <>
        <p>
          A Weather App using{" "}
          <a href="https://openweathermap.org/" target="blank">
            openWeatherMap
          </a>{" "}
          API.
        </p>
        <p>
          This app uses this API to retrieve weather data and displays the
          current weather of the desired location. It was all made using Vanilla
          Javascript.
        </p>
        <p>
          To use it, you can just search for the city you want, or just click on{" "}
          <em>get location button </em> to get your local weather. It's easy and
          fast!
        </p>
      </>
    ),
    techs: ["HTML", "CSS", "SASS", "JAVASCRIPT", "RESPONSIVE"],
    links: {
      demo: "https://weather-app-thauaengelmann.netlify.app/",
      code: "https://github.com/thaua-engelmann/weather-app",
    },
  },
  {
    id: 5,
    name: "Github Profile Explorer",
    image: github_logo,
    alt: "Github Logo",
    description: (
      <>
        <p>
          Github Profile App using{" "}
          <a href="https://docs.github.com/en/rest">Github API</a>
        </p>
        <p>
          This app uses Github API to retrive data of users and display
          informations, for example, about their repositories, followers or who
          they are following. It's a powerful, but a very simple API to use.
        </p>
        <p>
          It was made using react-router-dom to make it a SPA (single page
          application).
        </p>
      </>
    ),
    techs: ["HTML", "CSS", "JAVASCRIPT", "SASS", "REACT JS"],
    links: {
      demo: "https://github-explorer-engelmann.netlify.app/",
      code: "https://github.com/thaua-engelmann/github-profile-explorer",
    },
  },
  {
    id: 6,
    name: "The Planets",
    image: thePlanets_logo,
    alt: "The Planets Logo",
    description: (
      <>
        <p>lorem ipsum dolor sit amet, consect</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p>
          t has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </>
    ),
    techs: ["HTML", "CSS", "JAVASCRIPT", "SASS", "REACT JS", "FIREBASE"],
    links: {
      demo: "/",
      code: "/",
    },
  },
];
