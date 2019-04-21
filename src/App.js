import React, { Component } from 'react';

class App extends Component {
  render() {
    const styles = {
      parent:{
        height: "100vh",
        position: "fixed",
        width: "100vw"
      },
      btn:{
        outline:"none",
        zoom: 3,
        border: "none",
        borderRadius: 5,
        display:"block",
        margin:"auto",
        marginTop: "5em", 
        backgroundColor:'white'
      }
    }
    let getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return(
      document.body.style.background = color
    )
  }
  return (
    <div style={styles.parent}>
      <button style={styles.btn} onClick={()=> getRandomColor()}>Click me</button>
      </div>
    );
  };
}

export default App;