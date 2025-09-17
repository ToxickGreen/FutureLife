function Lista (){

    let list = {
        desc: null,
        valor: null,
        tipo: {
            entrada: "+",
            saida: "-",
        },
        
        
    };
    return (
        <>
            <div id = "ListaCorpo">
                <div id = "ListaCabeçalho">
                    <div id = "fundoMother">
                        <div class = "fundoCab">
                            <p>data</p>
                        </div>
                        <div class = "fundoCab">
                            <p>descrição</p>
                        </div>
                        <div class = "fundoCab">
                            <p>valor</p>
                        </div>
                    </div>

                    <ol>
                        
                    </ol>

                </div>

                <ul>

                </ul>

            </div>
        </>
    );
}

export default Lista;