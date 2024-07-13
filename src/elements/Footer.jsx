import {FooterContainer, FooterBox} from "../styles/Footer.styles.js"
import IconLeaf from '/Ecostove.svg'
import Localizacao from '/IconeLocalizacao.svg'
import Telefone from '/IconeTelefone.svg'
import Email from '/IconeEmail.svg'
import Facebook from '/FacebookLogo.svg'
import Instagram from '/InstagramLogo.svg'
import Twitter from '/TwitterLogo.svg'
import Whatsapp from '/WhatsappLogo.svg'



export function Footer() {
  return (
    <FooterContainer>
        <FooterBox>

            <section id="Informacoes">

                <div id="Contatos">

                    <h3>Contatos</h3>

                    <div>

                        <img src={Localizacao} alt="" />
                        <a href="#">Rua Doutor Luiz Hoppe 34 São Paulo, Capão Redondo</a>

                    </div>

                    <div>

                        <img src={Telefone} alt="" />
                        <a href="#">(11) 94609-4905</a>

                    </div>

                            
                    <div>

                        <img src={Email} alt="" />
                        <a href="#">ecostove@gmail.com</a>

                    </div>
                        
                </div>

                <div id="RedesSociais">

                    <p>Redes Sociais</p>

                    <div>
                        <a href="#">
                            <img src={Facebook} alt="" />
                        </a>

                        <a href="#">
                            <img src={Twitter} alt="" />
                        </a>

                        <a href="#">
                            <img src={Instagram} alt="" />
                        </a>

                        <a href="#">
                            <img src={Whatsapp} alt="" />
                        </a>
                    </div>

                </div>


            </section>

            <section id = "Navegacao">

                <h3>Informações</h3>
                <a href="/">Home</a>
                <a href="/funcionamento">Funcionamento</a>
                <a href="/materiais">Materiais</a>
                <a href="/grupo">Grupo</a>
                <a href="#">Bibliografia</a>

            </section>

        </FooterBox>

        
        <div id="Logo">
            <img src={IconLeaf} alt="" />
            <p>EcoStove</p>
        </div>

    </FooterContainer>
  )
}
