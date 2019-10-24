<<<<<<< HEAD
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import Toolbar from "../pages/Components/Navigation/Toolbar/Toolbar";

import "styled-components";
import styled from "styled-components";
import Aux from "../hoc/Aux";

Router.onRouteChangeStart = url => {
  console.log(url);
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const StyledWrapper = styled.div`
  background: #f2f2f2
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export default ({ children }) => (
  <div>
    <Aux>
      <Head>
        <title>OSnetV3.0</title>
      </Head>
      <Toolbar />
      <StyledWrapper>{children}</StyledWrapper>

      <footer>&copy; {new Date().getFullYear()}</footer>
    </Aux>
  </div>
);
=======
import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
  };
  
  const Layout = props => (
    <div style={layoutStyle}>
      <Header />
      {props.content}
    </div>
  );
  
  export default Layout;
>>>>>>> update102419
