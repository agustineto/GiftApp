import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Goku'])

    const onAddCategory = ( newCategory ) => {

        const verifica = categories.some(value => value.trim().toLowerCase() === newCategory.trim().toLowerCase())

        if(verifica) return console.log("la categoria ya existe")
          
        setCategories([newCategory , ...categories])
    }

    return ( 
        <>
            <h2>Gif Expert App</h2>
            <AddCategory
                onNewCategory={ onAddCategory }
            />
        
            {
                categories.map( (category) => 
                    <GifGrid 
                        key={category}
                        category={category}
                    />    
                )
            }
        </>
     );
}
 
export default GifExpertApp;