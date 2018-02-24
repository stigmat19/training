import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Page_Main from './main';
import Page_Diary from './diary';
import Page_Zamer from './zamer';
import Page_Person from './person';
import Page_Statistic from './statistic';
import Page_Settings from './settings';

class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/" exact component={Page_Main} />
        <Route path="/diary" component={Page_Diary} />
        <Route path="/zamer" component={Page_Zamer} />
        <Route path="/person" component={Page_Person} />
        <Route path="/statistic" component={Page_Statistic} />
        <Route path="/settings" component={Page_Settings} />
      </div>
    );
    
  }

}
    
export default PagesRouter;



