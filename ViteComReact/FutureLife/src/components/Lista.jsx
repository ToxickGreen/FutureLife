import { useState } from "react";

function Lista({ list, setList }) {
  const [desc, setDesc] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("entrada");

  const listInfo = list.length === 0;

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

  function deleteItem(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <>
      <div id="adicionar">
        <h1 id="titleList">Histórico</h1>

        <div id="itensAdicionar">
     
          <div className="inputs-lado-a-lado">
            <input
              className="text-input"
              type="text"
              placeholder="descrição"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <input
              className="text-input"
              type="number"
              placeholder="valor"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </div>

        
          <div className="radios-botao">
            <label>
              <input
                type="radio"
                value="entrada"
                checked={tipo === "entrada"}
                onChange={(e) => setTipo(e.target.value)}
              />
              Entrada
            </label>

            <label style={{ marginLeft: "10px" }}>
              <input
                type="radio"
                value="saida"
                checked={tipo === "saida"}
                onChange={(e) => setTipo(e.target.value)}
              />
              Saída
            </label>

            <button onClick={itemLista} id="enviar">
              Enviar
            </button>
          </div>
        </div>

        <div id="ListaContainer">
          <ul id="ListaCorpo">
            {listInfo && <h1 id="infoL">Ainda vazio!</h1>}

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
        </div>
      </div>
    </>
  );
}

export default Lista;
