import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { toolbarPlugin, ToolbarSlot } from '@react-pdf-viewer/toolbar';
import { RenderCurrentScaleProps, RenderZoomInProps, RenderZoomOutProps } from '@react-pdf-viewer/zoom';
import { getFilePlugin, RenderDownloadProps } from '@react-pdf-viewer/get-file';
import { fullScreenPlugin, RenderEnterFullScreenProps } from '@react-pdf-viewer/full-screen';
import { Worker } from '@react-pdf-viewer/core'; // install this library
import Grid from '@material-ui/core/Grid';
import {getAllPostIds, getSinTaxPDF} from "../../Lib/posts";
interface CustomToolbarExampleProps {
    postLink: string;
    fileDirect: string;
    color: string;
}

const CustomToolbarExample: React.FC<CustomToolbarExampleProps> = ({ postLink, fileDirect, color}) => {
    const toolbarPluginInstance = toolbarPlugin();
    const { Toolbar } = toolbarPluginInstance;
    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance;
    const fullScreenPluginInstance = fullScreenPlugin();
    const { EnterFullScreen } = fullScreenPluginInstance;
    return (
    <Grid container>
      <Grid item xs={false} sm={1} md={1} lg={1} style={{backgroundColor:"lightgray"}} >                        
      </Grid>
      <Grid item container xs={12} sm={11} md={8} lg={8} style={{paddingLeft: "0px", backgroundColor:"white"}} >
        <Grid item container xs = {12} style={{minHeight: "50px"}}></Grid>
        <Grid item container xs = {12} style={{minHeight: "600px"}}>
        <div
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                width: "100%",
                height: '100%',
            }}
        >
            <div
                style={{
                    alignItems: 'center',
                    backgroundColor: '#eeeeee',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    padding: '4px',
                }}
            >
                <Toolbar>
                {
                    (props: ToolbarSlot) => {
                        const {
                             CurrentScale,
                             ZoomIn, ZoomOut,
                        } = props;
                        return (
                            <>
                                <div style={{ padding: '0px 2px' }}>
                                    <ZoomOut>
                                    {
                                        (props: RenderZoomOutProps) => (
                                            <button
                                                style={{
                                                    backgroundColor: 'darkred',
                                                    border: 'none',
                                                    borderRadius: '4px',
                                                    color: '#ffffff',
                                                    cursor: 'pointer',
                                                    padding: '8px',
                                                }}
                                                onClick={props.onClick}
                                            >
                                                Zoom out
                                            </button>
                                        )
                                    }
                                    </ZoomOut>
                                </div>
                                <div style={{ padding: '0px 2px' }}>
                                    <CurrentScale>
                                    {
                                        (props: RenderCurrentScaleProps) => (
                                            <span>{`${Math.round(props.scale * 100)}%`}</span>
                                        )
                                    }
                                    </CurrentScale>
                                </div>
                                <div style={{ padding: '0px 2px' }}>
                                    <ZoomIn>
                                    {
                                        (props: RenderZoomInProps) => (
                                            <button
                                                style={{
                                                    backgroundColor: 'darkred',
                                                    border: 'none',
                                                    borderRadius: '4px',
                                                    color: '#ffffff',
                                                    cursor: 'pointer',
                                                    padding: '8px',
                                                }}
                                                onClick={props.onClick}
                                            >
                                                Zoom in
                                            </button>
                                        )
                                    }
                                    </ZoomIn>
                                </div>
                                <div
                        style={{
                            alignItems: 'center',
                            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            padding: '4px',
                        }}
                    >
                        <Download>
                        {
                            (props: RenderDownloadProps) => (
                                <button
                                    style={{
                                        backgroundColor: 'darkred',
                                        border: 'none',
                                        borderRadius: '4px',
                                        color: '#ffffff',
                                        cursor: 'pointer',
                                        padding: '8px',
                                    }}
                                    onClick={props.onClick}
                                >
                                    Download
                                </button>
                            )
                        }
                        </Download>
                        </div>
                        <div
                            style={{
                                alignItems: 'center',
                                backgroundColor: '#eeeeee',
                                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                                display: 'flex',
                                padding: '4px',
                            }}
                        >
                            <EnterFullScreen>
                            {
                                (props: RenderEnterFullScreenProps) => (
                                    <button
                                        style={{
                                            backgroundColor: '#357edd',
                                            border: 'none',
                                            borderRadius: '4px',
                                            color: '#ffffff',
                                            cursor: 'pointer',
                                            padding: '8px',
                                        }}
                                        onClick={props.onClick}
                                    >
                                        Enter fullscreen
                                    </button>
                                )
                            }
                            </EnterFullScreen>
                        </div>
                            </>
                        )
                    }
                }
                </Toolbar>
            </div>
            <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                <Viewer
                    fileUrl={"/pdffile/"+fileDirect[postLink]+"/" + postLink + ".pdf"}
                    plugins={[
                        toolbarPluginInstance,
                        getFilePluginInstance,
                        fullScreenPluginInstance
                    ]}
                />
                </Worker>
            </div>
        </div>
         </Grid>
      </Grid>
    </Grid>
    );
};

export default CustomToolbarExample;

export async function getStaticPaths() {
   const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
}
export async function getStaticProps({params}) {
    // Fetch necessary data for the blog post using params.id
    const postLink = params.id
    const postSintax = getSinTaxPDF()
    const fileDirect = postSintax.sintax
    // const postSintax = params.sintax
    return {
      props: {
        postLink,
        fileDirect
      }
    }
  }
