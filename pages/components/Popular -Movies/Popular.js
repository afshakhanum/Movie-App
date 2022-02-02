

export default function Popular(props) {
  const img1 = "https://image.tmdb.org/t/p/w500" ;
    return (
     <div className="cards" >
     <img className="movie-tiles" src={img1+props.src} alt="poster" />
     </div>
    )
  }
  