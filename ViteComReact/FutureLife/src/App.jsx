import './App.css'
import HelloWord from './components/HelloWord';

let cont = 0;

function MeuButao(){
  function ClicouBotao (a) {
      return(
        a++
      );
  }

  return (
    <button onClick={ClicouBotao(cont)}>{cont}</button>
  );
}


function App() {
  
  return (
    <>
      <HelloWord />
      <MeuButao />
    </>
  );
}

export default App
