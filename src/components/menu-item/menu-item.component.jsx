import React from "react";
//function that takes a component as argument and returns a modified component
import { withRouter } from "react-router-dom"; //by using it, we will have access to history

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => ( //{title} is the same as writing prop.title

    //if the prop "size" exist, use it
    //toUpperCase() transform the text in capital letter
  <MenuItemContainer
  size = {size}
  onClick={() => history.push(`${match.url}${linkUrl}`)}> 
  
    <BackgroundImageContainer imageUrl= {imageUrl} />
    <ContentContainer>
      <ContentTitle>{title.toUpperCase()}</ContentTitle> 
      <ContentSubtitle>SHOW NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>

);

export default withRouter(MenuItem);