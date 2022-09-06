import '../style/index.css';
import Introduction from './introduction';
import Stats from './stats';

function Section1 () {
    return(
        <div className='flex margin-top padding border'>
          <Introduction/>
          <Stats/>
        </div>
    )
}

export default Section1;