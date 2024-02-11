// internal import
import "./styles/app.css";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";

function App() {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <SignUp /> */}
      <Login />
    </Layout>
  );
}

export default App;
