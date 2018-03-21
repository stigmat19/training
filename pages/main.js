import React from 'react';
import {default as isoFetch} from 'isomorphic-fetch';
import MainContent from "../components/Content/MainContent/MainContent";


class Page_Main extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      ...props,
      data: this.loadData()
    }
  }

  fetchError = (errorMessage) => {
    console.error(showStr);
  };

  fetchSuccess = (loadedData) => {
    console.log(loadedData);
    this.setState({
      data: loadedData,
    },()=>{});
  };

  loadData = () => {
    //http://web-stigmat.ru/www/php/main.php
    //http://fe.it-academy.by/TestFetch.php
    isoFetch("http://web-stigmat.ru/www/php/main.php", {
      method: 'post',
      headers: {
        "Accept": "application/json",
      },
    })
      .then( (response) => {
        if (!response.ok) {
          let Err=new Error("fetch error " + response.status);
          Err.userMessage="Ошибка связи";
          throw Err;
        }
        else
          return response.json();
      })
      .then( (data) => {
        try {
          this.fetchSuccess(data);
        }
        catch ( error ){
          this.fetchError(error.message);
        }
      })
      .catch( (error) => {
        this.fetchError(error.userMessage||error.message);
      });

  };

  render() {

    // if ( !this.state.dataReady )
    //   return <div>загрузка данных...</div>;

    // console.log('load', this.state.data);

    return (
      <div className='MobileCompany'>
        <MainContent mainData={this.state.data}/>
      </div>
    );
  }

}

export default Page_Main;
