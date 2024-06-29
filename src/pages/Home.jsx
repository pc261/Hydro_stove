import { Main } from "../styles/global.js";
import { Header } from "../elements/Header.jsx";
import { BannerInicial, SobreInicial, ImagensSobre, SobreContainer } from "../styles/Home.styles.js";
import ImagemTerra from "/ImagemTerra.svg";
import ImagemCampos from "/ImagemCampos.svg"
import ImagemPlantacao from "/ImagemPlantacao.svg"



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
                  <li>Até 2050, a população mundial atingira entre 7,5 e 10,5 bilhões, o que aumentara a demanda de água.</li>
                  <li>A irrigação por  gotejamento é ideal, pois há uma grande economia de água, assim como uma alta eficiência de aplicação.</li>
                </ul>

              </div>

              

          </SobreInicial>

            

         

        </SobreContainer>


      </Main>
    </>
    
  )
}

