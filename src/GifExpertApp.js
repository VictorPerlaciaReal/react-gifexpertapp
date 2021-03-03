import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    
    const [categorias, setCategoria] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategoria(['Example',...categorias]);
    //     setCategoria(cats => ['Example',...cats]);
    // }

    return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategoria = {setCategoria} />
        <hr />
        
        <ol>
            {categorias.map( category => 
                (
                    <GifGrid
                     key={category}
                     categoria={category}
                     />
                ))}
        </ol>
    </>
    );
}

export default GifExpertApp;
