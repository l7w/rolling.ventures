import React from 'react';
import { Link } from 'react-router-dom';
import ReactTerminal from 'react-terminal-component';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Rolling Ventures, a Data Company, "
    + 'Kubernetes, Data-at-Rest, Compliance, Data Junkies'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/portfolio">portfolio</Link>, {' '}
        <Link to="/research">research</Link>, {' '}
        or <Link to="/hireus">hire</Link> us.
      </p>
    </article>
  </Main>
);

export default Index;
