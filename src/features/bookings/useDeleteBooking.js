import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient()
  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: (data) => {
      toast.success(`Cabin successfully deleted`);
      queryClient.invalidateQueries({active: true})
    },
    onError: () => {
      toast.error(`Fail to delete cabin`);
    },
  });

  return { isDeleting, deleteBooking };
}
