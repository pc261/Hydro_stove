/// Colocar o footer, fazer a responsividade para pc e ajustar o link do mobile, se vira e boa sorte Felipe, carinhosamente Igor S2

import { Footer } from "../elements/Footer";
import { Header } from "../elements/Header";
import { Letreiro, Referencia } from "../styles/Bibliografia.styles";
import { Main } from "../styles/global";
import Seta from "/SetaVermais.svg"


export function Bibliografia() {
  return (
    <>
    <Header/>

    <Main>

        <Letreiro>
            <h1>Bibliografia</h1>
            <h2>Do Projeto</h2>
        </Letreiro>

        <Referencia>

            <div>
                <h1>Link</h1>
                <a href="">
                    <p>Ver mais</p>
                    <img src={Seta} alt="" />
                </a>
            </div>

            <div>
                <h1>Link</h1>
                <a href="">
                    <p>Ver mais</p>
                    <img src={Seta} alt="" />
                </a>
            </div>

        </Referencia>

        <Referencia>

            <div>
                <h1>Link</h1>
                <a href="">
                    <p>Ver mais</p>
                    <img src={Seta} alt="" />
                </a>
            </div>

            <div>
                <h1>Link</h1>
                <a href="">
                    <p>Ver mais</p>
                    <img src={Seta} alt="" />
                </a>
            </div>

        </Referencia>
        
    </Main>

    <Footer />
    </>
    
  )
}
