import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles({
  index_content: {
    height: "100%",
    borderLeft: "2px solid lightgray",
    borderRadius: 2,
    marginTop: 2,
    // padding: 5,
    // backgroundColor: "#238fff",
  }
})
export default function Home({color}) {
  const classes = useStyles();
  return (
    <div style={{top: 52, position: "fixed", left: "78%", zIndex: 999,
     height: "550px",
      width: "21.9%"}}>
              <Hidden smDown>
              <Paper elevation={5}
              style={{ width: "100%", height: "60%",
                borderTop: "10px solid " + color.mainColor,
               borderRight: "2px solid " + color.mainColor,
               backgroundColor: "white"}}>
                        Chat 
              </Paper>
              </Hidden>
    </div>
    
  )
}
