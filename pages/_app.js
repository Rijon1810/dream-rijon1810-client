import "../styles/tailwind.css";
import "../styles/slick.css";
import AppLayout from "@/layouts/AppLayout";

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <div className="h-[110px]" />
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
