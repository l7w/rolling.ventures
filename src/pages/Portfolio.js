import React from 'react';
import { Link } from 'react-router-dom';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons/faFilePdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Main from '../layouts/Main';

//import Education from '../components/Portfolio/Education';
import Experience from '../components/Portfolio/Experience';
//import Skills from '../components/Portfolio/Skills';
import Research from '../components/Portfolio/Research';

//import degrees from '../data/portfolio/degrees';
import work from '../data/portfolio/work';
//import { skills, categories } from '../data/portfolio/skills';
import research from '../data/portfolio/research';

// NOTE: sections are displayed in order defined.
const sections = {
  Experience: () => <Experience data={work} />,
  //Skills: () => <Skills skills={skills} categories={categories} />,
  //Education: () => <Education data={degrees} />,
  Research: () => <Research data={research} />,
};

const Portfolio = () => (
  <Main
    title="Portfolio"
    description="Rolling Ventures, Datagency, Data Junkies, Microservices, Replication, Scraping, Data Structure Cloning, Data-In-Transit, API."
  >
    <article className="post" id="portfolio">
      <header>
        <div className="title">
          <h2><Link to="portfolio">CLIENTS</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
            <h4><a rel="noreferrer" href="https://github.com/l7w/RollingVentures.pdf" target="_blank">Download<FontAwesomeIcon icon={faFilePdf} /></a></h4>
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Portfolio;
