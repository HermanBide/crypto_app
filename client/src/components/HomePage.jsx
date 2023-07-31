import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoAPI";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import Loader from "./Loader";

const { Title } = Typography;

const HomePage = () => {

  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  if(isFetching)  return <Loader/>
  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row>
        <Col span={12}>
          <Statistic title="total Cryptocurrencies" value={globalStats?.total}>crypto</Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="total Exchanges" value={millify(globalStats?.totalExchanges)}>stats</Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="total Market Cap" value={millify(globalStats?.totalMarketCap)}>market</Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="total 24h Volume" value={millify(globalStats?.total24hVolume)}>vol</Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="total Markets" value={millify(globalStats?.totalMarkets)}>total</Statistic>
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified={true} />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <News  simplified/>
    </>
  );
};

export default HomePage;
