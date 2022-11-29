import React from 'react';
import styled from 'styled-components';

const CategoryWrapper = styled.div`
  width: 262px;
  height: 270px;
  border: none;
  background-color: #f6f6f6;
  margin: 0 20px 0 20px;
`;

const CategoryItemImageDiv = styled.div`
  width: 100%;
  height: 230px;
`;

const CategoryItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CategoryItemName = styled.h5`
  // position: absolute;
  left: 0;
  width: 100%;
  padding: 0 20px;
  bottom: 20px;
  text-align: center;
`;

const CategoryItemNameA = styled.a`
  font-size: 18px;
  color: #1c1c1c;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 12px 0 10px;
  background: #ffffff;
  display: block;
  text-decoration: none;
`;
const HomePageCategories = (props) => {
  return (
    <CategoryWrapper>
      <CategoryItemImageDiv>
        <CategoryItemImage src={props.image} />
      </CategoryItemImageDiv>
      <CategoryItemName>
        <CategoryItemNameA>{props.title}</CategoryItemNameA>
      </CategoryItemName>
    </CategoryWrapper>
  );
};

export default HomePageCategories;
