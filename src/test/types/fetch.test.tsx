// useGetFetchHeadlinesQuery.test.ts
import { renderHook, waitFor } from "@testing-library/react";
import { useGetFetchHeadlinesQuery } from "../../features/FetchHeadlines";
import { NewsModel } from "../../data/model/NewsModel";
import { jest } from "@jest/globals";
import { createAxiosInstance } from "../../data/Axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("../MockAxios.ts", () => ({
  create: jest.fn(() => ({
    get: jest.fn(),
  })),
}));
const axiosInstance = createAxiosInstance();

const mockData: NewsModel = {
  status: "ok",
  totalResults: 5,
  articles: [
    {
      source: { id: "source-id", name: "Source Name" },
      author: "Author Name",
      title: "Article Title",
      description: "Article Description",
      url: "https://example.com",
      urlToImage: "https://example.com/image.jpg",
      publishedAt: new Date(),
      content: "Article Content",
    },
  ],
};

describe("useGetFetchHeadlinesQuery", () => {
  it("should return expected data when called", async () => {
    // Buat instance QueryClient
    const queryClient = new QueryClient();

    // Gunakan QueryClientProvider untuk membungkus hook dalam pengujian
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      // eslint-disable-next-line react/react-in-jsx-scope
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    jest
      .spyOn(axiosInstance, "get")
      .mockResolvedValueOnce({ data: { ...mockData } });
    const { result } = renderHook(() => useGetFetchHeadlinesQuery(), {
      wrapper,
    });

    // Tunggu hingga panggilan fungsi selesai
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    // await waitFor(() => expect(result.current.isSuccess).

    // Periksa bahwa fungsi mengembalikan data yang diharapkan
    expect(result.current.data).toEqual(mockData);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.error).toBeUndefined();
  });
});
