import { Header } from "../elements/Header.jsx";
import { ImagemContainer, LetreiroInicial, Utilizacao } from "../styles/Funcionamento.styles.js";
import { Main } from "../styles/global.js";
import ImagemDemonstrativa from "/ImagemDemonstrativa.png"

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

            <p>Como utilizar a estufa:</p>

            <p>Para utilizar a estufa é necessário instalar o nosso aplicativo (“LINK DO APLICATIVO”). Nele, você vai conseguir conectar o seu celular à estufa, assim podendo receber informações em tempo real e enviar comandos à estufa. Funções como: tempo de ativação do sistema de irrigação, tempo de ligar e desligar as luzes da estufa, ligar e desligar o tratamento de água e além disso é possível receber informações como a umidade do solo, tudo isso na palma da sua mão, deseja aprender a utilizar esse aplicativo? </p>

            <p>Veja o vídeo a seguir:</p>
            
        </Utilizacao>

        <ImagemContainer>
           
          <img src={ImagemDemonstrativa} alt="Imagem demostrativa" />
              
        </ImagemContainer>

    </Main>
    </>
  )
}

