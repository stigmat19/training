"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from "./components/MainComponent";

require('./core/style/style.scss');

// если необходимо, вид сборки можно проверить в коде:
// if (process.env.NODE_ENV === 'production') {
// if (process.env.NODE_ENV !== 'production') {

ReactDOM.render( 
  <MainComponent />
, document.getElementById('container') );
