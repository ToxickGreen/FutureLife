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
      <div id="info">
        <div id="infoentra">
          <p>Entrada</p>
        </div>
        <div id="infosai">
          <p>Saída</p>
        </div>
        <div id="infosaldo">
          <p>Saldo</p>
        </div>
      </div>

      <div id="CentralizarContas">
        <div id="AreaDeContas">
          <div className="compcontas">
            <h2>R${entrada}</h2>
          </div>
          <div className="compcontas">
            <h2>R${saida}</h2>
          </div>
          <div className="compcontas">
            <h2>R${saldo}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Box;
