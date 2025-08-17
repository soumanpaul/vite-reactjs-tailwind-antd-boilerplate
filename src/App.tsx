import "./App.css";
import { Button } from "antd";
import Loader from "@components/ui/Loader";
import ProfileCard from "@components/ui/ProfileCard";

const AppAdminDashboard: React.FC = () => {
  return (
    <>
      <p className="text-center text-3xl text-red-500 p-4 my-4 border-3">
        Hello world!
      </p>
      <Loader />
      <ProfileCard />
      <Button type="primary" className="">
        Vite + React
      </Button>
    </>
  );
};

export default AppAdminDashboard;
