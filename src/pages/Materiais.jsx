import { Header } from "../elements/Header";
import { Main } from "../styles/global";
import { Footer } from "../elements/Footer.jsx";
import { Letreiro, Pecas } from "../styles/Materiais.styles";
import Seta from "/SetaVermais.svg"



export function Materiais() {
    
    return ( 
        <>

        <Header/>

        <Main>
            <Letreiro>
                <h1>Peças</h1>
                <h2>Utilizadas</h2>
            </Letreiro>

            <Pecas>

                <div className="Imagens" id="Imagem1">
                </div>

                <div className="Textos">
                    <div>
                        <h2>Mega 2560 com WiFi Esp8266</h2>
                        <p>Preço: R$189,90</p>
                    </div>
                    <p>A Black Board é uma versão personalizada da Placa Arduino Mega 2560 que vem com um chip ESP8266 integrado na placa adicionando o recurso de conexão WiFi a placa. Possui a mesma pinagem e algumas melhorias em relação ao modelo Mega.</p>
                    <a target="_blank" href="https://www.eletrogate.com/mega-2563-com-wifi-esp8266-integrado-black-board?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&utm_source=google&utm_medium=cpc&utm_campaign=[MC4]_[G]_[PMax]_Categorias&utm_content=&utm_term=&gad_source=1&gclid=Cj0KCQjwh7K1BhCZARIsAKOrVqGtxxBGkt_YUpMF9bHScN2BsSiMonY3w-OdVUr6KZM7VMsk0JB_EzYaAu6UEALw_wcB">
                        <p>Ver mais</p>
                        <img src={Seta} alt="" />
                    </a>
                </div>

            </Pecas>

            <Pecas>

                <div className="Imagens" id="Imagem2">
                </div>

                <div className="Textos">
                    <div>
                        <h2>Sensor Capacitivo de Umidade do Solo</h2>
                        <p>Preço: R$10,90</p>
                    </div>
                    <p>Com o Sensor Capacitivo de Umidade do Solo é possível verificar a umidade do solo, constando, por exemplo, se a sua planta precisa de água ou não. Este sensor se difere dos outros sensores de umidade do solo, que geralmente são resistivos.</p>
                    <a target="_blank" href="https://www.eletrogate.com/mini-bomba-submersa-5v-p-agua">
                        <p>Ver mais</p>
                        <img src={Seta} alt="" />
                    </a>
                </div>

            </Pecas>

            <Pecas>

                <div className="Imagens" id="Imagem3">
                </div>

                <div className="Textos">
                    <div>
                        <h2>Mini Bomba Submersível p/ Água</h2>
                        <p>Preço: R$11,90</p>
                    </div>
                    <p>Com um motor de tamanho adequado, a Mini Bomba de Água é capaz de impulsionar entre 80 L a 120 L por hora. A Mini Bomba de Água Submersa é ideal para o desenvolvimento de projetos.</p>
                    <a target="_blank" href="https://www.eletrogate.com/sensor-capacitivo-de-umidade-do-solo-v20-com-regulador">
                        <p>Ver mais</p>
                        <img src={Seta} alt="" />
                    </a>
                </div>

            </Pecas>








            <Pecas>

                <div className="Imagens" id="Imagem4">
                </div>

                <div className="Textos">
                    <div>
                        <h2>Protoboard 400 pontos</h2>
                        <p>Preço: R$9,90</p>
                    </div>
                    <p>Esta Protoboard é uma excelente ferramenta para a montagem de circuitos eletrônicos, sendo uma maneira rápida, fácil e prática para montar seus projetos. Possui 400 pontos e em sua parte inferior há um adesivo que permite colá-lo em uma superfície isolante. São 100 pontos de distribuição e 300 pontos de conexão terminal. Possui coordenadas coloridas para facilitar a visualização na hora de colocar seu componente.</p>
                    <a target="_blank" href="https://www.eletrogate.com/protoboard-400-pontos">
                        <p>Ver mais</p>
                        <img src={Seta} alt="" />
                    </a>
                </div>

            </Pecas>


            <Pecas>

                <div className="Imagens" id="Imagem5">
                </div>

                <div className="Textos">
                    <div>
                        <h2>Jumpers</h2>
                        <p>Preço: R$9,90</p>
                    </div>
                    <p>Kit com 40 Jumpers Macho/Femea, também conhecido como "fio" ou "cabo". Excelente para montagem de prototipagem com rapidez, agilidade e limpeza!</p>
                    <a target="_blank" href="https://www.eletrogate.com/jumpers-macho-femea-40-unidades-de-20-cm">
                        <p>Ver mais</p>
                        <img src={Seta} alt="" />
                    </a>
                </div>

            </Pecas>

            <Pecas>

                <div className="Imagens" id="Imagem6">
                </div>

                <div className="Textos">
                    <div>
                        <h2>Módulo Relé 8 canais</h2>
                        <p>Preço: R$54,90</p>
                    </div>
                    <p>Este Módulo Relé permite uma integração com uma ampla gama de microcontroladores como Arduino, AVR, PIC, ARM. A partir das saídas digitais pode-se, através do relé, controlar cargas maiores e dispositivos como motores AC ou DC, eletroímãs, solenóides e lâmpadas incandescentes. Possui 8 canais de 5v e cada um possui um LED para indicar o estado da saída do relé.</p>
                    <a target="_blank" href="https://www.eletrogate.com/modulo-rele-8-canais-5v">
                        <p>Ver mais</p>
                        <img src={Seta} alt="" />
                    </a>
                </div>

            </Pecas>

            <Pecas>

                <div className="Imagens" id="Imagem7">
                </div>

                <div className="Textos">
                    <div>
                        <h2>Sensor de Chuva/Nivel de água</h2>
                        <p>Preço: R$4,90</p>
                    </div>
                    <p>Este módulo sensor pode estimar o nível de água através de condutores paralelos que entram em curto quando é molhado por algum líquido. Facilmente converte o nível de água em sinal analógico, que pode ser enviado diretamente para a placa Arduino.</p>
                    <a target="_blank" href="https://www.eletrogate.com/modulo-sensor-de-chuva-nivel-de-agua">
                        <p>Ver mais</p>
                        <img src={Seta} alt="" />
                    </a>
                </div>

            </Pecas>

        </Main>
        
        <Footer />

        </>
    )
}
