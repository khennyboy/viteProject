import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { handleWishes } from "./apiCall";

const useEditForm = () => {
  const queryClient = useQueryClient()
  const { mutate: sendWishes, isPending: isSending } = useMutation({
    mutationFn: handleWishes,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["wishes"]
      });
      toast.success("Wishes sent successfully");
    },
    onError: (err) => toast.error(err.message),
  });

  return { sendWishes, isSending };
};

export default useEditForm;


