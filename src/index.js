
// @ts-check

import ReactDOM from 'react-dom';
import React from 'react';
import * as serviceWorker from './serviceWorker';

import Carousel from './Carousel.jsx';

const images = ['/images/first.jpeg', '/images/second.jpeg', '/images/third.jpeg'];

ReactDOM.render(
  <Carousel images={images} />,
  document.getElementById('container'),
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
