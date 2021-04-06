import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NextLink  from 'next/link';
import { useState } from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
const useStyles = makeStyles({
    root: (props) =>({
        width: '100%',
        backgroundColor: props[6],
        marginTop: "0",
        borderRight: "1px solid lightgray",
        borderLeft: "1px solid lightgray",
    }),
  
  })
const DocumentContent = ({ContentCards, CNDC, CHKT1, CHKT2, OLYMPIC }) => {

    const classes = useStyles();
    const [color, setColor] = useState({background : "#279a97", contentBackground : "#ffd373" })

    const A = (index) => {
        if(index === 1) {
            return(
                CNDC.map((index) =>(
                    <div style={{ paddingLeft:0,}} key={index.stt}>
                        
                        <p>
                        <ArrowRightAltIcon style={{ verticalAlign: "top"}}/>
                        <NextLink href={'/tai_lieu/' + index.file} exact>
                            <u style={{ cursor: "pointer", color: "darkgreen"}} >
                            {index.nd}
                            </u>
                        </NextLink>
                        </p>
                        
                    </div>
                ))
            )}
        // if(index === 2) {
        //     return(
        //         CHKT1.map((index) =>(
        //             <div style={{ paddingLeft:0}} key={index.stt}>
        //                 <p>
        //                 <ArrowRightAltIcon style={{ verticalAlign: "top"}} />
        //                 <NextLink href='/tai_lieu/abc'>
        //                     <u style={{ cursor: "pointer", color: "darkgreen"}} >
        //                     {index.nd}
        //                     </u>
        //                 </NextLink>
        //                 </p>
                        
        //             </div>
        //         ))
        //     )}
        if(index === 3) {
            return(
                CHKT2.map((index) =>(
                    <div style={{ paddingLeft:0}} key={index.stt}>
                        <p>

                        <ArrowRightAltIcon style={{ verticalAlign: "top"}} />
                        <NextLink href={'/tai_lieu/'+ index.file} exact>
                            <u style={{ cursor: "pointer", color: "darkgreen"}} >
                            {index.nd}
                            </u>
                        </NextLink>
                        </p>
                        
                    </div>
                ))
            )}
        if(index === 4) {
            return(
                OLYMPIC.map((index) =>(
                    <div style={{ paddingLeft:0}} key={index.stt}>
                        <p>
                        <ArrowRightAltIcon style={{ verticalAlign: "top"}} />
                        <NextLink href={'/tai_lieu/'+ index.file} exact>
                            <u style={{ cursor: "pointer", color: "darkgreen"}} >
                            {index.nd}
                            </u>
                        </NextLink>
                        </p>
                        
                    </div>
                ))
            )}
    }
    return (
        <div className={classes.root}  style={{ textIndent: "20px",
            letterSpacing: "2px", textAlign: "justify", backgroundColor: color.background,  }} >
            <Grid container style={{width: "100%",  }}>
                <Grid item xs={12} style={{backgroundColor: "white", minHeight: 80,
                 borderTop: "4px solid" + color.contentBackground, borderBottom: "2px solid #d75d00", 
                textAlign: "center"
                }}> 
                    <span style={{fontSize: "16px", fontFamily: "Arial", color: "darkgreen",
                            verticalAlign: "middle"
                            }}><h2>TÀI LIỆU CƠ HỌC</h2> </span>
                </Grid>
              
                    {ContentCards.map((index) => (
                    <Grid item xs={12} style={{backgroundColor: color.contentBackground,}} key={index.stt}>
                        <Paper square style={{ marginLeft: 25, marginRight: 20, marginTop: 20, 
                        paddingLeft: 15, minHeight: 75, borderRadius: "0 3px 3px 3px", 
                        textAlign: "left", borderLeft: "2px solid #d75d00", backgroundColor: "white",
                        
                        }} elevation={5}>
                            <Grid item xs={12} style={{fontSize: "14px", color: "white",
                                borderRadius: "0 3px 0px 0px",
                                fontFamily: "Arial", backgroundColor:"darkred"}}>
                                {index.nd}
                             </Grid>
                            <span style={{fontSize: "12px", fontFamily: "Arial", color: "red",
                            verticalAlign: "middle"
                            }}>
                            {A(index.stt)}
                             </span>
                        <Grid item xs={12} style={{minHeight: 10}}></Grid>
                        </Paper>    
                    

                    </Grid>
                
                    )
                    )}
            </Grid>
            <Grid item xs={12} style={{backgroundColor: color.contentBackground, minHeight: 100}}></Grid>
        </div>
    )
}
export default DocumentContent
