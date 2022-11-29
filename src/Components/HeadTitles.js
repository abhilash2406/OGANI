import React from 'react';
import styled from 'styled-components';

const FeaturedProductHeaderTitleSection = styled.div`
  margin-bottom: 50px;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Titleh2 = styled.h2`
  color: #1c1c1c;
  font-weight: 1000;
`;

const Hbar = styled.div`
  width: 90px;
  border-bottom: 4px solid;
  color: #7fad39;
  height: 10px;
`;

const HeadTitles = (props) => {
  return (
    <FeaturedProductHeaderTitleSection>
      <Titleh2>{props.titleHead}</Titleh2>
      <Hbar></Hbar>
    </FeaturedProductHeaderTitleSection>
  );
};

export default HeadTitles;
