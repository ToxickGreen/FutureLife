import { useState, useEffect, useRef } from "react";
import BotaoAdicionar from '../components/img/BotaoAdicionar.png';
import IconeEntrada from '../components/img/BtEntradaPequeno.png';
import IconeSaida from '../components/img/BtSaidaPequeno.png';
import IconeLixeira from '../components/img/bin.png'; // Adicione sua imagem aqui

function Lista({ list, setList }) {
  const [desc, setDesc] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("entrada");
  const [aberto, setAberto] = useState(false);
  const modalRef = useRef(null);

  const listInfo = list.length === 0;

  // Fechar modal ao clicar fora da caixa de adicionar ->antes teriamos q inserir algo para fechar
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target) && aberto) {
        setAberto(false);
      }
    }

    if (aberto) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [aberto]);

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

        <div id="itensAdicionar" className={aberto ? "aberto" : ""} ref={modalRef}>
          <div className="inputs-lado-a-lado">
            <div className="campo">
              <h1>Valor</h1>
              <input
                className="input-valor"
                type="number"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
            </div>

            <div className="campo">
              <h1>Descrição</h1>
              <input
                className="input-descricao"
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
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
              <li key={item.id} className="transaction-item">
                <div className={`icon-box ${item.tipo}`}>
                  <img 
                    src={item.tipo === "entrada" ? IconeEntrada : IconeSaida} 
                    alt={item.tipo === "entrada" ? "Entrada" : "Saída"}
                    className="icon-img"
                  />
                </div>
                
                <div className="detalhes">
                  <span className="desc">{item.desc}</span>
                  <span className="date">{item.data}</span>
                </div>
                
                <div className="valor-box">
                  <span className={`valor ${item.tipo}`}>
                    {item.tipo === "entrada" ? "+" : "-"}R$ {item.valor.toFixed(2)}
                  </span>
                  <button onClick={() => deleteItem(item.id)} className="btn-delete">
                    <img src={IconeLixeira} alt="Excluir" className="icon-lixeira" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <img 
          src={BotaoAdicionar} 
          alt="botao-verde-de-adicionar"
          id="BotaoFlutuante" 
          onClick={() => setAberto(!aberto)}
        />
      </div>
    </>
  );
}

export default Lista;