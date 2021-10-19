import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="main-footer mt-5">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <h4>Health Care</h4>
              <h4 className="list-unstyled">
                <li>342-420-6969</li>
                <li>Dhaka,Bangladesh</li>
                <li>Dhanmondi,27</li>
              </h4>
            </div>
            {/* Column2 */}
            <div className="col">
              <h4>For Patient</h4>
              <ui className="list-unstyled">
                <li>Ask free health questions</li>
                <li>Search for clinics</li>
                <li>Search for doctors</li>
                <li>Patient referral</li>
                <li>Book Checkup</li>
                <li>Read Health Article</li>
              </ui>
            </div>
            {/* Column3 */}
            <div className="col">
              <h4>For Doctor</h4>
              <ui className="list-unstyled">
                <li>Create Profile</li>
                <li>Health article</li>
                <li>BDCare Reach</li>
              </ui>
            </div>
                {/* Column4 */}
            <div className="col">
              <h4>More</h4>
              <ui className="list-unstyled">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Blog</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ui>
            </div>

            {/* Column5*/}
            <div className="col">
              <h4>Social</h4>
              <ui className="list-unstyled">
                <li>Facebook</li>
                <li>Youtube</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
              </ui>
            </div>

          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Misbah Uddin Muib | All rights reserved |
              Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    );
};

export default Footer;