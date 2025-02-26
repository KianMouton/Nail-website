import '../App.css';
//img inports
import AutumnElagance from '../images/Autumn Elagance.jpg';
import BerryDelight from '../images/Berry Delight.jpg';
import CupidTouch from '../images/Cupid\'s Touch.jpg';
import FloralFrench from '../images/Floral French Fantasy.jpg';
import MidnightBlossom from '../images/Midnight Blossom.jpg';
import OceanBreese from '../images/Ocean Breese Elegance.jpg';
import RomanticBlush from '../images/Romantic Blush.jpg';
import VioletBloom from '../images/Violet Bloom.jpeg';
import BlueSkies from '../images/Blue skies.jpeg';
import CherryConfetti from '../images/Cherry Confetti.jpeg';
import PetalBlush from '../images/Petal Blush.jpeg';
import ChampagneChic from '../images/Champagne Chic.jpeg';
import { Link } from 'react-router-dom';

const products = [
   {
      name: "Autumn Elagance",
      image: AutumnElagance,
      price: 120,
      description: "This set of 10 luxury press-on nails is crafted and designed for a flawless, salon-quality finish in minutes. The set featured here is shaped in Short Squire, and every set is meticulously handmade by me to ensure a perfect fit. Get the perfect, customized nails without the wait!"
   },
   {
      name: "Berry Delight",
      image: BerryDelight,
      price: 120,
      description: "This set of 10 luxury press-on nails is crafted and designed for a flawless, salon-quality finish in minutes. The set featured here is shaped in Short Almond, and every set is meticulously handmade by me to ensure a perfect fit. Get the perfect, customized nails without the wait!"
   },
   {
      name: "Cupid's Touch",
      image: CupidTouch,
      price: 120,
      description: "This set of 10 luxury press-on nails is crafted and designed for a flawless, salon-quality finish in minutes. The set featured here is shaped in Medium Squire, and every set is meticulously handmade by me to ensure a perfect fit. Get the perfect, customized nails without the wait!"
   },
   {
      name: "Floral French Fantasy",
      image: FloralFrench,
      price: 120,
      description: "This set of 10 luxury press-on nails is crafted and designed for a flawless, salon-quality finish in minutes. The set featured here is shaped in Medium Almond, and every set is meticulously handmade by me to ensure a perfect fit. Get the perfect, customized nails without the wait!"
   },
   {
      name: "Midnight Blossom",
      image: MidnightBlossom,
      price: 120,
      description: "This set of 10 luxury press-on nails is crafted and designed for a flawless, salon-quality finish in minutes. The set featured here is shaped in Long Coffin, and every set is meticulously handmade by me to ensure a perfect fit. Get the perfect, customized nails without the wait!"
   },
   {
      name: "Ocean Breese Elegance",
      image: OceanBreese,
      price: 120,
      description: "This set of 10 luxury press-on nails is crafted and designed for a flawless, salon-quality finish in minutes. The set featured here is shaped in XL Coffin, and every set is meticulously handmade by me to ensure a perfect fit. Get the perfect, customized nails without the wait!"
   },
   {
      name: "Romantic Blush",
      image: RomanticBlush,
      price: 120,
      description: "This set of 10 luxury press-on nails is crafted and designed for a flawless, salon-quality finish in minutes. The set featured here is shaped in Long Stilleto, and every set is meticulously handmade by me to ensure a perfect fit. Get the perfect, customized nails without the wait!"
   },
   {
      name: "Violet Bloom",
      image: VioletBloom,
      price: 120,
      description: "This set of 10 luxury press-on nails is crafted and designed for a flawless, salon-quality finish in minutes. The set featured here is shaped in Medium Squire, and every set is meticulously handmade by me to ensure a perfect fit. Get the perfect, customized nails without the wait!"
   },
   {
      name: "Blue Skies",
      image: BlueSkies,
      price: 120,
      description: "This set of 10 luxury press-on nails is crafted and designed for a flawless, salon-quality finish in minutes. The set featured here is shaped in XI stiletto, and every set is meticulously handmade by me to ensure a perfect fit. Get the perfect, customized nails without the wait!"
   },
   {
      name: "Cherry Confetti",
      image: CherryConfetti,
      price: 120,
      description: "This set of 10 luxury press-on nails is crafted and designed for a flawless, salon-quality finish in minutes. The set featured here is shaped in Medium almond, and every set is meticulously handmade by me to ensure a perfect fit. Get the perfect, customized nails without the wait!"
   },
   {
      name: "Petal Blush",
      image: PetalBlush,
      price: 120,
      description: "This set of 10 luxury press-on nails is crafted and designed for a flawless, salon-quality finish in minutes. The set featured here is shaped in Short round, and every set is meticulously handmade by me to ensure a perfect fit. Get the perfect, customized nails without the wait!"
   },
   {
      name: "Champagne Chic",
      image: ChampagneChic,
      price: 120,
      description: "This set of 10 luxury press-on nails is crafted and designed for a flawless, salon-quality finish in minutes. The set featured here is shaped in XI coffin, and every set is meticulously handmade by me to ensure a perfect fit. Get the perfect, customized nails without the wait!"
   },
]
//add shapes na die description
function Sets() {
   return (
       <div className="sets">
           <h1>Premade Sets</h1>
           <div className='sets-container'>
               {products.map((product, index) => (
                   <Link key={index} to='/product' state={{ product }}>
                       <div className='set'>
                           <img src={product.image} alt={product.name} />
                           <div className="set-details">
                           <h2>{product.name}</h2>
                           <p>R{product.price}</p>
                           </div>
                       </div>
                   </Link>
               ))}
           </div>
       </div>
   );
}

export default Sets;