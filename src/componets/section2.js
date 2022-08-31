import '../style/index.css';
import GameDescription from './GameDescription';
import GameVideo from './gameVideo';


function Section2 () {
    return(
        <div className='flex margin-top'>
          <GameDescription/>
          <GameVideo/>
        </div>
    )
}

export default Section2;