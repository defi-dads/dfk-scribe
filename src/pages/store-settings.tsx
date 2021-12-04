import React from "react";
import ApiKeys from "../ui/components/settings-cards/APIKeys";
import MerchantMainWallets from "../ui/components/settings-cards/merchant-main-wallets/merchant-main-wallets";
import PayNotifs from "../ui/components/settings-cards/pay-notifs";
import { PageHeader } from "antd";
import MerchantManagementCard from "../ui/components/settings-cards/merchant-management";

const StoreSettings = () => {
  return (
    <>
      <PageHeader
        title="Store Settings"
        className="site-page-header"
        subTitle="Modify your account settings here."
      ></PageHeader>
      <ApiKeys />
      <MerchantMainWallets />
      <PayNotifs />
      <MerchantManagementCard />
    </>
  );
};

export default StoreSettings;
