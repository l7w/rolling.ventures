import React from 'react';
import { Link } from 'react-router-dom';
import research from '../../data/resume/research';

const Research = () => (
  <div className="research">
    <div className="link-to" id="research" />
    <div className="title">
    </div>
    <ol className="points">
      {research.map((res) => (
        <li key={res.id}>{res.data}</li>
      ))}
    </ol>
  </div>
);

export default Research;
