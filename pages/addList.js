import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function AddList(){
    return (
        <div className=" h-full"><Navbar></Navbar>
        
        <div className=" h-5/6 flex justify-center items-center">    
        <div className=" bg-white shadow-2xl rounded-xl text-black p-4 w-1/2">
            <div className=" flex justify-center font-bold text-lg">เพิ่มรายการ</div>
            <div className="mb-4 ">
                <div>รายการ</div>
                <div>
                    <input className=" mt-2 bg-gray-300 border border-gray-500 w-full p-2 rounded-md"></input>
                </div>
            </div>
            <div>
                <div>จำนวนเงิน</div>
                <div>
                    <input type="password" className=" mt-2 bg-gray-300 border border-gray-500 w-1/2 p-2 rounded-md"></input>
                </div>
            </div>
            <div class="flex gap-10">
                <div class="inline-flex items-center">
                    <label
                    class="relative flex cursor-pointer items-center rounded-full p-3"
                    for="html"
                    data-ripple-dark="true"
                    >
                    <input
                        id="html"
                        name="type"
                        type="radio"
                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-green-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:before:bg-green-500 hover:before:opacity-10"
                    />
                    <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-500 opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3.5 w-3.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        >
                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                        </svg>
                    </div>
                    </label>
                    <label
                    class="mt-px cursor-pointer select-none font-light text-gray-700"
                    for="html"
                    >
                    รายรับ
                    </label>
                </div>
                <div class="inline-flex items-center">
                    <label
                    class="relative flex cursor-pointer items-center rounded-full p-3"
                    for="react"
                    data-ripple-dark="true"
                    >
                    <input
                        id="react"
                        name="type"
                        type="radio"
                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                    />
                    <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3.5 w-3.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        >
                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                        </svg>
                    </div>
                    </label>
                    <label
                    class="mt-px cursor-pointer select-none font-light text-gray-700"
                    for="react"
                    >
                    รายจ่าย
                    </label>
                </div>
                </div>
            <div>
                <button className=" bg-gray-800 text-white font-bold w-full py-2 mt-4 rounded-lg shadow-lg">
                    เพิ่ม
                </button>
            </div>
        </div>
        </div>
        <Footer></Footer>
        </div>
    )
}