'use strict';

import React from 'react';
import PropTypes from 'prop-types';


require('./ContentComponent.scss');

class ContentComponent extends React.PureComponent {

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
    let state = {...ContentComponent.defaultProps};
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
      <div className="ContentComponent">
        hello
      </div>
    )
  }
}

export default ContentComponent;
