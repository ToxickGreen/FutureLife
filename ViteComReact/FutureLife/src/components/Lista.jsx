import { useState } from "react";
import BotaoAdicionar from './img/BotaoAdicionar.png';

function Lista({ list, setList }) {
  const [desc, setDesc] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("entrada");
  const [aberto, setAberto] = useState(false);

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

    setAberto(false);
  };

  function deleteItem(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <>
      <div id="adicionar">
        <h1 id="titleList">Histórico</h1>

        <div id="itensAdicionar" className={aberto ? "aberto" : ""}>
          <div className="inputs-lado-a-lado">
            <div class="campo">
              <h1>Valor</h1>
              <input
              className="input-valor"
              type="number"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
            </div>

            
            <div class="campo">
              <h1>Descrição</h1>
              <input
              className="input-descricao"
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            </div>
          </div>

          {/* radios e botão */}
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

            <label>
              <input
                type="radio"
                value="saida"
                checked={tipo === "saida"}
                onChange={(e) => setTipo(e.target.value)}
              />
              Saída
            </label>
          </div>
          <button onClick={itemLista} id="enviar">
              Enviar
            </button>
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
        <img src={BotaoAdicionar} alt="botao-verde-de-adicionar"
          id="BotaoFlutuante" 
          onClick={() => setAberto(!aberto)}
          />
        
      </div>
    </>
  );
}

export default Lista;
