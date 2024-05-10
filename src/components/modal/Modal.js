import styled from 'styled-components'

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  @media (max-width: 777px) {
    height: 100%;
    width: 100%;
  }
`

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <ModalContainer onClick={onClose}>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  )
}

export default Modal
