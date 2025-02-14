import React from 'react';
import { Link } from 'react-router-dom';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons/faFilePdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
// import Research from '../components/Resume/Research';

import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';
// import research from '../data/resume/research';

// NOTE: sections are displayed in order defined.
const sections = {
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Education: () => <Education data={degrees} />,
  // Research: () => <Research data={research} />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Chris Dickman's Resume. Nissan Motor Company, Datanyze, E7evation Cyber Services, QMI and Burningman Org."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
            <h4><a rel="noreferrer" href="https://github.com/l7w/Chris_Dickman_Resume.pdf" target="_blank">Download<FontAwesomeIcon icon={faFilePdf} /></a></h4>
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
