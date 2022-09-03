import '../style/index.css';
import { Link } from 'react-router-dom';

function GameDescription () {
    return (
        <div className='flex-child centered'>
          <Link to='/indiGame'className='centered'>Indi Game</Link>
          <h2>
            i made this indi game useing Unreal Engine 4
            as a solo dev, over the course of a year in 2021.
            this is the project that inspired me to persue a
            career in software development.
          </h2>
        </div>
    )
}

export default GameDescription;