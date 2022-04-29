import React from 'react'
import { Grid, TextField } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/useForm';
import * as userService from "../../services/userService";
import { validate } from '@material-ui/pickers';
 
const initialFValues = {
    id: 0,
    rolename: '',
    ispublic: '',
    createddate: '',
    createdby: '',
    modifiedby: '',
    modifieddate: '',
 }

export default function UserForm() {
   
    const validationSchema  = Yup.object().shape({
        rolename: Yup.string()
          .min(2, "RoleName should be minimum 2 characters!")
          .max(100, "RoleName should be maximum 100 characters!")
          .required("RolrName is required!"),
        ispublic: Yup.string().required("Ispublic is required "),
        createddate: Yup.string().required("CreatedDate is required"),
        createdby: Yup.string().required("Createdby is required"),
        modifiedby: Yup.string().required("Modifiedby is required"),
        modifieddate: Yup.string().required("Modifieddate is required")
    });
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

   const handleSubmit = e => {
       e.preventDefault()
       if(validate()){
         userService.insertUser(values)
         resetForm()
       }
   }

return (
    <Form onsubmit={handleSubmit}>
       <Grid container spacing={2}>
       <Grid item md={6} sm={6}xs={12}>
                    <TextField
                        fullWidth
                        name="rolename"
                        label="RoleName"
                        variant='outlined'
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                  </Grid>  
                  <Grid item md={6} sm={6} xs={12}> 
                    <TextField
                        label="Craeteddate"
                        name="createddate"
                        variant='outlined'
                        value={values.createddate}
                        onChange={handleInputChange}
                        error={errors.createddate}
                    />
                </Grid>  
                <Grid item md={6} sm={6} xs={12}> 
                    <TextField
                        label="CreatedBy"
                        name="createdby"
                        variant='outlined'
                        value={values.createdby}
                        onChange={handleInputChange}
                        error={errors.createdby}
                    />
                </Grid>  
                <Grid item md={6} sm={6} xs={12}> 
                    <TextField
                        label="ModifiedBy"
                        name="modufiedby"
                        variant='outlined'
                        value={values.modifiedby}
                        onChange={handleInputChange}
                        error={errors.modifiedby}
                    />
                </Grid>  
                <Grid item md={6} sm={6} xs={12}> 
                    <TextField
                        label="ModifiedDate"
                        name="modifieddate"
                        variant='outlined'
                        value={values.modifieddate}
                        onChange={handleInputChange}
                        error={errors.modifieddate}
                    />
                </Grid>  
                   <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
         </Form>
)
}
