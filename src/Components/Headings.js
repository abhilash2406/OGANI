import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import imgb from '../Images/main images/breadcrumb.jpg.webp';

const Head = styled.div`
  display: flex;
  align-items: center;
  padding: 45px 0 40px;
  background-size: cover;
  background-image: url(${imgb});
`;

const HeadCContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1200px) {
    max-width: 1170px;
  }
`;

const BchTxt = styled.p`
  font-size: 40px;
  color: #ffffff;
  font-weight: 900;
  text-align: center;
  margin: 0;
`;

const Bchoption = styled.a`
  display: inline-block;
  font-size: 16px;
  color: #ffffff;
  font-weight: 800;
  margin-right: 20px;
  position: relative;
  text-decoration: none;
`;

const OptionTxt = styled.div`
  align-items: center;
  text-align: center !important;
`;

const Bchspan = styled.span`
  display: inline-block;
  font-size: 16px;
  color: #ffffff;
`;

const Headings = (props) => {
  return (
    <Head>
      <HeadCContainer>
        <div className="d-flex flex-column">
          <BchTxt>{props.crumbtxt}</BchTxt>
          <OptionTxt>
            <Bchoption as={Link} to="/">
              Home--
            </Bchoption>
            <Bchspan>{props.crumbsubtxt}</Bchspan>
          </OptionTxt>
        </div>
      </HeadCContainer>
    </Head>
  );
};

export default Headings;
