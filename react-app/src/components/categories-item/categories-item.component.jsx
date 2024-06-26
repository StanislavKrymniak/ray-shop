import './categories-item.styles.scss'
import { useNavigate } from 'react-router-dom'

export const CategoriesItem = ({category}) => {
    const {title,imageURL,route} = category
    const navigate = useNavigate()
    const onNavigateHandler = () => navigate(route)
    return (
        <div className="categories-item_body">
            <div className="categories-item_body_title" onClick={onNavigateHandler}>{title}</div>
            <div className="categories-item_body_image" onClick={onNavigateHandler}><img src={imageURL} alt="" /></div>
        </div>
    )
}


export default CategoriesItem;