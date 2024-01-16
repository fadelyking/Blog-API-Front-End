export default function NavBar() {
    return (
        <>
        <div className=" flex justify-around p-4 filter drop-shadow-sm border-b-2">
            <div className="logo">Blog</div>
            <div className=" flex gap-6">
                <div className="Log in">Login</div>
                <div className="dashboard">Dashboard</div>
            </div>
        </div>
        </>
    )
}