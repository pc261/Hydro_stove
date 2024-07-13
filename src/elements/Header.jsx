import { useState } from "react";
import { HeaderBox, HeaderContainer, ButtonContainer, ButtonPagesDesktop} from "../styles/Home.styles";
import { Modal } from "./Modal";
import IconLeaf from '/Ecostove.svg'

export function Header() {
  const  [openModal, setOpenModal] = useState(false)
  return (
    <>
    <HeaderBox>
        <HeaderContainer >

            <div>

                <img src={IconLeaf} alt="icone de folha" />
                <p>EcoStove</p>

            </div>

            <ButtonPagesDesktop>
                <a href="/">Home</a>
                <a href="/funcionamento">Funcionamento</a>
                <a href="/materiais">Materiais</a>
                <a href="grupo">Grupo</a>
                <a href="/bibliografia">Bibliografia</a>

            </ButtonPagesDesktop>

            <ButtonContainer>

                <button onClick={() => setOpenModal(true)}>
                    <hr />
                    <hr />
                    <hr />
                </button>


            </ButtonContainer>

            
            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>

        </HeaderContainer>
    </HeaderBox>
    </>
        
  )
}
