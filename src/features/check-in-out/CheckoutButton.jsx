import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { confirmCheckout, isLoading } = useCheckout();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => confirmCheckout(bookingId)}
      disabled={isLoading}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
