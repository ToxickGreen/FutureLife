import './App.css';
import Box from './components/Box';
import Cabecalho from './components/Cabecalho';
import Lista from './components/Lista';
import { useEffect, useState } from "react";

const STORAGE_KEY = "future_life_list"

function App() {
  const [list, setList] = useState([]); // estado centralizado


  function updateList(newList){
    const listJSON = JSON.stringify(newList);
    localStorage.setItem(STORAGE_KEY, listJSON)
    setList(newList)
  }

  useEffect(() => {
    const listFromJSON = localStorage.getItem(STORAGE_KEY) ?? "[]"
    setList(JSON.parse(listFromJSON))
  }, [])

  return (
    <>
      <Cabecalho />
      <Box list={list} />
      <Lista list={list} setList={updateList} /> 
    </>
  );
}

export default App;
