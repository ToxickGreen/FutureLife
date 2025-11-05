import BtEntradaPequeno from './img/BtEntradaPequeno.png';
import BtSaidaPequeno from './img/BtSaidaPequeno.png';

function Box({ list }) {
  const entrada = list
    .filter(item => item.tipo === "entrada")
    .reduce((acc, item) => acc + item.valor, 0);

  const saida = list
    .filter(function(item) {
      return item.tipo === "saida"
    })
    .reduce((acc, item) => acc + item.valor, 0);

  const saldo = entrada - saida;

  return (
    <>
      <div className="centralizaItensBox">
        <div id="CentralizarContas">
          <div id="AreaDeContas">
            <div id="entr">
              <img src={BtEntradaPequeno} />
                <div className="compcontas">
                  <p className="tituloConta">Entrada</p>
                  <h2 className="valorConta">R${entrada}</h2>
                </div>
            </div>
            <div id="saida">
              <img src={BtSaidaPequeno} />
              <div className="compcontas">
                <p className="tituloConta">Saída</p>
                <h2 className="valorConta">R${saida}</h2>
              </div>
            </div>
            <div id="saldo">
              <div className="compcontas">
                <p className="tituloConta">Saldo</p>
                <h2 className="valorConta">R${saldo}</h2>
              </div>
            </div>
            

          </div>
        </div>
      </div>
    </>
  );
}

export default Box;
