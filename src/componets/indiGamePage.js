import YouTube from 'react-youtube';
import '../style/index.css';
import Section2 from './section2';


function IndiGamePage() {
    return(
        <div >
          <div>
          <div className='flex margin-top padding border'>
              <div className='flex-child centered'>
                <h1>My Indi-Game</h1>
                <h3>
                i made this indi game useing Unreal Engine 4
                as a solo dev, over the course of a year in 2021.
            this is the project that inspired me to persue a
            career in software development.
                </h3>
              </div>
              <YouTube 
                className='flex-child'
                videoId="AsRBsSi4t7o"
              />
            </div>
            <div className='flex margin-top padding border'>
              <YouTube 
                className='flex-child'
                videoId="uCnTzp-IW3A"
              />
              <div className='flex-child centered'>
                <h1>Art direction</h1>
                <h3>
                  To get my own models into the game i
                  i had to learn how to 3D model useing blender,
                  and change uv wraps useing photoshop.
                </h3>
              </div>
            </div>
            <div className='flex margin-top padding border'>
                <div className='flex-child centered'>
              <h1>Animation and rigging</h1>
              <h3>
                in order for the models to look like they
                are walking i had to learn rigging and animation
                which i learned useing Blender.
              </h3>
              </div>
              <YouTube
                className='flex-child'
                videoId="xU1T6F-Kdb8"
              />
            </div>
            <div className='flex margin-top padding border'>
              <YouTube
                className='flex-child'
                videoId="oRRWyisL5FI"
              />
              <div className='flex-child centered'>
                <h1>Game Mechanics</h1>
                <h3>
                    I wanted to build a system that allowed
                    the player to customize their experiance
                    down to the key bindings. i created a system
                    that allows players to choose what spells they
                    they want and what buttons they want to bind them too.
                </h3>
              </div>
            </div>
            <div className='flex margin-top padding border'>
              <div className='flex-child centered'>
                <h1>Boss fights</h1>
                <h3>
                    The boss fights is where i spent lots of time
                    trying to create a unique experience that was
                    memorable. To do so i put alot of time and effort
                    into creating an interesting atmosphere, and making
                    the fight diffrent to the normal enemys. 
                </h3>
              </div>
              <YouTube
                className='flex-child'
                videoId="KHMjYmhgRRY"
              />
            </div>
          </div>
        </div>
    )
}

export default IndiGamePage;