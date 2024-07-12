import { Header } from "../elements/Header";
import { Main } from "../styles/global";
import { BarraDeRolagem, Letreiro, Pecas } from "../styles/Materiais.styles";
import arduino from "/Arduino.png"
import bomba from "/bomba.png"
import esquerda from "/setae.png"
import direita from "/setad.png"

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
                    <div className="desktop">
                        <img src={arduino} alt="" />
                        <div className="nome">
                            <div className="formatacao">
                                <h3>Arduino</h3>
                                    <p className="preco">
                                        Preço: R$ 200
                                    </p>
                            </div>
                            <p className="descricao">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p className="precodesktop">
                            Preço: R$ 200
                        </p>
                            <div className="botao">
                                <a href=""> Ver mais</a>
                            </div>
                        </div>
                    </div>
            </Pecas>
            <Pecas>
                <div className="desktop">
                    <img src={bomba} alt="" />
                    <div className="nome">
                        <div className="formatacao">
                            <h3>Bomba <br /> de Água</h3>
                                <p className="preco">
                                    Preço: R$ 200
                                </p>
                        </div>
                        <p className="descricao">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <p className="precodesktop">
                            Preço: R$ 200
                        </p>
                        <div className="botao">
                            <a href=""> Ver mais</a>
                        </div>
                    </div>
                </div>
            </Pecas>
        <BarraDeRolagem>
            <div className="rolagem">
                <h1>01</h1>
                <h2>/</h2>
                <h3>??</h3>
                <a href=""> <img src={esquerda} alt="" /></a>
                <a href=""> <img src={direita} alt="" /></a>
            </div>
        </BarraDeRolagem>

    </Main>
    </>
  )
}
