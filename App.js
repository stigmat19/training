"use strict";

require('es6-promise').polyfill();
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import PagesRouter from './pages/PagesRouter';
import PagesLinks from './pages/PagesLinks';

import './core/style/style.scss';
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

ReactDOM.render( 
  <BrowserRouter>
    <div>
      <PagesLinks />
      <div>
        <HeaderComponent/>
        <PagesRouter />
      </div>
    </div>
  </BrowserRouter>
, document.getElementById('container') );
