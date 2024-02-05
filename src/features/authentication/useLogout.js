import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as lougoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: lougoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  return { logout, isLoading };
}
