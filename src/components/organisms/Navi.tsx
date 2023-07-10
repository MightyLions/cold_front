import React from 'react';
import styled from 'styled-components';
import { TopicNaviButton } from '../atoms/TopicNaviButton';

const StyledDiv = styled.div`
  width: 176px;
  height: 500px;
  background-color: #ffffff;
  border-radius: 10px;
`;

export const Navi = () => {
  return (
    <StyledDiv>
      
        <TopicNaviButton value="🏠 home" />
        <TopicNaviButton value="😜 my" />
        <TopicNaviButton value="💕 like" />
        <TopicNaviButton value="💕 like" />
      
    </StyledDiv>
  );
};


