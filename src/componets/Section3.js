import '../style/index.css';
import ShapeShopperDescription from './shapeShopperDescription';
import ShapeShopperVideo from './shapeShopperVideo';


function Section3 () {
    return(
        <div className='flex margin-top'>
          <ShapeShopperDescription/>
          <ShapeShopperVideo/>
        </div>
    )
}

export default Section3;