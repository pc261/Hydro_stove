import { Header } from "../elements/Header.jsx";
import { Fotos, ImagemContainer, Integracao, LetreiroInicial, Utilizacao } from "../styles/Funcionamento.styles.js";
import { Main } from "../styles/global.js";
import { Footer } from "../elements/Footer.jsx";
import ImagemDemonstrativa from "/ImagemDemonstrativa.png"
import Andamento1 from "/andamento1.jpeg"
import Andamento2 from "/andamento2.jpeg"

export function Funcionamento() {
  return (
    <>
    <Header/>

    <Main>

        <LetreiroInicial>

          <h1>Nosso</h1>
          <h2>Projeto</h2>

        </LetreiroInicial>

        <ImagemContainer>
        
          <img src={ImagemDemonstrativa} alt="Imagem demostrativa" />
          
        </ImagemContainer>

        <Utilizacao>

            <p className="TextoCentralizado">Como utilizar a estufa:</p>

            <p>Para utilizar a estufa é necessário instalar o nosso aplicativo (“LINK DO APLICATIVO”). Nele, você vai conseguir conectar o seu celular à estufa, assim podendo receber informações em tempo real e enviar comandos à estufa. Funções como: tempo de ativação do sistema de irrigação, tempo de ligar e desligar as luzes da estufa, ligar e desligar o tratamento de água e além disso é possível receber informações como a umidade do solo, tudo isso na palma da sua mão, deseja aprender a utilizar esse aplicativo? </p>

            <p className="TextoCentralizado">Veja o vídeo a seguir:</p>
            
        </Utilizacao>

        <ImagemContainer>
           
          <img src={ImagemDemonstrativa} alt="Imagem demostrativa" />
              
        </ImagemContainer>

        <Fotos>
          <h1>Fotos do</h1>
          <h2>Projeto</h2>

          <div>
            <img src={Andamento1} alt="foto do...." />
            <p>Data: 01/08/2024</p>
          </div>

          <div>
            <p>Data: 16/09/2024</p>
            <img src={Andamento2} alt="foto do...." />
          </div>
        </Fotos>

        <Integracao>
          <h1>Integrações do</h1>
          <h2>Projeto</h2>

          <p>Nossa estufa tem um sistema integrado de tratamento de água. Além disso, há a possibilidade do usuário de configurar a estufa para determinados tipos de plantas, fazendo com que seja mais fácil a integração da nossa estufa para o dia a dia dos nossos usuários.</p>
          
  
          <img src={ImagemDemonstrativa} alt="" />
          
        </Integracao>
        
    </Main>

    <Footer />
    </>
  )
}

