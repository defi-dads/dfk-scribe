import React, { useState, useEffect } from "react";
import { PageHeader, Menu, Dropdown, Card, Table } from "antd";
import { DownOutlined } from "@ant-design/icons";
import PaymentsTable from "../../ui/components/account/payments-table";
// import PayStats from "../components/dashboard/pay-stats";
import PaymentCard from "../../ui/components/account/start-here-card";

import axios, { AxiosError } from 'axios';
const http = axios.create({
  baseURL: 'https://bpnqxl35g7.execute-api.us-east-2.amazonaws.com/dev',
  // headers: { 
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  // }
});

// const currencies = ["USD", "EUR", "GBP", "NZD", "BRL"];
// const menu = (
//   <Menu>
//     {currencies.map((currencyItem, indx) => (
//       <Menu.Item key={indx}>
//         <a>{currencyItem}</a>
//       </Menu.Item>
//     ))}
//   </Menu>
// );

const Home = () => {
  // const [data, setResponseData] = useState();

  // -- description: useEffect data fetching - the 'old way'. RTK Query is perferred.
  // useEffect(() => {
  //   http
  //     .get("/health")
  //       .then((response) => setResponseData(response.data))
  //       .catch((error) => console.log(error));
  // }, []);

  return (
    <>
      <PageHeader
        title="All Kingdoms need Scribes"
        className="site-page-header"
        subTitle="Settle your earnings down to one simple report in the currency of your choice."
      ></PageHeader>
      {/* <PayStats /> */}
      <Card
        title="Tell your "
        headStyle={{ color: "#5b9645", fontWeight: 600 }}
        bodyStyle={{}}
      >
        <PaymentsTable />

        {/* <Dropdown overlay={menu} trigger={['click']}>
          <button>
            Merchant <DownOutlined />
          </button>
        </Dropdown> */}
      </Card>
      
      {/* {isPaymentPending ? (

        // <PaymentPendingCard />

      ) : (

        <PaymentCard />

      )} */}
    </>
  );
};

export default Home;
