import React from 'react';
import styled from 'styled-components';

const SpadWidget = styled.div`
  margin-bottom: 30px;
  width: 285px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SpadSpan = styled.span`
  font-size: 36px;
  color: #7fad39;
`;

const SpadH4 = styled.h4`
  color: #1c1c1c;
  font-weight: 700;
  margin-bottom: 6px;
  font-size: 24px;
  margin-top: 18px;
  //   text-align: center;
`;
const SpadP = styled.p`
  font-size: 15px;
  font-family: 'Cairo', sans-serif;
  color: #6f6f6f;
  font-weight: 400;
  line-height: 26px;
  margin: 0 0 15px 0;
  //   text-align: center;
`;
const ContactSpadItems = (props) => {
  return (
    <SpadWidget>
      <SpadSpan className={props.cls}></SpadSpan>
      <SpadH4>{props.stxt}</SpadH4>
      <SpadP>{props.sinfo}</SpadP>
    </SpadWidget>
  );
};
export default ContactSpadItems;
