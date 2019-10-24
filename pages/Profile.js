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
export default class Profile extends React.Component {
  static async getInitialProps() {
    const res = await fetch("https://localhost:3000/api/profile");
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
            <h1>This is profile page</h1>
            <h2>Personal Information</h2>
            <span>Name: {user.full_name}</span>
            <br />
            <span>Gender:{user.gender}</span>
            <br />
            <span>Address:{user.registered_address}</span>
            <br />
            <span>Blood Type:{user.bloodtype}</span>
            <br />
            <span>Marital Status:{user.marital_status}</span>
            <br />
            <br />
            <h2>Government ID Information</h2>
            <span>HDMF:{user.hdmf}</span>
            <br />
            <span>PHIC:{user.phic}</span>
            <br />
            <span>SSS:{user.sss}</span>
            <br />
            <span>TIN:{user.tin}</span>
            <br />
            <img src="/static/js.png" alt="Logo" />
          </StyledContainer>
        </Layout>
      </div>
    );
  }
}
