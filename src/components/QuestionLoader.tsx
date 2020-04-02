import React from 'react';
import styled from 'styled-components';
import LoaderPlaceholder from './LoaderPlaceholder';

const Container = styled.div`
  margin-top: 45px;
`;

const HeaderText = styled.div`
  margin-bottom: 12px;
  border-radius: 5px;
`;

const Question = () => {
  return (
    <Container>
      <HeaderText>
        <LoaderPlaceholder height={32} width={150} />
      </HeaderText>
      <LoaderPlaceholder height={110} />
    </Container>
  );
};

export default Question;
