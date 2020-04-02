import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ImageWithTag from '../../components/ImageWithTag';
import ImageWithTagLoader from '../../components/ImageWithTagLoader';
import Question from '../../components/Question';
import QuestionLoader from '../../components/QuestionLoader';
import FeedAPI from '../../services/feed';
import { IITem } from '../../interfaces/Item';
import { LOADER_COLOR } from '../../constants/Colors';
import { DEVICES } from '../../constants/Devices';

const CONTAINER_WIDTH = 'calc(50% - 15px)';
const IMAGE_HEIGHT = 1107;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  @media ${DEVICES.laptop} {
    flex-wrap: wrap;
  }
`;

const ImageContainer = styled.div`
  width: ${CONTAINER_WIDTH};

  @media ${DEVICES.laptop} {
    width: 100%;
  }
`;

const DetailsContainer = styled.div`
  width: ${CONTAINER_WIDTH};
  padding: 80px;

  @media ${DEVICES.laptop} {
    width: 100%;
    padding: 0;
    margin-top: 50px;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: 900;
  line-height: 68px;
  margin-bottom: 60px;
`;

const TitleLoader = styled.div`
  height: 68px;
  width: 150px
  margin-bottom: 60px;
  background: ${LOADER_COLOR};
  border-radius: 5px;
`;

const FeedItem = () => {
  const { slug } = useParams();
  const history = useHistory();
  const [{ thumb, tag, title, questions }, setItem] = useState<IITem>({});
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const getItemData = useCallback(async () => {
    try {
      const response = await FeedAPI.browse();
      const foundItem = response.find(
        item => `${item.id}-${item.slug}` === slug
      );

      if (!foundItem) throw new Error('Item not found!');

      setItem(foundItem);
      setIsFetching(false);
    } catch (error) {
      console.log('error', error);
      history.push('/item');
    }
  }, [history, slug]);

  useEffect(() => {
    getItemData();
  }, [getItemData]);

  return (
    <ItemContainer data-testid="feed-detailed-item">
      {!isFetching && (
        <>
          <ImageContainer>
            <ImageWithTag imageUrl={thumb} tag={tag} height={IMAGE_HEIGHT} />
          </ImageContainer>
          <DetailsContainer data-testid="item-details-container">
            <Title>{title}</Title>
            {questions &&
              questions.map((question, index) => (
                <Question key={question} number={index + 1} text={question} />
              ))}
          </DetailsContainer>
        </>
      )}
      {isFetching && (
        <>
          <ImageContainer>
            <ImageWithTagLoader height={IMAGE_HEIGHT} />
          </ImageContainer>
          <DetailsContainer data-testid="item-details-container">
            <TitleLoader />
            {[0, 1, 2, 3].map((item: number) => (
              <QuestionLoader key={item} />
            ))}
          </DetailsContainer>
        </>
      )}
    </ItemContainer>
  );
};

export default FeedItem;
