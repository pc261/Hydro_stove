import { Header } from "../elements/Header";
import { Main } from "../styles/global";
import { Footer } from "../elements/Footer.jsx";
import { Letreiro, Pecas } from "../styles/Materiais.styles";
import Seta from "/SetaVermais.svg"



export function Materiais() {
    
    return ( 
        <>

        <Header/>

        <Main>
            <Letreiro>
                <h1>Peças</h1>
                <h2>Utilizadas</h2>
            </Letreiro>

            <Pecas>

                <div className="Imagens" id="Imagem1">
                </div>

                <div className="Textos">
                    <div>
                        <h2>Arduino</h2>
                        <p>Preço: R$200</p>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <a href="">
                        <p>Ver mais</p>
                        <img src={Seta} alt="" />
                    </a>
                </div>

            </Pecas>

            <Pecas>

                <div className="Imagens" id="Imagem2">
                </div>

                <div className="Textos">
                    <div>
                        <h2>Módulo WI-FI</h2>
                        <p>Preço: R$200</p>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <a href="">
                        <p>Ver mais</p>
                        <img src={Seta} alt="" />
                    </a>
                </div>

            </Pecas>

            <Pecas>

                <div className="Imagens" id="Imagem3">
                </div>

                <div className="Textos">
                    <div>
                        <h2>Bomba de Água</h2>
                        <p>Preço: R$200</p>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <a href="">
                        <p>Ver mais</p>
                        <img src={Seta} alt="" />
                    </a>
                </div>

            </Pecas>

        </Main>
        
        <Footer />

        </>
    )
}
