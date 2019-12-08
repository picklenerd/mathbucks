import React from 'react';
import ReactDOM from 'react-dom';
import SimpleProblem from './components/SimpleProblem';
import './index.css';

const problem = {
    question: "3 + 5",
    answer: "8",
};

ReactDOM.render(
  <SimpleProblem problem={problem}/>,
  document.getElementById('root')
);
