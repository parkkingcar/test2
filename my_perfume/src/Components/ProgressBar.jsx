import * as React from 'react';

import "./ProgressBar.css"


export var ProgressBar = ({ width, percent,pre }) => {
  const [progress, setprogress] =React.useState(0); 
  
  const [value, setValue] = React.useState(pre*width);

  React.useEffect(() => {
    setprogress(percent)
    setValue(percent * width);
    
  });

  return (
    <div>
      <div className="progress-div" style={{ width: width }}>
        <div style={{ width: `${value}px` }} className="progress" />
      </div>
    </div>
  );
};