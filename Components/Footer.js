import React from "react";

import { makeStyles, fade } from "@material-ui/core/styles";

const useStyles = makeStyles({


})
export default function TopNavigation ({color}){
    const classes = useStyles();
    return (
        <div style={{ width: "100%",
         height: 20, textAlign: "center", 
         paddingTop: 15, fontSize: 12,
          fontFamily: "Arial", color: "white",
          backgroundColor: color.mainColor}}>
            <b>XYAZTeam present</b>
        </div>
    )
}