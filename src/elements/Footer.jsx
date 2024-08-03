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
                        <a target="_blank" href="https://www.google.com/maps/place/Rua+Dr.+Luiz+Hoppe,+34+-+Jardim+Capao+Redondo,+São+Paulo+-+SP,+05882-400/@-23.6797655,-46.7827698,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce525416f7ff39:0xef0bb00cc5179bbb!8m2!3d-23.6797655!4d-46.7827698!16s%2Fg%2F11c5l31fpk?entry=ttu">Rua Doutor Luiz Hoppe 34, São Paulo, Capão Redondo</a>

                    </div>

                    <div>

                        <img src={Telefone} alt="" />
                        <a href="#">(11) 94609-4905</a>
                    </div>

                            
                    <div>

                        <img src={Email} alt="" />
                        <a target="_blank" href="mailto:hydrostove@gmail.com?subject=Desejo%20saber%20mais">hydrostove@gmail.com</a>

                    </div>
                        
                </div>

                <div id="RedesSociais">

                    <p>Redes Sociais</p>

                    <div>
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=61563736440792">
                            <img src={Facebook} alt="" />
                        </a>

                        <a target="_blank" href="https://x.com/HydroStove29649">
                            <img src={Twitter} alt="" />
                        </a>

                        <a target="_blank" href="https://www.instagram.com/hydrostove/">
                            <img src={Instagram} alt="" />
                        </a>

                        <a target="_blank" href="#">
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
                <a href="/bibliografia">Bibliografia</a>

            </section>

        </FooterBox>

        
        <div id="Logo">
            <img src={IconLeaf} alt="" />
            <p>HydroStove</p>
        </div>

    </FooterContainer>
  )
}
