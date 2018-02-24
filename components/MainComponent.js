import React from 'react';
//import PropTypes from 'prop-types';

import './MainComponent.scss';
import HeaderComponent from "./HeaderComponent/HeaderComponent";

class MainComponent extends React.PureComponent {

  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  render() {

    return (
      <div className="MainComponent">
        <HeaderComponent/>

      </div>
    )
    ;

  }

}

export default MainComponent;
