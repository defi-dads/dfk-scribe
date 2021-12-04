import React from 'react';
import styled, { useTheme } from 'styled-components';
import DefaultLayout from '../ui/layouts/DefaultLayout';

import { PageHeader, Menu, Dropdown, Card, Table } from "antd";
import { DownOutlined } from "@ant-design/icons";

import PaymentsTable from "../ui/components/payments/payments-table";
import PaymentCard from "../ui/components/payments/payment-card";

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

export default function Landing() {
  const theme = useTheme();

  return (
    <Container>
      <PageHeader
        title="Dashboard"
        className="site-page-header"
        subTitle="Your personal Reef adobe"
      ></PageHeader>
      {/* <PayStats /> */}
      <Card
        title="Transactions"
        headStyle={{ color: "purple", fontWeight: 600 }}
        bodyStyle={{}}
      >
        <PaymentCard />

        {/* <Dropdown overlay={menu} trigger={['click']}>
          <button>
            Merchant <DownOutlined />
          </button>
        </Dropdown> */}
      </Card>
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
