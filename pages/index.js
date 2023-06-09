import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fetchApi from "@/util/fetch";

export default function IndexPage(){
  const router = useRouter()
  const [list, setList] = useState([])
  const [Incom, setIncom] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [inputMoney, setInputMoney] = useState()
  const [inputStatus, setInputStatus] = useState()
  var all = 0
  var Del = []
  var i = 0
  useEffect(() => {
    loadList()
  },[])
  const loadList = () => {
    fetchApi ('expenses')
      .then(data => setList(data))  
    fetchApi ('income')
      .then(data => setIncom(data))  
  }


  const delData = (id) => {
    console.log(id)
    fetch('http://localhost:8080/delete',{
      method: 'POST',
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        ID: id, 
      }),
    })
    .then(() => loadList())
  }
    const addData = () => {
      if (inputValue !== '' || inputMoney !== 0 ){
        const type = inputStatus == false ? 'createexpenses' : 'createincome'
        fetchApi(type,{
          method: 'POST',
          headers:{
            "Content-Type":"application/json",
          },
          body: JSON.stringify({
            IDuser: "2", 
            Description: inputValue,
            Money: parseInt(inputMoney),
            // status: {inputStatus},
          }),
        })
        .then(() => loadList())
       
        setInputValue('')
        setInputMoney('')
    }
  }

  return (
    <div className="min-h-full w-full bg-orange-50" >
      <Navbar></Navbar>
      <div className="  mt-8 flex justify-center items-center">    
        <div className=" bg-white shadow-2xl rounded-xl text-black p-4 w-1/2">
            <div className=" flex justify-center font-bold text-lg">เพิ่มรายการ</div>
            <div className="mb-4 ">
                <div>รายการ</div>
                <div>
                    <input className=" mt-2 bg-gray-300 border border-gray-200 w-full p-2 rounded-md"
                    type="text"
                    value={inputValue}
                    onChange={(event) => {
                      const value = event.target.value
                      setInputValue(value)
                    }}></input>
                </div>
            </div>
            <div>
                <div>จำนวนเงิน</div>
                <div>
                    <input className=" mt-2 bg-gray-300 border border-gray-200 w-1/2 p-2 rounded-md"
                    type="number"
                    value={inputMoney}
                    onChange={(event) => {
                      const value = event.target.value
                      setInputMoney(value)
                    }}
                    ></input>
                </div>
            </div>
            <div className="flex gap-10">
                <div className="inline-flex items-center">
                    <label
                    className="relative flex cursor-pointer items-center rounded-full p-3"
                    for="html"
                    data-ripple-dark="true"
                    >
                    <input
                        id="html"
                        name="type"
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-green-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:before:bg-green-500 hover:before:opacity-10"
                        onClick={(event) => {
                          const value = event.target.value
                          setInputStatus(true)
                        }}
                    />
                    <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-500 opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        >
                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                        </svg>
                    </div>
                    </label>
                    <label
                    className="mt-px cursor-pointer select-none font-light text-gray-700"
                    for="html"
                    >
                    รายรับ
                    </label>
                </div>
                <div className="inline-flex items-center">
                    <label
                    className="relative flex cursor-pointer items-center rounded-full p-3"
                    for="react"
                    data-ripple-dark="true"
                    >
                    <input
                        id="react"
                        name="type"
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                        onClick={(event) => {
                          const value = event.target.value
                          setInputStatus(false)
                        }}
                    />
                    <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        >
                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                        </svg>
                    </div>
                    </label>
                    <label
                    className="mt-px cursor-pointer select-none font-light text-gray-700"
                    for="react"
                    >
                    รายจ่าย
                    </label>
                </div>
                </div>
            <div>
                <button className=" bg-gray-800 text-white font-bold w-full py-2 mt-4 rounded-lg shadow-lg"
                onClick={addData}>เพิ่มรายการ
                </button>
            </div>
        </div>
        </div>
      <div className=" mt-4 bg-white min-h-5/6 w-1/2 mx-auto  text-center  text-2xl text-gray-700 font-bold">
          <div className=" flex min-h-full">
            <div className=" bg-green-100 rounded-2xl w-1/2 min-h-full mr-2 p-4">รายรับ
            {Incom.map((data) => {
              all = all+data.Money
              return(
                <div key={data.ID} className=" shadow-2xl bg-green-50 rounded-2xl text-base p-5 mt-4">
                  <div>{data.Description}</div>
                  <div>{data.Money} บาท
                  <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 text-sm border border-red-500 hover:border-transparent rounded"
                  onClick={(event) => (
                    delData(data.ID)
                  ) }>
                    ลบ</button>
                  </div>
              </div>
              )
            })}
            </div>
            <div className=" bg-red-100 rounded-2xl  w-1/2 min-h-full ml-2 p-4">รายจ่าย
            {list.map((data) => {
              all = all-data.Money
              return(
                <div key={data.ID} className=" shadow-2xl bg-red-50 rounded-2xl text-base p-5 mt-4">
               <div>{data.Description}</div>
                  <div>{data.Money} บาท
                  <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 text-sm border border-red-500 hover:border-transparent rounded"
                  onClick={(event) => (
                    delData(data.ID)
                  ) }>
                    ลบ</button></div>
              </div>
              )
            })}
            </div>
          </div>
      </div>
      <div className=" bg-red-400 w-1/2 mt-4 mx-auto p-3 text-white font-bold text-2xl rounded-2xl flex justify-center">
        คงเหลือ {all} บาท
      </div>
    <Footer></Footer>
    </div>
  )
}