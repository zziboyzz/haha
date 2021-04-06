
// import { useState } from "react";
export function Props() {

  const ContentCards = [
    /*********************************************/
    {nd: "CÁC NỘI DUNG CHUNG",
    stt: 1},
    /*********************************************/                 
    {nd: "CƠ HỌC KĨ THUẬT I",
    stt: 2},
    /*********************************************/              
    {nd: "CƠ HỌC KĨ THUẬT II",
    stt: 3},
    /*********************************************/             
    {nd: "OLYMPIC Môn Cơ học kỹ thuật (truyền thống)",
    stt: 4},
    /*********************************************/
    ]
    
  const CNDC = [
    /*********************************************/
    {nd:"Học tập thành thạo hỗn hợp",
    stt: 1,
    file: "MixedMasteryLearning_20210222",
    sintax: "CNDC",
    },
    /*********************************************/
    {nd: "Tại sao Cơ học kĩ thuật khó?",
    stt: 2,
    file: "MixedMasteryLearning_20210222",
    sintax: "CNDC"},
    /*********************************************/
    {nd: "Vai trò của sơ đồ vật thể tự do",
    stt: 3,
    file: "MixedMasteryLearning_20210222",
    sintax: "CNDC"},
    /*********************************************/
  ]

  const CHKT1 = [
    /*********************************************/
    {nd:"Học tập thành thạo hỗn hợp",
    stt: 1, 
    file: "a", 
    sintax: "CNDC"}, 
    /*********************************************/
    {nd: "Tại sao Cơ học kĩ thuật khó?", 
    stt: 2, 
    file: "a", 
    sintax: "CNDC"},
    /*********************************************/
    {nd: "Vai trò của sơ đồ vật thể tự do",
    stt: 3, 
    file: "a", 
    sintax: "CNDC"},
    /*********************************************/
    {nd: "toppic1", 
    stt: 4}
    /*********************************************/
  ]

  const CHKT2 = [
    /*********************************************/
    {nd:"Ba phương pháp trong động lực học: ví dụ từ chất điểm",
      stt: 1, 
      file: "OverviewMethods_PIC_20210302", 
      sintax: "CHKT2"}, 

    /*********************************************/
    {nd: "Bậc tự do - Tọa độ suy rộng đủ - Vận tốc suy rộng",
    stt: 2, 
    file: "DoF_GeneralizedCoordinate_PIC_20210301", 
    sintax: "CHKT2"},

    /*********************************************/
    {nd: "Tọa độ suy rộng dư - Phương trình liên kết - Quan hệ động học",
    stt: 3, 
    file: "RedundantCoordinate_Constraint_PIC_20210301", 
    sintax: "CHKT2"},

    /*********************************************/
    {nd: "Kỹ thuật viết phương trình liên kết và các phép nguyên hàm, đạo hàm",
    stt: 4, 
    file: "ConstraintTechniques_PIC_20210302", 
    sintax: "CHKT2"},

    /*********************************************/
    {nd: "Lực - Gia tốc: Phương trình chuyển động khối tâm",
    stt: 5, 
    file: "ForceAcceleration_CenterofMass_PIC_20210309", 
    sintax: "CHKT2"},

    /*********************************************/
    {nd: "Lực - Gia tốc: Chuyển động quay quanh trục cố định và Chuyển động song phẳng",
    stt: 6, 
    file: "ForceAcceleration_Rotation_PIC_20210309", 
    sintax: "CHKT2"},

    /*********************************************/
    {nd: "Moment quán tính khối - Bài toán phẳng",
    stt: 7, 
    file: "PlanarMomentInertia_PIC_20210302", 
    sintax: "CHKT2"},

    /*********************************************/
    {nd: "Động năng của vật rắn trong bài toán phẳng",
    stt: 8, 
    file: "KineticEnergy_PIC_20210317", 
    sintax: "CHKT2"},

    /*********************************************/
    {nd: "Chú ý khi làm bài Công - Năng lượng (chỉ có slide)",
    stt: 9, 
    file: "Notes_WE_PIC_20200803", 
    sintax: "CHKT2"},

    /*********************************************/
    {nd: "Phương trình Lagrange loại 2",
    stt: 10, 
    file: "Lagrange2_PIC_20210317", 
    sintax: "CHKT2"},

    /*********************************************/
    {nd: "Phương trình Lagrange loại 2: Kỹ thuật sử dụng đa giác vector",
    stt: 11, 
    file: "Lagrange2_VectorPolygon_PIC_20210317", 
    sintax: "CHKT2"}
    /*********************************************/

  ]

  const OLYMPIC = [
  /*********************************************/
    {nd:"Vai trò của Sơ đồ vật thể tự do", 
    stt: 1,
    file: "MixedMasteryLearning_20210222",
    sintax:"OLYMPIC"
    }, 
    /*********************************************/
    {nd: "Ba phương pháp trong động lực học: ví dụ từ chất điểm", 
    stt: 2,
    file: "OverviewMethods_PIC_20210302",
    sintax:"OLYMPIC"  
    },
    /*********************************************/
    {nd: "Bậc tự do - Tọa độ suy rộng đủ - Vận tốc suy rộng", 
    stt: 3,
    file: "DoF_GeneralizedCoordinate_PIC_20210301",
    sintax:"OLYMPIC"
    },
    /*********************************************/
    {nd: "Tọa độ suy rộng dư - Phương trình liên kết - Quan hệ động học", 
    stt: 4,
    file: "RedundantCoordinate_Constraint_PIC_20210301",
    sintax:"OLYMPIC"
    },
    /*********************************************/
    {nd: "Kỹ thuật viết phương trình liên kết và các phép nguyên hàm, đạo hàm", 
    stt: 5,
    file: "ConstraintTechniques_PIC_20210302",
    sintax:"OLYMPIC"
    },
    /*********************************************/
    {nd: "Lực - Gia tốc: Phương trình chuyển động khối tâm", 
    stt: 6,
    file: "ForceAcceleration_CenterofMass_PIC_20210309",
    sintax:"OLYMPIC"
    },
    /*********************************************/
    {nd: "Lực - Gia tốc: Chuyển động quay quanh trục cố định và Chuyển động song phẳng", 
    stt: 7,
    file: "ForceAcceleration_Rotation_PIC_20210309",
    sintax:"OLYMPIC"
    },
    /*********************************************/
    {nd: "Moment quán tính khối - Bài toán phẳng", 
    stt: 8,
    file: "PlanarMomentInertia_PIC_20210302",
    sintax:"OLYMPIC"
    },
    /*********************************************/
    {nd: "Động năng của vật rắn trong bài toán phẳng", 
    stt: 9,
    file: "KineticEnergy_PIC_20210317",
    sintax:"OLYMPIC"
    },
    /*********************************************/
    {nd: "Phương trình Lagrange loại 2", 
    stt: 10,
    file: "Lagrange2_PIC_20210317",
    sintax:"OLYMPIC"
    },
    /*********************************************/
    {nd: "Phương trình Lagrange loại 2: Kỹ thuật sử dụng đa giác vector", 
    stt: 11,
    file: "Lagrange2_VectorPolygon_PIC_20210317",
    sintax:"OLYMPIC"
    },
    /*********************************************/
    {nd: "Chữa bài 1, đề thi năm 2014 (file pdf chỉ tóm tắt hình vẽ, kết quả trung gian và đáp án)", 
    stt: 12,
    file: "Olympic_2014_1_brief_20210303",
    sintax:"OLYMPIC"
    },
    /*********************************************/
  ]

  return {
    props: {
      ContentCards,
      CNDC,
      CHKT1,
      CHKT2,
      OLYMPIC,

    },
  }
}


// Gọi hàm data lấy props
//{*******************************}//



const getPosts = Props()



//{*******************************}//

// Tạo postsIds
export function getAllPostIds() {
  const fileNames = []
  getPosts.props.CNDC.map(cndc => {
    fileNames.push(cndc.file)
  })
  getPosts.props.CHKT2.map(chkt2 => {
    fileNames.push(chkt2.file)
  })
  getPosts.props.OLYMPIC.map(olympic => {
    fileNames.push(olympic.file)
  })
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName,
      }

    }
  })
}
// Lấy địa chỉ thư mục file pdf
export function getSinTaxPDF() {
  const sintax = {}
  getPosts.props.CNDC.map(cndc => {
    sintax[cndc.file] = cndc.sintax
  })
  getPosts.props.CHKT2.map(chkt2 => {
    sintax[chkt2.file] = chkt2.sintax
  })
  getPosts.props.OLYMPIC.map(olympic => {
    sintax[olympic.file] = olympic.sintax
  })
  return {
        sintax,
      }

  }