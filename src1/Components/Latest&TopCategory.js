import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import ProductCarouselItems from './ProdcutsCarouselItems';
import cimage1 from '../Images/home page images/carouselitem1.jpg';
import cimage2 from '../Images/home page images/carouselitem2.jpg';
import cimage3 from '../Images/home page images/carouselItem3.jpg';

const ProductDiv = styled.div`
  width: 360px;
`;

const LatestProductsHeader = styled.h4`
  font-weight: 1000;
  color: #1c1c1c;
  margin-bottom: 45px;
`;
const ScrollButton1 = styled.button`
  width: 30px;
  height: 30px;
  margin: 0 0 0 45px;
  border: 1px solid #ebebeb;
`;
const ScrollButton2 = styled.button`
  width: 30px;
  height: 30px;
  margin: 0 0 0 15px;
  border: 1px solid #ebebeb;
`;

const LatestandTopCategories = (props) => {
  return (
    <div>
      <ProductDiv>
        <LatestProductsHeader>
          {props.Chead}
          <ScrollButton1>
            <i
              className="fa-solid fa-angle-left"
              style={{ fontSize: '12px' }}
            ></i>
          </ScrollButton1>
          <ScrollButton2>
            <i
              className="fa-solid fa-angle-right"
              style={{ fontSize: '12px' }}
            ></i>
          </ScrollButton2>
        </LatestProductsHeader>

        <Carousel>
          <Carousel.Item interval={3000}>
            <ProductCarouselItems cimage={cimage1} />
            <ProductCarouselItems cimage={cimage2} />
            <ProductCarouselItems cimage={cimage3} />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <ProductCarouselItems cimage={cimage1} />
            <ProductCarouselItems cimage={cimage2} />
            <ProductCarouselItems cimage={cimage3} />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <ProductCarouselItems cimage={cimage1} />
            <ProductCarouselItems cimage={cimage2} />
            <ProductCarouselItems cimage={cimage3} />
          </Carousel.Item>
        </Carousel>
      </ProductDiv>
    </div>
  );
};

export default LatestandTopCategories;
