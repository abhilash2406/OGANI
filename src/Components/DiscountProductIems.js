import React from 'react';
import styled from 'styled-components';
// import products from '../Components/ProductList';

// const Ftc = styled.div`
//   padding-right: 15px;
//   padding-left: 15px;
// `;

const DiscountProductItemWrapper = styled.div`
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

const DiscountItem = styled.div`
  width: 100%;
  background: url(${(props) => props.background}) no-repeat top center;
  height: 270px;
`;

const DitemTxt = styled.div`
  text-align: center;
  padding-top: 15px;
`;

const DitemTxth6 = styled.h6`
  margin-bottom: 10px;
  font-size: 16px;
`;
const DitemTxthLink = styled.a`
  color: #252525;
  text-decoration: none;
  font-weight: 400;
`;

const DitemTxth5 = styled.h5`
  color: #252525;
  font-weight: 900;
`;

const DiscountItemUl = styled.ul`
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

const DiscountItemli = styled.li`
  list-style: none;
  display: inline-block;
  margin-right: 6px;
`;

const DiscountItemA = styled.a`
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

const Dcategory = styled.span`
  font-size: 14px;
  color: #b2b2b2;
  display: block;
  font-size: 14px;
  margin-bottom: 4px;
`;

const Dstrike = styled.span`
  margin-left: 10px;
  font-size: 14px;
  color: #b2b2b2;
  font-weight: 400;
  text-decoration: line-through;
`;

const Lspan = styled.i`
  color: black;
`;

const DiscountProductItems = (props) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 ">
      <DiscountProductItemWrapper>
        <DiscountItem background={props.image}>
          <DiscountItemUl id="list">
            <DiscountItemli>
              <DiscountItemA>
                <Lspan className="fa-sharp fa-solid fa-heart"></Lspan>
              </DiscountItemA>
            </DiscountItemli>
            <DiscountItemli>
              <DiscountItemA>
                <i className="fa-solid fa-retweet"></i>
              </DiscountItemA>
            </DiscountItemli>
            <DiscountItemli>
              <DiscountItemA>
                <i className="fa-sharp fa-solid fa-cart-shopping"></i>
              </DiscountItemA>
            </DiscountItemli>
          </DiscountItemUl>
        </DiscountItem>
        <DitemTxt>
          <DitemTxth6>
            <Dcategory>{props.category}</Dcategory>
            <DitemTxthLink>{props.name}</DitemTxthLink>
          </DitemTxth6>
          <div className="d-flex">
            <DitemTxth5> ${props.price}</DitemTxth5>
            <Dstrike>$30.00</Dstrike>
          </div>
        </DitemTxt>
      </DiscountProductItemWrapper>
    </div>
  );
  //   return (
  //     <div className="d-flex flex-row  align-content-start justify-content-between">
  //       {productData}
  //     </div>
  //   );
};
export default DiscountProductItems;
