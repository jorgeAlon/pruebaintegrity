import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Login() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Registro
    </Button>

    <Modal show={showModal} onHide={setShowModal}>
      <Modal.Header closeButton>
        <Modal.Title>Nuevo Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <main className="form-signin w-100 m-auto">
            <form>
                <div className="form-floating p-1">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Correo</label>
                </div>
                <div className="form-floating p-1">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Contraseña</label>
                </div>
            </form>
        </main>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default Login