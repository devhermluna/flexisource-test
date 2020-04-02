import React from 'react';
import styled from 'styled-components';

interface Props {
  number: number;
  text: string;
}

const Container = styled.div`
  margin-top: 45px;
`;

const HeaderText = styled.p`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const BodyText = styled.p`
  font-family: Georgia, serif;
  font-size: 21px;
  line-height: 37px;
`;

const Question = ({ number, text }: Props) => {
  return (
    <Container data-testid="question-container">
      <HeaderText data-testid="question-header-text">
        Question {number}
      </HeaderText>
      <BodyText data-testid="question-body-text">{text}</BodyText>
    </Container>
  );
};

export default Question;
