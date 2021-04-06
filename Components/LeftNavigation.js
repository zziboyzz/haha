import React from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import NextLink from 'next/link';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import HomeIcon from '@material-ui/icons/Home';
const useStyles = makeStyles({
    btn_css: {
        cursor: "pointer",
        border: "none", 
        width: "63%",
        paddingTop: 4, 
        outline: "none",
        paddingBottom: 8,
        borderRadius: 10,
        height: "80%",
        '&:active': {
            backgroundColor: "lightgray",
            }


    },
    help_btn: (props) => ({
        color: props.mainColor,
        '&:active': {
            color: "red",
            }
    })

})
export default function TopNavigation ({color}){
    
    const classes = useStyles(color);
    return (
        <Hidden xsDown>
            <div style={{position: "fixed", top: 50, zIndex: 5,
            borderRight: "2px solid " + color.mainColor, 
            
             backgroundColor: "white",
             height: "100%", width: 55}}>

                <Grid container spacing={0}>
                    <Grid item xs={12} style={{textAlign: "center", minHeight: "50px"}}>
                    </Grid>

                    <Grid item xs={12} style={{textAlign: "center", color: "white",
                    }}>
                        <NextLink href='/' exact >
                        <button className={classes.btn_css}>
                            <HomeIcon style={{color: color.secondColor}}/>
                        </button>
                        </NextLink>
                        
                        <br/>
                                                
                    </Grid>

                    <Grid item xs={12} style={{textAlign: "center", minHeight: "50px"}}>
                    <p style={{color: color.mainColor, fontSize: 11 }}>
                        <b>Trang chủ</b>
                    </p>
                    </Grid>

                    <Grid item xs={12} style={{textAlign: "center", color: "white",
                    }}>
                        <NextLink href='/thong_bao' exact>
                            <button className={classes.btn_css}>
                                <NotificationsActiveIcon style={{color: color.secondColor}}/>
                            </button>
                        </NextLink> 
                    </Grid>

                    <Grid item xs={12} style={{textAlign: "center", minHeight: "50px"}}>
                    <p style={{color: color.mainColor, fontSize: 11 }}>
                        <b>
                        Thông báo
                        </b>
                    </p>
                    </Grid>

                    <Grid item xs={12} style={{textAlign: "center", color: "white"}}>
                    <NextLink href='/bai_giang' exact>
                        <button className={classes.btn_css}>
                            <VideoLibraryIcon style={{color: color.secondColor}}/>
                        </button>
                    </NextLink>
                    </Grid>

                    <Grid item xs={12} style={{textAlign: "center", minHeight: "50px"}}>
                    <p style={{color: color.mainColor, fontSize: 11 }}>
                        <b>Bài giảng</b>
                    </p>
                    </Grid>

                    <Grid item xs={12} style={{textAlign: "center", color: "white"}}>
                    <NextLink href='/tai_lieu' exact>
                        <button className={classes.btn_css}>
                            <MenuBookIcon style={{color: color.secondColor}}/>
                        </button>
                    </NextLink>
                        
                    </Grid>

                    <Grid item xs={12} style={{textAlign: "center", minHeight: "50px"}}>
                    <p style={{color:color.mainColor, fontSize: 11 }}>
                        <b>Tài liệu</b>
                    </p>
                    </Grid>

                    <Grid item xs={12} style={{textAlign: "center", color: "white"}}>
                        <NextLink href='/tinh_diem' exact>
                            <button className={classes.btn_css}>
                                <CheckBoxIcon style={{color: color.secondColor}}/>
                            </button>
                        </NextLink>
                    </Grid>
                    <Grid item xs={12} style={{textAlign: "center", minHeight: "50px"}}>
                        <p style={{color: color.mainColor, fontSize: 11 }}>
                            <b>Tính điểm</b>
                        </p>
                    </Grid>

                    <Grid item xs={12} style={{textAlign: "center", color: "white"}}>
                    
                    
                            <div className={classes.help_btn}>
                                <HelpOutlineIcon />
                            </div>
                    </Grid>
                </Grid>
            </div>
        </Hidden>

    )}