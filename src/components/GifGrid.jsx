
import useFetchGifs from "../hooks/useFetchGifs.js";
import GifItem from "./GifItem.jsx";


const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return ( 
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map( ( images ) => (
                        <GifItem 
                            key={images.id}
                            {...images}
                        />
                    ))
                }
               
            </div>
        </>
     );
}
 
export default GifGrid;