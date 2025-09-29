import './App.css';
import Box from './components/Box';
import Cabecalho from './components/Cabecalho';
import Lista from './components/Lista';
import { useState } from "react";

function App() {
  const [list, setList] = useState([]); // estado centralizado

  return (
    <>
      <Cabecalho />
      <Box list={list} />   {/* passa a lista pro Box */}
      <Lista list={list} setList={setList} /> {/* passa list e setList pra Lista */}
    </>
  );
}

export default App;
