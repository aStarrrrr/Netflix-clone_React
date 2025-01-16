// import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals,action,comedy,horror,documentaries,Animation,adventure,Crime,Drama,Fantasy,Family,History,Mystery,Science_Fiction,Thriller} from './Urls'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title = 'Netflix Originals'/>
      <RowPost url={action} title = 'Action' isSmall/>
      <RowPost url={Crime} title = 'Crime' isSmall/>
      <RowPost url={Animation} title = 'Animation' isSmall/>
      <RowPost url={Mystery} title = 'Mystery' isSmall/>
      <RowPost url={comedy} title = 'Comedy' isSmall/>
      <RowPost url={horror} title = 'Horror' isSmall/>
      <RowPost url={adventure} title = 'Adventure' isSmall/>
      <RowPost url={documentaries} title = 'Documentaries' isSmall/>
      <RowPost url={Drama} title = 'Drama' isSmall/>
      <RowPost url={Fantasy} title = 'Fantasy' isSmall/>
      <RowPost url={Family} title = 'Family' isSmall/>
      <RowPost url={History} title = 'History' isSmall/>
      <RowPost url={Thriller} title = 'Thriller' isSmall/>
      <RowPost url={Science_Fiction} title = 'Science Fiction' isSmall/>
    </div>
  );
}

export default App;
