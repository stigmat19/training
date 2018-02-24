import React from 'react';
//import PropTypes from 'prop-types';

import './MainComponent.scss';
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import SideBarComponent from "./SideBarComponent/SideBarComponent";
import ContentComponent from "./ContentComponent/ContentComponent";

class MainComponent extends React.PureComponent {

  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  render() {

    return (
      <div className="MainComponent">
        <SideBarComponent/>
        <HeaderComponent/>
        <ContentComponent/>
      </div>
    )
    ;

  }

}

export default MainComponent;
