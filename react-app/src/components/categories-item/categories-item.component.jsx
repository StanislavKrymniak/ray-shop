


export const CategoriesItem = ({categories}) => {
    const {title,imageURL} = categories
    return (
        <div className="categories-item_container">
            <div className="categories-item title">{title}</div>
            <div className="categories-item image"><img src={imageURL} alt="" /></div>
        </div>
    )
}

export default CategoriesItem