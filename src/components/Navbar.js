import { Nav, Container, Navbar as NavbarBS, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useShoppingCart } from "../context/ShoppingCartContext";

function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBS sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link as={NavLink} to={"/"}>
            Pocetna
          </Nav.Link>
          <Nav.Link as={NavLink} to={"/store"}>
            Prodavnica
          </Nav.Link>
          <Nav.Link as={NavLink} to={"/about"}>
            O Nama
          </Nav.Link>
        </Nav>
        <Button
          onClick={openCart}
          style={{ width: "4rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
        >
          <IoCartOutline style={{ width: "2rem", height: "2rem" }} />

          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center "
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.3rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%,25%)",
            }}
          >
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </NavbarBS>
  );
}

export default Navbar;
