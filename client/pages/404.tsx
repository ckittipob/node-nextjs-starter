import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <div className="app-container">
        <div className="home-container">
          <div className="home-content">
            <h2>
                <FontAwesomeIcon icon={faSearch} size={"3x"}></FontAwesomeIcon>
            </h2>
            <Link href={"/"}>
              <a className="btn-main"> NOT FOUND</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
