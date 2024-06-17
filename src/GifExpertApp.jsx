import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {


    // Mantener el estad
    // siempre voy a iniciar con arreglo, con el nombre de la categoría que queramos
    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {

        let minus = [];
        let newCategoryM = ''

        // si lo incluye o existe esa categoria, que haga return y no haga nada
        for (let k in categories) {

            if (typeof categories[k] === "string") {
        
                minus[k] = categories[k].toLowerCase();

                newCategoryM = newCategory.toLowerCase();

                if ( minus.includes(newCategoryM)) return;
            }
        
        }



        // Valorant
            //console.log('Valorant')
        // hay muchas formas de agregar un valor a un useState de lista
        // esta no esta bien porque esta quitando todas las categorias, y lo que quiero
        // es mantener las categorias aun y agregar la extra.
            //setCategories([ 'Hola undo' ])
        //entonces ....
        // Hacemos una copia tal cual de la lista y agregamos el siguiente valor
            //setCategories([...categories, newCategory]);

        //si lo queremos agrear al inicio, entonces lo ponemos primero y hacemos la desestructuración de las 
        // categorías
        setCategories([newCategory, ...categories]);
        

        //otra forma de hacerlo
        // aqui estamos utilizando el kovalski
        // tambien se puede mandar a las funciones del use state
            //setCategories( cat => [...cat, 'Valorant' ] )
    }

  return (
    <>
    {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input (componente independiente) */}
      <AddCategory 
        //   setCategories = { setCategories }
        onNewCategory= { (event) => onAddCategory(event) }
      />

      {/* Listado de Gif */}
        {/* Order List */}

        {/* El .map es para barrer cada elemento de un arreglo */}
        { categories.map( category => (
                    <GifGrid 
                        key= { category } 
                        category= { category } 
                    />
                )) 
        }

            {/* Lo que hicimos anterior es algo asi simplificado: */}
            {/* <li>ABC</li> */}
            {/* Gif Item */}
    </>
  )
}
