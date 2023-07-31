import Layout from "../components/Layout";
import "../style/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
