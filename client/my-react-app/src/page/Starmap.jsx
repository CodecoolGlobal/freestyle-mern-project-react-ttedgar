import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const characterRef = useRef();
  const [top, setTop] = useState(-1250)
  const [left, setLeft] = useState(1)
  const navigate = useNavigate();

  useEffect(() => {
    characterRef.current.style.top = `-1250px`;
    characterRef.current.style.left = `5px`;
  }, [])

  function Coruscant() {
    if (top < -700 && top > -800 && left > 550 && left < 650) {
      const coruscant = window.confirm('You want to go to Coruscant?')
      coruscant ? navigate('/destinations/Coruscant') : null;
    }
  }

  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === '2' && top < -100) {
        Coruscant()
        console.log(top);
        setTop((prevPosition) => {
          const newPosition = prevPosition + 50;
          characterRef.current.style.top = `${newPosition}px`;
          characterRef.current.src = '../../images/XWing.png'
          return newPosition;
        });
      } else if (event.key === '5' && top > -1250) {
        Coruscant()
        console.log(top);
        setTop((prevPosition) => {
          const newPosition = prevPosition - 50;
          characterRef.current.style.top = `${newPosition}px`;
          characterRef.current.src = '../../images/XWingup.png'
          return newPosition;
        });
      } else if (event.key === '3' && left < 1300) {
        Coruscant()
        console.log(left);
        setLeft((prevPosition) => {
          const newPosition = prevPosition + 50;
          characterRef.current.style.left = `${newPosition}px`;
          characterRef.current.src = '../../images/XWingright.png'
          return newPosition;
        });
      } else if (event.key === '1' && left > 50) {
        Coruscant()
        setLeft((prevPosition) => {
          console.log(left);
          const newPosition = prevPosition - 50;
          characterRef.current.style.left = `${newPosition}px`;
          characterRef.current.src = '../../images/XWingleft.png'
          return newPosition;
        });
      }
    }
    window.addEventListener('keypress', handleKeyPress)
    
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [top, left])


  return (
    <div className="App">
      <div className='mapDiv'>
        <img src='../../images/galaxymini.png' className='map' alt=''></img>
      </div>
        <img src='../../images/XWing.png' className='character' alt='' ref={characterRef}></img>
    </div>
  );
}

export default App;
