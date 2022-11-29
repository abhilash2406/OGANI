import React, { useState } from 'react';
import styled from 'styled-components';
import cimage1 from '../Images/home page images/carouselitem1.jpg';
import cimage2 from '../Images/home page images/carouselitem2.jpg';
import cimage3 from '../Images/home page images/carouselItem3.jpg';
import Carousel from 'react-bootstrap/Carousel';
import ProductCarouselItems from './ProdcutsCarouselItems';
// import LatestandTopCategories from './Latest&TopCategory';
// import ColorRadios from './ColorRadios';
// import ListGroup from 'react-bootstrap/ListGroup';

const SideBarItem = styled.div`
  margin-bottom: 35px;
  overflow : hidden;
`;
const Itemh4 = styled.h4`
  color: #1c1c1c;
  font-weight: 1000;
  margin-bottom: 25px;
  font-size: 24px;
`;

const ListA = styled.a`
  font-size: 16px;
  color: #1c1c1c;
  line-height: 40px;
  display: block;
  text-decoration: none;
  background-color: transparent;
`;

const Ul = styled.ul`
  border: none;
  padding: 0;
`;

const Renge = styled.div`
  margin-top: 20px;
`;
const RangeInput = styled.input`
  font-size: 16px;
  color: #dd2222;
  font-weight: 700;
  max-width: 20%;
  border: none;
  display: inline-block;
  &:after {
    left: 38px;
    top: 13px;
    height: 1px;
    width: 5px;
    background: #dd2222;
    content: '';
  }
`;
const ColorItem = styled.div`
  width: 40%;
`;

const ColorLabel = styled.label`
  font-size: 16px;
  color: #333333;
  font-weight: 300;
  position: relative;
  padding-left: 12px;
  cursor: pointer;
  color: ${(props) => props.txtcolour};
`;

const Colorinput = styled.input`
  left: 0;
  top: 5px;
  height: 14px;
  width: 14px;
  border: 10px black solid;
  content: '';
  border-radius: 50%;

  &:checked {
    border: green 1px solid;
    accent-color: ${(props) => props.colour};
  }
`;

const ProductDiv = styled.div`
  width: 100%;
`;

const LatestProductsHeader = styled.h4`
  font-weight: 1000;
  color: #1c1c1c;
  margin-bottom: 45px;
`;
const ScrollButton1 = styled.button`
  width: 30px;
  height: 30px;
  margin: 0 0 0 15px;
  border: 1px solid #ebebeb;
`;
const ScrollButton2 = styled.button`
  width: 30px;
  height: 30px;
  margin: 0 0 0 15px;
  border: 1px solid #ebebeb;
`;

const ShopSideBar = () => {
  const [minValue, set_minValue] = useState(10);
  const [maxValue, set_maxValue] = useState(540);

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  return (
    <div>
      <SideBarItem>
        <Itemh4>Department</Itemh4>
        <Ul>
          <li className="list-group-item borderless p-0">
            <ListA>Fresh Meat</ListA>
          </li>
          <li className="list-group-item borderless p-0">
            <ListA>Vegetables</ListA>
          </li>
          <li className="list-group-item borderless p-0">
            <ListA>Fruit & Nut Gifts</ListA>
          </li>
          <li className="list-group-item borderless p-0">
            <ListA>Fresh Berries</ListA>
          </li>
          <li className="list-group-item borderless p-0">
            <ListA>Ocean Foods</ListA>
          </li>
          <li className="list-group-item borderless p-0">
            <ListA>Butter & Eggs</ListA>
          </li>
          <li className="list-group-item borderless p-0">
            <ListA>Fastfood</ListA>
          </li>
          <li className="list-group-item borderless p-0">
            <ListA>Fresh Onion</ListA>
          </li>
          <li className="list-group-item borderless p-0">
            <ListA>Papayaya & Crisps</ListA>
          </li>
          <li className="list-group-item borderless p-0">
            <ListA>Oatmeal</ListA>
          </li>
        </Ul>
      </SideBarItem>
      <SideBarItem>
        <Itemh4>Price</Itemh4>
        <div>
          <Renge>
            <RangeInput value={minValue} />

            <RangeInput value={maxValue} />
          </Renge>
        </div>
      </SideBarItem>
      <SideBarItem>
        <Itemh4>Colors</Itemh4>
        <div className="d-flex flex-wrap">
          <ColorItem>
            <Colorinput type="radio" colour={'white'} name="colorfilter" />
            <ColorLabel txtcolour={''}> White</ColorLabel>
          </ColorItem>{' '}
          <ColorItem>
            <Colorinput type="radio" colour={'gray'} name="colorfilter" />
            <ColorLabel txtcolour={'gray'}> Gray</ColorLabel>
          </ColorItem>
          <ColorItem>
            <Colorinput type="radio" colour={'red'} name="colorfilter" />
            <ColorLabel txtcolour={'red'}> Red</ColorLabel>
          </ColorItem>
          <ColorItem>
            <Colorinput type="radio" colour={'black'} name="colorfilter" />
            <ColorLabel txtcolour={'black'}> Black</ColorLabel>
          </ColorItem>
          <ColorItem>
            <Colorinput type="radio" colour={'blue'} name="colorfilter" />
            <ColorLabel txtcolour={'blue'}> Blue</ColorLabel>
          </ColorItem>
          <ColorItem>
            <Colorinput type="radio" colour={'green'} name="colorfilter" />
            <ColorLabel txtcolour={'green'}> Green</ColorLabel>
          </ColorItem>
        </div>
      </SideBarItem>
      <SideBarItem>
        <Itemh4>Popular Size</Itemh4>
      </SideBarItem>
      <SideBarItem>
      {/* <LatestandTopCategories  Chead={'Latest Products'} /> */}
      <ProductDiv>
        <LatestProductsHeader>
          Latest Products
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
      </SideBarItem>
    </div>
  );
};

export default ShopSideBar;
