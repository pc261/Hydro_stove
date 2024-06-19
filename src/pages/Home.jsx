import { HeaderContainer, ButtonPages, ButtonPagesDesktop } from "./Home.styles";
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

      <ButtonPagesDesktop>
        <a href="">Home</a>
        <a href="">Funcionamento</a>
        <a href="">Materiais</a>
        <a href="">Grupo</a>
        <a href="">Bibliografia</a>
      </ButtonPagesDesktop>

    </HeaderContainer>
  )
}

