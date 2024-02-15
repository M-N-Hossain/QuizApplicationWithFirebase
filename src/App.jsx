// internal import
import "./styles/app.css";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Quiz from "./components/pages/Quiz";
import Result from "./components/pages/Result";

function App() {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <Quiz /> */}
      <Result />
    </Layout>
  );
}

export default App;
