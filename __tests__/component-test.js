﻿"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import TestComponent from '../components/MainComponent';

test('работа TestComponent', () => {

  const component = renderer.create(
    <TestComponent />
  );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
    
});
