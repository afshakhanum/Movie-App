import {Search} from "@mui/icons-material"

export default function Input() {
    return (
      <div className="search-container" >
        <Search className="btn" />
       <input placeholder='Search movies and Click enter' />
      </div>
    )
  }
