import React from 'react';
import LoaderPlaceholder from '../LoaderPlaceholder';
import {
  StyledContainer,
  StyledHeaderText
} from '../../styled-components/Question.styled';

const Question = () => {
  return (
    <StyledContainer>
      <StyledHeaderText>
        <LoaderPlaceholder height={32} width={150} />
      </StyledHeaderText>
      <LoaderPlaceholder height={110} />
    </StyledContainer>
  );
};

export default Question;
