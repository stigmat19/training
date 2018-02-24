'use strict';

import React from 'react';
import PropTypes from 'prop-types';


require('./MainContent.scss');

class MainContent extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      ...props,

    }
  }

  componentWillReceiveProps(newProps) {
    this.prepareState(newProps);
  }

  componentWillMount() {
    this.prepareState(this.state);
  }

  prepareState = (props) => {
    let state = {...MainContent.defaultProps};
    state = {
      ...state,
      ...props
    };
    this.setState(
      state, () => {
        //console.log('prepareprops',this.state);
      }
    );
  };

  static defaultProps = {};

  static propTypes = {

  };

  render() {

    return (
      <div className="MainContent">
        hello
      </div>
    )
  }
}

export default MainContent;
