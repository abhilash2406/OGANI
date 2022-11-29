import React from 'react';
import styled from 'styled-components';
import products from '../Components/ProductList';

// const Ftc = styled.div`
//   padding-right: 15px;
//   padding-left: 15px;
// `;

const FeaturedProductItemWrapper = styled.div`
  // padding-right: 15px;
  // padding-left: 15px;

  height: 335px;
  display: flex;
  margin-bottom: 50px;
  flex-direction: column;

  &:hover #list {
    display: block;
  }
`;

const FeaturedItem = styled.div`
  width: 100%;
  background: url(${(props) => props.background}) no-repeat top center;
  height: 270px;
`;

const FitemTxt = styled.div`
  text-align: center;
  padding-top: 15px;
`;

const FitemTxth6 = styled.h6`
  margin-bottom: 10px;
  font-size: 16px;
`;
const FitemTxthLink = styled.a`
  color: #252525;
  text-decoration: none;
  font-weight: 400;
`;

const FitemTxth5 = styled.h5`
  color: #252525;
  font-weight: 900;
`;

const FeaturedItemUl = styled.ul`
  width: 100%;
  padding: 0;
  margin-top: 212px;
  text-align: center;
  -webkit-transition: all, 0.5s;
  -moz-transition: all, 0.5s;
  -ms-transition: all, 0.5s;
  -o-transition: all, 0.5s;
  transition: all, 0.5s;
  display: none;
`;

const FeaturedItemli = styled.li`
  list-style: none;
  display: inline-block;
  margin-right: 6px;
`;

const FeaturedItemA = styled.a`
  font-size: 16px;
  color: #1c1c1c;
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #ebebeb;
  background: #ffffff;
  display: block;
  border-radius: 50%;
  transition: all, 0.5s;
`;

const Lspan = styled.i`
  // color: black;
  &:hover {
    color: #28a745;
    transform: rotate(360deg);
    transition: all 0.3s ease-in-out 0s;
  }
`;

const FeaturedProductItems = (props) => {
  const productData = products.map((item) => {
    return (
      < div className="col-lg-3 col-md-4 col-sm-6 ">
        <FeaturedProductItemWrapper key={item.id}>
          <FeaturedItem background={item.image}>
            <FeaturedItemUl id="list">
              <FeaturedItemli>
                <FeaturedItemA>
                  <Lspan className="fa-sharp fa-solid fa-heart"></Lspan>
                </FeaturedItemA>
              </FeaturedItemli>
              <FeaturedItemli>
                <FeaturedItemA>
                  <Lspan className="fa-solid fa-retweet"></Lspan>
                </FeaturedItemA>
              </FeaturedItemli>
              <FeaturedItemli>
                <FeaturedItemA>
                  <Lspan className="fa-sharp fa-solid fa-cart-shopping"></Lspan>
                </FeaturedItemA>
              </FeaturedItemli>
            </FeaturedItemUl>
          </FeaturedItem>
          <FitemTxt>
            <FitemTxth6>
              <FitemTxthLink>{item.name}</FitemTxthLink>
            </FitemTxth6>
            <FitemTxth5> ${item.price}</FitemTxth5>
          </FitemTxt>
        </FeaturedProductItemWrapper>
      </div>
    );
  });
  return (
    <div className="d-flex flex-wrap  align-content-start justify-content-between">
      {productData}
    </div>
  );
};
export default FeaturedProductItems;
