import { contrastColor } from 'contrast-color';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState(randomColor());
  const [colorName, setColorName] = useState('');
  return (
    <div>
      <h1>Random Color Generator</h1>
      <div
        style={{
          width: 400,
          height: 400,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 80,
        }}
      >
        {color}
      </div>
      <button
        onClick={() => {
          setColor(randomColor);
        }}
      >
        Generate
      </button>
      <br />
      <br />
      {/* Controlled component */}
      <input
        // 2. Use state variable.
        value={colorName}
        // 3. Update the state variable.
        onChange={(event) => {
          setColorName(event.currentTarget.value);
          const chosenColor = contrastColor({ bgColor: String });
          if (chosenColor) {
            setColor(chosenColor);
          }
        }}
      />
    </div>
  );
}
