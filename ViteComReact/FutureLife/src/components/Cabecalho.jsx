import logoMoedas from './img/moedas-logo.png';
import '../App.css';
function Cabecalho () {
    return(
        <>
            <div id = "Cabecalho">
                <div>  <p id = "logo">FutureLife</p></div>
              
                <div>
                < img src={logoMoedas} alt="moedas" id="logomoedas" />
                </div>
              
            </div>
             
        </>
    );

}

export default Cabecalho;