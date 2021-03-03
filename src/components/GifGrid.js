import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGif } from '../helpers/getGifs';

export const GifGrid = ({categoria}) => {

    // const [images, setImages] = useState([]);

    // useEffect(()=>{
    //    getGif(categoria)
    //         .then(setImages);
    // },[categoria])

    const {data:imagenes, loading} = useFetchGifs(categoria);

    return (
        <>
            <h3 className='animate__animated animate__bounce'>{categoria}</h3> 
            {loading && <p className='animate__animated animate__flash animate__infinite'>Cargando...</p>}
            <div className="card-grid">
                    {imagenes.map(value=>(
                        <GifGridItem 
                        key = {value.id}
                        {...value}
                        />
                    ))}

            </div>

        </>
    )

}

GifGrid.propTypes = {
    categoria: PropTypes.string.isRequired
}