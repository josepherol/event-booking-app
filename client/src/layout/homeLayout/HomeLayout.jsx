import NavBar from "../../components/navbar/NavBar.jsx";
import Footer from "../../components/footer/Footer.jsx";

const HomeLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
