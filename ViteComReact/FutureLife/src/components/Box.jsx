import { useState } from 'react';
import BtEntradaPequeno from './img/BtEntradaPequeno.png';
import BtSaidaPequeno from './img/BtSaidaPequeno.png';

function Box({ list }) {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  const entrada = list
    .filter(item => item.tipo === "entrada")
    .reduce((acc, item) => acc + item.valor, 0);

  const saida = list
    .filter(function(item) {
      return item.tipo === "saida"
    })
    .reduce((acc, item) => acc + item.valor, 0);

  const saldo = entrada - saida;

  // Função para formatar valores de forma legível
  const formatarValor = (valor) => {
    const valorAbs = Math.abs(valor);
    
    if (valorAbs >= 1000000) {
      // Acima de 1 milhão: mostra com 1 casa decimal
      return `R$ ${(valor / 1000000).toFixed(1)} mi`;
    } else if (valorAbs >= 100000) {
      // Entre 100k e 1mi: mostra em milhares com 1 casa
      return `R$ ${(valor / 1000).toFixed(1)} mil`;
    } else {
      // Abaixo de 100k: mostra valor completo com separador de milhar
      return `R$ ${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
  };

  const formatarValorCompleto = (valor) => {
    return `R$ ${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <>
      <div className="centralizaItensBox">
        <div id="CentralizarContas">
          <div id="AreaDeContas">
            
            {/* Saldo no topo */}
            <div id="saldo" onClick={() => setMostrarDetalhes(!mostrarDetalhes)}>
              <div className="compcontas">
                <p className="tituloConta">Saldo</p>
                <h2 className="valorConta">
                  {mostrarDetalhes ? formatarValorCompleto(saldo) : formatarValor(saldo)}
                </h2>
              </div>
            </div>

            {/* Container para Entrada e Saída */}
            <div id="containerEntradaSaida">
              <div id="entr" onClick={() => setMostrarDetalhes(!mostrarDetalhes)}>
                <img src={BtEntradaPequeno} className='mobileOnly' id="iconeEntrada"/>
                <div className="compcontas" id="entradaBox">
                  <p className="tituloConta">Entrada</p>
                  <h2 className="valorConta">
                    {mostrarDetalhes ? formatarValorCompleto(entrada) : formatarValor(entrada)}
                  </h2>
                </div>
              </div>
              
              <div id="saida" onClick={() => setMostrarDetalhes(!mostrarDetalhes)}>
                <img src={BtSaidaPequeno} className='mobileOnly' id="iconeSaida"/>
                <div className="compcontas" id="caixaSaida">
                  <p className="tituloConta">Saída</p>
                  <h2 className="valorConta">
                    {mostrarDetalhes ? formatarValorCompleto(saida) : formatarValor(saida)}
                  </h2>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Box;