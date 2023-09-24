import React from 'react';
import './Footer.css';
import { IconButton } from '@mui/material';

function Footer() {
  return (
    <section id="footer">
      <div className="footer__container">
        <div className="footer__contactUs_wrapper">
          <h3 className="footer_h3">contact us</h3>
          <p className="footer_p">+91 44 6674 8524</p>
          <p className="footer_p">pizzaburger@pizza.in</p>
        </div>
        <div className="footer__stayConnected_wrapper">
          <h3 className="footer_h3">stay connected</h3>
          <p className="footer_p">Follow us in Social media Channels</p>
          <div className="socia_media_icons">
            <ul>
              <li>
                <IconButton>
                  <i
                    className="bx bxl-facebook"
                    style={{ color: "#1877F2" }}
                  ></i>
                </IconButton>
              </li>
              <li>
                {" "}
                <IconButton>
                  <i
                    className="bx bxl-twitter"
                    style={{ color: "#26a7de" }}
                  ></i>
                </IconButton>
              </li>
              <li>
                {" "}
                <IconButton>
                  <i
                    className="bx bxl-pinterest"
                    style={{ color: "#E60023" }}
                  ></i>
                </IconButton>
              </li>
              <li>
                {" "}
                <IconButton>
                  <i
                    className="bx bxl-instagram"
                    style={{ color: "#F77737" }}
                  ></i>
                </IconButton>
              </li>
              <li>
                {" "}
                <IconButton>
                  <i
                    className="bx bxl-snapchat"
                    style={{ color: "#FFFC00" }}
                  ></i>
                </IconButton>
              </li>
              <li>
                {" "}
                <IconButton>
                  <i
                    className="bx bxl-youtube"
                    style={{ color: "#FF0000" }}
                  ></i>
                </IconButton>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__timings_wrapper">
          <h3 className="footer_h3">Timings</h3>
          <p className="footer_p">Monday to Sunday</p>
          <p className="footer_p">11.00 AM - 10.00 PM</p>
        </div>
      </div>
      <div className="copyright_wrapper">
        <p className="footer_p">
          Copyright&nbsp;
          <i className="bx bx-copyright">&nbsp;2023 Pizza And Burgers</i>
        </p>
        <p className="footer_p">
          Made with <i className="bx bxs-heart" style={{color : "crimson"}}></i> by
          Sudharsan S
        </p>
      </div>
    </section>
  );
}

export default Footer