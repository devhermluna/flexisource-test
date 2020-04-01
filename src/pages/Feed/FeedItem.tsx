import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ImageWithTag from '../../components/ImageWithTag';
import Question from '../../components/Question';
import items from '../../data.json';

interface Props {}

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const ImageContainer = styled.div`
  width: calc(50% - 50px);
`;

const DetailsContainer = styled.div`
  width: calc(50% - 50px);
  padding: 80px 20px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 900;
  margin-bottom: 40px;
`;

const FeedItem = (props: Props) => {
  const { id } = useParams();
  const history = useHistory();
  const [{ thumb, tag, title, questions }, setItem] = useState({});

  const getItemData = useCallback(() => {
    const item = items.find(item => item.id.toString() === id);

    if (!item) {
      history.push('/item');
    }

    setItem(item);
  }, [history, id]);

  useEffect(() => {
    getItemData();
  }, [getItemData, id]);

  return (
    <ItemContainer>
      <ImageContainer>
        <ImageWithTag imageUrl={thumb} tag={tag} height={800} />
      </ImageContainer>
      <DetailsContainer>
        <Title>{title}</Title>
        {questions &&
          questions.map((question, index) => (
            <Question key={question} number={index + 1} text={question} />
          ))}
      </DetailsContainer>
    </ItemContainer>
  );
};

export default FeedItem;
