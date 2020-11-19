import React,{memo} from 'react'
// Cấm không cho thằng con chạy bằng memo
// Pure component bên class

 function Child() {
    console.log("Child")
    return (
        
        <div className = "alert alert-danger">
            Hoang
        </div>
    )
}
export default memo(Child);