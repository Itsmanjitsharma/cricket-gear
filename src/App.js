import React from 'react';
import Headers from './components/Headers';
import Banner from './components/Banner';
import ProductCard from './components/ProductCard';
import Footers from './components/Footers';
import './App.css';
import Filter from './components/Filter';
import SelectedProduct from './components/SelectedProduct';

const products = [
  { name: 'Bats',  image: 'https://img.freepik.com/premium-photo/world-cup-2023-bat-ball-helmet-cricket-resource-ai-generated_931294-26.jpg' },
  { name: 'Balls',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe_Kn-ToQdpT71x67hiColZ8qi7OAj9xUtiQ&s' },
  { name: 'Helmet',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL-C2CRepblgzS-FvJYEd-U-ZclKp2ImnfWA&s' },
  { name: 'Abdominal',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvMurhQXH1IbY_oHBixjqvahCKjPM7J6i6w&s' },
  { name: 'Cricket Pads',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-uO6a9FnmxIOjlknxO_nhSpTAPCpFDTY6eA&s' },
  { name: 'Cricket Gloves',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_slpqS4rHy805ZC2LcG4Cxhc6FdUhFtJsyA&s' },
  { name: 'Thigh Pad',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPalc7cuc52snEqlTaTftrro_a4kk9Bcx4Vg&s' },
  { name: 'Jacket',  image: 'https://m.media-amazon.com/images/I/71JYd961ObL.jpg' },
  { name: 'Wickets', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAAma6wdZEA1duX2EnH1k33clZPKZtK4RRAQ&s' },
  { name: 'Nets',  image: 'https://m.media-amazon.com/images/I/712SCEEYHDL._AC_UF894,1000_QL80_.jpg' },
  {name: 'Cones', image:'https://img.freepik.com/premium-photo/training-cones-cricket-white-background_1024117-1230.jpg'},
  {name: 'Traphy',image:'https://w0.peakpx.com/wallpaper/890/788/HD-wallpaper-world-cup-trophy-cup-fifa-trophy-world-thumbnail.jpg'},
  {name: 'Beg',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHw8NAI1UxMnDwjTUwy3sNV8xHjKZtgVEz7g&s'}
];

const App = () => {
  return (
    <div className="app">
     <SelectedProduct/>
    </div>
  );
};

export default App;
