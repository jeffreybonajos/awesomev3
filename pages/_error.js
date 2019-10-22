import Layout from "../components/Layout";
import Toolbar from "./Components/Navigation/Toolbar/Toolbar";
import "styled-components";
import styled from "styled-components";

const StyledError = styled.div`
  background: white;
  margin: 100px auto;
  max-width: 600px;
  height: 500px;
  text-align: center;
`;
export default () => (
  <Layout title="Error">
    <StyledError>
      <h1>Page not existed!</h1>
      <h1>Page not existed!</h1>
      <h1>Page not existed!</h1>
    </StyledError>
  </Layout>
);
