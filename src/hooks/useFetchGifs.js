import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoagind] = useState( true );

  const getImages = async() => {
    const newImages = await getGifs (category);
    setImages(newImages);
    setIsLoagind(false);
  }
    
    // El useEffect, solo se dispara una vez si la lista esta vacia
    useEffect( () => {
      // Como es una promesa, no podemos usar el await ni async, ya que el useEffect, se le hace una mala practica,
      // entonces hay que utilizar el then.
       //getGifs(category).then( newImages => setImages(newImages) );

      //  otra manera es hacer otra funcion y llamarlo desde aqui
      getImages();
    }, [  ] )


    return{
        images,
        isLoading
    }
}
