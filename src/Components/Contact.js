import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Headings from './Headings';
import ContactSpadItems from './ContactSpadItems';
import Footer from './Footer';

const ContactSpad = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
`;

const CContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1200px) {
    max-width: 1170px;
  }
`;

const ContactFormspad = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
`;

const FormContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media only screen and (min-width: 1200px) {
    max-width: 1170px;
  }
`;

const FormTitleDiv = styled.div`
  margin-bottom: 50px;
  text-align: center;
`;

const ContactFormh2 = styled.h2`
  color: #1c1c1c;
  font-weight: 700;
  font-size: 36px;
`;

const FormColumn1 = styled.div`
  @media (min-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

const Input1 = styled.input`
  width: 95%;
  height: 50px;
  font-size: 16px;
  color: #6f6f6f;
  padding-left: 20px;
  margin-bottom: 30px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
`;
const FormColumn2 = styled.div`
  text-align: center !important;
  @media (min-width: 992px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  font-size: 16px;
  color: #6f6f6f;
  padding-left: 20px;
  margin-bottom: 24px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  padding-top: 12px;
  resize: none;
`;
const Button = styled.button`
  font-size: 15px;
  color: #ffffff;
  font-weight: 800;
  text-transform: uppercase;
  display: inline-block;
  padding: 13px 30px 12px;
  background: #7fad39;
  border: none;
`;

const Mapp = styled.div`
  height: 500px;
`;
const MapFrame = styled.iframe`
width : 100%;
height : 500px;
border : 0;
tabindex : 0;
allowfullscreen area hidden: false;
`;

const MapInside = styled.div`
  // position: absolute;
  // left: 50%;
  // top: 160px;
`;
// const MapInsideI = styled.i`
//   font-size: 48px;
//   color: #7fad39;
//   // position: absolute;
//   bottom: -75px;
//   left: 50%;
//   z-index: 1;
// `;
const Contact = () => {
  return (
    <div>
      <Header />
      <Headings crumbtxt={'Contact Us'} crumbsubtxt={'Contact Us'} />
      <ContactSpad>
        <CContainer>
          <div className="d-flex flex-wrap align-start">
            <ContactSpadItems
              cls={'fa-solid fa-phone'}
              stxt={'Phone'}
              sinfo={'+01-3-8888-6868'}
            />
            <ContactSpadItems
              cls={'fa-solid fa-location-dot'}
              stxt={'Address'}
              sinfo={'60-49 Road 11378 New York'}
            />
            <ContactSpadItems
              cls={'fa-regular fa-clock'}
              stxt={'Open Time'}
              sinfo={'10:00 am to 23:00 pm'}
            />
            <ContactSpadItems
              cls={'fa-regular fa-envelope'}
              stxt={'Email'}
              sinfo={'hello@colorlib.com'}
            />
          </div>
        </CContainer>
      </ContactSpad>
      <Mapp>
        <MapFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd"></MapFrame>
        <MapInside>
          {/* <MapInsideI className="fa-solid fa-location-dot"></MapInsideI> */}
        </MapInside>
      </Mapp>
      <ContactFormspad>
        <FormContainer>
          <div className="d-flex flex-column">
            <FormTitleDiv>
              <ContactFormh2>Leave Message</ContactFormh2>
            </FormTitleDiv>
            <form>
              <div className="d-flex flex-wrap justify-content-between">
                <FormColumn1>
                  <Input1 type="text" placeholder="Your Name" />
                </FormColumn1>
                <FormColumn1>
                  <Input1 type="text" placeholder="Your Email" />
                </FormColumn1>
                <FormColumn2>
                  <TextArea placeholder="Your Message"></TextArea>
                  <Button type="submit">SEND MESSAGE</Button>
                </FormColumn2>
              </div>
            </form>
          </div>
        </FormContainer>
      </ContactFormspad>
      <Footer />
    </div>
  );
};

export default Contact;
