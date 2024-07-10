import { HeaderBox, HeaderContainer, ButtonContainer, ButtonPagesDesktop} from "../styles/Home.styles";
import IconLeaf from '/Ecostove.svg'

export function Header() {
  return (
    <HeaderBox>
        <HeaderContainer >

            <div>

                <img src={IconLeaf} alt="icone de folha" />
                <p>EcoStove</p>

            </div>

            <ButtonPagesDesktop>

                <a href="/">Home</a>
                <a href="/funcionamento">Funcionamento</a>
                <a href="">Materiais</a>
                <a href="">Grupo</a>
                <a href="">Bibliografia</a>

            </ButtonPagesDesktop>

            <ButtonContainer>

                <button>
                    <hr />
                    <hr />
                    <hr />
                </button>

            </ButtonContainer>

        </HeaderContainer>
    </HeaderBox>
        
  )
}
