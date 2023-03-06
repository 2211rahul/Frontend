import React from 'react'
import { SlSocialTwitter } from 'react-icons/sl';
import { FiYoutube,FiFacebook} from 'react-icons/fi';
import { FaInstagram} from 'react-icons/fa';

import '../App.css'
export default function footer() {
  return (
    <>



      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify"><i>OWC</i> is a leading provider of rental spaces for Offices, Restarunts, and special occasions. We specialize in offering unique, customizable spaces that meet the needs of a variety of clients, from individuals planning a small party to large corporations hosting a conference.</p>
              <p><b>Email : </b>owc.contract@gmail.com</p>
              <p><b>Ph : +91</b>...</p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                {/* <li><a href="http://scanfcode.com/category/c-language/">C</a></li> */}
                <li><a href="http://localhost:3000/Display">Office Spaces</a></li>
                <li><a href="http://localhost:3000/Desk">Desk Setups</a></li>
                <li><a href="http://localhost:3000/Restaurant">Restaurant Setups</a></li>
                <li><a href="http://localhost:3000/Education">Educational Classroom Setups</a></li>
                <li><a href="http://localhost:3000/home">Templates</a></li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="http://localhost:3000/Aboutus">About Us</a></li>
                <li><a href="http://localhost:3000/Contactus">Contact Us</a></li>
                <li><a href="http://localhost:3000/Contactus">Contribute</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by
                <a href="#"> DevloperTeam CDAC pune</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="#"><FiYoutube/></a></li>
                <li><a className="twitter" href="#"><FiFacebook/></a></li>
                <li><a className="dribbble" href="#"><SlSocialTwitter/></a></li>
                <li><a className="linkedin" href="#"><FaInstagram/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>





    </>
  )
}
