import React, {Component} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import GDSEButton from "../../components/common/button";

class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                id: '',
                name: '',
                address: '',
                salary: 0
            }
        }
    }

    submitCustomer = (e) => {
        let formData = this.state.formData;
        console.log("FormData " + JSON.stringify(formData))
    }

    render() {
        return (
            <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitCustomer}>
                <Grid container className="pt-2" spacing={3}>
                    <Grid item lg={12} xs={12} sm={12} md={12}>
                        <Typography variant="h2">Customer Manage</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="subtitle1">Customer Id</Typography>
                        <TextValidator
                            id="outlinedbasic"
                            placeholder="Customer Id"
                            variant="outlined"
                            size="small"
                            style={{width: '100%'}}
                            value={this.state.formData.id}
                            onChange={(e) => {
                                let formData = this.state.formData
                                formData.id = e.target.value
                                this.setState({formData})
                            }}
                            validators={['required']}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="subtitle1">Customer Name</Typography>
                        <TextValidator
                            id="outlinedbasic"
                            placeholder="Customer Name"
                            variant="outlined"
                            size="small"
                            style={{width: '100%'}}
                            value={this.state.formData.name}
                            onChange={(e) => {
                                let formData = this.state.formData
                                formData.name = e.target.value
                                this.setState({formData})
                            }}
                            validators={['required']}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="subtitle1">Customer Address</Typography>
                        <TextValidator
                            id="outlinedbasic"
                            placeholder="Customer Address"
                            variant="outlined"
                            size="small"
                            style={{width: '100%'}}
                            value={this.state.formData.address}
                            onChange={(e) => {
                                let formData = this.state.formData
                                formData.address = e.target.value
                                this.setState({formData})
                            }}
                            validators={['required']}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="subtitle1">Customer Salary</Typography>
                        <TextValidator
                            id="outlinedbasic"
                            placeholder="Customer Salary"
                            variant="outlined"
                            size="small"
                            style={{width: '100%'}}
                            value={this.state.formData.salary}
                            onChange={(e) => {
                                let formData = this.state.formData
                                formData.salary = e.target.value
                                this.setState({formData})
                            }}
                            validators={['required']}
                        />
                    </Grid>
                    <Grid container style={{marginTop: '10px'}} direction="row" justifyContent="flex-end"
                          alignItems="center">
                        <GDSEButton label="save" type="submit" size="small" color="primary" variant="contained"/>
                    </Grid>
                </Grid>
            </ValidatorForm>
        );
    }
}

export default Customers;