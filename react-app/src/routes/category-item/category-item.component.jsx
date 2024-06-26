import React from 'react';
import { useParams } from 'react-router-dom';
import SHOP_DATA from "../../shop-data"
import './category-item.styles.scss'


const CategoryItem = () => {
  const { category, productId } = useParams();
  const categoryData = SHOP_DATA[category.toLowerCase()];
  const product = categoryData?.items.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='category-item_container'>
      <h2 className='category-item_title'>{product.name}</h2>
      <div className="category-item_image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className='category-item_text'>Price: ${product.price}</div>
    </div>
  );
};

export default CategoryItem;
