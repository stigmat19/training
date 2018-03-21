'use strict';

import React from 'react';
import PropTypes from 'prop-types';


require('./Measurements.scss');

class Measurements extends React.PureComponent {

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
    let state = {...Measurements.defaultProps};
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
      <div className="Measurements">
        <h1>Замер</h1>
        <div className={'Measurements__wrap'}>
          <div className={'lastMeasurements'}>
            <h2>Предыдущие значения</h2>
            <p>Запястье: <span>10см</span></p>
            <p>Предплечье: <span>10см</span></p>
            <p>Бицепс: <span>10см</span></p>
            <p>Шея: <span>10см</span></p>
            <p>Грудь: <span>10см</span></p>
            <p>Талия: <span>10см</span></p>
            <p>Бедро: <span>10см</span></p>
          </div>
          <div className={'currentMeasurements'}>
            <h2>Текущие значения</h2>
            <form>
              <input type="text" placeholder={'Запястье'}/>
              <input type="text" placeholder={'Предплечье'}/>
              <input type="text" placeholder={'Бицепс'}/>
              <input type="text" placeholder={'Шея'}/>
              <input type="text" placeholder={'Грудь'}/>
              <input type="text" placeholder={'Талия'}/>
              <input type="text" placeholder={'Бедро'}/>
              <button className={'btn'}>Добавить значения</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Measurements;
