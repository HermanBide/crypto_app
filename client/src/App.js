import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar, HomePage, Exchanges, CryptoDetails,Cryptocurrencies, News } from "./components/index";

function App() {
  return (
    <div className="flex">
      <div className="">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
            <Route exact path="/" element={<HomePage/>} />
              <Route path="/exchanges" element={<Exchanges/>} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies/>} />
              <Route path="/crypto/:coinId" element={<CryptoDetails/>} />
              <Route path="/news" element={<News/>} />
            </Routes>
          </div>
        </Layout>
      <div className="footer ">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center'}}>
          Crypto_app <br /> All rights reserved 
        </Typography.Title>
        <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
        </Space>
      </div>
      </div>
    </div>
  );
}

export default App;
