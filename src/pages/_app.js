import classes from "../styles/globals.module.less";
import MyLayout from "../components/layout";
import MainContext from "../context";
import * as globalConstants from "../utils/constants";

function MyApp({ Component, pageProps }) {
  return (
    <MainContext>
      <MyLayout
        menuMode={globalConstants.MENU_MODE}
        menuTheme={globalConstants.MENU_THEME}
      >
        <Component {...pageProps} />
      </MyLayout>
    </MainContext>
  );
}

export default MyApp;
