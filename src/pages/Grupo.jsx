import { Header } from "../elements/Header";
import { Main } from "../styles/global";
import { Footer } from "../elements/Footer.jsx";
import { Integrante, LetreiroCentral } from "../styles/Grupo.styles";
import Felipe from "/Felipe.jpeg";
import Igor from "/Igor.jpeg"
import Gerard from "/Gerard.jpeg"
import Joao from "/JL.jpeg"

export function Grupo() {
  return (<>
    <Header/>

    <Main>
        <LetreiroCentral>
            <h1>Grupo</h1>
        </LetreiroCentral>

        <Integrante>
            <div className="esquerda">
                <img src={Felipe} alt="Foto do Felipe" />
                <p> <strong>Felipe Lira</strong> é o líder da equipe de desenvolvedores, responsável pela elaboração da ideia do projeto da HydroStove, programador, designer e sócio proprietário do projeto.</p>
            </div>
            <div className="direita">
                <p> <strong>Igor Miguel</strong> é o responsável pela unidade de tratamento de água, elaboração da ideia do projeto da HydroStove, programador, designer e sócio proprietário do projeto.</p>
                <img src={Igor} alt="Foto do Igor" />
            </div>
            <div className="esquerda">
                <img src={Gerard} alt="Foto do Gerard" />
                <p><strong>Gerard Mourão</strong> é o líder da equipe de desenvolvimento do jogo, programador, designer e sócio proprietário do projeto.</p>
            </div>
            <div className="direita">
                <p> <strong>João Lucas</strong> é o supervisor de qualidade e excelência, programador, designer e sócio proprietário do projeto.</p>
                <img src={Joao} alt="Foto do João" />
            </div>
        </Integrante>
    </Main>
    
    <Footer />
    </>
  )
}
