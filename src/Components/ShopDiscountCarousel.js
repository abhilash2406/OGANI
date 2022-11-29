import React from 'react';
import styled from 'styled-components';
import HeadTitles from './HeadTitles';
import Carousel from 'react-multi-carousel';
import DiscountProductItems from './DiscountProductIems';
import img1 from '../Images/home page images/grapes.webp';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ProductDiscount = styled.div`
  margin-bottom: 50px;
`;

const DiscountProductsList = styled(Carousel)`
  height: 405px;
  width: 100%;
`;

const Dots = styled.div`
  text-align: center;
  margin-top: 30px;
`;
const DButtons = styled.button`
  height: 12px;
  width: 12px;
  border: 1px solid #b2b2b2;
  border-radius: 50%;
  margin-right: 12px;
`;

const ShopDiscountCarousel = () => {
  return (
    <ProductDiscount>
      <HeadTitles titleHead={'Sale Off'} />
      <div className="d-flex flex-column">
        <DiscountProductsList
          autoPlay={true}
          centerMode={true}
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1500}
          keyBoardControl={true}
          customTransition="all 1.5s"
          transitionDuration={1500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-10-px"
        >
          <DiscountProductItems
            image={img1}
            price={'20'}
            name={'Grapes'}
            category={'Dried Fruits'}
          />
          <DiscountProductItems price={'20'} />
          <DiscountProductItems price={'20'} />
          <DiscountProductItems price={'20'} />
          <DiscountProductItems price={'20'} />
        </DiscountProductsList>
        <Dots>
          <DButtons />
          <DButtons />
        </Dots>
      </div>
    </ProductDiscount>
  );
};

export default ShopDiscountCarousel;
