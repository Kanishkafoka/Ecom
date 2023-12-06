import React from 'react'
import {  Link } from 'react-router-dom';
import "./Ecom.css"
import imgSrc0 from './component/assets/MovieandMunchies.png'




const Ecom = () => {
  return (
    <div className='main'>
      
        <div className='main3'>
          <Link to={"/"}></Link>
      <button> <Link to={"/movie"}>Movies </Link>  </button>
      <button> <Link to={"/Home"}>Food    </Link>  </button>
      <button> <Link to={"/signup"}>SignUp</Link>  </button>
      <button> <Link to={"/review"}>Review</Link>  </button> 
      </div>

    
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://scontent.fbom7-1.fna.fbcdn.net/v/t39.30808-6/359748145_286861030666356_5144698366613303505_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6dYV-Y0tgnEAX-t5zlA&_nc_ht=scontent.fbom7-1.fna&oh=00_AfC0Vj7yk1KVVr2i823kMeZrUWM1RRBj4cFMsbOYI67ymA&oe=656905DF" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://static.toiimg.com/thumb/imgsize-23456,msid-57669618,width-600,resizemode-4/57669618.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://png.pngtree.com/thumb_back/fw800/background/20230625/pngtree-d-animation-of-rows-of-red-cartoon-soft-chairs-in-a-image_3680528.jpg" className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
    </div>
  )
}

export default Ecom;