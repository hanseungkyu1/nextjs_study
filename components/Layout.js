import NavBar from "./Navbar";

// children이란 react.js가 제공하는 prop인데,
// 하나의 컴포넌트를 또 다른 컴포넌트 안에 넣을 때 사용할 수 있음
export default function Layout({children}) {
    return (
        <>
            <NavBar />
            <div>{children}</div>
        </>
    )
}