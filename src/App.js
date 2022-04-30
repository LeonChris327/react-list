import React from 'react';  
import Utama from './Components/utama';
import Mainn from './pages/Main';
import { Link } from 'react-router-dom';

  
  
class App extends React.Component {  
  

  render(){  
    return (
      <div> <hr />
        <Link to="/">Beranda   |</Link>
        <Link to="tentangsaya">Tentang Saya   |</Link>
        <Link to="/karya">Karya   |</Link>
        <Link to="/kontak">Kontak   |</Link> <hr />
        <p><Utama /></p>
        <Link to="/gallery">Galeri   |</Link> <hr />
        <p><Mainn /></p>
      </div>
    ); 
  } 
}  
  
export default App; 
