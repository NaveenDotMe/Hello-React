import React, {Component, Fragment} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GDSEButton from "../../../src/components/common/button";
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userId: "",
                Id: "",
                title: "",
                body: ""
            }
        }
    }

    handleSubmit() {
        console.log("Save Button Clicked")
        console.log(this.state.formData)
    }

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Typography variant="h4" gutterBottom component="div">
                    Poster Manage
                </Typography>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                    <Grid container spacing={1}>
                        <Grid item lg={6} md={6} sm={6} xs={6}>
                            <TextValidator
                                id="outlined-basic"
                                label="User ID"
                                placeHolder="userId"
                                variant="outlined"
                                style={{width: "100%"}}
                                validators={['required']}
                                value={this.state.formData.userId}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.userId = e.target.value
                                    this.setState({formData})
                                }
                                }
                            />
                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xs={6}>
                            <TextValidator
                                id="outlined-basic"
                                label="ID"
                                placeHolder="Id"
                                variant="outlined"
                                style={{width: "100%"}}
                                validators={['required']}
                                value={this.state.formData.Id}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.Id = e.target.value
                                    this.setState({formData})
                                }
                                }
                            />
                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xs={6}>
                            <TextValidator
                                id="outlined-basic"
                                label="Title"
                                placeHolder="title"
                                variant="outlined"
                                style={{width: "100%"}}
                                validators={['required']}
                                value={this.state.formData.title}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.title = e.target.value
                                    this.setState({formData})
                                }
                                }
                            />
                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xs={6}>
                            <TextValidator
                                id="outlined-basic"
                                label="Body"
                                placeHolder="body"
                                variant="outlined"
                                style={{width: "100%"}}
                                validators={['required']}
                                value={this.state.formData.body}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.body = e.target.value
                                    this.setState({formData})
                                }
                                }
                            />
                        </Grid>

                        <Grid item lg={12} md={12} sm={12} xm={12} style={{display: "flex"}} justifyContent="flex-end">
                            <GDSEButton size="small" label="Save" variant="contained" type="submit"/>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </Fragment>
        )
    }
}

export default withStyles(styleSheet)(Posts)