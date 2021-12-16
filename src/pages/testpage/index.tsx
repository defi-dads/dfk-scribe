import React, { useEffect, useState } from "react";
import { PageHeader, Table } from "antd";
import EditableTable from "../../ui/components/editable-table";
import { getTransactions } from "../../lib/report";
// import Payments from "../components/payments/payments";

// blockHash?: string;
// blockNumber?: number;
// ethHash?: string;
// from: string;
// gas: number;
// gasPrice: number;
// hash: string;
// input: string;
// nonce: number;
// r: string;
// s: string;
// shardID: number;
// timestamp: number;
// to: string;
// toShardID: number;
// transactionIndex: number;
// v: string;
// value: number;
// {
//   title: 'Status',
//   key: 'state',
//   render: () => (
//     <span>
//       <Badge status="success" />
//       Finished
//     </span>
//   ),
// },
const columns = [
  { title: 'BlockHash', dataIndex: 'blockHash', key: 'blockHash' },
  { title: 'BlockNumber', dataIndex: 'blockNumber', key: 'blockNumber' },
  { title: 'ETH Hash', dataIndex: 'ethHash', key: 'ethHash' },
  { title: 'From Address', dataIndex: 'from', key: 'from' },
  { title: 'Gas Used', dataIndex: 'gas', key: 'gas' },
  { title: 'Gas Price', dataIndex: 'gasPrice', key: 'gasPrice' },
  { title: 'Hash', dataIndex: 'hash', key: 'hash' },
  { title: 'Input', dataIndex: 'input', key: 'input' },
  { title: 'Nonce', dataIndex: 'nonce', key: 'nonce' },
  { title: 'r', dataIndex: 'r', key: 'r' },
  { title: 's', dataIndex: 's', key: 's' },
  { title: 'Shard ID', dataIndex: 'shardID', key: 'shardID' },
  { title: 'TX Timestamp', dataIndex: 'timestamp', key: 'timestamp' },
  { title: 'To Address', dataIndex: 'to', key: 'to' },
  { title: 'To ShardID', dataIndex: 'toShardID', key: 'toShardID' },
  { title: 'TX Index', dataIndex: 'transactionIndex', key: 'transactionIndex' },
  { title: 'v', dataIndex: 'v', key: 'v' },
  { title: 'Value!', dataIndex: 'value', key: 'value' }
];

const TestPage = () => {
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState(columns);
  const playerAddress = '0x205234575Eb1DC8e88a197137AF3891E5017A567'

  useEffect(() => {
    const getReport = async () => {
      const txs  = await getTransactions(playerAddress, {});
      console.table(txs);
      setRows(txs);
    }
    getReport();
  }, [])

  return (
    <>
      <PageHeader title="Sitation Alpha" className="site-page-header"></PageHeader>
    {
      (rows.length ? 
        <Table 
        bordered
        dataSource={rows}
        columns={cols}
        rowClassName="row"
      />
      : 
      <p></p>)
    }

    </>
  );
};

export default TestPage;
