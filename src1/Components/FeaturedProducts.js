import React from 'react';
import styled from 'styled-components';
import FeaturedProductItems from './FeaturedProductItems';
import HeadTitles from './HeadTitles';

const FeaturedProductWrapper = styled.section`
  padding-top: 80px;
  padding-bottom: 40px;
`;

const FeaturedProductContainer = styled.div`
  margin: 0 80px 0 80px;
  // background-color: yellow;
`;

const FeaturedProductHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeaturedProductControls = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const FeaturedNavLink = styled.a`
  list-style: none;
  font-size: 17px;
  color: #1c1c1c;
  display: inline-block;
  margin-right: 15px;
  position: relative;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #7fad39;
  }
`;
const FeaturedProductNavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FeaturedFilterContainer = styled.div``;
const FeaturedProducts = () => {
  return (
    <FeaturedProductWrapper>
      <FeaturedProductContainer>
        <FeaturedProductHeader>
          <HeadTitles titleHead={'Featured Product'} />
          <FeaturedProductControls>
            <nav className="navbar navbar-expand-lg navbar-light bg-none">
              <FeaturedProductNavBar className="navbar-nav">
                <FeaturedNavLink
                  className="nav-item nav-link active"
                  href="f.com"
                >
                  All <span className="sr-only">(current)</span>
                </FeaturedNavLink>
                <FeaturedNavLink className="nav-item nav-link" href="d.com">
                  Oranges
                </FeaturedNavLink>
                <FeaturedNavLink className="nav-item nav-link" href="df.com">
                  Fresh meat
                </FeaturedNavLink>
                <FeaturedNavLink className="nav-item nav-link " href="sd.com">
                  Vegetables
                </FeaturedNavLink>
                <FeaturedNavLink className="nav-item nav-link " href="sd.com">
                  Fast Food
                </FeaturedNavLink>
              </FeaturedProductNavBar>
            </nav>
          </FeaturedProductControls>
        </FeaturedProductHeader>

        <FeaturedFilterContainer>
          <FeaturedProductItems />
        </FeaturedFilterContainer>
      </FeaturedProductContainer>
    </FeaturedProductWrapper>
  );
};

export default FeaturedProducts;
