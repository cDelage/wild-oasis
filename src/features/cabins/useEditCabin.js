import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export const useEditCabin = () => {
  const queryClient = useQueryClient();

  const { isLoading: isUpdateLoading, mutate: updateCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("New cabin is up to date");
      queryClient.invalidateQueries("cabins");
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  return { isUpdateLoading, updateCabin };
};
