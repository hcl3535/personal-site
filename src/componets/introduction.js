import { useEffect, useState } from 'react';
import '../style/index.css';

function Introduction() {

    const proficiencies = ["JavaScript","Node", "React", "Express", "PostreSQL","Unreal Engine","Git", "HTML", "CSS",]
    let index = 0
    const [currentProficiency, setCurrentProficiency] = useState("javaScript") 

    useEffect(() => {
      const intervalId = setInterval(() => {
        changeProficiency()
      }, 2000);
      return () => clearTimeout(intervalId)
    },[]);

    function changeProficiency() {
      if(index > proficiencies.length - 2) index = -1;
      index++
      setCurrentProficiency(proficiencies[index])
    }

return(
    <div className='flex-child'>
      <div className='centered biggerText'>
        I am a Full-Stack Engineer,
        proficient with
      </div>
      <div className='centered biggerText changingWord'>
        {currentProficiency}
      </div> 
    </div> 
)    
}

export default Introduction;