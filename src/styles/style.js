 import {makeStyles} from "@material-ui/core";
 const useStyle = makeStyles((theme) => ({
    content : {
        backgroundColor : "red",
        color : "white",
        // 2 chữ cái không gạch ngang
        // Viết hoa chữ cái tiếp theo
        "& span" : {
            fontSize : 15, //or "15px"
        },
    },
        title: {
            fontSize : 40,
        }
    
 }))
//  Ngoặc tròn là không return 
export default useStyle