import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "antd";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className="text-3xl text-red-500 p-4 my-4 border-3">Hello world!</p>
      <Button type="primary" className="">
        Vite + React
      </Button>
    </>
  );
}

export default App;
