'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';


require('./SideBarComponent.scss');

class SideBarComponent extends React.PureComponent {

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
    let state = {...SideBarComponent.defaultProps};
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
      <div className="SideBarComponent">
        <ul>
          <li><FontAwesome name="home" size="2x"/><a href="#">Главная</a></li>
          <li><FontAwesome name="book" size="2x"/><a href="#">Дневник</a></li>
          <li><FontAwesome name="line-chart" size="2x"/><a href="#">Замеры</a></li>
          <li><FontAwesome name="user" size="2x"/><a href="#">Личный кабинет</a></li>
          <li><FontAwesome name="download" size="2x"/><a href="#">Выгрузить статистику</a></li>
          <li><FontAwesome name="cogs" size="2x"/><a href="#">Настройки</a></li>
        </ul>
      </div>
    )
  }
}

export default SideBarComponent;
