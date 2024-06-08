import { HeaderContainer, ButtonPages } from "./Home.styles";
import IconLeaf from '/Ecostove.svg'

export function Home() {
  return (
    <HeaderContainer>
      <div>
        <img src={IconLeaf} alt="icone de folha" />
        <p>EcoStove</p>
      </div>
      <ButtonPages>
        <hr />
        <hr />
        <hr />
      </ButtonPages>
    </HeaderContainer>
  )
}

