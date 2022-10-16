import React from "react"
import "./side.css"
import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
import { gallery } from "../../../../dummyData"
import Tpost from "../Tpost/Tpost"
import SocialMedia from "../social/SocialMedia"

//const allCat = [...new Set(popular.map((curEle) => curEle.catgeory))]
//console.log(allCat)

const Side = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  
  
  const catgeory = ["sport", "health", "business", "technology", "health", "entertainment"]
  return (
    <>
      <Heading title='Stay Connected' />
      <SocialMedia />

      <Heading title='Subscribe' />

      <section className='subscribe'>
        <h1 className='title'>Subscribe to our New Stories</h1>
        <form action=''>
          <input type='email' placeholder='Email Address...' />
          <a href="">  <button>
            <i className='fa fa-paper-plane'></i> SUBMIT
           </button>  </a> 
        </form>
      </section>

      <section className='banner'>
        <img src='./images/sidebar-banner-new.jpg' alt='' />
      </section>

      <Tpost />

      <section className='catgorys'>
        <Heading title='Catgeorys' />
        {/*<div className='items'>{allCat}</div>*/}

    <div className="category category1" >
    <a href="/sports" className="link">Sports</a>
    </div>
    <div className="category category1" >
    <a href="/entertainment" className="link">Entertainment</a>
    </div>
    <div className="category category1" >
    <a href="/science" className="link">Science</a>
    </div>
    <div className="category category1" >
    <a href="/business" className="link">Business</a>
    </div>
    <div className="category category1" >
    <a href="/technology" className="link">Technology</a>
    </div>
    <div className="category category1" >
    <a href="/health" className="link">Health</a>
    </div>

        {/* {catgeory.map((val) => {
          return (
            <div className='category category1'>
              <span>{val}</span>
            </div>
          )
        })} */}
      </section>

      <section className='gallery'>
        <Heading title='Gallery' />
        <Slider {...settings}>
          {gallery.map((val) => {
            return (
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
            )
          })}
        </Slider>
      </section>
    </>
  )
}

export default Side
