import { Pop } from '../styles/Modal.styles'

export function Modal({isOpen, setModalOpen}) {
    if(isOpen) {
        return (
            <>
            <Pop>
                <div>
                    <a className='X' href="#" onClick={setModalOpen}>X</a> 
                    <a href="/" className='link'>Home</a>
                    <a href="/materiais" className='link'>Materiais</a> 
                    <a href="/grupo" className='link'>Grupo</a> 
                    <a href="/funcionamento" className='link'>Funcionamento</a> 
                    <a href="/bibliografia" className='link'>Bibliografia</a>
                </div>
            </Pop>
            </>
          )
    }

    return null
}
