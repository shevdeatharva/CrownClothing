import { BackgroundImage, Body, DirectoryItemContainer } from '../directory-item/directory-item.sytles';
import { useNavigate } from 'react-router-dom';
const DirectoryItem = ({ category }) => {
  const { imageUrl, title, routes } = category;
  const navigate = useNavigate()
  const onNavigateHandler = () => navigate(routes)
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={ imageUrl} />
  <Body>
      <h2>{title}</h2>
    <p>Shop Now</p>
  </Body>
</DirectoryItemContainer>
 ) 
}
export default DirectoryItem
