import React from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Paper from "@material-ui/core/Paper";
import { makeStyles, fade } from "@material-ui/core/styles";
import NextLink  from 'next/link';
import AppsIcon from '@material-ui/icons/Apps';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import styles  from "./Resize.module.css";
const useStyles = makeStyles({
    app_btn: (props) =>({
        width: "80%",
        marginLeft: "10%",
        height:"75%",
        color: props.mainColor,
        outline: "none", 
        border: "none",
        borderTop: "2px solid "+ props.mainColor,
        borderRadius: "5px 5px 5px 5px",
        
        backgroundColor: "white",
        '&:active': {
            backgroundColor: "lightgray",
            }

        }),
        
    login_btn:(props) => ({
        border: "none", 
        width: "80%",
        outline: "none",
        borderRadius: 4,
        backgroundColor: "darkorange",
        height: "80%", 
        color: "white",
        '&:active': {
            backgroundColor: "lightgray",
            color: "#238000"
            }
    }),
    input_label: {
        verticalAlign: "middle",
        outline: "none",
        backgroundColor:fade("#9c9c9c", 0.2),
        borderRadius: 4, border: "none",
        height: 30, 
        width: "100%",
        // '&:active': {
        //     backgroundColor: "gray",
            
        //     }
    }

})
export default function TopNavigation ({color, toggleDrawer}){
    const classes = useStyles(color);
    return (
        <div style={{position:"fixed", width: "100%", zIndex: 5, }}>
            
            <Grid container style = {{backgroundColor: "white",
             borderBottom: "5px solid " + color.mainColor,
                height: 50,
             borderTop: "2px solid " + color.mainColor,
             borderRight: "1px solid " + color.mainColor, borderRadius: " 5px 1px 5px 5px"
             }}>
                <Grid item container xs={1} style={{ textAlign: "center", height: "100%",}} >
                    {/* <Grid item xs={1} sm={1} md={1} lg={1} style={{backgroundColor: color.mainColor,
                    borderRadius: "0px 0 0 0px"}}></Grid> */}
                    <Grid item xs={12} sm={8} md={8} lg={6} style={{position: "static", width: "100%",
                     backgroundColor: color.mainColor,
                        
                        height: "100%", textAlign: "center"
                        }}>
                        <div  elevation={6} className={classes.app_btn + " " + styles.recolor } 
                        onClick={toggleDrawer("left", true)}>
                            <AppsIcon className={styles.menu_icon}/>
                        </div>
                            
                    </Grid>
                    <Grid item xs={false} sm={1} md={1} lg={1} style={{backgroundColor: "white",
                     borderRadius: "0 0px 0px 0", }}></Grid>
                    {/* <Grid item xs={false} sm={1} md={1} lg={1} ></Grid> */}
                    
                    
                </Grid>

                <Grid item xs={1} style={{textAlign: "left", 
                   height: "100%",
                    paddingLeft: 10,
                 }} className={styles.web_name}>
                    <a href='/' target="self" style={{textDecoration: "none"}} >
                        <b style={{ fontFamily: "'Dela Gothic One', cursive",
                        color: color.secondColor, 
                        // backgroundImage: "linear-gradient(darkred, yellow)",
                        borderRadius: 3, padding: 2,
                         cursor: "pointer" }} >AZteam</b>
                    </a>
                    
                 

                  </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={8} sm={6} md={6} lg={6} style={{ color: color.mainColor, 
                fontFamily: "Arial", paddingLeft: 20, paddingTop: 6, height: "100%"
                }}>
                    <input className={classes.input_label}
                     placeholder={"Tìm kiếm..."}
                     ></input>
                </Grid>
                
                <Grid item container xs={false} sm={1} md={1} lg={1} style={{textAlign: "right"}} >
                    <Grid item xs={false} sm={3} md={3} lg={7}></Grid>
                    <Hidden smDown>
                    <Grid item xs={false} sm={9} md={9} lg={5} style={{width: "100%", height:"100%",
                             paddingTop: 11 }}>
                        
                            <AccountBoxIcon style={{position: "static",
                             color: color.secondColor,                             
                             }}/>
                                

                    </Grid>
                    </Hidden>
                </Grid>
                <Grid item container xs={false} sm={2} md={2} lg={2} style={{textAlign: "left", 
                    }}>
                    <Grid item xs={false} sm={6} md={6} lg={6} 
                    style={{textAlign: "left", paddingTop: 10,
                    borderRight: "1px solid " + color.mainColor, 
                    }}
                     >
                        <Hidden smDown>
                        <p style={{
                        fontSize: 10,
                         color: color.secondColor}}>Chưa đăng nhập</p>
                        </Hidden>
                    </Grid>
                    <Grid item xs={false} sm={6} md={6} lg={6} style={{ height: "100%",
                    width: "100%", textAlign: "center",
                     paddingTop: 7,
                     }} >
                        <Hidden xsDown>
                            <a href="/" target="_blank">
                            <button className={classes.login_btn}><b>Login</b></button>
                            </a>
                            
                        </Hidden>
                    </Grid>
                    
                </Grid>
            </Grid>
        </div>
    )
}