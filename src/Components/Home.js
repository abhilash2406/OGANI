import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import img from '../Images/HomeImg.webp';
import HomePageCategories from './HomePageCatergories';
import FeaturedProducts from './FeaturedProducts';
import Banner from './Banner';
import FromtheBlog from './FromtheBlog';
import LatestndTopProducts from './Latest&TopProducts';

import Footer from './Footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import fruits from '../Images/home page images/fruits.webp';
import meats from '../Images/home page images/meats.jpg.webp';
import dryfruits from '../Images/home page images/dryfruit-2.jpg.webp';
import vegetables from '../Images/home page images/vegetables.webp';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

const HomeContainers = styled.div`
  width: 100%;
  // padding-right: 15px;
  // padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media only screen and (min-width: 1200px) {
    max-width: 1170px;
  }
`;

const HomepageAdWrapper = styled.div`
  height: 431px;
  width: 74%;
  display: flex;
  align-items: center;
  margin: 0 0 45px 288px;
  float: right;
  background-image: url(${img});
  background-size: contain;
`;
const HomePageAd = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

const HomepageAdTextSpan = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 4px;
  color: #7fad39;
`;

const HomepageAdTexttwo = styled.h2`
  font-size: 46px;
  color: #252525;
  line-height: 52px;
  font-weight: 700;
`;

const HomepageAdTextThree = styled.p`
  margin-bottom: 35px;
`;

const ShopNowButton = styled.a`
  display: inline-block;
  width: 44%;
  font-size: 14px;
  padding: 10px 18px 14px;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 700;
  background: #7fad39;
  letter-spacing: 2px;
  text-decoration: none;
`;

const Categories = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const ScrollButton1 = styled.button`
  width: 30px;
  height: 70px;
  margin: 72px 0 0 30px;
  border: 1px solid #ebebeb;
`;
const ScrollButton2 = styled.button`
  width: 30px;
  height: 70px;
  margin: 72px 30px 0 0;
  border: 1px solid #ebebeb;
`;
const CategoryContainer = styled.div`
  width: 100%;
  // margin: 0 20px 0 20px;
  display: flex;
  justify-content: space-between;
`;

const FeaturedProductsList = styled(Carousel)`
  height: 270px;
  width: 100%;
`;
const Home = () => {
  return (
    <div className="Home">
      <Header />
      <HomeContainers>
        <HomepageAdWrapper>
          <HomePageAd>
            <HomepageAdTextSpan> FRUIT FRESH</HomepageAdTextSpan>
            <HomepageAdTexttwo>
              Vegetable <br />
              100% Organic
            </HomepageAdTexttwo>
            <HomepageAdTextThree>
              Free Pick up and Delivery Available
            </HomepageAdTextThree>
            <ShopNowButton>SHOP NOW</ShopNowButton>
          </HomePageAd>
        </HomepageAdWrapper>
      </HomeContainers>
      <HomeContainers>
        <Categories>
          {/* <ScrollButton1>
            <i className="fa-solid fa-angle-left"></i>
          </ScrollButton1> */}
          <CategoryContainer>
            <FeaturedProductsList
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
              itemClass="carousel-item-padding-40-px"
            >
              <div className="IndicatorCarouselCard">
                <HomePageCategories
                  image={vegetables}
                  title={'VEGETABLES'}
                ></HomePageCategories>
              </div>
              <div className="IndicatorCarouselCard">
                {' '}
                <HomePageCategories
                  image={fruits}
                  title={'FRESH FRUITS'}
                ></HomePageCategories>
              </div>
              <div className="IndicatorCarouselCard">
                <HomePageCategories
                  image={dryfruits}
                  title={'DRIED FRUITS'}
                ></HomePageCategories>
              </div>
              <div className="IndicatorCarouselCard">
                <HomePageCategories
                  image={meats}
                  title={'FRESH MEAT'}
                ></HomePageCategories>
              </div>
            </FeaturedProductsList>
          </CategoryContainer>

          {/* <ScrollButton2>
            <i className="fa-solid fa-angle-right"></i>
          </ScrollButton2> */}
        </Categories>
      </HomeContainers>

      <HomeContainers>
        <FeaturedProducts />
      </HomeContainers>
      <HomeContainers>
        <Banner />
      </HomeContainers>
      <HomeContainers>
        <LatestndTopProducts />
      </HomeContainers>
      <HomeContainers>
        <FromtheBlog />
      </HomeContainers>
      <Footer />
    </div>
  );
};

export default Home;
