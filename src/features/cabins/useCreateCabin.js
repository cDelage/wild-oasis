import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";


export const useCreateCabin = () => {
  const queryClient = useQueryClient();
  
  const { isLoading: isCreateLoading, mutate: createCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("Insert succeed");
      queryClient.invalidateQueries("cabins");
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  return {isCreateLoading, createCabin}
};
