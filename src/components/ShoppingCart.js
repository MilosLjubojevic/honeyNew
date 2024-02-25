import { OffcanvasHeader, OffcanvasTitle, Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
function ShoppingCart() {
  const { closeCart, isOpen } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <OffcanvasHeader closeButton>
        <OffcanvasTitle>Korpa</OffcanvasTitle>
      </OffcanvasHeader>
    </Offcanvas>
  );
}

export default ShoppingCart;
