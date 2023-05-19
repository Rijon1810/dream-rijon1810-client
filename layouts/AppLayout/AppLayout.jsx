import Footer from "@/components/Footer";
import Header from "@/components/Header";

const AppLayout = ({ children }) => (
  <>
    <Header />
    <>{children}</>
    <Footer />
  </>
);

export default AppLayout;
