import Layout from "@/components/Layout";
import NumberInput from "@/components/NumberInput";
import TextInput from "@/components/TextInput";
import { API_CLIENT, API_URL } from "@/config/index";
import Cookies from "js-cookie";
import router from "next/router";
import React, { useState } from "react";
import { Form as FinalForm, Field } from "react-final-form";
import {
  combineValidators,
  isRequired,
  isNumeric,
  composeValidators,
} from "revalidate";
import {
  ExampleFormValues,
  IExample,
  IExampleFormValues,
} from "./example-model";

// Validate Form Field
const validate = combineValidators({
  name: isRequired({ message: "The event title is required" }),
  integer: composeValidators(
    isNumeric({ message: "Must be Integer" }),
    isRequired({ message: "The event title is required" })
  )(),
});

const AddExamplePage = () => {
  const [exampleState, setExampleState] = useState(new ExampleFormValues());
  const handleFinalFormSubmit = async (values: any) => {
    const { ...example } = values;
    let newExample: IExampleFormValues = {
      ...example,
    };

    console.log(newExample);

    const res = await fetch(`${API_CLIENT}/api/examples`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization' : Cookies.get('token') || ''
      },
      body: JSON.stringify(values)
    })

    if (res.status === 401) {
      router.push('/login');
    } else {
      router.push('/examples'); 
    }

  };
  return (
    <Layout title="Create Example">
      <div className="app-container">
        <div className="example-form-container">
          <div className="example-wrapper">
            <FinalForm
              validate={validate}
              initialValues={exampleState}
              onSubmit={handleFinalFormSubmit}
              render={({
                handleSubmit,
                submitting, // Loading Button (not implemented yet !!)
                submitError, // Handle with ErrorMessage Component
                invalid,
                pristine,
                dirtySinceLastSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Field name="name">
                    {({ input, meta }) => (
                      <TextInput
                        label="Name"
                        input={input}
                        meta={meta}
                        placeholder="Name"
                      />
                    )}
                  </Field>
                  <Field name="integer">
                    {({ input, meta }) => (
                      <NumberInput
                        label="Value"
                        input={input}
                        meta={meta}
                        placeholder="Value"
                      />
                    )}
                  </Field>
                  <input
                    className="btn-main"
                    disabled={(invalid && !dirtySinceLastSubmit) || pristine}
                    type="submit"
                    value="Submit"
                  />
                </form>
              )}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddExamplePage;
