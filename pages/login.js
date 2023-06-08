export default function LoginPage(){
    return (
        <div className="h-full flex justify-center items-center">
        <div className=" bg-white shadow-2xl rounded-xl text-black p-4 w-1/2">
            <div className="mb-4 ">
                <div>Username</div>
                <div>
                    <input className=" mt-2 bg-gray-300 border border-gray-500 w-full p-2 rounded-md"></input>
                </div>
            </div>
            <div>
                <div>Password</div>
                <div>
                    <input type="password" className=" mt-2 bg-gray-300 border border-gray-500 w-full p-2 rounded-md"></input>
                </div>
            </div>
            <div>
                <button className=" bg-gray-800 text-white font-bold w-full py-2 mt-4 rounded-lg shadow-lg">
                    Login
                </button>
            </div>
        </div>
        </div>
    )
}