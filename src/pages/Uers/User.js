import React from 'react'
import UserForm from './UserForm'
import PageHeader from "../../components/PageHeader";
//import { PeopleOutlineTwoToneIcon } from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spcing(3),
    }
}))

export default function Users() {
    const classes = useStyles();


    return(
        <>
           <PageHeader
                title="New User"
                subTitle="Form design with validation"
                //icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <UserForm />
            </Paper>
           
        </>
    )};