import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Foter = styled.footer`
  background: #f3f6fa;
  padding-top: 70px;
  padding-bottom: 0;
`;

const FoooterContainer = styled.div`
  @media only screen and (min-width: 1200px) {
    max-width: 1520px;
  }
`;

const FooterRow1 = styled.div`
  margin: 0 80px 0 80px;
`;
const FooterRow2 = styled.div`
  margin: 0 80px 0 80px;
`;
const FooterColumn1 = styled.div`
  @media (min-width: 992px) {
    flex: 0 0 25%;
    max-width: 27%;
  }
`;
const FooterAbout = styled.div`
  margin-bottom: 30px;
`;
const FooterAboutlogo = styled.div`
  margin-bottom: 30px;
`;
const FooterAboutTxt = styled.p`
  font-size: 16px;
  color: #1c1c1c;
  line-height: 20px;
`;

const FooterColumn2 = styled.div`
  width: 360px;
  @media (min-width: 992px) {
    margin-left: 8.333333%;
  }
`;

const FooterWidget = styled.div`
  margin-bottom: 30px;
  overflow: hidden;
`;
const FooterWidgetHeader = styled.h6`
  color: #1c1c1c;
  font-weight: 700;
  margin-bottom: 10px;
`;

const FooterWidgetContents = styled.div`
  display: flex;
`;
const FooterWidgetlist = styled.ul`
  width: 50%;
  padding-left: 0;
`;

const FooterWidgetlistItem = styled.li`
  list-style: none;
`;

const FwidgetItemLink = styled.a`
  color: #1c1c1c;
  font-size: 13px;
  line-height: 30px;
  text-decoration: none;
`;

const FooterColumn3 = styled.div`
  width: 360px;
  @media (min-width: 992px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
`;

const FooterWidgetP = styled.p`
  font-size: 14px;
  color: #1c1c1c;
  margin-bottom: 30px;
`;

const WidgetSearchInput = styled.input`
  width: 68%;
  font-size: 16px;
  padding-left: 20px;
  color: #1c1c1c;
  height: 46px;
  outline: none;
`;

const WidgetButton = styled.button`
  padding: 0 26px;
  height: 100%;
  font-size: 14px;
  color: #ffffff;
  font-weight: 800;
  text-transform: uppercase;
  display: inline-block;
  padding: 13px 15px 12px;
  background: #7fad39;
  border: none;
`;

const WidgetSocialLinks = styled.a`
  display: inline-block;
  height: 41px;
  width: 41px;
  font-size: 16px;
  color: #404040;
  border: 1px solid #ededed;
  border-radius: 50%;
  line-height: 38px;
  text-align: center;
  background: #ffffff;
  -webkit-transition: all, 0.3s;
  -moz-transition: all, 0.3s;
  -ms-transition: all, 0.3s;
  -o-transition: all, 0.3s;
  transition: all, 0.3s;
  margin-right: 10px;
`;

const FooterCopyRight = styled.div`
  border-top: 1px solid #ebebeb;
  padding: 15px 0;
  overflow: hidden;
  margin-top: 20px;
`;

const FooterCopyRightTxt = styled.p`
  font-size: 14px;
  font-family: 'Cairo', sans-serif;
  color: #6f6f6f;
  font-weight: 400;
  line-height: 26px;
  margin: 0 250px 15px 0;
`;

