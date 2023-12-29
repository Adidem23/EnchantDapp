import Spline from '@splinetool/react-spline';
import '../CSS/HeroSection2.css';
import IRONMAN from '../assets/IRONMAN.png';

const HeroSection2 = () => {
  return (
    <>
    <div className='Ironfeatures'>
    <h2 className="text-heading">EnchantMask Provides 🪄</h2>
    {/* <Spline scene="https://prod.spline.design/Kn36sHNPRkwzsCBt/scene.splinecode" /> */}
    <img src={IRONMAN}  alt=''/>
    </div>
    </>

  )
}

export default HeroSection2