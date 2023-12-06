import React, { useState } from 'react';

import "./net.css";
import imgSrc from './assets/kyliejenner.jpeg'
import imgSrc1 from './assets/Sita_Ramam (1).jpg'
import imgSrc2 from './assets/kku.jpeg'
import imgSrc3 from './assets/Kabir_Singh.jpg'
import imgSrc4 from './assets/fiftyshades.jpg'
import imgSrc5 from './assets/wednesday.jpg'
import imgSrc6 from './assets/mismatched.jpg'





// MovieCard component
const MovieCard = ({ title, description }) => {
  
  
  return (
    <>


<div className='body1'>
<header>
          <div className='logo'>
            <img src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456" alt="" />
          </div>
          <nav className='nav1'>
            <ul>
              <li><a href="#">Home</a></li>
              
              <li><a href="#">Movies</a></li>
              <li><a href="#signup">Signup</a></li>
              <li><a href="http://localhost:3000/ecom">Back</a></li>
            </ul>
          </nav>
        </header>

        <section className="hero-banner">
          <div className="banner-content">
            <h1>Watch Your Favorite Shows</h1>
            <p>Stream thousands of movies and TV shows anytime, anywhere.</p>
            <button className="watch-button">Watch Now</button>
          </div>
        </section>
        

        
        <h2 className="hed">Popular on Netflix</h2>
<div className='wrapper'> 

    <div className="card">
      <img src={imgSrc} alt={title} />
      <div className="info">
        <h1>Life Of Kylie</h1>
        <p>Kylie Jenner, an American media personality and model, brings her glamorous private life and the ups and downs she goes through on cameraz</p>
        <a href="#" className="btn">more info</a>
      </div>
    </div>

    <div className="card">
      <img src={imgSrc1} alt={title} />
      <div className="info">
        <h1>SitaRaman</h1>
        <p>Upon returning to Pakistan, Afreen sets off to fulfil her grandfather's wish of delivering a letter from Ram to Sita. Along the way, she finds Ram and learns about their love story.</p>
        <a href="#" className="btn">more info</a>
      </div>

    </div>

    <div className="card">
      <img src={imgSrc2} alt={title} />
      <div className="info">
        <h1>Keeping Up</h1>
        <p>High-profile celebrity members of the Kardashian-Jenner clan give an insight into their personal lives and reveal various secrets pertaining to their families and relationships.</p>
        <a href="#" className="btn">more info</a>
      </div>
    </div>

    <div className="card">
      <img src={imgSrc3} alt={title} />
      <div className="info">
        <h1>Kabir Singh</h1>
        <p>Kabir, a genius yet hostile medical student, falls in love with Preeti from his college. When Preeti's father spots the couple kissing, he opposes their relationship and decides to marry her off.</p>
        <a href="#" className="btn">more info</a>
      </div>
    </div>



    <div className="card">
      <img src={imgSrc4} alt={title} />
      <div className="info">
        <h1>Fifty Shades</h1>
        <p>Ana, a college student, interviews an enigmatic billionaire entrepreneur, Christian, for her campus' periodical. A steamy sadomasochistic affair starts between the two, whose roots lie in his past.</p>
        <a href="#" className="btn">more info</a>
      </div>
    </div>

    <div className="card">
      <img src={imgSrc5} alt={title} />
      <div className="info">
        <h1>Wednesday</h1>
        <p>While attending Nevermore Academy, Wednesday Addams attempts to master her emerging psychic ability, thwart a killing spree and solve the mystery that embroiled her parents 25 years ago.</p>
        <a href="#" className="btn">more info</a>
      </div>
    </div>

    <div className="card">
      <img src={imgSrc6} alt={title} />
      <div className="info">
        <h1>Mismatched</h1>
        <p>After being set-up by their families, two teenagers strike up a tentative friendship at their summer programme.</p>
        <a href="#" className="btn">more info</a>
      </div>
    </div>
    </div>

    <h2 className="hed"> No.1 Series</h2>

    <div className='wrapper'> 

    <div className="card">
      <img src={imgSrc} alt={title} />
      <div className="info">
        <h1>{title} </h1>
        <p>{description}</p>
        <a href="#" className="btn">more info</a>
      </div>
    </div>

    <div className="card">
      <img src={imgSrc1} alt={title} />
      <div className="info">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href="#" className="btn">more info</a>
      </div>
    </div>

    <div className="card">
      <img src={imgSrc2} alt={title} />
      <div className="info">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href="#" className="btn">more info</a>
      </div>
    </div>

    <div className="card">
      <img src={imgSrc3} alt={title} />
      <div className="info">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href="#" className="btn">more info</a>
      </div>
    </div>



    <div className="card">
      <img src={imgSrc4} alt={title} />
      <div className="info">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href="#" className="btn">more info</a>
      </div>
    </div>

    <div className="card">
      <img src={imgSrc5} alt={title} />
      <div className="info">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href="#" className="btn">more info</a>
      </div>
    </div>

    <div className="card">
      <img src={imgSrc4} alt={title} />
      <div className="info">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href="#" className="btn">more info</a>
      </div>
    </div>
    </div>
    </div>
    </>


  );
};



export default MovieCard;
