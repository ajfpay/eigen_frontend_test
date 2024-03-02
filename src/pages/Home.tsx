import React from "react";
import { Card, Alert, Spin, Flex, Layout, List } from "antd";
import { useGetFetchHeadlinesQuery } from "../features/FetchHeadlines";
import { Link } from "react-router-dom";
import Head from "./component/Head";
import { EMPTY_IMAGE, PAGE_NAME } from "../data/constant";
import Meta from "antd/es/card/Meta";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { layoutStyle, headerStyle, footerStyle } from "../style/Style";

const Home: React.FC = () => {
  const { data, isLoading, isError, isSuccess } = useGetFetchHeadlinesQuery();

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

  if (!isSuccess) {
    return null; // Jika isSuccess adalah false, tidak perlu merender apapun
  }

  return (
    <Flex gap="middle" wrap="wrap">
      <Layout style={layoutStyle}>
        <Head title={PAGE_NAME} />
        <Header style={headerStyle}>
          <h1>{PAGE_NAME}</h1>
        </Header>
        <Content>
          <List
            className="Col-main"
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 2,
              lg: 3,
              xl: 4,
              xxl: 6,
            }}
            dataSource={data.articles}
            renderItem={(item) => (
              <List.Item key={item.url}>
                <Link
                  className=""
                  to={`/${encodeURIComponent(item.title ?? "")}`}
                >
                  <Card
                    key={item.url}
                    hoverable
                    className="Card-main"
                    cover={
                      <img
                        className="Card-img"
                        alt={item.title}
                        src={item.urlToImage ?? `${EMPTY_IMAGE}`}
                      />
                    }
                  >
                    <Meta
                      title={item.title}
                      style={{
                        maxHeight: "calc(1.5em * 6)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      description={item.description}
                    />
                  </Card>
                </Link>
              </List.Item>
            )}
          />
        </Content>
        <Footer style={footerStyle}>© 2024 Headline News</Footer>
      </Layout>
    </Flex>
  );
};
export default Home;
