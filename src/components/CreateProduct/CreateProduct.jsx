import React from "react";

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateProduct = () => {
  // name: '',
  // price: 0,
  // description: '',
  // stock: 0,
  return <div>Create Product</div>;
};

export default CreateProduct;
