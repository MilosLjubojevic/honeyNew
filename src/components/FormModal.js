import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FormControl, FormGroup, FormLabel, FormText } from "react-bootstrap";

function FromModal() {
  const [toggle, setToggle] = useState(false);

  const toggleModal = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div>
        <Button onClick={toggleModal} variant="primary">
          Naruci
        </Button>
      </div>
      <Modal show={toggle} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Isporuka</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <FormLabel>Unesite podatke za isporuku</FormLabel>
            <FormGroup>
              <FormLabel>Ulica*</FormLabel>
              <FormControl
                type="text"
                placeholder="Unesite vasu ulicu"
              ></FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel>Grad*</FormLabel>
              <FormControl
                type="text"
                placeholder="Unesite vas Grad"
              ></FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel>Postanski Broj*</FormLabel>
              <FormControl
                type="text"
                placeholder="Unesite Postanski broj"
              ></FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel>Ime i prezime*</FormLabel>
              <FormControl
                type="text"
                placeholder="Unesite vase ime i prezime"
              ></FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel>Broj Telefona*</FormLabel>
              <FormControl
                type="text"
                placeholder="Unesite vas broj telefona"
              ></FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel>Posebna Upustva:</FormLabel>
              <FormControl
                type="text"
                placeholder="Posebna upustva za posiljku"
              ></FormControl>
            </FormGroup>
            <FormText muted>* Obavezna polja za narucivanje</FormText>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Otkazi
          </Button>
          <Button variant="primary" onClick={toggleModal}>
            Naruci
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FromModal;
