import React from 'react'
import DocumentContent from "../Components/DocumentContent";
import TinhDiem from "../Components/TinhDiem";
import Grid from '@material-ui/core/Grid';
import  {Props}  from "../Lib/posts";
const tai_lieu = (props) => {
  const Page = (key) =>{
    if (key === "tai_lieu") return(
      <DocumentContent ContentCards={props.ContentCards} CNDC={props.CNDC} 
                      CHKT1={props.CHKT1}
                      CHKT2={props.CHKT2}
                      OLYMPIC={props.OLYMPIC}
                      />
    )
    if (key === "tinh_diem") return(
      <TinhDiem />
    )
  }
    return (
        <div style={{borderRight: "1px solid lightgray",}}>
          <Grid container spacing={0}  >
            <Grid item xs={12} style={{minHeight: 50}}></Grid>
            <Grid item xs={false} sm={1} md={1} lg={1} style={{backgroundColor:"white"}} >                        
                </Grid>
                {/* {console.log(props.ContentCards)} */}
                <Grid item container xs={12} sm={11} md={8} lg={8} style={{paddingLeft: "0px"}} >
                     {Page(props.key_page)}
                </Grid>
            </Grid>
            {/* <Footer color={props.color}/> */}
   
        </div>
    )
}
export async function getStaticPaths() {
  return {
   paths: [
     {
     params: {
      id: "tai_lieu"}  
     }
 ],
 fallback: true,
}
}
export default tai_lieu
export function getStaticProps({params}) {
    const key_page = params.id;
    if (params.id === "tai_lieu"){
      
      const getProps = Props();
      const ContentCards = getProps.props.ContentCards;
      const CNDC = getProps.props.CNDC;
      const CHKT1 = getProps.props.CHKT1;
      const CHKT2 = getProps.props.CHKT2;
      const OLYMPIC = getProps.props.OLYMPIC;
      return {
        props: {
          //Tai_lieu props
          key_page,
          ContentCards,
          CNDC,
          CHKT1,
          CHKT2,
          OLYMPIC,
          //Tinh diem props
        },
      }
    }
    if (params.id === "tinh_diem") return{
      props: {
        //Tai_lieu props
        key_page,
        //Tinh diem props
      },
    }
  else return {
    props: {}
  };
  }
  