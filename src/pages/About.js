import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import Main from '../layouts/Main';

const About = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  });

  // const count = markdown.split(/\s+/)
  //   .map((s) => s.replace(/\W/g, ''))
  //   .filter((s) => s.length).length;

  return (
    <Main
      description="Learn about Rolling Ventures"
    >
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>Welcome to Rolling Ventures</h2>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default About;
