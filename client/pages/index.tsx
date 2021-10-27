import Layout from "@/components/Layout";
import Link from "next/link";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HomePage = () => {
  return (
    <Layout>
      <div className="app-container">
        <div className="home-container">
          <div className="home-content">
            <h2>
              <FontAwesomeIcon
                icon={faClipboardList}
                size={"3x"}
              ></FontAwesomeIcon>
            </h2>
            <Link href={"/examples"}>
              <a className="btn-main"> VIEW EXAMPLES</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