const Footer = () => {
  return (
    <Foter>
      <FoooterContainer>
        <FooterRow1 className="d-flex flex-wrap  align-content-start ">
          <FooterColumn1>
            <FooterAbout>
              <FooterAboutlogo>
                <a href="logo.com">
                  <img alt="logo" src={require('../Images/logo.png.webp')} />
                </a>
              </FooterAboutlogo>
              <FooterAboutTxt>
                Address: 60-49 Road 11378 New York
              </FooterAboutTxt>
              <FooterAboutTxt>Phone: +65 11.188.888</FooterAboutTxt>
              <FooterAboutTxt>Email: hello@colorlib.com</FooterAboutTxt>
            </FooterAbout>
          </FooterColumn1>
          <FooterColumn2>
            <FooterWidget>
              <FooterWidgetHeader>Useful Links</FooterWidgetHeader>
              <FooterWidgetContents>
                <FooterWidgetlist>
                  <FooterWidgetlistItem>
                    <FwidgetItemLink> About Us</FwidgetItemLink>
                  </FooterWidgetlistItem>
                  <FooterWidgetlistItem>
                    <FwidgetItemLink> About Our Shop</FwidgetItemLink>
                  </FooterWidgetlistItem>
                  <FooterWidgetlistItem>
                    <FwidgetItemLink> Secure Shopping</FwidgetItemLink>
                  </FooterWidgetlistItem>
                  <FooterWidgetlistItem>
                    <FwidgetItemLink> Delivery Information</FwidgetItemLink>
                  </FooterWidgetlistItem>
                  <FooterWidgetlistItem>
                    <FwidgetItemLink> Privacy Policy</FwidgetItemLink>
                  </FooterWidgetlistItem>
                  <FooterWidgetlistItem>
                    <FwidgetItemLink> Our Sitemap</FwidgetItemLink>
                  </FooterWidgetlistItem>
                </FooterWidgetlist>
                <FooterWidgetlist>
                  <FooterWidgetlistItem>
                    <FwidgetItemLink> Who We Are</FwidgetItemLink>
                  </FooterWidgetlistItem>
                  <FooterWidgetlistItem>
                    <FwidgetItemLink>Our Services</FwidgetItemLink>
                  </FooterWidgetlistItem>
                  <FooterWidgetlistItem>
                    <FwidgetItemLink> Projects</FwidgetItemLink>
                  </FooterWidgetlistItem>
                  <FooterWidgetlistItem>
                    <FwidgetItemLink as={Link} to="/contact">
                      {' '}
                      Contact
                    </FwidgetItemLink>
                  </FooterWidgetlistItem>
                  <FooterWidgetlistItem>
                    <FwidgetItemLink> Innovations</FwidgetItemLink>
                  </FooterWidgetlistItem>
                  <FooterWidgetlistItem>
                    <FwidgetItemLink> Testimonials</FwidgetItemLink>
                  </FooterWidgetlistItem>
                </FooterWidgetlist>
              </FooterWidgetContents>
            </FooterWidget>
          </FooterColumn2>
          <FooterColumn3>
            <FooterWidget>
              <FooterWidgetHeader>Join Our Newsletter Now</FooterWidgetHeader>
              <FooterWidgetP>
                Get E-mail updates about our latest shop and special offers.
              </FooterWidgetP>
              <form>
                <WidgetSearchInput placeholder="Enter Your mail"></WidgetSearchInput>
                <WidgetButton>Subscribe</WidgetButton>
              </form>
              <div className="d-flex flex-row mt-4">
                <WidgetSocialLinks>
                  <i className="fa-brands fa-facebook-f"></i>
                </WidgetSocialLinks>
                <WidgetSocialLinks>
                  <i className="fa-brands fa-instagram"></i>
                </WidgetSocialLinks>
                <WidgetSocialLinks>
                  <i className="fa-brands fa-twitter"></i>
                </WidgetSocialLinks>
                <WidgetSocialLinks>
                  <i className="fa-brands fa-pinterest-p"></i>
                </WidgetSocialLinks>
              </div>
            </FooterWidget>
          </FooterColumn3>
        </FooterRow1>
        <FooterRow2 className="d-flex">
          <FooterCopyRight className="d-flex flex-wrap justify-content-between">
            <FooterCopyRightTxt>
              Copyright ©2022 All rights reserved | This template is made with
              <i className="fa-solid fa-heart"></i>
              by Colorlib
            </FooterCopyRightTxt>
            <div>
              <img
                alt="payments"
                src={require('../Images/home page images/payment-item.png.webp')}
              />
            </div>
          </FooterCopyRight>
        </FooterRow2>
      </FoooterContainer>
    </Foter>
  );
};

export default Footer;
