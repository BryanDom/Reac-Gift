import { GifItem } from "./GifItem";
//import { getGifs } from "../helpers/getGifs"
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

  // Custom Hooks, reducir más la logica y optimizar
  const {images, isLoading} = useFetchGifs( category );



  

  return (
    <>
        <h3>{ category }</h3>

        {/* Con ternario */}
        {/* {
          isLoading 
          ? (<h2>Cargando...</h2>)
          :null
        } */}
        

        {/* con &&, que quiere decir si es true entonces ejecuta el siguiente argumento */}

        {
          isLoading && (<h2>Cargando...</h2>)
        }

        {/* otra manera es crear un coponente llamado Loading */}
        {/* <LoadingMessage is Loading={ isLoading }/> */}

        <div className="card-grid">
          {/* images.map */}
          { 
            images.map( (image) => (
                      <GifItem key={ image.id } 
                      // todas las propiedades en el image, las estoy esparsiendo
                      { ...image }
                      // en ves de esto
                      // title={image.title}
                      // url = {image.url}
                      />
                  )) 
          }
        </div>
    </>
  )
}
