import harvardArt from "../../data/harvardArt";
import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css"



const GalleryNavigation = ({galleries}) => {
    return(
        <nav>
            {galleries.map ((gallery, i) => {
                return <NavLink 
                to={`/galleries/${gallery.id}`}
                key={i}> {gallery.name}
                </NavLink>
                }
            )}
        </nav>
    )
}

// console.log(galleries.records)

export default GalleryNavigation;