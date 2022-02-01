import Poster from './components/Poster/Poster'
import Header from './components/Header/Header'
import Input from './components/Input/Input'
import Movies from './components/Movies/Movies'
import styles from '../styles/Home.module.css'
import Popular from './components/Popular -Movies/Popular'
import React, { useState, useEffect } from "react";
import Button from './components/Button/Button'

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    moviePromise();
  }, []);

  const moviePromise = () => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=0122f66b835be1351367d17f60ca287b&language=en-US&page=1")
      .then((response) => response.json())
      .then((recievedData) => setData(recievedData.results));
  };
  console.log(data);
 function mapping(){
   return(
    data.map(item => (
      <Popular src={item.poster_path}/>
    ))
   )
 }
  return (
    <div className={styles.container}>
     <Header />
     <Poster/>
     <Input />
     <Movies />
      {mapping()}
     <Button />
   </div>
  )
}
