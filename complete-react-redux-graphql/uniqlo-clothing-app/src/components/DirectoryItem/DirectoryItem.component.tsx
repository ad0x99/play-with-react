import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeCategory } from '../../store/categories/category.types';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './DirectoryItem.styles';

type DirectoryItemProps = {
  category: HomeCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />

      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
