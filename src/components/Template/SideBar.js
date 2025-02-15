import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Rolling Ventures, A Data Agency</h2>
        <p><a href="mailto:hello@rolling.ventures">hello@rolling.ventures</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>WE ARE DATA</h2>
    <p>Our team represents the industries top backend, reverse, and microservices engineers developing mobile, cloud and embedded targets.</p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/portfolio" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; cdx <Link to="/">rolling.ventures</Link>.</p>
    </section>
  </section>
);

export default SideBar;
