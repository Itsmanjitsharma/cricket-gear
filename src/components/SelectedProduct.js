import React, { useState } from 'react';
import './SelectedProduct.css';
import RecommendedProducts from './RecommendedProducts';

const SelectedProduct = () => {
  return (
    <div className='chart-container'>
     <div className='selected-Product-container'>
        <div className='image-container'>

        </div>
        <div className='details-container'>

        </div>
     </div>
    <div className='recomanded-Product-container'>
        <RecommendedProducts/>
    </div>
    </div>
  );
};

export default SelectedProduct;
