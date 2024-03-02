import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../data/Axios";
import { NewsModel } from "../data/model/NewsModel";
import { ErrorModel } from "../data/model/ErrorModel";
import { API_KEY } from "../data/constant";

export const useGetFetchDetailHeadlinesQuery = (title: string) => {
  return useQuery<NewsModel, ErrorModel>({
    queryFn: async () => {
      const response = await axiosInstance.get("/top-headlines", {
        params: {
          country: "us",
          apiKey: API_KEY,
          q: title,
        },
      });

      return response.data;
    },
    queryKey: ["fetch.detail"],
  });
};
