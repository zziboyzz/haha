import React from 'react'
import { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    input_score_calculation: () =>({
        height: "50px", 
        width: "50%", 
        textAlign: "center",
    }),
    outPutMark: {
        height: "50%",
        width: "50%", 
        borderRadius: "10px", 
        border: "2px solid darkred", 
        textAlign: "center",
    }
  })

const TinhDiem = ({color}) => {
    const classes = useStyles(color);

    const [checkIndex, setCheckIndex] = useState([false, false, false, false, false, false, false, false, false])
    const [finalMark, setFinalMark] = useState({diem_qua_trinh: "", he_so_10: "", diem_chu: "", he_4: ""})
    const [data, setData] = useState({kt1: "", kt2: "", kt3: "", lms: "", kt4: "", kt5: "", kt6: "", thao_luan: "", final_test: "" });
    const updateScore = (index, keys, value) => {
        if (isNaN(value) || value<0 || value>10){
            
            const newCheckIndex=[...checkIndex]
            newCheckIndex[index]=true
            setCheckIndex(newCheckIndex)
            }
        else{
            const newCheckIndex=[...checkIndex]
            newCheckIndex[index]=false
            setCheckIndex(newCheckIndex)
            const newData = {...data}
            newData[keys] = value
            setData(newData)
        }
        }
    const setMark = (dqt, hs10, diemchu, he4) => {
        const newFinalMark = {...finalMark};
        newFinalMark["diem_qua_trinh"] = dqt;
        newFinalMark["he_so_10"] = hs10;
        newFinalMark["diem_chu"] = diemchu;
        newFinalMark["he_4"] = he4;
        setFinalMark(newFinalMark)
    }
    
    // Làm tròn số 
    // function roundByNum(num, rounder) {
    //     var multiplier = 1/(rounder||0.5);
    //     return Math.round(num*multiplier)/multiplier;
    // }
    

    //hàm tính tổng 
    const summary = () => {
        if ( checkIndex.every(() => true)){
            const dau_diem = [+data["kt1"], +data["kt2"], +data["kt3"], +data["kt4"], +data["kt5"], +data["kt6"] ];
            var dkk = 0 ;
            var diem_trung_binh = 0;
            for (var i = 0; i <= 5; i++){
                diem_trung_binh += dau_diem[i];
                if (dau_diem[i]<= 1) 
                    dkk -= 0.5;
                else if (dau_diem[i] > 1.01 && dau_diem[i] <= 3)
                    dkk -= 0.25;  
                else if (dau_diem[i] >= 5 && dau_diem[i] <= 7.99)
                    dkk += 0.25;
                else if (dau_diem[i] > 7.99 && dau_diem[i] <= 10)
                    dkk += 0.5;
                
            }
            if (dkk < -2) dkk = -2;
            if (dkk > +2) dkk = +2;
            var dqt = ((+data["lms"] * 2 + +diem_trung_binh) / 8) + dkk + +data["thao_luan"]
            if (dqt < 0) dqt = 0;
            if (dqt > 10) dqt = 10;
            var du = dqt - parseInt(dqt);
            if (du < -0.75 && du > -1)
                dqt = parseInt(dqt) - 1
            if (du < -0.25 && du >=-0.75)
                dqt = parseInt(dqt) - 0.5
            if (du < 0 && du >= -0.25)
                dqt = parseInt(dqt)
            if (du > 0 && du < 0.25)
                dqt = parseInt(dqt)
            if (du >= 0.25 && du < 0.75)
                dqt = parseInt(dqt) + 0.5
            if (du >=0.75)
                dqt= parseInt(dqt) + 1
            
            var dtket = dqt * 0.3 + +data["final_test"] * 0.7;
            dtket = +dtket.toFixed(2)
            var diemchu;
            var he4;
            if (dtket < 4) {
                diemchu = "F";
                he4 = 0;
            }

            if (dtket >= 4 && dtket < 5){
                diemchu = "D" ;
                he4 = 1;
            } 
            if (dtket >= 5 && dtket < 5.5) {
                diemchu = "D+";
                he4 = 1.5
            }
            if (dtket >= 5.5 && dtket < 6.5) {
                diemchu = "C";
                he4 = 2
            }
            if (dtket >= 6.5 && dtket < 7 ) {
                diemchu = "C+";
                he4 = 2.5;
            }
            if (dtket >= 7 && dtket < 8 ) {
                diemchu = "B";
                he4 = 3;
            }
            if (dtket >= 8 && dtket < 8.5 ) {
                diemchu = "B+";
                he4 = 3.5;
            }
            if (dtket >= 8.5 && dtket < 9.5 ) {
                diemchu = "A";
                he4 = 4;
            }
            if (dtket >= 9.5 && dtket <= 10) {
                diemchu = "A";
                he4 = 4;
            }
            setMark(dqt, dtket, diemchu, he4)
        }
    }
    // reset
    const reset = () => {
        setData({kt1: "", kt2: "", kt3: "", lms: "", kt4: "", kt5: "", kt6: "", thao_luan: "", final_test: "" })
        setFinalMark({diem_qua_trinh: "", he_so_10: "", diem_chu: "", he_4: ""})
        setCheckIndex([false, false, false, false, false, false, false, false, false])
    }



    return (
        <Grid container  spacing={0} style={{backgroundColor:"lightgray"}}>
                    <Grid item xs={false} sm={1} md={1} lg={1}></Grid>
                    <Grid item container xs={12} sm={10} md={10} lg={10}>
                        <Paper style={{ borderRadius: "5px", width: "100%", marginTop: "50px", minHeight: "520px", border: "2px solid darkred" }}>
                            <Grid container>
                                <Grid item xs={12} style={{textAlign: "center", fontSize: "15px", marginTop:"10px"}}>
                                    <h3>Công cụ dự tính tính điểm số cho sinh viên học theo<br/> phương pháp thành thạo bắt buộc</h3>
                                </Grid> 
                                <Grid item xs={4} style={{marginTop: "20px",
                                textAlign: "right",
                                 marginLeft: "20px", fontSize: "15px"}}><b>Chọn mã học phần:</b></Grid>
                                <Grid item xs={7}>
                                    <select style={{minWidth: "20%", marginLeft: "4px",
                                    paddingTop: "5px",
                                    marginTop: "10px", 
                                    position: "static", borderBottom: "2px solid darkgreen"}}>
                                        <option aria-label="None" value="" />
                                        <option value={10}>Cơ học kĩ thuật I</option>
                                        <option value={20}>Cơ học kĩ thuật II</option>
                                    </select>
                                
                                </Grid>
                                <Grid item xs={12} style={{minHeight: "20px"}}> </Grid>

                                <Grid item xs={1}> </Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>Điểm bài KT 1</Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>Điểm bài KT 2</Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>Điểm bài KT 3</Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>Điểm LMS</Grid>
                                <Grid item xs={3}></Grid>
                                
                                <Grid item xs={1}></Grid>

                                <Grid item xs={2} style={{textAlign: "center"}}>
                                    <input className={classes.input_score_calculation }
                                    value={data["kt1"]}
                                    placeholder="None"
                                    onChange={(e)=> updateScore(0, "kt1", e.target.value)}
                                    ></input>
                                </Grid>

                                <Grid item xs={2} style={{textAlign: "center"}}>
                                    <input className={classes.input_score_calculation}
                                    value={data["kt2"]}

                                    placeholder="None"
                                    onChange={(e) => updateScore(1, "kt2", e.target.value)}
                                    ></input>
                                </Grid>

                                <Grid item xs={2} style={{textAlign: "center"}}>
                                    <input className={classes.input_score_calculation}
                                    value={data["kt3"]}
                                    placeholder="None"
                                    onChange={(e) => updateScore(2, "kt3", e.target.value)}
                                    ></input>
                                </Grid>

                                <Grid item xs={2} style={{textAlign: "center"}}>
                                    <input className={classes.input_score_calculation}
                                    value={data["lms"]}
                                    placeholder="None"
                                    onChange={(e) => updateScore(3, "lms", e.target.value)}
                                    ></input>
                                </Grid>
                                <Grid item xs={3}></Grid>


                                <Grid item xs={1}></Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>{checkIndex[0]?"invalid":""}</Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>{checkIndex[1]?"invalid":""}</Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>{checkIndex[2]?"invalid":""}</Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>{checkIndex[3]?"invalid":""}</Grid>
                                <Grid item xs={3} ></Grid>
                                

                                <Grid item xs={12} style={{minHeight: "20px"}}> </Grid>
                                <Grid item xs={1}> </Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>Điểm bài KT 4</Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>Điểm bài KT 5</Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>Điểm bài KT 6</Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>Điểm thảo luận</Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>Điểm cuối kì</Grid>
                                <Grid item xs={1}></Grid>
                                
                                <Grid item xs={1}></Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>
                                    <input 
                                    value={data["kt4"]}
                                    placeholder="None"
                                    
                                    onChange={(e) => updateScore(4, "kt4", e.target.value)}
                                    className={classes.input_score_calculation}></input>
                                </Grid>

                                <Grid item xs={2} style={{textAlign: "center"}}>
                                    <input className={classes.input_score_calculation}
                                    value={data["kt5"]}
                                    placeholder="None"
                                    onChange={(e) => updateScore(5, "kt5", e.target.value)}
                                    ></input>
                                </Grid>

                                <Grid item xs={2} style={{textAlign: "center"}}>
                                    <input className={classes.input_score_calculation}
                                    value={data["kt6"]}
                                    placeholder="None"
                                    onChange={(e) => updateScore(6, "kt6", e.target.value)}
                                    ></input>
                                </Grid>

                                <Grid item xs={2} style={{textAlign: "center"}}>
                                    <input className={classes.input_score_calculation}
                                    value={data["thao_luan"]}
                                    placeholder="None"
                                    onChange={(e) => updateScore(7, "thao_luan", e.target.value)}
                                    ></input>
                                </Grid>

                                <Grid item xs={2} style={{textAlign: "center"}}>
                                    <input className={classes.input_score_calculation}
                                    value={data["final_test"]} 
                                    placeholder="None"
                                    onChange={(e) => updateScore(8, "final_test", e.target.value)}
                                    ></input>
                                </Grid>
                                <Grid item xs={1}></Grid>


                                <Grid item xs={1}></Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>{checkIndex[4]?"invalid":""}</Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>{checkIndex[5]?"invalid":""}</Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>{checkIndex[6]?"invalid":""}</Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>{checkIndex[7]?"invalid":""}</Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>{checkIndex[8]?"invalid":""}</Grid>


                                <Grid item xs={12} style={{minHeight: "40px"}}> </Grid>

                                <Grid item xs={1}> </Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>Điểm quá trình</Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>Hệ số 10</Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>Điểm chữ</Grid>
                                <Grid item xs={2} style={{textAlign: "center"}}>Hệ 4</Grid>
                                <Grid item xs={3} ></Grid>


                                {/*Hàng kết quả*/}
                                <Grid item xs={1}></Grid>

                                <Grid item xs={2} style={{minHeight:"100px", marginLeft: "25px"}}>
                                    <Paper className={classes.outPutMark}>
                                        <p style={{verticalAlign: "middle"}}>{finalMark["diem_qua_trinh"]}</p>
                                    </Paper>
                                </Grid>

                                <Grid item xs={2}>
                                    <Paper className={classes.outPutMark}>
                                        <p style={{verticalAlign: "middle"}}>{finalMark["he_so_10"]}</p>
                                    </Paper>
                                </Grid>

                                <Grid  item xs={2} >
                                    <Paper className={classes.outPutMark}>
                                        <p style={{verticalAlign: "middle"}}>{finalMark["diem_chu"]}</p>
                                    </Paper>
                                </Grid>

                                <Grid item xs={2} >
                                    <Paper className={classes.outPutMark} >
                                        <p style={{verticalAlign: "middle"}}>{finalMark["he_4"]}</p>
                                    </Paper>
                                </Grid>

                                <Grid  style={{}} item xs={2}>
                                    <button 
                                    onClick={() => summary()}
                                    style={{height: "30%", width: "80%"
                                     , textAlign:"center", backgroundColor: "darkred", color: "white", border: "none", borderBottom: "2px solid white", borderRadius: "5px"}}
                                     >
                                        Enter
                                     </button>
                                     <button 
                                    onClick={() => reset()}
                                    style={{height: "30%", width: "80%",
                                    backgroundColor: "darkred", color: "white", border: "none", borderRadius: "5px"}}
                                     >
                                        Reset
                                     </button>
                                </Grid>
                            
                                                                
                            </Grid>
                            
                        </Paper>

                    </Grid>
                    <Grid item xs={false} sm={1} md={1} lg={1}></Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} style={{minHeight: "50px"}}></Grid>

                </Grid>
                    
    )
}

export default TinhDiem
