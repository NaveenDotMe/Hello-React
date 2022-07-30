import React, {Component, Fragment} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GDSEButton from "../../../src/components/common/button";
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import PostService from "../../services/PostService";
import GDSESnackBar from "../../components/snackBar";
import {DataGrid} from "@mui/x-data-grid";
import BasicPostTable from "./table";


class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userId: "",
                Id: "",
                title: "",
                body: ""
            },
            alert: false,
            message: '',
            severity: '',

            //ForTable
            /*columns: [
                {field: 'userId', headerName: 'User ID', type: 'number', width: 70},
                {field: 'Id', headerName: 'ID', type: 'number', width: 130},
                {field: 'title', headerName: 'Title', width: 130},
                {field: 'body', headerName: 'Body', width: 90,},

                /!*{
                    field: 'fullName',
                    headerName: 'Full name',
                    description: 'This column has a value getter and is not sortable.',
                    sortable: false,
                    width: 160,
                    valueGetter: (params) =>
                        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
                },*!/

            ]*/
        }
    }

    async loadData() {
        let res = await PostService.fetchPosts();
        if (res.status === 200) {
            this.setState({
                loaded: true,
                data: res.data
            })
            console.log("res: " + JSON.stringify(res))
        } else {
            console.log("error: " + res)
        }
    }

    componentDidMount() {
        console.log("Post Screen Mounted!");
        this.loadData();
    }

    handleSubmit = async () => {
        console.log("Save Button Clicked")
        console.log(this.state.formData)
        let formData = this.state.formData
        let response = await PostService.createPost(formData);
        if (response.status === 201) {
            this.setState({
                alert: true,
                message: "Post Crated Successfully",
                severity: "success"
            })
        } else {
            this.setState({
                alert: true,
                message: "Post Crated Unsuccessfully",
                severity: "error"
            })
        }
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
                    {/*<Grid container spacing={0.5}>
                        <DataGrid
                            // rows={rows}
                            columns={this.state.column}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </Grid>*/}
                </ValidatorForm>

                {this.state.loaded &&
                <Grid container spacing={0.5} style={{height: 400, width: '100%', marginTop: '50px'}}>
                    <BasicPostTable data={this.state.data}/>
                </Grid>
                }

                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({open: false})
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
            </Fragment>
        )
    }
}

export default withStyles(styleSheet)(Posts)