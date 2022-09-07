import { SketchPicker } from 'react-color';
import { useState } from "react";

function App() {
    const [color, setColor] = useState();
    const handleChangeComplete = (color) => {
        setColor(color.hex);
    }
  return (
    <div  style={{
        backgroundColor: color,
        height: '1000px',
        width:  '1000px',
    }}>
      <SketchPicker
          color = {color}
          onChangeComplete={ handleChangeComplete }
      />
    </div>
  );
}

export default App;
