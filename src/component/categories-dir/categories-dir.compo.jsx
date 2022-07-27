import './categories-dir.styles.scss'
import DirectoryItem from '../directory-item/directory-item.component'
const CategoriesDirectory = ({ categories}) => {
  
  return (
    <div className='categories-container'>
      {categories.map(( category ) => {
        return (
          <DirectoryItem category={category} key={category.id}/>
        )
      })}
    </div>
  )
}
  export default CategoriesDirectory