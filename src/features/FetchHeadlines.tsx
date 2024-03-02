import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../data/Axios";
import { NewsModel } from "../data/model/NewsModel";
// import { ErrorModel } from "../data/model/ErrorModel";
import { API_KEY } from "../data/constant";

export const useGetFetchHeadlinesQuery = () => {
  return useQuery<NewsModel>({
    queryFn: async () => {
      const response = await axiosInstance.get("/top-headlines", {
        params: {
          country: "us",
          apiKey: API_KEY,
        },
      });

      return response.data;
    },
    queryKey: ["fetch.headlines"],
  });
};
