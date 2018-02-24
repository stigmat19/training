'use strict';

import React from 'react';
import PropTypes from 'prop-types';


require('./HeaderComponent.scss');

class HeaderComponent extends React.PureComponent {

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
    let state = {...HeaderComponent.defaultProps};
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

  static defaultProps = {

  };

  static propTypes = {

  };

  render() {

    return (
      <div className="HeaderComponent">
        <img src="img/logo.png" alt="img"/>
        <p>Выход</p>
      </div>
    )
  }
}

export default HeaderComponent;
