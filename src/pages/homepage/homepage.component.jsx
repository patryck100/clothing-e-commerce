import React from "react";

import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";


const HomePage = () => (

    //calling the component "Directory"
    <HomePageContainer >
        <Directory />
    </HomePageContainer>


    /* //instead of doing like this, it is easier to divide into components
        // as shown above
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">HATS</h1>
          <span className="subtitle">SHOW NOW</span>
        </div>
      </div>
    </div>

    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">JACKETS</h1>
          <span className="subtitle">SHOW NOW</span>
        </div>
      </div>
    </div>

    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">SNEAKERS</h1>
          <span className="subtitle">SHOW NOW</span>
        </div>
      </div>
    </div>

    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">WOMENS</h1>
          <span className="subtitle">SHOW NOW</span>
        </div>
      </div>
    </div>

    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">MENS</h1>
          <span className="subtitle">SHOW NOW</span>
        </div>
      </div>
    </div>
  </div> */
); 

export default HomePage;
