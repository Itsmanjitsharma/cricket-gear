import React from 'react';
import Headers from './components/Headers';
import Banner from './components/Banner';
import ProductCard from './components/ProductCard';
import Footers from './components/Footers';
import './App.css';

const products = [
  { name: 'Bats', price: '$499.00', image: 'https://img.freepik.com/premium-photo/world-cup-2023-bat-ball-helmet-cricket-resource-ai-generated_931294-26.jpg' },
  { name: 'Balls', price: '$300.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe_Kn-ToQdpT71x67hiColZ8qi7OAj9xUtiQ&s' },
  { name: 'Helmet', price: '$200.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL-C2CRepblgzS-FvJYEd-U-ZclKp2ImnfWA&s' },
  { name: 'Abdominal', price: '$250.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvMurhQXH1IbY_oHBixjqvahCKjPM7J6i6w&s' },
  { name: 'Cricket Pads', price: '$150.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-uO6a9FnmxIOjlknxO_nhSpTAPCpFDTY6eA&s' },
  { name: 'Cricket Gloves', price: '$150.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_slpqS4rHy805ZC2LcG4Cxhc6FdUhFtJsyA&s' },
  { name: 'Thigh Pad', price: '$150.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPalc7cuc52snEqlTaTftrro_a4kk9Bcx4Vg&s' },
  { name: 'Jacket', price: '$150.00', image: 'https://m.media-amazon.com/images/I/71JYd961ObL.jpg' },
  { name: 'Cricket Pads', price: '$150.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-uO6a9FnmxIOjlknxO_nhSpTAPCpFDTY6eA&s' },
  { name: 'Cricket Pads', price: '$150.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-uO6a9FnmxIOjlknxO_nhSpTAPCpFDTY6eA&s' },

];

const App = () => {
  return (
    <div className="app">
      <Headers />
      <Banner/>
      <section className="products">
        {products.map(product => (
          <ProductCard key={product.name} product={product} />
        ))}
      </section>
      <Footers />
    </div>
  );
};

export default App;
