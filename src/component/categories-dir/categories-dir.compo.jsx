import './categories-dir.styles.scss'
import DirectoryItem from '../directory-item/directory-item.component'

 const categories = [
  {
    "id": 1,
    "title": "Hats",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
    "routes": 'shop/hats'
  },
  {
    "id": 2,
    "title": "Jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
    "routes": 'shop/jackets'
  },
  {
    "id": 3,
    "title": "Sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
    "routes": 'shop/sneakers'
  },
  {
    "id": 4,
    "title": "Womens",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
    "routes": 'shop/womens'
  },
  {
    "id": 5,
    "title": "Mens",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
    "routes": 'shop/mens'
  }
]
const CategoriesDirectory = () => {

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