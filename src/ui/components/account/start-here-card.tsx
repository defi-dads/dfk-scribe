import { Button, Card, Form, Input, Select } from "antd";
import React, { useMemo, useCallback, useEffect, useRef } from "react";
import { useDataChanger } from "../../../hooks/useDataChanger";
import { currencies } from "./constants";
import styled from "styled-components";
// import BN from "bignumber.js";

const { Option } = Select;

interface FormData {
  usdPayment: number;
  reefPayment: number;
}

const PaymentCard = () => {
  const [form] = Form.useForm<FormData>();
  const reefRef = useRef<any>(null);

  const initFormData: FormData = useMemo(() => {
    return {
      usdPayment: 0,
      reefPayment: 0
    };
  }, []);
  const { data, dataRef, update } = useDataChanger<FormData>(initFormData);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const setREEFValue = useCallback(
    (reefPayment?: number) => {
      const _data = { reefPayment: dataRef.current.reefPayment };

      _data.reefPayment = reefPayment || 0;

      update(_data);
      form.setFieldsValue(_data);
    },
    [dataRef, form, update]
  );

  const setUSDValue = useCallback(
    (usdPayment?: number) => {
      const _data = { usdPayment: dataRef.current.usdPayment };

      _data.usdPayment = usdPayment || 0;

      update(_data);
      form.setFieldsValue(_data);
    },
    [dataRef, form, update]
  );

  const valueChanged = useCallback(
    (changed: Partial<FormData>) => {
      if (changed.usdPayment) {
        setUSDValue(changed.usdPayment);
      }
      update(changed);
    },
    [dataRef, update]
  );

  return (
    <Card>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={valueChanged}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          label="Choose your Currency"
          name="currency"
          rules={[
            { required: true, message: "Earnings Report requires a currency base" }
          ]}
        >
          <Select
            //   onChange={onGenderChange}
            allowClear
          > 
          {currencies.map( v => {
            return <Option style={{ color: "#7ca649", fontWeight: 600, textTransform: "uppercase" }} key={v.abbreviation} value={v.abbreviation}>
              {v.display}
            </Option>
          })}
          </Select>
        </Form.Item>

        <Form.Item label="Account Address" name="address">
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" disabled>
            Scribe Earnings Report
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default styled(PaymentCard)`

`;
