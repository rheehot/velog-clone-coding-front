import React from 'react';
import { useSelector } from "react-redux";
import * as S from './style';

const Tags = () => {
  const post = useSelector((state) => state.postDetailReducer.postInfo);

  return (
    <S.TagsWrapper>
      {post.tags &&
          post.tags.map((tag) => (
            <S.Tag key={tag.toString()}>
              <S.StyledLink to={`/tags/${tag}`}>{tag}</S.StyledLink>
            </S.Tag>
          ))}
    </S.TagsWrapper>
  );
};

export default Tags;
