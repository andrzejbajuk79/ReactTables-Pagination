import React from 'react';
import {Formik, Field, Form, useField, FieldArray} from 'formik';
import * as yup from 'yup';
import {
 TextField,
 Button,
 Checkbox,
 Radio,
 FormControlLabel,
 Select,
 MenuItem,
} from '@material-ui/core';
const validationSchema = yup.object({
 firstName: yup
  .string()
  .required()
  .max(10),
 pets: yup.array().of(
  yup.object({
   name: yup.string().required(),
  })
 ),
});

const MyRadio = ({label, ...props}) => {
 const [field] = useField(props);
 return (
  //
  <FormControlLabel {...field} control={<Radio />} label={label} />
 );
};
const MyTextField = ({placeholder, ...props}) => {
 const [field, meta] = useField(props);
 const errorText = meta.error && meta.touched ? meta.error : '';
 return (
  //
  <TextField
   {...field}
   error={!!errorText}
   helperText={errorText}
   placeholder={placeholder}
  />
 );
};
export const Formik1 = () => {
 return (
  <div>
   <h2>Formularz</h2>
   <Formik //
    initialValues={{
     firstName: '',
     lastName: '',
     isTall: false,
     cookies: [],
     yogurt: '',
     pets: [{type: 'cat', name: 'Nutek', id: '' + Math.random()}],
    }}
    validationSchema={validationSchema}
    onSubmit={(data, {setSubmitting}) => {
     setSubmitting(true);
     setSubmitting(false);
    }}
   >
    {({values, isSubmitting, errors}) => (
     <Form>
      <MyTextField placeholder="firstName" name="firstName" type="input" />

      <div>
       <MyTextField placeholder="lastName" name="lastName" type="input" />
      </div>
      <Field name="isTall" type="checkbox" as={Checkbox} />
      <div>cookies:</div>
      <Field name="cookies" type="checkbox" value="chocolate" as={Checkbox} />
      <Field name="cookies" type="checkbox" value="banana" as={Checkbox} />
      <Field name="cookies" type="checkbox" value="truskawka" as={Checkbox} />
      <div>Yogurt</div>

      <div>
       <MyRadio name="yogurt" type="radio" value="peach" label="peach" />
       <MyRadio name="yogurt" type="radio" value="peach2" label="peach2" />
       <MyRadio name="yogurt" type="radio" value="peach3" label="peach3" />
      </div>
      <FieldArray name="pets">
       {arrayHelpers => (
        <div>
         <Button
          onClick={() =>
           arrayHelpers.push({
            type: 'frog',
            name: '',
            id: '' + Math.random(),
           })
          }
         >
          Add Pet
         </Button>
         {values.pets.map((pet, index) => {
          return (
           <div key={pet.id}>
            <MyTextField placeholder="petname" name={`pets.${index}.name`} />
            <Field name={`pets.${index}.type`} type="select" as={Select}>
             <MenuItem value="cat">cat</MenuItem>
             <MenuItem value="dog">dog</MenuItem>
             <MenuItem value="fish">fish</MenuItem>
            </Field>
            <Button onClick={() => arrayHelpers.remove(index)}>Remove</Button>
           </div>
          );
         })}
        </div>
       )}
      </FieldArray>
      <div>
       <Button //
        disabled={isSubmitting}
        type="submit"
       >
        submit
       </Button>
      </div>

      <div>
       <pre>{JSON.stringify(values, null, 2)}</pre>
       <pre>{JSON.stringify(errors, null, 2)}</pre>
      </div>
     </Form>
    )}
   </Formik>
  </div>
 );
};

export default Formik1;
