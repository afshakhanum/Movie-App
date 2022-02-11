import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from "axios";
import Header from './Header/Header';
import Link from 'next/link'

function Detailpage() {
    const router = useRouter();
    const [mov, setMov] = React.useState([]);
    const [char, setChar] = React.useState([]);
    const {id} = router.query;
    // console.log('router from movie', id);
    const img_one = "https://image.tmdb.org/t/p/w1280"
    const img_two = "https://image.tmdb.org/t/p/w500"

    const detailFetch =() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0122f66b835be1351367d17f60ca287b&language=en-US`)
        .then((result)=>{   
            setMov(result.data)
        }
        )
        .catch((err)=> console.log(err))
    }
    useEffect(()=>{
        detailFetch();
        
    },[])
    useEffect(()=>{
        console.log('mov',mov);
    },[mov])
     const charFetch =() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4eb0f63066123e2dc99ea2a934d543da`)
        .then((result)=>{   
            setChar(result.data.cast)
        }
        )
        .catch((err)=> console.log(err))
    }
    useEffect(()=>{
        charFetch();  
    },[])

    useEffect(()=>{
        
        console.log('char',char);
    },[char])

    const mappingchar = () => {
        return char.map((char)=>{
            return(
                <div className="charbox" key={char.id}>
                    <div className='actors-box'>
                    <img className='actor-img' src={img_two + char.profile_path} alt=""/>
                    <h3>{char.name}</h3>
                    <p>{char.character}</p>
                    </div>
                </div>
            )
        })
    }
  return (
    <div>
        <Header />
        <div className='header2'>
         <Link href="/"><h1 className='p1'>Home</h1></Link>
          <p className='p1'>|</p>
          <p className='p1'>{mov.title}</p>
      </div>
      <div>
        <img className='back_drop' src={img_one + mov.backdrop_path} alt="" />
          </div>
          <div className='background1'>
          <div className='details'>
              <h1>{mov.title}</h1>
              <h3 className='p2'>PLOT</h3>
              <p className='p2'>{mov.overview}</p>
              <h3 className='p2'>IMDB RATING</h3>
              <p className='rating'>{mov.vote_average}</p>
          </div>
          </div>
          <div>
              <img className='poster-img' src={img_two + mov.poster_path} alt='' />
          </div>
          <div className='box'>
              <div className='box11'>
                  <p className='box1'>Running Time:</p>
                  <p className='box1'>{mov.runtime} minutes</p>
              </div>

              <div className='box11'>
                  <p className='box1'>Budget:</p>
                  <p className='box1'>${mov.budget}</p>
              </div>

              <div className='box11'>
                  <p className='box1'>Revenue:</p>
                  <p className='box1'>${mov.revenue}</p>
              </div>

          </div>
         
          <h1 className='actors-title'>Actors</h1>
          <div className='card-tiles'>
              {mappingchar()}
          </div>
          </div>
)
}

export default Detailpage