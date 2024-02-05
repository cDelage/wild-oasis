import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: (credentials) => signupApi(credentials),
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account successfully created ! Please verify the new account from the user's email adress"
      );
    },
    onError: () => {
      toast.error("Fail to create new user");
    },
  });

  return { isLoading, signup };
}
