import { Main } from "../styles/global.js";
import { Header } from "../elements/Header.jsx";
import { BannerInicial, SobreInicial, ImagensSobre, SobreContainer, NossaMissaoContainer, ImagensContainer } from "../styles/Home.styles.js";
import ImagemTerra from "/ImagemTerra.svg";
import ImagemCampos from "/ImagemCampos.svg"
import ImagemPlantacao from "/ImagemPlantacao.svg"
import ImagemDemonstrativa from "/ImagemDemonstrativa.png"



export function Home() {

  return (
    <>
      <Header />
      <Main>

        <BannerInicial>

          <div>

            <h3>Eco</h3>
            <hr />
            <p>stove</p>

          </div>

        </BannerInicial>


        <SobreContainer>

          <SobreInicial>
            
              <ImagensSobre>

                <img src={ImagemTerra} alt="Imagem do solo sendo regado" />
                <img src={ImagemCampos} alt="Imagem de um campo agrícola sendo regado" />

              </ImagensSobre>

              <ImagensSobre>

                <img src={ImagemPlantacao} alt="" />

              </ImagensSobre>

              <div id="textos">

                <h2>Sobre</h2>
                <p>Como sabemos, a água é indispensável para a vida. Visto isso, podemos comprovar essa afirmação com os tópicos abaixo:
                </p>

                <ul>
                  <li>De acordo com a ciência, 70% do consumo de água mundial é utilizado pela agricultura, e que como substrato à vida, a água não possui uma substituição.</li>
                  <li>A exigência mundial por água de boa qualidade, é maior do que a renovação do ciclo hidrológico.</li>
                  <li>Até 2050, a população mundial atingira entre 7,5 e 10,5 bilhões, o que aumentará a demanda de água.</li>
                  <li>A irrigação por  gotejamento é ideal, pois há uma grande economia de água, assim como uma alta eficiência de aplicação.</li>
                </ul>

              </div>
              
          </SobreInicial>

        </SobreContainer>


        <NossaMissaoContainer>

          <h2>Nossa missão</h2>

          <section>

            <div>

              <h2>1</h2>
              <p>Facilitar o trabalho dos agricultores e permitir o cultivo de vegetais dentro da sua casa.</p>

            </div>

            <div id="div_inversa"> 

              <p>Ajudar na diminuição da poluição, incentivando o plantio e diminuindo os gastos de água e tempo. </p>
              <h2>2</h2>

            </div>

          </section>
          

        </NossaMissaoContainer>

        <ImagensContainer>

          <h2>Nosso Projeto</h2>

          <div id="ImagensMobile">
              <img src={ImagemDemonstrativa} alt="Imagem demostrativa" />
              <img src={ImagemDemonstrativa} alt="Imagem demostrativa" />
          </div>

          <div id="ImagensDesktop">
            <img src={ImagemDemonstrativa} alt="Imagem demostrativa" />
            <img src={ImagemDemonstrativa} alt="Imagem demostrativa" />
            <img src={ImagemDemonstrativa} alt="Imagem demostrativa" />
          </div>

          <a href="#">ver mais</a>

        </ImagensContainer>


      </Main>
    </>
    
  )
}



