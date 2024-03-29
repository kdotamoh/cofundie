import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import styled from "styled-components";
import axios from "axios";
import { space } from "styled-system";

import { COLORS } from "app-constants";
import { Button } from "components/styled";

const Form = styled.form`
  font-size: 120%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Label = styled.label`
  width: 100%;
  text-align: left;
  margin-top: 1rem;
  margin-top: 1.5rem;
  display: block;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 80%;
  }
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

  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
    font-size: 80%;
  }
`;

const H3 = styled.h3`
  ${space}
  text-align: center;

  @media (max-width: 768px) {
    font-size: 120%;
  }
`;

const Error = styled.div`
  margin-top: 1rem;
  width: 100%;
  text-align: left;
  color: red;
  font-size: 70%;
`;

const Success = styled.div`
  text-align: center;
  width: 70%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const initialValues = {
  full_name: "",
  email: "",
  phone_number: "",
};

const ValidationSchema = Yup.object().shape({
  full_name: Yup.string().required("Please enter your full name"),
  email: Yup.string().email().required("Please enter a valid email address"),
  phone_number: Yup.number().required("Please enter a valid phone number"),
});

const WaitListForm = () => {
  const [status, setStatus] = React.useState("unsubmitted");
  const history = useHistory();

  const url = `https://cofundieapp.herokuapp.com/public/autowebsite/new_waitlist`;

  // const handleSubmit = async (data) => {};

  return (
    <>
      {status === "unsubmitted" && (
        <Formik
          initialValues={initialValues}
          validationSchema={ValidationSchema}
          onSubmit={async (values) => {
            try {
              let res = await axios({
                method: "POST",
                url,
                data: values,
              });
              if (res.status > 199 && res.status < 299) {
                setStatus("submitted");
              }
            } catch (err) {
              console.error("Something went wrong");
              // setStatus("unsubmitted");
              setStatus("error");
            }
          }}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            isSubmitting,
          }) => (
            <>
              <H3 mt="4rem">Join the Waitlist</H3>
              <Form onSubmit={handleSubmit}>
                <Label>Full name</Label>
                <Input
                  name="full_name"
                  onChange={handleChange}
                  value={values.fullName}
                  placeholder="John Sylvester"
                />
                {errors.fullName && touched.fullName ? (
                  <Error id="feedback">{errors.fullName}</Error>
                ) : null}

                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="john.sylvester@gmail.com"
                />
                {errors.email && touched.email ? (
                  <Error id="feedback">{errors.email}</Error>
                ) : null}

                <Label>Phone number</Label>
                <Input
                  name="phone_number"
                  onChange={handleChange}
                  value={values.phoneNumber}
                  placeholder="265-564-000"
                />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <Error id="feedback">{errors.phoneNumber}</Error>
                ) : null}

                <Button
                  my="5rem"
                  bg={COLORS.LIME}
                  color={COLORS.BLUE}
                  borderColor={COLORS.BLUE}
                  boxShadow="true"
                  type="submit"
                >
                  {isSubmitting ? "Submitting..." : "Join the Waitlist"}
                </Button>
              </Form>
            </>
          )}
        </Formik>
      )}
      {status === "submitted" && (
        <Success>
          <H3 my="4rem">You've successfully joined our Waitlist</H3>
          <p>
            Welcome to Co-fundie! New and exciting deals are coming your way.
            Don’t forget to subscribe to our newsletter to receive the best of
            our new offers.
          </p>
          <Button
            my="5rem"
            bg={COLORS.LIME}
            color={COLORS.BLUE}
            borderColor={COLORS.BLUE}
            boxShadow="true"
            onClick={() => history.push("/")}
          >
            Back to Homepage
          </Button>
        </Success>
      )}
      {status === "error" && (
        <Success>
          <H3 my="4rem">Looks like something went wrong. </H3>
          <p>Please review your data and try again.</p>
        </Success>
      )}
    </>
  );
};

export default WaitListForm;
