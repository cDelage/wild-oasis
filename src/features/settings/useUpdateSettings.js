import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingsApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export const useUpdateSettings = () => {
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutate: updateSettings } = useMutation({
    mutationFn: updateSettingsApi,
    onSuccess: () => {
      toast.success("Successfully update");
      queryClient.invalidateQueries("settings");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Fail to update");
    },
  });

  return { isUpdating, updateSettings };
};
