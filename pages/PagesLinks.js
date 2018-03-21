import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import './PageLinks.scss';

class PagesLinks extends React.Component {
          
  render() {

    return (
      <ul className="SideBar">
        <li><FontAwesome name="home" size="2x"/><NavLink to="/" className="PageLink" activeClassName="ActivePageLink">Главная</NavLink></li>
        <li><FontAwesome name="book" size="2x"/><NavLink to="/diary" className="PageLink" activeClassName="ActivePageLink">Дневник</NavLink></li>
        <li><FontAwesome name="line-chart" size="2x"/><NavLink to="/zamer" className="PageLink" activeClassName="ActivePageLink">Замеры</NavLink></li>
        <li><FontAwesome name="user" size="2x"/><NavLink to="/person" className="PageLink" activeClassName="ActivePageLink">Личный кабинет</NavLink></li>
        <li><FontAwesome name="download" size="2x"/><NavLink to="/statistic" className="PageLink" activeClassName="ActivePageLink">Выгрузить статистику</NavLink></li>
        <li><FontAwesome name="cogs" size="2x"/><NavLink to="/settings" className="PageLink" activeClassName="ActivePageLink">Настройки</NavLink></li>
      </ul>
    );
    
  }

}
    
export default PagesLinks;
