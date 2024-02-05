import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckin() {
  const queryClient = useQueryClient();

  const { isLoading: isCheckinIn, mutate: confirmCheckin } = useMutation({
    mutationFn: ({bookingId, breakfast}) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully check-in`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: (e) => {
      console.log(e);
      toast.error("Fail to update checking");
    },
  });

  return { isCheckinIn, confirmCheckin };
}
