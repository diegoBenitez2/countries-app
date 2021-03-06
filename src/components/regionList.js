import React from 'react'
import { Link } from 'react-router-dom'
import './regionList.scss'

const RegionList = (props) => {

    const handleRegions = (e) =>{
    props.handleRegion(e.target.name)
    }

return(

    <div className="dropdown container-regions">
        <button style={{backgroundColor:props.theme.fontBackground, color:props.theme.colortext}} type="button"className="btn btn-region dropdown-toggle" id="dropdownMenuButton" data-toggle = "dropdown" aria-haspopup="true" aria-expanded="false">
            Filter by Region
        </button>
        
        <div style={{backgroundColor: props.theme.fontBackground}} className="dropdown-menu"aria-labelledby="dropdownMenuButton">
            <Link style={{backgroundColor: props.theme.fontBackground, color: props.theme.colortext}} className="dropdown-item" to="#" onClick={handleRegions} name ="Africa" >Africa</Link>
            <Link style={{backgroundColor: props.theme.fontBackground, color: props.theme.colortext}} className="dropdown-item"to="#"onClick={handleRegions} name ="Americas">America</Link>
            <Link style={{backgroundColor: props.theme.fontBackground, color: props.theme.colortext}} className="dropdown-item"to="#" onClick={handleRegions} name ="Asia">Asia</Link>
            <Link style={{backgroundColor: props.theme.fontBackground, color: props.theme.colortext}} className="dropdown-item"to="#" onClick={handleRegions} name ="Europe">Europe</Link>
            <Link style={{backgroundColor: props.theme.fontBackground, color: props.theme.colortext}} className="dropdown-item"to="#" onClick={handleRegions} name ="Oceania">Oceania</Link>
        </div>
    </div>
    )
}

export default RegionList