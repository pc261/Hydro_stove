import { Main } from "../styles/global.js";
import { Header } from "../elements/Header.jsx";
import { BannerInicial } from "../styles/Home.styles.js";



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
      </Main>
    </>
    
  )
}

