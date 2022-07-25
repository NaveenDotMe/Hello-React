import React, {Component, Fragment} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import GDSEButton from "../../../src/components/common/button";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: [
                {label: "Male"},
                {label: "Female"}
            ]
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Typography variant="h4" gutterBottom component="div">
                    Poster Manage
                </Typography>

                <Grid container spacing={1}>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic" label="User ID" variant="outlined" style={{width: "100%"}}/>
                    </Grid>

                    {/*<Grid item lg={6} md={6} sm={6} xs={6}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={this.state.gender}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Gender"/>}
                            getOptionLabel={
                                (option) => option.label
                            }
                            onChange={(e, value) => {
                                console.log(value.label);
                            }}
                            size="small"
                            style={{width: '100%'}}
                        />
                    </Grid>*/}

                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic" label="ID" variant="outlined" style={{width: "100%"}}/>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic" label="Title" variant="outlined" style={{width: "100%"}}/>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic" label="Body" variant="outlined" style={{width: "100%"}}/>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display: "flex"}} justifyContent="flex-end">
                        <GDSEButton size="small" label="Save" variant="contained"/>
                    </Grid>

                </Grid>
            </Fragment>
        )
    }

}

export default withStyles(styleSheet)(Posts)