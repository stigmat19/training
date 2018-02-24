import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

class PagesLinks extends React.Component {
          
  render() {

    return (
      <div>
        <NavLink to="/main" className="PageLink" activeClassName="ActivePageLink">Главная</NavLink>
        <NavLink to="/diary" className="PageLink" activeClassName="ActivePageLink">Дневник</NavLink>
        <NavLink to="/zamer" className="PageLink" activeClassName="ActivePageLink">Замеры</NavLink>
        <NavLink to="/person" className="PageLink" activeClassName="ActivePageLink">Личный кабинет</NavLink>
        <NavLink to="/statistic" className="PageLink" activeClassName="ActivePageLink">Выгрузить статистику</NavLink>
        <NavLink to="/settings" className="PageLink" activeClassName="ActivePageLink">Настройки</NavLink>
      </div>
    );
    
  }

}
    
export default PagesLinks;
