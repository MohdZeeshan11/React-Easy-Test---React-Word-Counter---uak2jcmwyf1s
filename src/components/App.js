import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {
  const [fontSize,setFontSize] = useState(16);
  const [charLimit,setCharLimit] = useState(50);
  const [charCount,setCharCount] = useState(); 
  const [wordCount,setWordCount] = useState(); 

  const inputChangeHandler = (e)=>{
        console.log(e.target.value);
        const text = e.target.value;

        // set word count
        let w_count = 0;
        if(text.length>0){
          w_count = text.trim().split(" ").length;
        }
        setWordCount(w_count);

        // set char count
        setCharCount(text.length);
  } 
  return (
    <div id="main">
      <h3>Font size picker</h3>
      <input type="range" min="16" max="32" id="fontSize-input" 
        onChange={function(e){
          setFontSize(e.target.value);
        }}
      />

      <h3>Word limit input</h3>
      <input type="number"  id="char-limit-input" value={charLimit}
        onChange={function(e){
          setCharLimit(e.target.value);
        }}
      />
      <br />
      <textarea style={{fontSize:fontSize+"px"}} maxLength={charLimit}
      onChange={inputChangeHandler}></textarea>

      <div id="word-counter">Total number of words written {wordCount}</div>
      <div id="char-counter">Total number of characters used {charCount}</div>
    </div>
  )
}


export default App;
