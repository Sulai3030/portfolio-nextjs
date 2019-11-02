// This is the Link API
import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'


const Index = () => (
  <div>
    
    <div>
    <Head>
      <title>Home</title>
    </Head>
    <Nav /><Link href="/about">
      <a>About Page</a>
    </Link>
    <div className='hero'>
      <h1 className='title'>Sulai Sivadel</h1>
      <p className='description'>
        <p>An Ambitious, user-focused Full Stack Web Developer recently graduated from Columbia University Coding Boot Camp with experience working in teams. Possesses project management experience and experience delegating responsibilities to a team from time at Maximus where he spearheaded a project to create the audio/ADA compliant portion of a new healthcare plan for the disabled distributed in the state of New York. Sulai is flexible and a quick learner. Sulai is adaptable, communicative, knowledgeable and steadfast with excellent computer engineering skills learned in the Columbia University Coding Bootcamp where he created projects in HTML5, CSS, JavaScript, and React.
        </p>
      </p>
      
      <div>
        
          <a href = "https://github.com/Sulai3030">GitHub</a> <a href = "https://www.linkedin.com/in/sulai3030/"> LinkedIn</a> <a href = "sulai3030@gmail.com"></a>Contact Me
        
      </div>
      <div className='row'>
        <a href='https://github.com/Sulai3030/RuneSkype' className='card'>
          <h3>RuneSkype &rarr;</h3>
          <p>RuneSkype is our final project for the Columbia Coding Bootcamp. It is the newest and best way for you and your friends to interact while playing your favorite Role Playing Game (RPG). Getting Started Playing RuneSkype is easy, just download a copy from our homepage or our repo:</p>
        </a>
        <a href='https://github.com/Sulai3030/GOAT-voter' className='card'>
          <h3>The G.O.A.T. Voter App &rarr;</h3>
          <p>The G.O.A.T. Voter App is a project created with the intention to get the youth vote informed and participating. Focusing on a mobile platform, our team pulled in info using various APIs to gather helpful voter information such as polling location, voting dates, candidate info, and ballot questions into one place. Now, the average US voter can easily enter their zipcode and find their nearest polling location and its hours. Using various APIs and incumbent webpage info, we were able to bulild an app that aids voters in participating in their civic duty. G.O.A.T. Voter.</p>
        </a>
      </div>
    </div>
    <div className='row'>
        <a href='https://github.com/Sulai3030/beerNearHere-1' className='card'>
          <h3>Beer Near Here
               &rarr;</h3>
          <p>Beer Near Here is a project to successfully connect discerning beer drinkers in Manhattan with bars in the city that serve the beers that they like. We start with a brief survey that takes in their preferences and matches those answers with the Untappd database. Using this API we can populate a map using the Google Maps API that then lists the locations of bars and taverns that carry the user's beer preference.
          </p>
        </a>
        <a href='https://github.com/Sulai3030/react-nytimes' className='card'>
          <h3>ReactJS Search Project &rarr;</h3>
          <p>The React Search was a project that required us to use ReactJs while creating an app that would scrape data from the New York Times using their API so that an end-user would be able to search for articles from any time period that the New york Times published, say a recipe from the food section and then be able to save that date to their own clipboard.</p>
        </a>
      </div>
      <div className='row'>
        <a href='https://github.com/Sulai3030/mongoScraper' className='card'>
          <h3>Mongo Web Scraper Project &rarr;</h3>
          <p>The MongoScraper Assignment was an excercise that required us to employ Handlebars, MongoDB, NodeJs and a Heroku backend.</p>
        </a>
        <a href='hhttps://github.com/Sulai3030/firebaseAssignment' className='card'>
          <h3>Firebase as a Backend Project &rarr;</h3>
          <p>The Firebase Assignment is a culmination of the first half of our learning utilizing HTML, CSS, JavaScript and Firebase. Also know as the Train Scheduuler assignment we were tasked with using Google's Firebase platform. Firebase allows you to store and sync data across all clients in realtime, and remains available when your app goes offline. The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client.</p>
        </a>
      </div>
      <div className='row'>
        <a href='https://github.com/Sulai3030/liriNodeApp' className='card'>
          <h3>LIRI Bot Node Excercise &rarr;</h3>
          <p>The Firebase Assignment is a culmination of the first half of our learning utilizing HTML, CSS, JavaScript and Firebase. Also know as the Train Scheduuler assignment we were tasked with using Google's Firebase platform. Firebase allows you to store and sync data across all clients in realtime, and remains available when your app goes offline. The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client.</p>
        </a>
        <a href='https://github.com/Sulai3030/giphyApin' className='card'>
          <h3>Giphy API Project &rarr;</h3>
          <p>The Giphy API goal assignment was to create a webpage and dynamically populate a grid with gifs when the user input a search parameter. Using an array as well as jQuery and event handlers I was able to allow a user via an Ajax call to populate the page with appropriate gifs by stipulatinig the rating in the if statement.
        </p>
        </a>
      </div>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)
  </div>
);

export default Index;