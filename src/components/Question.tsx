import React from 'react';
import styled from 'styled-components';

interface Props {
  number: number;
  text: string;
}

const Container = styled.div`
  margin-top: 30px;
`;

const HeaderText = styled.p`
  font-size: 22px;
  font-weight: 900;
  margin-bottom: 7px;
`;

const BodyText = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

const Question = ({ number, text }: Props) => {
  return (
    <Container>
      <HeaderText>Question {number}</HeaderText>
      <BodyText>{text}</BodyText>
    </Container>
  );
};

export default Question;
