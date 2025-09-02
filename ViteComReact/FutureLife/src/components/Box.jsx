function Box() {
    let entrada = 1500;
    let saida = 500;
    let saldo = entrada - saida;
    return(
        <>
            <div id = "AreaDeContas">
                <div class = "compcontas">
                    <h2>{entrada}</h2>
                </div>

                <div class = "compcontas">
                    <h2>{saida}</h2>
                </div>

                <div class = "compcontas">
                    <h2>{saldo}</h2>

                </div>

            


            </div>
        </>
    );

}

export default Box;