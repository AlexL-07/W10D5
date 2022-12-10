import GalleryNavigation from "./components/GalleryNavigation/index.jsx";
import harvardArt from "./data/harvardArt";

function App() {
  return (
    <GalleryNavigation galleries={harvardArt.records}/>
  );
}


export default App;
