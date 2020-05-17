import React from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'
const Error = ({touched, message}) => {
 if (!touched) {
  return <div className="form-message invalid">&nbsp;</div>
 }
 if (message) {
  return <div className="form-message invalid">{message}</div>
 }
 return <div className="form-message valid">all good</div>
}

const validationSchema = Yup.object().shape({
 name: Yup.string()
  .min(2, 'musi miec przynajmniej 2 zxnaki')
  .max(255, 'za dlugi tekst')
  .required('Prosze wpisac imie'),
 email: Yup.string()
  .email('nieprawidlowy email')
  .max(255, 'za dlugi tekst')
  .required('Prosze wpisac email'),
})

const Formik4 = () => {
 return (
  <div className="editor-page">
   <div className="container-page">
    <div className="row">
     <div className="col-md-10 offset-md-1 col-xs-12">
      <Formik
       validationSchema={validationSchema}
       initialValues={{name: '', email: ''}}
       onSubmit={(values, {setSubmitting, resetForm}) => {
        console.log('alert')

        setSubmitting(true)
        // resetForm()
        setTimeout(() => {
         alert(JSON.stringify(values, null, 2))
         resetForm()
         setSubmitting(false)
        }, 1000)
       }}
      >
       {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setSubmitting,
        isSubmitting,
       }) => (
        <form onSubmit={handleSubmit}>
         <div className="input-row">
          <label htmlFor="name" />
          <input
           type="text"
           name="name"
           id="name"
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.name}
           className={touched.name && errors.name ? 'has-error' : ''}
          />
          <Error touched={touched.name} message={errors.name} />
         </div>
         <div className="input-row">
          <label htmlFor="email" />
          <input
           type="email"
           name="email"
           id="email"
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.email}
           className={touched.email && errors.email ? 'has-error' : ''}
          />
          <Error touched={touched.email} message={errors.email} />
         </div>

         <button
          className="btn btn-lg pull-xs-right btn-primary"
          type="submit"
          disabled={isSubmitting}
         >
          Submit
         </button>
        </form>
       )}
      </Formik>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Formik4
