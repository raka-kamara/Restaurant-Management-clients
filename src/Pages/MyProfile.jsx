import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const MyProfile = () => {
  return (
    <div>
      <div className="flex justify-center my-20">
      <Helmet><title>FlouriciousBites | MyProfile</title></Helmet>
        <Tabs>
          <TabList className="font-bold text-[#D3A121] ">
            <Link to="/myAddedFood"> <Tab>My Added Food Items</Tab></Link>
            <Link to="/addFood"><Tab>Add a Food Item</Tab></Link>
            <Link to="/myOrderedFood"><Tab>My Ordered Food Items</Tab></Link>
          </TabList>

        </Tabs>
      </div>
    </div>
  );
};

export default MyProfile;
