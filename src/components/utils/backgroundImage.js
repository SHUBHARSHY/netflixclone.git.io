// BackgroundImage.js
import React from 'react';
import styled from 'styled-components';
import { BG_URL } from './constant';

const BackgroundContainer = styled.div`
  background-image: url(${BG_URL}); 
  background-size: cover;
  background-position: center;
  height: 100vh; 
  overflow-y: auto; 
`;

const BackgroundImage = ({ children }) => {
  return <BackgroundContainer>{children}</BackgroundContainer>;
};

export default BackgroundImage;
