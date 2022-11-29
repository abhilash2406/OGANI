import React from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';
// import img from '../Images/HomeImg.webp';

// import { US } from 'country-flag-icons/react/3x2';
// import CountryDropdown from 'country-dropdown-with-flags-for-react';

// style for main header section

const Hedder = styled.div`
  margin-bottom: 3%;
`;

const HeadTop = styled.div`
  background: #f5f5f5;
`;

const HeaderContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media only screen and (min-width: 1200px) {
    max-width: 1170px;
  }
`;
const TopheaderDet = styled.div`
  padding: 10px 0 13px;
`;

// style for header email
const Headeremail = styled.p`
  margin: 1% 0 0.5% 0.6%;
  font-size: 13px;
  color: #000;
  font-weight: 400;
`;
const HeaderEmailtxt = styled.span`
  margin-right: 6px;
`;

const ShippingDetails = styled.p`
  margin: 1% 0 0.5% 2.3%;
  font-size: 13px;
  color: #000;
  font-weight: 400;
`;

const Bar = styled.div`
  border-left: 1px rgb(218, 201, 201) solid;
  height: 16px;
  margin: 1.5% 0 0 1%;
  font-weight: 100;
`;

// style for social media icons
const SocialmediaIcons = styled.div`
  margin: 12px 0 5px 216px;
  display: flex;
`;
const SocialmediaIconsspan = styled.span`
  margin: 0 0 0 20px;
  font-size: 14px;
  color: #000;
`;

// style for language select drop down list
const LangSelect = styled.select`
  border: none;
  background-color: #f5f5f5;
  margin-left: 54px;
  font-size: 13px;
  font-weight: 400;
  height: 30px;
  margin-top: 1px;
  outline: none;
`;

//style for drop down list option
const LangSelectOptions = styled.option`
  width: 20px;
  height: 20px;
  font-size: 12px;
  color: #000;
  background-color: #fff;
  font-weight: 400;
`;
const LoginButton = styled.p`
  font-weight: 300;
  font-size: 13px;
  margin: 1% 0 0 40px;
`;

const LoginButtonTxt = styled.span`
  margin: 0 8px 0 0;
`;

const HeadermiddleSection = styled.div`
  height: 75px;
  background-color: #fff;
`;

const LogoImageContainer = styled.div`
  width: 144px;
  height: 60px;
  margin-top: 6px;
`;

const LogoImage = styled.img`
  width: 80%;
  height: 50px;
  margin-top: 10px;
`;

const HeaderMidColumn2 = styled.div`
  // display: flex;
  // flex-direction: row;

  width: 57%;
`;

const HeaderMidColumn3 = styled.div`
  display: flex;
`;

const HeaderCart = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  padding-left: 72px;
`;

const ShoppingCartUl = styled.ul`
  display: inline-block;
  margin-top: 5px;
  margin-left: 53px;
`;

const ShoppingCartLi = styled.li`
  list-style: none;
  display: inline-block;
  margin-right: 15px;
`;

const Cartspan = styled.span`
  height: 15px;
  width: 15px;
  background: #7fad39;
  font-size: 13px;
  color: #ffffff;
  line-height: 13px;
  text-align: center;
  font-weight: 700;
  display: inline-block;
  border-radius: 50%;
  top: 0;
  right: -12px;
`;
const CartHeadPrice = styled.div`
  display: inline-block;
  font-size: 14px;
  color: #6f6f6f;
  margin-top: 30px;
  margin-left: 10px;
`;

const HeaderCartPricespan = styled.span`
  color: #252525;
  font-weight: 700;
`;

const HeaderBottomSection = styled.div`
  height: 50px;
`;

const CategoryListDiv = styled.div`
  background: #7fad39;

  border-radius: 0;
  padding: 10px 25px 13px 35px;
  cursor: pointer;
  border: none;
  width: 260px;
`;

const CategoryList = styled.ul`
  border: 1px solid #ebebeb;
  padding-left: 40px;
  padding-top: 10px;
  padding-bottom: 12px;
  width: 260px;
`;

const CategoryListItems = styled.a`
  font-size: 16px;
  color: #1c1c1c;
  line-height: 39px;
  display: block;
`;

const SearchOptions = styled.div`
  width: 51%;
  height: 50px;
  margin-left: 40px;
  border: 1px solid #ebebeb;
`;

const SearchInPut = styled.input`
  width: 70%;
  border: none;
  outline: none;
  font-size: 14px;
  color: #b2b2b2;
  padding-left: 20px;
  margin-left: 30px;
`;

const SearchButton = styled.a`
  font-size: 15px;
  color: #ffffff;
  font-weight: 800;
  width: 24%;
  padding: 12px 0 0 22px;
  text-decoration: none;
  background: #7fad39;
  border: none;
`;

