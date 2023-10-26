// This file will be used for GLOBAL CSS styles to be applied on the whole application
// Any styles imported in _app.js will be applied globally, to all pages of the application.
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}