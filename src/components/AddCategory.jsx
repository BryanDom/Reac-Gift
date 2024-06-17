import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  // Hay personas que lo desestructuran dentro del metodo el target
  // por ejemplo { target } y ya no es necesario
  // event.target, si no target
  const onInputChanged = (event) => {
    // agarra el valor del evento ya que es lo que estamos
    // escribiendo en teclado
    setInputValue(event.target.value);
  };

  const onSubmit = ( event ) => {
    event.preventDefault();

    // Por lo menos dos letra, y ponemos un return para salirnos de la función
    // y no se vaya a ejecutar lo demás
    if (inputValue.trim().length <= 1 ) return;


    // Forma de agregar un nuevo elemento de una lista pasada como props
    // setCategories( (categories) => [ inputValue, ...categories ]);
    // setCategories(..... [InputValue])

    onNewCategory( inputValue.trim() );
    //limpiar nuestra caja de texto
    setInputValue('');
  }
  

  return (
    <form onSubmit = { (event) => onSubmit(event) }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(event) => onInputChanged(event)}
      />
    </form>
  );
};
