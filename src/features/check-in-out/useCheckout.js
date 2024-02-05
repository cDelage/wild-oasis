import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { isLoading: isCheckinOut, mutate: confirmCheckout } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully check-out`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: (e) => {
      console.log(e);
      toast.error("Fail to update checking");
    },
  });

  return { isCheckinOut, confirmCheckout };
}
