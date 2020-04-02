import React from 'react';
import { IQuestion } from '../../interfaces/Question';
import {
  StyledContainer,
  StyledHeaderText,
  StyledBodyText
} from '../../styled-components/Question.styled';

const Question = ({ number, text }: IQuestion) => {
  if (!number || !text) return null;

  return (
    <StyledContainer data-testid="question-container">
      <StyledHeaderText data-testid="question-header-text">
        Question {number}
      </StyledHeaderText>
      <StyledBodyText data-testid="question-body-text">{text}</StyledBodyText>
    </StyledContainer>
  );
};

export default Question;
