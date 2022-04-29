import React from 'react'
import { Grid, TextField } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/useForm';
import * as userService from "../../services/userService";
import { validate } from '@material-ui/pickers';
import * as Yup from "yup";

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]
 
const initialFValues = {
    id: 0,
    name: '',
    nickname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    mobile: '',
    whatsapp: '',
    profilephoto: '',
    gender: '',
    dob: '',
    country: '',
    city: '',
    roleid: '',
    googleid: '',
    facebookid: '',
    interest: '',
    channel: '',
    createdby: '',
    modifiedby: '',
    modifieddate: '',
 }

export default function UserForm() {
  
    const validationSchema = Yup.object().shape({
        name: Yup.string()
          .min(2, "Name should be minimum 2 characters!")
          .max(100, "Name should be maximum 100 characters!")
          .required("Name is required!"),
        lastname: Yup.string()
          .min(2, "lastname should be minimum 2 characters!")
          .max(100, "lastname should be maximum 100 characters!")
          .required("lastname is required!"),  
        nickname: Yup.string()
          .min(2, "nickname should be minimum 2 characters!")
          .max(100, "nickname should be maximum 100 characters!")
          .required("nickname is required!"),
        email: Yup.string()
          .email("Must be a valid email!")
          .max(100, "Email should be maximum 100 characters!")
          .required("Email is required!"),
          
        username: Yup.string()
          .min(2, "UserName should be minimum 2 charaters!")
          .max(100, "Username should be maximum 100 characters!")
          .required("UserName is required!"),  
        password: Yup.string()
              .min(7, "Password should be minimum 7 characters!")
              .max(100, "Password should be maximum 100 characters!")
              .required("Password is required!"),
        
        contact: Yup.string()
          .min(10, "Contact number should be 10 digits!")
          .max(10, "contact number should be 10 digits!")
        //   .matches(NumbersRegExp, "Must be a valid contact number!")
          .required("contact number is required!"),
        whatsapp: Yup.string()
          .required("Whatsapp number is required!"),
        profilephoto: Yup.string()
          .max(100, "ProfilePhoto should be maximum 100 characters!")
          .required("ProfilePhoto is required!"),
        dob: Yup.string().required("dob is required!"),
        roleid: Yup.string().required("RoleId is required!"),
        gender: Yup.string().required("Gender is required!"),
        country: Yup.string().required("Country is required!"),
        city: Yup.string().required("City is required!"),
        googleid: Yup.string().required("GoogleId is required!"),
        facebookid: Yup.string().required("FacebookId is required!"),
        interest: Yup.string().required("Interest is required!"),
        channel: Yup.string().required("Channel is required!"),
        createdby: Yup.string().required("Createdby is required!"),
        modifiedby: Yup.string().required("Modifiedby is required!"),
        modifieddate: Yup.string().required("ModifiedDate is required!"),
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
                        name="Name"
                        label="Name"
                        variant='outlined'
                        value={values.name}
                        onChange={handleInputChange}
                        error={errors.name}
                    />
                  </Grid>  
                  <Grid item md={6} sm={6} xs={12}>
                    <TextField 
                         fullWidth
                         name="nickname"
                         label="NickName"
                         variant='outlined'
                         value={values.nickname}
                         onChange={handleInputChange}
                         error={errors.nickname}
                    />
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                    <TextField 
                         fullWidth
                         name="lastname"
                         label="LastName"
                         variant='outlined'
                         value={values.nickname}
                         onChange={handleInputChange}
                         error={errors.nickname}
                    />
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        variant='outlined'
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                </Grid> 
                <Grid item md={6} sm={6} xs={12}> 
                    <TextField
                        label="Mobile"
                        name="mobile"
                        variant='outlined'
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                </Grid>    
               
                <Grid item md={6} sm={6} xs={12}> 
                    <TextField
                        label="Password"
                        name="password"
                        variant='outlined'
                        value={values.password}
                        onChange={handleInputChange}
                        error={errors.password}
                    />
                </Grid>    
                <Grid item md={6} sm={6} xs={12}> 
                    <TextField
                        label="Whatsapp"
                        name="whatsapp"
                        variant='outlined'
                        value={values.whatsapp}
                        onChange={handleInputChange}
                        error={errors.whatsapp}
                    />
                </Grid>
                
                <Grid item md={6} sm={6} xs={12}>
                    <TextField.RadioGroup
                        name="gender"
                        label="Gender"
                        variant="outlined"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                </Grid>  
                <Grid item md={6} sm={6} xs={12}> 
                    <TextField
                        label="Dob"
                        name="dob"
                        variant='outlined'
                        value={values.dob}
                        onChange={handleInputChange}
                        error={errors.dob}
                    />
                </Grid>  
                <Grid item md={6} sm={6} xs={12}> 
                    <TextField
                        label="Country"
                        name="country"
                        variant='outlined'
                        value={values.country}
                        onChange={handleInputChange}
                        error={errors.country}
                    />
                </Grid>  
                <Grid item md={6} sm={6} xs={12}> 
                    <TextField
                        label="City"
                        name="city"
                        variant='outlined'
                        value={values.city}
                        onChange={handleInputChange}
                        error={errors.city}
                    />
                </Grid>  
                <Grid item md={6} sm={6} xs={12}> 
                    <TextField
                        label="Roleid"
                        name="roleid"
                        variant='outlined'
                        value={values.roleid}
                        onChange={handleInputChange}
                        error={errors.roleid}
                    />
                </Grid>  
                <Grid item md={6} sm={6} xs={12}> 
                    <TextField
                        label="ProfilePhoto"
                        name="profilephoto"
                        variant='outlined'
                        value={values.profilephoto}
                        onChange={handleInputChange}
                        error={errors.profilephoto}
                    />
                </Grid>  
                <Grid item md={6} sm={6} xs={12}> 
                    <TextField
                        label="Interest"
                        name="interest"
                        variant='outlined'
                        value={values.interest}
                        onChange={handleInputChange}
                        error={errors.interest}
                    />
                </Grid>  
                <Grid item md={6} sm={6} xs={12}> 
                    <TextField
                        label="GoogleId"
                        name="googleid"
                        variant='outlined'
                        value={values.googleid}
                        onChange={handleInputChange}
                        error={errors.googleid}
                    />
                </Grid>  
                <Grid item md={6} sm={6} xs={12}> 
                    <TextField
                        label="FacebookId"
                        name="facebookId"
                        variant='outlined'
                        value={values.facebookid}
                        onChange={handleInputChange}
                        error={errors.facebookid}
                    />
                </Grid>  
                <Grid item md={6} sm={6} xs={12}> 
                    <TextField
                        label="Channel"
                        name="channel"
                        variant='outlined'
                        value={values.channel}
                        onChange={handleInputChange}
                        error={errors.channel}
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
