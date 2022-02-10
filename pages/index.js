import Poster from './components/Poster/Poster'
import Header from './components/Header/Header'
import Movies from './components/Movies/Movies'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect, Component } from "react";
import Search from '@mui/icons-material/Search';
import Link from 'next/link'
import Routing from 'next/router'

export default function Home() {
  const [movies, setData] = useState([]);
  const [Visible, setVisible] = useState(5);
  const [search, setSearch] = useState('');
  const img1 = "https://image.tmdb.org/t/p/w500" ;
  
  const loadmore = () => { 
    setVisible((Visible) => Visible+5)
  }
  useEffect(() => {
    MoviePromise();
  }, []);
  
  const MoviePromise = () => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=0122f66b835be1351367d17f60ca287b&language=en-US&page=1")
      .then((response) => response.json())
      .then((recievedData) => setData(recievedData.results));
  };
  const result = () => {
    if(search) {
      const MyResult = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(search.toLowerCase());
      });
      return MyResult ? (
        MyResult.map((movie) => 
          <div key={movie.id} className="cards" >
          <img className="movie-tiles" src={img1 + movie.poster_path} alt="" />
          </div>
      )
      ):(
        <h1>Results not found</h1>
      )
      }
      else{
        return movies.slice(0, Visible).map((movie) => 
          <Link href={`/components/${movie.id}`}>
          <div key={movie.id} className="cards" >
          <img className="movie-tiles" src={img1 + movie.poster_path} alt="" />
          </div>
          </Link>
      )
    }
}
  // console.log(movies);

  return (
    <div className={styles.container}>
     <Header />
     <Poster/>
     <div className="search-container" >
        <Search className="btn" />
       <input placeholder='Search movies' onChange={(e) => setSearch(e.target.value)} />
     </div>
     <Movies />
     <div className='movie'>
     {result()}
     </div>
      <div className="btn-container" >
      <button onClick={loadmore} className="btn1" >Load more</button>
     </div>
   </div>
  )
}
