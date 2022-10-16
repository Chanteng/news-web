import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box logo">
            <img src="../images/max-footer.png" alt="" className="imglogo" />
         
              </div>

          <div className="box">
            <h3>ABOUT US:</h3>

            <h3>
            <p>
              MAX TV is a 24hr Digital Satellite and Terrestrial free to air
              Television Channel that is redefining quality TV entertainment and
              slick presentation to our national and international audience.
            </p>
            </h3>
         
          </div>
    
          <div className='box'>

            <h3>CONNECT WITH US:</h3>
          {/*<i className='fa fa-chevron-right'></i>*/}
          <i className="fa fa-envelope"></i>
            <span> info@maxtvgh.com </span> <br /><br />
            <i className="fa fa-phone"></i>
            <span> +233 55 643 0724 </span> <br /><br />
            <i className="fa fa-facebook"></i>
            <span> +233 55 643 0724 </span> <br /><br />
            <i className="fa fa-location"></i>
            <span> P. O. Box OD 431 Dansoman, Accra Darkuman Junction </span>
       
          </div>
        </div>
      </footer>
      <div className="legal  ">
        <div className="container flexSB">
          <p>COPYRIGHT © MAXTV 2022</p>
          <p>
            BY <i className="fa fa-heart"></i> OIS MEDIA
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
