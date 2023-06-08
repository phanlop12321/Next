import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="  bg-gray-800 w-full mx-auto rounded-lg shadow mb-2 dark:bg-gray-800 ">
             <div className="w-full bg-gray-800 mx-auto max-w-screen-xl flex items-center justify-center">
                <div className=" text-white font-bold border-gray-950 p-2 ">
                    <Link href="/">
                        หน้าแรก
                    </Link>
                </div>
            </div>
        </nav>
    )
}