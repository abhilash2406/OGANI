import React from 'react';
import styled from 'styled-components';
// import FeaturedProductItems from './FeaturedProductItems';

const Filters = styled.div`
  padding-top: 45px;
  border-top: 1px solid #ebebeb;
  padding-bottom: 20px;
`;

const FilterSort = styled.div`
  margin-bottom: 15px;
`;
const FilterCount = styled.div`
  margin-bottom: 15px;
  margin-top: 5px;
  text-align: center;
`;
const FilterIcons = styled.div`
  margin-bottom: 15px;
  text-align: right;
`;
const Fspan = styled.span`
  font-size: 16px;
  color: #6f6f6f;
  display: inline-block;
`;
const FilterSelect = styled.select`
  border: none;
  margin-left: 15px;
  font-size: 16px;
  font-weight: 800;
  height: 30px;
  margin-top: 1px;
  outline: none;
`;

//style for drop down list option
const FilterOptions = styled.option`
  background-color: #f5f5f5;
  font-weight: 400;
`;

const FilterNo = styled.h6`
  font-size: 16px;
  color: #b2b2b2;
`;

const Filterspan = styled.span`
  color: #1c1c1c;
  font-weight: 700;
  margin-right: 5px;
`;

const Ficons = styled.i`
  font-size: 24px;
  color: #b2b2b2;
  margin-right: 10px;
  cursor: pointer;
`;
const ShopAllProducts = () => {
  return (
    <div className="d-flex flex-column">
      <Filters>
        <div className="d-flex">
          <div className="col-lg-4 col-md-5">
            <FilterSort>
              <Fspan>Sort by</Fspan>
              <FilterSelect>
                <FilterOptions defaultValue>Default</FilterOptions>
                <FilterOptions>Fruits</FilterOptions>
              </FilterSelect>
            </FilterSort>
          </div>
          <div className="col-lg-4 col-md-5">
            <FilterCount>
              <FilterNo>
                <Filterspan>16</Filterspan>Products Found
              </FilterNo>
            </FilterCount>
          </div>
          <div className="col-lg-4 col-md-5">
            <FilterIcons>
              <Ficons className="fa-solid fa-grid"></Ficons>
              <Ficons className="fa-solid fa-list"></Ficons>
            </FilterIcons>
          </div>
        </div>
        <div className='d-flex flex-wrap'>

        </div>
      </Filters>
    </div>
  );
};

export default ShopAllProducts;
