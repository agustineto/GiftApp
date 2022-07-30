import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const submit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length < 3 ) return;
        onNewCategory(inputValue.trim())
        setInputValue('')

    }

    return ( 
        <form onSubmit={ submit }>
            <h3>Add Category</h3>
            <input 
                type="text"
                placeholder="Busca gifs"
                value={inputValue}
                onChange={handleInputChange}
             />
        </form>
     );
}
 
