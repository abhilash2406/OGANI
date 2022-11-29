import React from 'react';
import styled from 'styled-components';
import HeadTitles from './HeadTitles';
import FromtheBlogItem from './FromTheBlogItem';
import bimg1 from '../Images/home page images/homeblogitem-1.jpg';
import bimg2 from '../Images/home page images/homeblogitem-2.jpg';
import bimg3 from '../Images/home page images/homeblogitem-3.jpg';

const FromTheBlogWrapper = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
`;
const FromTheBlogContainer = styled.div`
  margin: 0 80px 0 80px;
`;
// const FromTheBlogRow = styled.div`
// display : flex;
// flex-wrap : wrap;
// `;
const FromtheBlog = (props) => {
  return (
    <FromTheBlogWrapper>
      <FromTheBlogContainer>
        <HeadTitles titleHead={'From The Blog'} />
        <div className="d-flex flex-wrap  align-content-start justify-content-between">
          <FromtheBlogItem Bimg={bimg1} />
          <FromtheBlogItem Bimg={bimg2} />
          <FromtheBlogItem Bimg={bimg3} />
        </div>
      </FromTheBlogContainer>
    </FromTheBlogWrapper>
  );
};

export default FromtheBlog;
