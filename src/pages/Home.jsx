import { Main } from "../styles/global.js";
import { Header } from "../elements/Header.jsx";
import { Footer } from "../elements/Footer.jsx";
import { BannerInicial, SobreInicial, ImagensSobre, SobreContainer, NossaMissaoContainer, ImagensContainer, Slide} from "../styles/Home.styles.js";
import ImagemTerra from "/ImagemTerra.svg";
import ImagemDemonstrativa from "/ImagemDemonstrativa.png"
import Estacao from "/estação1.png"
import Estufa from "/estufa1.png"



export function Home() {

  return (
    <>
      <Header />
      
      <Main>

        <BannerInicial>

          <div>

            <h3>Hydro</h3>
            <hr />
            <p>stove</p>

          </div>

        </BannerInicial>

        <Slide>
          <h1>
          Estação de Tratamento de Água (E.T.A.)
          </h1>
          <img className="estacao" src={Estacao} alt="" />
          <div className="paragrafo">
            <p>Nosso protótipo é composto por uma E.T.A. que, tanto a longo prazo, quanto a curto prazo trará benefícios, tais como aeconomia   d’água e a facilidade de cultivo aos agricultores e pequenos produtores. Abaixo, falaremos mais sobre ela: <br />
              O Projeto da Estação de Tratamento de Água (ETA) é uma iniciativa fundamental para garantir o acesso à água limpa. A principal finalidade desse projeto é tratar a água bruta proveniente de fontes de abastecimento, como rios, lagos ou lençóis freáticos, a fim de remover contaminantes químicos, tornando-a adequada para a utilização na agricultura.
            </p>
          </div>
        </Slide>

        <Slide>
          <h1>
          Casa de Vegetação (Estufa)
          </h1>
          <img className="estacao" src={Estufa} alt="" />
          <div className="paragrafo">
            <p>Para fazer uma integração ccom a E.T.A.,  teremos também uma estufa para cultivo de plantas e alimentos.<br />Uma estufa é uma estrutura transparente, geralmente feita de vidro ou plástico, projetada para cultivar plantas em condições controladas. Ela mantém uma temperatura interna mais alta do que a externa, criando um microclima ideal para o crescimento das plantas. As estufas permitem o controle da umidade, beneficiando o desenvolvimento das plantas. Além disso, possibilitam o cultivo durante todo o ano, independentemente das estações, e oferecem maior controle sobre pragas e doenças. Estufas também são úteis para o cultivo de plantas exóticas, proporcionando um ambiente adequado para seu crescimento, sendo uma ferramenta valiosa tanto para jardineiros amadores quanto para produtores agrícolas comerciais.
            </p>
          </div>
        </Slide>

        <Slide>
          <h1>
            Sobre
          </h1>
          <div className="imagens"></div>
          <img className="terra" src={ImagemTerra} alt="" />
          <div className="paragrafos">
            <p>
              Como sabemos, a água é indispensável para a vida. Visto isso, podemos comprovar essa afirmação com os tópicos abaixo:
            </p>

            <ul>
              <p>
                ► De acordo com a ciência, 70% do consumo de água mundial é utilizado pela agricultura, e que como substrato à vida, a água não possui uma substituição.
              </p>
              <p>
                ► A exigência mundial por água de boa qualidade, é maior do que a renovação do ciclo hidrológico.
              </p>
              <p>
                ► Até 2050, a população mundial atingira entre 7,5 e 10,5 bilhões, o que aumentara a demanda de água.
              </p>
              <p>
                ► A irrigação por  gotejamento é ideal, pois há uma grande economia de água, assim como uma alta eficiência de aplicação.
              </p>
            </ul>
          </div>
        </Slide>



        <NossaMissaoContainer>

          <h2>Nossa missão</h2>

          <section>

            <div>

              <h2>1</h2>
              <p>Facilitar o tratamento de água, diminuindo os custos e sendo de mais fácil acesso.</p>

            </div>

            <div id="div_inversa"> 

              <p>Cultivar plantas e alimentos com uma maior praticidade e eficácia.</p>
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
      <Footer />
    </>
    
  )
}



