import React from "react";
import { Alert, Button, Spin } from "antd";
import { Article } from "../data/model/NewsModel";
import Card from "antd/es/card/Card";
import { useGetFetchDetailHeadlinesQuery } from "../features/FetchDetailHeadline";
import { Link, useLocation } from "react-router-dom";
import Meta from "antd/es/card/Meta";
import Menu from "antd/es/menu/menu";
import Item from "antd/es/list/Item";
import { EMPTY_IMAGE } from "../data/constant";

const Detail: React.FC = () => {
  const location = useLocation();
  const title = decodeURIComponent(location.pathname.split("/").pop() || "");
  const { data, isLoading, isError, isSuccess } =
    useGetFetchDetailHeadlinesQuery(title);

  if (isLoading) {
    return <Spin size="large" fullscreen />;
  }

  if (isError) {
    return (
      <Alert
        message="Error"
        description="An error occurred while fetching data"
        type="error"
      />
    );
  }

  return (
    <div>
      {isSuccess && (
        <>
          {data.articles?.map((article: Article) => (
            <>
              <header>
                <Menu
                  className="Col-main"
                  mode="horizontal"
                  style={{ lineHeight: "64px", marginBottom: "20px" }}
                >
                  <Item key="home">
                    <Link to="/">
                      <h1>Home</h1>
                    </Link>
                  </Item>
                </Menu>
              </header>
              <main className="Row-main">
                <Card className="Card-detail">
                  <img
                    className="img-responsive"
                    src={article.urlToImage ?? `${EMPTY_IMAGE}`}
                    alt="Article"
                  />
                  <Meta
                    title={<h1>{article.title}</h1>}
                    description={
                      <>
                        <p>
                          <strong>Author:</strong> {article.author}
                        </p>
                        <p>
                          <strong>Publish Date:</strong>{" "}
                          {new Date(
                            article.publishedAt ?? ""
                          ).toLocaleDateString()}
                        </p>
                        <p>{article.description}</p>
                        <p>{article.content}</p>
                        <Button
                          type="primary"
                          href={article.url ?? ""}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More
                        </Button>
                      </>
                    }
                  />
                </Card>
              </main>

              <footer className="Footer">© 2024 Headline News</footer>
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default Detail;
