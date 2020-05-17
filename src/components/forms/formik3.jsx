import React from 'react';

import {Formik, Field, Form, useField} from 'formik';
import * as Yup from 'yup';
import {
  Card,
  Button,
  Typography,
  TextField,
  CardContent,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Box,
} from '@material-ui/core';

const initialValues = {
  fullName: '',
  initialInvestmensts: '',
  investmentsRisk: [],
  commentAboutInvestmentRisk: '',
  dependents: -1,
  acceptedTermsCondition: false,
};

const validationSchema = Yup.object ({
  fullName: Yup.string ().required ().min (2).max (100),
  initialInvestmensts: Yup.number ().required ().min (1).max (10),
  dependents: Yup.number ().required ().min (0).max (5),
  acceptedTermsCondition: Yup.boolean ().required (),
  investmentsRisk: Yup.array (
    Yup.string ().oneOf (['High', 'Medium', 'Low']).min (1)
  ),
  commentAboutInvestmentRisk: Yup.mixed ().when ('investmentsRisk', {
    is: investmentsRisk => investmentsRisk.find (el => el === 'High'),
    then: Yup.string ().required ().min (20).max (100),
    otherwise: Yup.string ().min (10).max (50),
  }),
});

const MyCheckBox = ({...props}) => {
  const [field] = useField (props);
  return (
    //
    <FormControlLabel {...field} {...props} control={<Checkbox />} />
  );
};
const Formik3 = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">New Account</Typography>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={(values, formikHelpers) => {
            console.log ('cccccc', formikHelpers);
          }}
        >
          {({values, errors, touched, isSubmitting}) => (
            <Form>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="fullName" as={TextField} label="Full Name" />
                  {touched.fullName && errors.fullName}
                  <Field
                    name="initialInvestmensts"
                    type="number"
                    as={TextField}
                    label="Investemnts Risk"
                  />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  {' '}
                  <div>
                    <h3>Investments Risk</h3>
                    <div className="checkboxes">
                      <MyCheckBox
                        name="investmentsRisk"
                        value="High"
                        label="High"
                      />
                      <MyCheckBox
                        name="investmentsRisk"
                        value="Medium"
                        label="Medium"
                      />
                      <MyCheckBox
                        name="investmentsRisk"
                        value="Low"
                        label="Low"
                      />
                      <MyCheckBox
                        name="investmentsRisk"
                        value="Very-Low"
                        label="Low - Safe"
                      />
                    </div>
                  </div>
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  {' '}
                  <div>
                    <h3>Comment aboutInvestments Risk</h3>
                    <div className="checkboxes">
                      <Field
                        name="commentAboutInvestmentRisk"
                        as={TextField}
                        multiline
                        rows={4}
                      />
                      {' '}
                    </div>
                  </div>
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  {' '}
                  <div>
                    <h3>Depend Investments Risk</h3>
                    <div className="checkboxes">
                      <Field name="dependents" as={TextField} select>
                        <MenuItem value={-1}>Select ...</MenuItem>
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                      </Field>
                    </div>
                  </div>
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  {' '}
                  <div>
                    <h3>Conditions</h3>
                    <div className="checkboxes">
                      <MyCheckBox
                        name="acceptedTermsCondition"
                        label="Accept term and Conditions"
                      />
                    </div>
                  </div>
                </FormGroup>
              </Box>
              <Button //
                disabled={isSubmitting}
                type="submit"
              >
                submit
              </Button>
              <pre>{JSON.stringify (values, null, 4)}</pre>}{' '}
              <pre>{JSON.stringify (errors, null, 4)}</pre>}{' '}
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default Formik3;
