import { useState } from "react";
import './App.css';

function App() {
  const [values, setValues] = useState();
 
  const handleChangeValues = (value) => {
   setValues( prevValue =>({
    ...prevValue,
    [value.target.name]: value.target.value,
    }))
  }

  const handleClickButton = () => {
    console.log(values);
  }

  return (
    <div className="app-container">
      <div className="register--container">
          <h1>Scrim Shop</h1>
          <input type="text" name="name" placeholder="Nome" className="regiter--input" onChange={handleChangeValues} />
          <input type="text" name="cost" placeholder="Preço" className="regiter--input" onChange={handleChangeValues} />
          <input type="text" name="category" placeholder="Categoria" className="regiter--input" onChange={handleChangeValues}/>
          <button onClick={handleClickButton}>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
