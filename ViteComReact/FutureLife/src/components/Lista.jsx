import { useState } from "react";

function Lista({ list, setList }) {
  const [desc, setDesc] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("entrada");

  const itemLista = () => {
    if (!desc || !valor) return;

    const novo = {
      id: list.length + 1,
      data: new Date().toLocaleDateString("pt-BR"),
      desc,
      valor: Number(valor),
      tipo,
      marcada: false,
    };

    setList([...list, novo]);
    setDesc("");
    setValor("");
  };


  function deleteItem(id){
    const listData = [...list]
    const newList = listData.filter((item) => item.id !== id )
    setList(newList)
  }

  return (
    <>
      <div id="adicionar">
        <h1>Adicionar Entrada</h1>
       <div id="itensAdicionar">
        <label>
          <input
            type="radio"
            value="entrada"
            checked={tipo === "entrada"}
            onChange={(e) => setTipo(e.target.value)}
          />
          Entrada
        </label>

        <label>
          <input
            type="radio"
            value="saida"
            checked={tipo === "saida"}
            onChange={(e) => setTipo(e.target.value)}
          />
          Saída
        </label>
        <input
          type="text"
          placeholder="descrição"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="number"
          placeholder="valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          />
        <button onClick={itemLista} id="enviar">Enviar</button>
      </div>

    {list.length>0 && <div id="ListaContainer">
        <ul id="ListaCorpo">
          {list.map((item) => (
            <li key={item.id}>
                <span>{item.data}</span>
                <span>R${item.valor}</span>
                <span>({item.tipo})</span>
                <span>{item.desc}</span>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
  </div>}
  </div>
    </>
   
  ); 
}

export default Lista;
