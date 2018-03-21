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

  static defaultProps = {
    mainData: [
      {
        name: 'train1',
        imgUrl: 'main1.jpg'
      },
    ]
  };

  static propTypes = {
    mainData: PropTypes.array,
  };

  render() {
    console.log('childData', this.state.mainData);
    return (
      <ul className="MainContent">
        {this.state.mainData.map((item, index) => {
          return(
            <li key={index}>
              <img src={'img/'+ item.img} alt="img"/>
              <p>{item.name}</p>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default MainContent;
