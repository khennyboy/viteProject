import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { handleWishes } from "./apiCall";

const useEditForm = () => {
  const { mutate: sendWishes, isPending: isSending } = useMutation({
    mutationFn: handleWishes,
    onSuccess: () => {
      toast.success("Wishes sent successfully");
    },
    onError: (err) => toast.error(err.message),
  });

  return { sendWishes, isSending };
};

export default useEditForm;
