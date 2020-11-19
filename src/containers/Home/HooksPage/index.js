import userEvent from '@testing-library/user-event';
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Child from "./child";
export default function HooksPage() {
    const [number, setNumber] = useState(0);
    // Phần tử 1 là giá trị
    // Phần tử thứ 2 là hàm 
    // const [username,setUsername] = useState("Dinh");
    const handleTangSo = () => {
        setNumber(number + 1);
    }
    // componentDidMount() chạy 1 lần duy nhất sau render thay thế bằng useEffect
    useEffect(() => {
        console.log("useEffect - componentDidMount");
    }, [])
    // componentDidUpdate() lần đầu tiên component render ra nó không chạy
    // Chạy khi state thay đổi
    useEffect(() => {
        console.log("useEffect - componentDidUpdate khi mảng khác rỗng");
    }, [number])
    // componentWillUnmount() khi kết thúc component. Mình qua bên 1 trang khác
    useEffect(() => {
        let interval = setInterval(() => {
            console.log("Hello");
        }, 1000)
        return () => {
            clearInterval(interval);
            console.log("useEffect - componentWillUnmount ")
        }
    }, [])
    const showNumber = () => {
        console.log("showNumber");
    }
    // const showNumberCallBack = useCallback(showNumber,[]);
    // // useCallBack chặn không cho Child render lại tham số thứ 2 phải rỗng
    const showNumberCallBack = useCallback(showNumber, [number]);
    //  Child sẽ chạy mỗi khi number thay đổi
    const numberUp = () => {
        let i = 0;
        while (i < 1000) i++;
        console.log(i);
        return i;
    }
    // Render lại cho dù không thay đổi
    const numberUpMemo = useMemo(() => numberUp(), []);
    // Không render lại khi number thay đổi
    // Kiểm tra xem return có khác 1000 không
    // Chạy 1 lần duy nhất thì mảng là cái mảng rỗng
    return (
        <div>
            <h1>Number {number}</h1>
            <h1>NumberUp: {numberUpMemo}</h1>
            <button className="btn btn-success" onClick={handleTangSo}>Tăng số</button>
            <Child showNumber={showNumberCallBack} />
        </div>
        // Hooks dùng để Logic cho function
    )
}
