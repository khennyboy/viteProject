import { useQuery } from "@tanstack/react-query";
import { getWishes } from "./apiCall";

export const useWishes = () => {
  const {
    isPending: isLoading,
    data: products,
    error,
    isError,
  } = useQuery({
    queryKey: ["wishes"],
    queryFn: getWishes,
  });
  return { isLoading, products, error, isError };
};
