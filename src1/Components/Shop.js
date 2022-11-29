import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Headings from './Headings';
import ShopSideBar from './ShopSideBar';

const ProductSpad = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
`;

const ShopContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media only screen and (min-width: 1200px) {
    max-width: 1170px;
  }
`;

const ColumnOne = styled.div`
width: 100%;
    padding-right: 15px;
    padding-left: 15px;

@media (min-width: 992px)
{
  flex: 0 0 25%;
    max-width: 25%;
`;

const Shop = () => {
  return (
    <div>
      <Header />
      <Headings crumbtxt={'Organi Shop'} crumbsubtxt={'Shop'} />
      <ProductSpad>
        <ShopContainer>
          <div className="d-flex flex-wrap">
            <ColumnOne>
              {' '}
              <ShopSideBar />
            </ColumnOne>
          </div>
        </ShopContainer>
      </ProductSpad>
    </div>
  );
};

export default Shop;
