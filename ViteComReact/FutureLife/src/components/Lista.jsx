import { useState, useEffect, useRef } from "react";
import BotaoAdicionar from '../components/img/BotaoAdicionar.png';
import IconeEntrada from '../components/img/BtEntradaPequeno.png';
import IconeSaida from '../components/img/BtSaidaPequeno.png';
import IconeLixeira from '../components/img/bin.png'; // Adicione sua imagem aqui
import styles from '../Lista.module.css';

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
      <div className={styles.adicionar}>
        <h1 className={styles.titleList}>Lançamentos</h1>

        <div className={`${styles.itensAdicionar} ${aberto ? styles.aberto : ""}`}>
          <div className={styles["inputs-lado-a-lado"]}>
            <div className={styles.inputDataType}>
              <h1 className={styles.titleInput}>Valor</h1>
              <input
                className={styles.inputValor}
                type="number"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
            </div>

            <div className={styles.inputDataType}>
              <h1 className={styles.titleInput}>Descrição</h1>
              <input
                className={styles["input-descricao"]}
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
          </div>

          <div className={styles["radios-botao"]}>
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

          <button onClick={itemLista} className={styles.enviar}>
            Enviar
          </button>
        </div>

        <div className={styles.ListaContainer}>
          <ul className={styles.ListaCorpo}>
            {listInfo && <h1 className={styles.infoL}>Ainda sem lançamentos!</h1>}

            {list.map((item) => (
              <li key={item.id} className={styles.transactionItem}>
                <div className={`${styles.iconBox} ${item.tipo === "entrada" ? styles.entrada : styles.saida}`}>
                  <img
                    src={item.tipo === "entrada" ? IconeEntrada : IconeSaida}
                    alt={item.tipo === "entrada" ? "Entrada" : "Saída"}
                    className={styles.iconImg}
                  />
                </div>

                <div className={styles.detalhes}>
                  <span className={styles.desc}>{item.desc}</span>
                  <span className={styles.desc}>{item.data}</span>
                </div>

                <div className={styles["valor-box"]}>
                  <span className={`valor ${item.tipo}`}>
                    {item.tipo === "entrada" ? "+" : "-"}R$ {item.valor.toFixed(2)}
                  </span>
                  <button onClick={() => deleteItem(item.id)} className={styles["btn-delete"]}>
                      <img 
                        src={IconeLixeira} 
                        alt="Excluir" 
                        className={styles["icon-lixeira"]}
                        style={{ width: '40px', height: '40px' }}
                      />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button id="BotaoFlutuante" className={styles.MobileOn} onClick={() => setAberto(!aberto)}>
        <img
          src={BotaoAdicionar}
          alt="botao-verde-de-adicionar"
         
        />
      </button>
    </>
  );
}

export default Lista;