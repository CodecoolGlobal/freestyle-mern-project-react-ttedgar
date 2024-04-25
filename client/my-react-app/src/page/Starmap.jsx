import { useEffect, useRef, useState } from 'react';

function App() {
  const characterRef = useRef();
  const [top, setTop] = useState(-2400)
  const [left, setLeft] = useState(1)

  useEffect(() => {
    characterRef.current.style.top = `-2400px`;
    characterRef.current.style.left = `5px`;
  }, [])

  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === '2' && top < -300) {
        console.log(top);
        setTop((prevPosition) => {
          const newPosition = prevPosition + 100;
          characterRef.current.style.top = `${newPosition}px`;
          characterRef.current.src = '../../images/XWing.png'
          return newPosition;
        });
      } else if (event.key === '5' && top > -2400) {
        console.log(top);
        setTop((prevPosition) => {
          const newPosition = prevPosition - 100;
          characterRef.current.style.top = `${newPosition}px`;
          characterRef.current.src = '../../images/XWingup.png'
          return newPosition;
        });
      } else if (event.key === '3' && left < 2500) {
        console.log(left);
        setLeft((prevPosition) => {
          const newPosition = prevPosition + 100;
          characterRef.current.style.left = `${newPosition}px`;
          characterRef.current.src = '../../images/XWingright.png'
          return newPosition;
        });
      } else if (event.key === '1' && left > -50) {
        setLeft((prevPosition) => {
          console.log(left);
          const newPosition = prevPosition - 100;
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
        <img src='../../images/galaxy.png' className='map' alt=''></img>
      </div>
        <img src='../../images/XWing.png' className='character' alt='' ref={characterRef}></img>
    </div>
  );
}

export default App;
