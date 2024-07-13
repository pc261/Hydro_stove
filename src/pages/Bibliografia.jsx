/// Colocar o footer, fazer a responsividade para pc e ajustar o link do mobile, se vira e boa sorte Felipe, carinhosamente Igor S2

import { Footer } from "../elements/Footer";
import { Header } from "../elements/Header";
import { Letreiroo, Referencia } from "../styles/Bibliografia.styles";
import { Main } from "../styles/global";


export function Bibliografia() {
  return (
    <>
    <Header/>

    <Main>
        <Letreiroo>
            <h1>Bibliografia</h1>
            <h2>Do Projeto</h2>
        </Letreiroo>


        <Referencia>
            <div className="card">
                <h1 className="nome">Link</h1>
                <a href="" className="button">Ver Mais</a>
            </div>
            <div className="card">
                <h1 className="nome">Link</h1>
                <a href="" className="button">Ver Mais</a>
            </div>
        </Referencia>
    </Main>
    </>
    
  )
}
