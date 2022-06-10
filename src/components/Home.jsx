import React from 'react';


const Home = () => {

  const myStyle={
    backgroundImage:"url('https://images.unsplash.com/photo-1609487198805-9cc6d11771b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2533&q=80')",
    height:'100vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white',
  };

  return (
    <div style={myStyle}>
      <h1>Skateboard Builder!</h1>
      <p>Whether you're new or an experienced boarder, this site will help you build your next ride!</p>
    </div>
  )
}

export default Home;