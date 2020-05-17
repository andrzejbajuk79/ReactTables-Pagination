import React from 'react'

import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
 name: Yup.string()
  .min(2, 'musi miec przynajmniej 2 zxnaki')
  .max(255, 'za dlugi tekst')
  .required('Prosze wpisac imie'),
 password: Yup.string()
  .min(2, 'musi miec przynajmniej 2 zxnaki')
  .max(255, 'za dlugi tekst')
  .required('Prosze wpisac imie'),
 email: Yup.string()
  .email('nieprawidlowy email')
  .max(255, 'za dlugi tekst')
  .required('Prosze wpisac email'),
})

const Formik5 = () => (
 <div>
  <h1>Any place in your app!</h1>
  <Formik
   initialValues={{email: '', password: ''}}
   validationSchema={validationSchema}
   onSubmit={(values, {setSubmitting}) => {
    setTimeout(() => {
     alert(JSON.stringify(values, null, 2))
     setSubmitting(false)
    }, 400)
   }}
  >
   {({isSubmitting}) => (
    <Form>
     <Field type="email" name="email" />
     <ErrorMessage name="email" component="div" />
     <Field type="password" name="password" />
     <ErrorMessage name="password" component="div" />
     <button type="submit" disabled={isSubmitting}>
      Submit
     </button>
    </Form>
   )}
  </Formik>
 </div>
)

export default Formik5
