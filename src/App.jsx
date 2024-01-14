import { useState } from 'react'
import refugiomilitar from './public/refugiomilitar.png';
import bota from './public/bota.png';
import camiseta from './public/camisetaTFM.png';
import apito from './public/apito.png';
import logofrete from './public/logofrete.png';
import {FaHeadset} from 'react-icons/fa';
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/*Menu do codigo*/}
      <nav className='Menu'>
        <div className='Text'>
          <ul>
            <li>
              Telefone:<span>9999999</span>
            </li>
            <li>
              Whatsapp:<span><a href='https://www.refugiodomilitar.com.br/contact.ehc'>Fale conosco</a></span>
            </li>
            <li>
           <FaHeadset/><span><a href='https://api.whatsapp.com/send/?phone=5521978909494&text&type=phone_number&app_absent=0'>Chat</a></span>
            </li>
          </ul>
          <img src={refugiomilitar} alt="logo"/>
        </div>
      </nav><p></p><p></p>
      <p></p><p></p>
      <p></p><p></p>
      <p></p><p></p>
      <p></p><p></p>
      {/*Inicio do corpo do codigo*/}
      <h1>Confira os nossos produtos entregamos em domicílio!</h1>
      <div className='body'>
        <a href='https://www.refugiodomilitar.com.br/product-list.ehc?typed=true&text=ultraleve+bidensidade'><img src={bota} alt="botamilitar" id="boot"/></a>
        <a href='https://www.refugiodomilitar.com.br/camiseta-de-tfm-dry-fit-ibm-000645'><img src={camiseta} alt="camisetaTFM" id="Tshirt"/></a>
        <a href='https://www.refugiodomilitar.com.br/apito-fox-40-000736'><img src={apito} alt="apito" id="whistle"/></a>
        <img src={logofrete} alt="frete" id="freight"/>
        <form id="contact"action="https://formspree.io/f/mayrnonp" method="POST">
            <h5>Deixe sua opinião!</h5>
            <label>Nome:</label><br/>
            <input type="text" placeholder="Completo" required="required" id="name"/><br/>
            <label>Contato:</label><br/>
            <input type="tel" placeholder="Telefone" required="required" id="fone"/><br/>
            <label>Escreva Aqui:</label><br/>
            <textarea type="text" placeholder="Digite sua Opinião!" required="required" id="option"></textarea><br/>
            <button type="submit">Enviar</button>

        </form>
      </div>
        <footer>
          <div className="menubottom">
            <h2>ATENDIMENTO</h2>
            <ul>
              <li>Telefone:9999999</li>
              <li>Whatsapp:83999999999</li>
              <li>Horário: Seg à Sex das 8h às 18h<br/>Sáb das 8h às 12h</li>
              <li>Email:contato@artigomilitar.com.br</li>
            </ul><p/>
            <h2>MINHA CONTA</h2>
            <ul>
              <li>Cadastre-se</li>
              <li>Sacola de Compras</li>
              <li>Lista de Desejos</li>
              <li>Meus Pedidos</li>
            </ul>
          </div>
        </footer>
      
    </>
  )
}

export default App




