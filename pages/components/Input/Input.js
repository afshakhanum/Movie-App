import {SearchOutlined} from "@mui/icons-material"

export default function Input() {
    return (
      <div className="search-container" >
        <SearchOutlined />
       <input placeholder='Search movies and Click enter' />
      </div>
    )
  }
