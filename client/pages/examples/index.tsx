import Layout from "@/components/Layout";
import ModalContainer from "@/components/ModalContainer";
import { API_CLIENT, API_URL } from "@/config/index";
import { AppProps } from "next/dist/shared/lib/router/router";
import React, { useState } from "react";
import { IExample } from "./example-model";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import Confirmation from "@/components/Confirmation";
import {Request } from 'express';
import Cookies from "js-cookie";
interface IProps extends AppProps {
  examples: IExample[];
}
const ExamplePage = ({ examples }: IProps) => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [delExample, setDelExample] = useState("");

  const delHandler = (e: any, id: string) => {
    e.stopPropagation();
    setDelExample(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    const res = await fetch(`${API_CLIENT}/api/examples/${delExample}`, {
      method: "Delete",
      headers: {
        'Content-type': 'application/json',
        'Authorization' : Cookies.get('token') || ''
      },
    });
    if (res.status === 401) {
      router.push("/login");
    } else {
      router.push("/examples");
    }
  };

  return (
    <Layout title="Simple CRUD | Example">
      <div className="app-container">
        <div className="examples-container">
          <div className="examples-wrapper">
            <Link href={"/examples/new-example"}>
              <a className="btn-main">Create</a>
            </Link>
            {examples.length > 0 ? (
              <table className="table">
                <thead>
                  <tr>
                    <th>name</th>
                    <th>value</th>
                    <th>delete</th>
                  </tr>
                </thead>
                <tbody>
                  {examples.map((example: IExample) => (
                    <tr
                      key={example._id}
                      onClick={() => router.push(`/examples/${example._id}`)}
                    >
                      <td>{example.name}</td>
                      <td>{example.integer}</td>
                      <td>
                        <a
                          className="del-btn"
                          onClick={(e) => delHandler(e, example._id)}
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h1>No Example found</h1>
            )}
          </div>
        </div>
        <ModalContainer show={showModal} onClose={() => setShowModal(false)}>
          <Confirmation
            closeModal={() => setShowModal(false)}
            header={`DELETE`}
            content={<p>{`Do yo want to delete this item ?`}</p>}
            action={() => confirmDelete()}
            loading={false}
            disable={false}
          />
        </ModalContainer>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({req} : any) => {
  const res = await fetch(`${API_URL}/api/examples`);
  const examples = await res.json();


  return {
    props: { examples },
  };
};

export default ExamplePage;
