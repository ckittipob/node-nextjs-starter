import Head from "next/head";
import Navbar from "./navbar";
import ModalContainer from "./ModalContainer";

interface IProps {
  title: string;
  keywords: string;
  description: string;
  children: JSX.Element;
}
const Layout = ({ title, keywords, description, children }: IProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Navbar />
      {children}
    </>
  );
};

Layout.defaultProps = {
  title: "Simple CRUD",
  description: "Simple CRUD application built with NextJS and NodeJS",
  keywords: "nextjs, nodejs, simple application, crud",
};

export default Layout;
