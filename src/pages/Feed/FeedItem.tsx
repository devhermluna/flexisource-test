import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ImageWithTag from '../../components/ImageWithTag/ImageWithTag';
import ImageWithTagLoader from '../../components/ImageWithTag/ImageWithTagLoader';
import Question from '../../components/Question/Question';
import QuestionLoader from '../../components/Question/QuestionLoader';
import FeedAPI from '../../services/feed';
import { IITem } from '../../interfaces/Item';
import {
  StyledFeedItemContainer,
  StyledFeedItemImageContainer,
  StyledFeedItemDetailsContainer,
  StyledFeedItemTitle,
  StyledFeedItemTitleLoader
} from '../../styled-components/FeedItem.styled';

const IMAGE_HEIGHT = 1107;

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
    <StyledFeedItemContainer data-testid="feed-detailed-item">
      {!isFetching && (
        <>
          <StyledFeedItemImageContainer>
            <ImageWithTag imageUrl={thumb} tag={tag} height={IMAGE_HEIGHT} />
          </StyledFeedItemImageContainer>
          <StyledFeedItemDetailsContainer data-testid="item-details-container">
            <StyledFeedItemTitle>{title}</StyledFeedItemTitle>
            {questions &&
              questions.map((question, index) => (
                <Question key={question} number={index + 1} text={question} />
              ))}
          </StyledFeedItemDetailsContainer>
        </>
      )}
      {isFetching && (
        <>
          <StyledFeedItemImageContainer>
            <ImageWithTagLoader height={IMAGE_HEIGHT} />
          </StyledFeedItemImageContainer>
          <StyledFeedItemDetailsContainer data-testid="item-details-container">
            <StyledFeedItemTitleLoader />
            {[0, 1, 2, 3].map((item: number) => (
              <QuestionLoader key={item} />
            ))}
          </StyledFeedItemDetailsContainer>
        </>
      )}
    </StyledFeedItemContainer>
  );
};

export default FeedItem;
