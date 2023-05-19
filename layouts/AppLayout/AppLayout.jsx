import Header from "@/components/Header";

const AppLayout = ({ children }) => (
  <>
    <Header />
    <>{children}</>
  </>
);

export default AppLayout;
