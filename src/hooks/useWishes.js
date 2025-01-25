import { useQuery } from "@tanstack/react-query";
import { getWishes } from "./apiCall";

export const useWishes = () => {
  const {
    isPending: isLoading,
    data,
    error,
    isError,
  } = useQuery({
    queryKey: ["wishes"],
    queryFn: getWishes,
  });
  return { isLoading, data, error, isError };
};
