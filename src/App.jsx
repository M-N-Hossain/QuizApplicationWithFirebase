// internal import
import "./styles/app.css";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <Layout>
      {/* <Home /> */}
      <SignUp />
    </Layout>
  );
}

export default App;
