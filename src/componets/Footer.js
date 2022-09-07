import '../style/index.css';


function Footer () {
    return(
        <div className='flex margin-top centered'>
            <div className='centered'>
              <a href='https://www.linkedin.com/in/hunter-lindsay-42a431188/'>
                <img
                  className='imgLink'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png' 
                  alt=''
                />
              </a>
              <a href='https://github.com/hcl3535'>
                <img
                  className='imgLink'
                  src='https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU' 
                  alt=''
                />
              </a>
              <a href='https://profile.codersrank.io/user/hcl3535'>
              <img
                className='imgLink'
                src='https://avatars.githubusercontent.com/u/48912960?s=280&v=4' 
                alt=''
              />
              </a>
           </div>
        </div>
    )
}

export default Footer;