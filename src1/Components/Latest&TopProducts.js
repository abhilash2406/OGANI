import React from 'react';
import styled from 'styled-components';
import LatestandTopCategories from './Latest&TopCategory';

const LatestTopWrapper = styled.section`
  padding-top: 80px;
`;
const LatestTop = styled.div`
  margin: 0 80px 0 80px;
`;

const LatestndTopProducts = () => {
  return (
    <LatestTopWrapper>
      <LatestTop>
        <div className="d-flex flex-wrap  align-content-start justify-content-between">
          <LatestandTopCategories Chead={'Latest Products'} />
          <LatestandTopCategories Chead={'Top Rated Products'} />
          <LatestandTopCategories Chead={'Review Products'} />
        </div>
      </LatestTop>
    </LatestTopWrapper>
  );
};

export default LatestndTopProducts;
