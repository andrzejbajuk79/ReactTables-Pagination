import React from 'react';

import {Formik} from 'formik';
import * as Yup from 'yup';
import Error from '../error/error';
import '../styles/style.css';

const validationSchema = Yup.object ().shape ({
  name: Yup.string ()
    .min (2, 'must have characers')
    .max (255, 'Must be shorter then255')
    .required ('Must enter a value'),
  email: Yup.string ()
    .email ('must be a valid email')
    .max (255, 'Must be shorter then255')
    .required ('Must enter an email'),
});
const Formik2 = () => {
  return (
    <div>
      <h2>Formularz 2</h2>
      <Formik
        initialValues={{name: '', email: ''}}
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm, setSubmitting}) => {
          setSubmitting (true);
          resetForm (true);
          setTimeout (() => {
            alert (JSON.stringify (values, null, 2));
            setSubmitting (false);
          }, 500);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="input-row">
                <label>Name</label>
                <input
                  type="text"
                  value={values.name}
                  onBlur={handleBlur}
                  name="name"
                  id="name"
                  onChange={handleChange}
                  className={touched.name && errors.name ? 'has-error' : null}
                />

                <Error touched={touched.name} message={errors.name} />
              </div>
              <div className="input-row">
                <label>Name</label>
                <input
                  type="email"
                  value={values.email}
                  onBlur={handleBlur}
                  name="email"
                  id="email"
                  onChange={handleChange}
                  className={touched.email && errors.email ? 'has-error' : null}
                />
                <Error touched={touched.name} message={errors.name} />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
              <div className="input-row" />
              <pre>{JSON.stringify (values, null, 2)}</pre>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Formik2;
