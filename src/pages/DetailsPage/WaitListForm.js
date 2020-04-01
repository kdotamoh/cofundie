import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { space } from "styled-system";

import { COLORS } from "app-constants";
import { Button } from "components/styled";

const initialValues = {
  fullName: "",
  email: "",
  phoneNumber: ""
};

const ValidationSchema = Yup.object().shape({
  fullName: Yup.string().required("Please enter your fullname"),
  email: Yup.string()
    .email()
    .required("Please enter a valid email address"),
  phoneNumber: Yup.number().required("Please enter a valid phone number")
});

const Form = styled.form`
  font-size: 120%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 0 auto;
`;

const Label = styled.label`
  width: 100%;
  text-align: left;
  margin-top: 1rem;
  margin-top: 1.5rem;
  display: block;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  border: 2px solid ${COLORS.BLUE};
  background-color: rgba(214, 254, 33, 0.1);
  padding: 2.5rem 3.5rem;
  border-radius: 4px;
  font-size: 100%;

  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;

const H3 = styled.h3`
  ${space}
  text-align: center;
`;

const WaitListForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={({ values }) => {
        try {
          console.log(values);
        } catch (err) {
          console.log("Something went wrong");
        }
      }}
    >
      {({ values, handleChange }) => (
        <>
          <H3 mt="4rem">Join the Waitlist</H3>
          <Form>
            <Label>Full name</Label>
            <Input
              name="fullName"
              onChange={handleChange}
              value={values.fullName}
              placeholder="John Sylvester"
            />

            <Label>Email</Label>
            <Input
              name="email"
              onChange={handleChange}
              value={values.email}
              placeholder="john.sylvester@gmail.com"
            />

            <Label>Phone number</Label>
            <Input
              name="phoneNumber"
              onChange={handleChange}
              value={values.phoneNumber}
              placeholder="265-564-000"
            />

            <Button
              my="5rem"
              bg={COLORS.LIME}
              color={COLORS.BLUE}
              borderColor={COLORS.BLUE}
              boxShadow="true"
            >
              Join the Waitlist
            </Button>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default WaitListForm;
