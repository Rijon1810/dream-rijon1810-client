import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.defaultProps = {
  Component: null,
  pageProps: {},
};
