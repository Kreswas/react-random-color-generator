import './App.css';
import { contrastColor } from 'contrast-color';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  // can put randomColor() in useState to start with a random color
  const [color, setColor] = useState("");

  return (
    <div>
      <h1>Random Color Generator</h1>
      <div
      className="box"
        style={{
          width: 600,
          height: 400,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 45,
          border: "2px solid black",
          borderRadius: 150,
          backgroundColor: color,
          color: contrastColor({ bgColor: color }),
        }}
      >
        Generated Color: <br/> {color}
      </div>
      <br />
      <br />
      <button
        onClick={() => {
          setColor(randomColor);
        }}
      >
        Generate
      </button>

    </div>
  );
}

export default App;