const Contact = styled.div`
  margin-left: 4%;
`;
const PhoneIcon = styled.div`
  font-size: 18px;
  color: #7fad39;
  height: 50px;
  width: 50px;
  background: #f5f5f5;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  margin-right: 20px;
`;

const PhnNo = styled.h5`
  color: #1c1c1c;
  font-weight: 900;
  margin-bottom: 5px;
  font-size: 16px;
`;

const PhnNotextSpan = styled.span`
  font-size: 14px;
  color: #6f6f6f;
`;

const Headnav = styled.nav`
  margin-left: 150px;
`;

const HeadNavli = styled.li`
  margin-left: 40px;
`;
const HeadNavLinks = styled.a`
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  color: #000;
  &:hover {
    color: #7fad39;
  }
  &:active {
    color: #7fad39;
  }
`;

const Header = () => {
  return (
    //main container
    <Hedder>
      {/* top header section  */}
      <HeadTop>
        <HeaderContainer>
          <div className="d-flex flex-wrap">
            <div className="col-lg-6 col-md-6 ">
              <TopheaderDet className="d-flex flex-row">
                {/* <Topheadersection> */}
                <Headeremail className="header_email">
                  <HeaderEmailtxt className="fa-solid fa-envelope"></HeaderEmailtxt>
                  hello@colorlib.com
                </Headeremail>
                <Bar></Bar>
                <ShippingDetails>
                  Free Shipping for all Order of $99
                </ShippingDetails>
              </TopheaderDet>
            </div>
            <div className="col-lg-6 col-md-6 ">
              <TopheaderDet className="d-flex">
                <SocialmediaIcons>
                  <SocialmediaIconsspan className="fa-brands fa-facebook-f"></SocialmediaIconsspan>
                  <SocialmediaIconsspan className="fa-brands fa-twitter"></SocialmediaIconsspan>
                  <SocialmediaIconsspan className="fa-brands fa-linkedin-in"></SocialmediaIconsspan>
                  <SocialmediaIconsspan className="fa-brands fa-pinterest-p"></SocialmediaIconsspan>
                </SocialmediaIcons>
                <Bar></Bar>
                {/* <CountryDropdown  id="UNIQUE_ID" className='YOUR_CSS_CLASS' preferredCountries={['gb', 'us']}  value="" ></CountryDropdown>  */}
                <LangSelect>
                  <LangSelectOptions defaultValue>English</LangSelectOptions>
                  <LangSelectOptions>Spanish</LangSelectOptions>
                </LangSelect>
                <Bar></Bar>
                <LoginButton>
                  <LoginButtonTxt className="fa-solid fa-user"></LoginButtonTxt>
                  Login
                </LoginButton>
              </TopheaderDet>
            </div>
            {/* </Topheadersection> */}
          </div>
        </HeaderContainer>
      </HeadTop>

      {/* Middle Header Section  */}
      <HeaderContainer>
        <HeadermiddleSection className="d-flex flex-row">
          <LogoImageContainer>
            <LogoImage src={require('../Images/logo.png.webp')}></LogoImage>
          </LogoImageContainer>
          <HeaderMidColumn2 className="d-flex flex-wrap">
            {/* <Navbar bg="white~" variant="light" style={{ marginLeft: '111px' }}>
              <Nav className="me-auto" style={{ marginTop: '15px' }}>
                <Nav.Link
                  as={Link}
                  to="/"
                  style={{
                    fontSize: '15px',
                    marginLeft: '40px',
                    fontWeight: 600,
                    color: 'black',
                  }}
                >
                  HOME
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/shop"
                  style={{
                    fontSize: '15px',
                    marginLeft: '40px',
                    fontWeight: 600,
                    color: 'black',
                  }}
                >
                  SHOP
                </Nav.Link>
                <Nav.Link
                  href="#pricing"
                  style={{
                    fontSize: '15px',
                    marginLeft: '40px',
                    fontWeight: 600,
                    color: 'black',
                  }}
                >
                  PAGES
                </Nav.Link>
                <Nav.Link
                  href="#pricing"
                  style={{
                    fontSize: '15px',
                    marginLeft: '40px',
                    fontWeight: 600,
                    color: 'black',
                  }}
                >
                  BLOG
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  style={{
                    fontSize: '15px',
                    marginLeft: '40px',
                    fontWeight: 600,
                    color: 'black',
                  }}
                >
                  CONTACT
                </Nav.Link>
              </Nav>
            </Navbar> */}
            <Headnav className="navbar navbar-expand-lg navbar-light bg-white">
              {/* <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav" style={{ marginTop: '10px' }}>
                  <HeadNavli className="nav-item active">
                    <HeadNavLinks class="nav-link" as={Link} to="/">
                      HOME
                    </HeadNavLinks>
                  </HeadNavli>
                  <HeadNavli className="nav-item">
                    <HeadNavLinks className="nav-link" as={Link} to="/shop">
                      SHOP
                    </HeadNavLinks>
                  </HeadNavli>
                  <HeadNavli className="nav-item">
                    <HeadNavLinks className="nav-link" href="#">
                      PAGES
                    </HeadNavLinks>
                  </HeadNavli>
                  <HeadNavli className="nav-item">
                    <HeadNavLinks className="nav-link" as={Link} to="/blog">
                      BLOG
                    </HeadNavLinks>
                  </HeadNavli>
                  <HeadNavli className="nav-item">
                    <HeadNavLinks className="nav-link" as={Link} to="/contact">
                      CONTACT
                    </HeadNavLinks>
                  </HeadNavli>
                  {/* <HeadNavli className="nav-item dropdown">
                    <HeadNavLinks
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      CONTACT
                    </HeadNavLinks>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </HeadNavli> */}
                </ul>
              </div>
            </Headnav>
          </HeaderMidColumn2>
          <HeaderMidColumn3>
            <HeaderCart>
              <ShoppingCartUl>
                <ShoppingCartLi>
                  <a href="abc.com">
                    <i
                      className="fa-solid fa-heart"
                      style={{ fontSize: '18px', color: '#1c1c1c' }}
                    ></i>
                    <Cartspan>1</Cartspan>
                  </a>
                </ShoppingCartLi>
                <ShoppingCartLi>
                  <a href="cde.com">
                    <i
                      className="fa-solid fa-bag-shopping"
                      style={{ fontSize: '18px', color: '#1c1c1c' }}
                    ></i>
                    <Cartspan>2</Cartspan>
                  </a>
                </ShoppingCartLi>
              </ShoppingCartUl>
            </HeaderCart>
            <CartHeadPrice>
              Item:
              <HeaderCartPricespan>$150.00</HeaderCartPricespan>
            </CartHeadPrice>
          </HeaderMidColumn3>
        </HeadermiddleSection>
      </HeaderContainer>

      {/* header bottom section  */}
      <HeaderContainer>
        <HeaderBottomSection className="d-flex flex-row">
          <div>
            <CategoryListDiv
              className="btn btn-warning dropdown"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                className=" fa fa-bars"
                style={{
                  fontSize: '16px',
                  color: '#ffffff',
                  marginRight: '10px',
                }}
              ></i>
              <span
                style={{
                  fontSize: '17px',
                  fontWeight: 900,
                  color: '#ffffff',
                }}
              >
                All Departments
              </span>
              <span
                style={{ fontSize: '18px', marginLeft: '12px', color: '#fff' }}
              >
                &#8964;
              </span>
            </CategoryListDiv>
            <CategoryList
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <CategoryListItems className="dropdown-item" href="asw.com">
                  Fresh Meat
                </CategoryListItems>
              </li>
              <li>
                <CategoryListItems className="dropdown-item" href="fds.com">
                  Vegetables
                </CategoryListItems>
              </li>
              <li>
                <CategoryListItems className="dropdown-item" href="wewe.com">
                  Fruits & Nuts
                </CategoryListItems>
              </li>
              <li>
                <CategoryListItems className="dropdown-item" href="wewe.com">
                  Ocean Foods
                </CategoryListItems>
              </li>
              <li>
                <CategoryListItems className="dropdown-item" href="wewe.com">
                  OatMeals
                </CategoryListItems>
              </li>
              <li>
                <CategoryListItems className="dropdown-item" href="wewe.com">
                  Butter & Eggs
                </CategoryListItems>
              </li>
            </CategoryList>
          </div>
          <SearchOptions className="d-flex">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ fontWeight: 700 }}
            >
              All categories
            </button>
            <div
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton"
              style={{ fontWeight: 500 }}
            >
              <a className="dropdown-item" href="dd.com">
                Action
              </a>
              <a className="dropdown-item" href="dsa.com">
                Another action
              </a>
              <a className="dropdown-item" href="dgyd.com">
                Something else here
              </a>
            </div>
            <Bar></Bar>
            <SearchInPut
              type="text"
              placeholder="What do you need?"
            ></SearchInPut>
            <SearchButton> SEARCH</SearchButton>
          </SearchOptions>
          <Contact className="d-flex flex-row">
            <PhoneIcon>
              <i className="fa-solid fa-phone" style={{ fontWeight: 800 }}></i>
            </PhoneIcon>
            <div className="phoneNo">
              <PhnNo>+65 11.188.888</PhnNo>
              <PhnNotextSpan>support 24/7 time</PhnNotextSpan>
            </div>
          </Contact>
        </HeaderBottomSection>
      </HeaderContainer>
    </Hedder>
  );
};
export default Header;
