import React from "react";
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size}) => ( //{title} is the same as writing prop.title

    //if the prop "size" exist, use it
    //toUpperCase() transform the text in capital letter
  <div className={`${size} menu-item`}> 
  
    <div className='background-image' 
    style={{
        //dinamically making style in the component by using url images to 
        //change each component accordly. If the url changes, the css value changes too
        backgroundImage: `url(${imageUrl})`
    }} />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1> 
      <span className="subtitle">SHOW NOW</span>
    </div>
  </div>

);

export default MenuItem;