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
                <h1>Qualidade da água na agricultura e no ambiente.</h1>
                <a target="_blank" href="https://www.bibliotecaagptea.org.br/administracao/educacao/artigos/MANEJO%20DO%20AMBIENTE%20EM%20CULTIVO%20PROTEGIDO.pdf">
                    <p>Ver mais</p>
                    <img src={Seta} alt="" />
                </a>
            </div>
            <hr />
            <div>
                <h1>MANEJO DO AMBIENTE EM CULTIVO PROTEGIDO.</h1>
                <a target="_blank" href="https://www.bibliotecaagptea.org.br/administracao/educacao/artigos/MANEJO%20DO%20AMBIENTE%20EM%20CULTIVO%20PROTEGIDO.pdf">
                    <p>Ver mais</p>
                    <img src={Seta} alt="" />
                </a>
            </div>

        </Referencia>

        <Referencia>

            <div>
                <h1>Ciência, tecnologia e inovação na interface entre as áreas de recursos hídricos e saneamento.</h1>
                <a target="_blank" href="https://www.scielo.br/j/esa/a/dQkgWPTQL8mQfGKvMmKnCyC/">
                    <p>Ver mais</p>
                    <img src={Seta} alt="" />
                </a>
            </div>
            <hr />
            <div>
                <h1>PROJETO EXPERIMENTAL DE ESTUFA DOMÉSTICA PARA FIM DE CULTIVO ALIMENTÍCIO E MEDICINAL;</h1>
                <a target="_blank" href="https://repositorio.usp.br/directbitstream/f4ca1ac2-ab85-42e3-a365-0fd5d48b44e8/EP21001%20Furlan.pdf">
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
