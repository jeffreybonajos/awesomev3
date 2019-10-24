import { getUserHomepage } from "../lib/Auth";
import Layout from "../components/Layout";
import SideDrawer from "../pages/Components/Navigation/SideDrawer/SideDrawer";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";
const StyledContainer = styled.div`
  background: white;
  margin: 100px auto;
  max-width: 600px;
  height: 500px;
  text-align: center;
`;
const MainTitle = styled.h1`
  font-size: 50px;
  -webkit-transition-duration: 1s;
  transition-duration: 1s;
  -webkit-transition-timing-function: ease-in-put;
  transition-timing-function: ease-in-put;
  font-weight: 200;
  font-family: sans-serif;
  color: #ff6123;
`;
export default class HomePage extends React.Component {
  static async getInitialProps() {
    const res = await fetch("http://localhost:3000/api/profile");
    const data = await res.json();
    return { user: data };
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <Layout>
          <SideDrawer full_name={user.full_name} position={user.department} />
          <StyledContainer>
            <MainTitle>AWESOME OS </MainTitle>
            <h1>This is homepage</h1>
            <img src="/static/js.png" alt="Logo" />
          </StyledContainer>
        </Layout>
      </div>
    );
  }
}
