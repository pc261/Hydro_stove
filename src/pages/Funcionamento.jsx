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
        <div>
            <h1>Nosso</h1>
            <h2><strong>Projeto</strong></h2>
        </div>
        </LetreiroInicial>

        <ImagemContainer id="ImagensMobile">
                <div id="ImagensMobile">
                <img src={ImagemDemonstrativa} alt="Imagem demostrativa" />
                </div>
        </ImagemContainer>

        <Utilizacao>

            <div id="paragrafos">
                <p class="inicial">Como utilizar a estufa:</p>

                <p class="principal">Para utilizar a estufa é necessário instalar o nosso aplicativo (“LINK DO APLICATIVO”). Nele, você vai conseguir conectar o seu celular à estufa, assim podendo receber informações em tempo real e enviar comandos à estufa. Funções como: tempo de ativação do sistema de irrigação, tempo de ligar e desligar as luzes da estufa, ligar e desligar o tratamento de água e além disso é possível receber informações como a umidade do solo, tudo isso na palma da sua mão, deseja aprender a utilizar esse aplicativo? </p>

                <p class="final">Veja o vídeo a seguir:</p>
            </div>

        </Utilizacao>

        <ImagemContainer id="ImagensMobile">
                <div id="ImagensMobile">
                <img src={ImagemDemonstrativa} alt="Imagem demostrativa" />
                </div>
        </ImagemContainer>
    </Main>
    </>
  )
}

