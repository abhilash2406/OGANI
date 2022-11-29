import React from 'react';
import styled from 'styled-components';

const BannerItem = styled.div`
  width: 540px;
  height: 263px;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 263px;
`;
const Banner = () => {
  return (
    <div>
      <div className="d-flex flex-row justify-content-between">
        <BannerItem>
          <BannerImg
            src={require('../Images/home page images/banner-1.jpg.webp')}
          />
        </BannerItem>

        <BannerItem>
          <BannerImg
            src={require('../Images/home page images/banner-2.jpg.webp')}
          />
        </BannerItem>
      </div>
    </div>
  );
};

export default Banner;
