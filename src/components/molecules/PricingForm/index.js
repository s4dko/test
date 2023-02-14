import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Typography,
  Grid,
  Paper,
  Button
} from "@mui/material";
import {Form, Field} from "react-final-form";

import InputField from "@atoms/InputField";
import SelectField from "@atoms/SelectField"

import '@molecules/PricingForm/index.module.css'

function PricingForm() {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/success");
  };

  return (
      <Form
        onSubmit={onSubmit}
        initialValues={{
          autoMarkup: 0
        }}
        // validate={validate}
        render={({handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <Paper sx={{p: 5}}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant={"h5"}>
                    Pricing
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Field
                    name="autoMarkup"
                    label="Auto Markup?"
                    required={true}
                    fullWidth={true}
                    options={[
                      {
                        name: 'No',
                        value: 0
                      },
                      {
                        name: 'Yes',
                        value: 1
                      }
                    ]}
                    component={SelectField}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    name="stickerPrice"
                    label="Sticker Price"
                    required={true}
                    fullWidth={true}
                    component={InputField}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    name="onlinePrice"
                    label="Online Price"
                    required={true}
                    fullWidth={true}
                    component={InputField}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    name="wholesalePrice"
                    label="Wholesale Price"
                    required={true}
                    fullWidth={true}
                    component={InputField}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    name="requiredDown"
                    label="Required Down"
                    required={true}
                    fullWidth={true}
                    component={InputField}
                  />
                </Grid>
              </Grid>
            </Paper>

            <Grid container justifyContent={'flex-end'} sx={{mt: 2}}>
              <Grid item>
                <Button type='submit' variant="contained">
                  Save & Close
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      />
  );
}

export default PricingForm;
