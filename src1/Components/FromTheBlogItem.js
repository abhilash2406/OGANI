import React from 'react';
import styled from 'styled-components';

const FtBlogRows = styled.div`
  width: 360px;
  height: 410px;
`;
const FtBlogItemimgDiv = styled.div`
  width: 100%;
  height: 258px;
`;
const Bimg = styled.img`
  width: 100%;
  height: 258px;
`;
const FtBlogItemTxts = styled.div`
  padding-top: 25px;
`;
const BlogTxtli = styled.li`
  font-size: 16px;
  color: #b2b2b2;
  list-style: none;
  display: inline-block;
  margin-right: 15px;
`;

const BlogTxth5 = styled.h5`
  margin: 15px 0 12px 0;
`;

const BlogTxta = styled.a`
  font-size: 20px;
  color: #1c1c1c;
  font-weight: 700;
  text-decoration: none;
`;

const BlogTxtp = styled.p`
  font-size: 16px;
  font-family: 'Cairo', sans-serif;
  color: #6f6f6f;
  font-weight: 400;
  line-height: 26px;
  margin: 0 0 30px 0;
`;
const FromtheBlogItem = (props) => {
  return (
    <FtBlogRows className="d-flex  flex-column">
      <FtBlogItemimgDiv>
        <Bimg src={props.Bimg}></Bimg>
      </FtBlogItemimgDiv>
      <FtBlogItemTxts>
        <ul>
          <BlogTxtli>
            <i className="fa-regular fa-calendar"></i>
            May 4,2019
          </BlogTxtli>
          <BlogTxtli>
            <i className="fa-regular fa-comment"></i>5
          </BlogTxtli>
        </ul>
        <BlogTxth5>
          <BlogTxta>Cooking Tips Makes Cooking Simple</BlogTxta>
        </BlogTxth5>
        <BlogTxtp>
          Sed quia non numquam modi tempora indunt ut labore et dolore magnam
          aliquam quaerat
        </BlogTxtp>
      </FtBlogItemTxts>
    </FtBlogRows>
  );
};

export default FromtheBlogItem;
