import React from 'react';
import styled from 'styled-components';

const CaroUselItem = styled.a`
  margin-bottom: 30px;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;
const CarouselItemPicdiv = styled.div`
  width: 30%;
  height: 110px;
  margin-right: 25px;
`;
const CItemImg = styled.img`
  width: 100%;
  height: 110px;
`;

const CaroUselTxt = styled.div`
  padding-top: 15px;
  overflow: hidden;
`;

const Ctxth6 = styled.h6`
  color: #252525;
  margin-bottom: 8px;
`;

const Ctxtspan = styled.span`
  font-size: 18px;
  display: block;
  color: #252525;
  font-weight: 700;
`;

const ProductCarouselItems = (props) => {
  return (
    <CaroUselItem>
      <CarouselItemPicdiv>
        <CItemImg src={props.cimage} />
      </CarouselItemPicdiv>
      <CaroUselTxt>
        <Ctxth6>Crab Pool Security</Ctxth6>
        <Ctxtspan>$30.00</Ctxtspan>
      </CaroUselTxt>
    </CaroUselItem>
  );
};

export default ProductCarouselItems;
