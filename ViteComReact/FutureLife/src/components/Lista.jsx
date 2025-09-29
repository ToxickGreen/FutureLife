import { useState } from "react";

function Lista({ list, setList }) {
  const [desc, setDesc] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("entrada");

  const itemLista = () => {
    if (!desc || !valor) return;

    const novo = {
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

  return (
    <>
      <div id="adicionar">
        <h1>Adicionar Entrada</h1>
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
        <button onClick={itemLista}>Enviar</button>
      </div>

      <div id="ListaCorpo">
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <input type="checkbox" checked={item.marcada} readOnly />
              {item.data} - {item.desc} - R${item.valor} ({item.tipo})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Lista;
