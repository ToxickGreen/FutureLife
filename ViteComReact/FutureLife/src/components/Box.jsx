function Box() {
    let entrada = 1500;
    let saida = 500;
    let saldo = entrada - saida;
    return(
        <>
            <div id = "info">
                <div id = "infoentra">
                    <p>Entrada</p>
                </div>
                
                <div id = "infosai">
                    <p>Saída</p>
                </div>

                <div id = "infosaldo">
                    <p>Saldo</p>
                </div>
                    
            </div>

            <div id = "CentralizarContas">
                <div id = "AreaDeContas">
                
                    <div class = "compcontas">
                        <h2>R${entrada}</h2>
                    </div>
                    <div class = "compcontas">
                        <h2>R${saida}</h2>
                    </div>
                    <div class = "compcontas">
                        <h2>R${saldo}</h2>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Box;