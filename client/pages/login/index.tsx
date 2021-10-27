import { AxiosInstance } from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import { Form as FinalForm, Field } from "react-final-form";
import { isRequired, combineValidators } from "revalidate";
import { FORM_ERROR } from "final-form";
import TextInput from "@/components/TextInput";
import ErrorMessage from "@/components/ErrorMessage";
import { API_URL, NEXT_URL } from "@/config/index";
import router from "next/router";
import Layout from "@/components/Layout";
import AuthContext from "@/context/AuthContext";

const validate = combineValidators({
  email: isRequired({ message: "The event title is required" }),
  password: isRequired({ message: "The event title is required" }),
});

const Login = ({ currentUser }: any) => {

  const { login, error } = useContext(AuthContext)
  
  useEffect(() => {
    if (currentUser) {
      Router.push("/examples");
    }
  }, [currentUser]);

  const loginHandler = async (value: any) => {
    

    login(value);
  };

  return (
    <Layout title="Simple CRUD | Login">
      <div className="login-container">
        <div className="login-content">
          <h2>LOGIN</h2>
          <FinalForm
            validate={validate}
            onSubmit={(value: any)  =>
              login(value).catch((error: any) => ({
                [FORM_ERROR]: error,
              }))}
            render={({
              handleSubmit,
              submitting, // Loading Button (not implemented yet !!)
              submitError, // Handle with ErrorMessage Component
              invalid,
              pristine,
              dirtySinceLastSubmit,
            }) => (
              <form className="login-form" onSubmit={handleSubmit}>
                <Field name="email">
                  {({ input, meta }) => (
                    <TextInput
                      type="text"
                      label="Email"
                      input={input}
                      meta={meta}
                      placeholder="Email"
                    />
                  )}
                </Field>
                <Field name="password">
                  {({ input, meta }) => (
                    <TextInput
                      type="password"
                      label="Password"
                      input={input}
                      meta={meta}
                      placeholder="Password"
                    />
                  )}
                </Field>
                {submitError && (
                  <ErrorMessage text="Login fail" error={submitError} />
                )}
                <input
                  disabled={(invalid && !dirtySinceLastSubmit) || pristine}
                  type="submit"
                  value="login"
                  className="btn-main"
                />
              </form>
            )}
          />
        </div>
      </div>
    </Layout>
  );
};

Login.getInitialProps = async (
  context: any,
  client: AxiosInstance,
  currentUser: any
) => {
  return {
    props: {},
  };
};
export default Login;
