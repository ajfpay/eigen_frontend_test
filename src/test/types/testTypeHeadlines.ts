// Contoh data untuk pengujian
import { NewsModel, Article, Source } from "../../data/model/NewsModel";

export const loadingStateData: NewsModel = {
  status: undefined,
  totalResults: undefined,
  articles: undefined,
};

export const errorStateData: NewsModel = {
  status: "error",
  totalResults: 0,
  articles: [],
};

export const successStateData: NewsModel = {
  status: "ok",
  totalResults: 2,
  articles: [
    {
      source: { id: "source1", name: "Source 1" } as Source,
      author: "Author 1",
      title: "Title 1",
      description: "Description 1",
      url: "url1",
      urlToImage: "image_url_1",
      publishedAt: new Date("2024-03-01T12:00:00Z"),
      content: "Content 1",
    } as Article,
    {
      source: { id: "source2", name: "Source 2" } as Source,
      author: "Author 2",
      title: "Title 2",
      description: "Description 2",
      url: "url2",
      urlToImage: "image_url_2",
      publishedAt: new Date("2024-03-02T12:00:00Z"),
      content: "Content 2",
    } as Article,
  ],
};
