import React from 'react';
import styled, { useTheme } from 'styled-components';
import DefaultLayout from '../ui/layouts/DefaultLayout';

import { PageHeader, Menu, Dropdown, Card, Table } from "antd";
import { DownOutlined } from "@ant-design/icons";

import PaymentsTable from "../ui/components/account/payments-table";
import PaymentCard from "../ui/components/account/start-here-card";

import axios, { AxiosError } from 'axios';
// creating http
//  - an http client with a baseURL and default headers for authentication and such.
//  - why? brevity: http.get('/path')
const http = axios.create({
  baseURL: 'https://bpnqxl35g7.execute-api.us-east-2.amazonaws.com/dev',
  // headers: { 
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  // }
});

// import { Text } from '../ui/components/Text';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUser, setUser } from '../redux/slices/userSlice';

const Styled_Card = styled(Card)`
  width: 50%
`

export default function Landing() {
  const theme = useTheme();

  return (
    <Container>
      <PageHeader
        title="All Kingdoms need Scribes"
        className="site-page-header"
        subTitle="Settle your earnings down to one simple report in the currency of your choice."
      ></PageHeader>
      <Styled_Card
        title="DFK Earnings Report"
        headStyle={{ color: "#5b9645", fontWeight: 600 }}
        bodyStyle={{}}
      >
        <PaymentCard />

        {/* <Dropdown overlay={menu} trigger={['click']}>
          <button>
            Merchant <DownOutlined />
          </button>
        </Dropdown> */}
      </Styled_Card>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;


Landing.Layout = DefaultLayout;
