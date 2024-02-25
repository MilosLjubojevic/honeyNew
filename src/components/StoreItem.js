import { Button, Card } from "react-bootstrap";
import formatCurrency from "../utilites/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

function StoreItem({ id, name, price, imgUrl }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{
          objectFit: "cover",
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
          <span className="ms-2">{name}</span>
          <span className="ms-auto text-muted ">{formatCurrency(price)}</span>
        </Card.Title>

        <div className="mx-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              Dodaj u korpu
            </Button>
          ) : (
            <>
              <div
                className="d-flex align-items-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <span>{quantity}</span>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <div className="d-flex align-items-center">
                <Button
                  variant="danger"
                  className="w-100 mt-1"
                  onClick={() => removeFromCart(id)}
                >
                  Ukloni
                </Button>
              </div>
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default StoreItem;
