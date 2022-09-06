import '../style/index.css';
import GameDescription from './GameDescription';
import GameVideo from './gameVideo';


function Section2 () {
    return(
        <div className='flex margin-top padding border'>
          <GameVideo/>
          <GameDescription/>
        </div>
    )
}

export default Section2;