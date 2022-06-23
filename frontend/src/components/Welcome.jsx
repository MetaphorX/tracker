import React from 'react'
import qrcode from 'qrcode'
import {SiEthereum} from 'react-icons/si'
import {BsInfoCircle} from 'react-icons/bs'
import {Loader} from './'

const Input =({placeholder, name, type, value, handleChange})=>(
  <input 
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={(e)=> handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
)

const Welcome = () => {

  const connectWallet =()=>{}
  const handleSubmit =()=>{}
  
  return (
    <div className='flex w-full justify-center items-center'>
      <div className='flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
        <div className='flex flex-1 justify-starrt flex-col md:mr-10'>
          <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
             Scan and Verify <br /> All Purchased Products
          </h1>
          <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'> 
            Scan product Barcodes and be sure they are not fake.
          </p>
          <button 
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3]
            p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <p className='text-white text-base font-semibold'>Connect Wallet</p>
          </button>
          
        </div>
        <div className='flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10'>
          <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism'>
            <div className='flex justify-between flex-col w-full h-full'>
              <div className='flex justify-between items-start'>
                <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center'>
                  <SiEthereum fontSize={21} color="#fff"/>
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
               <div>
                 <p className='text-white font-light text-sm'>
                   Address
                 </p>
                 <p className='text-white font-semibold text-lg mt-1'>
                   Ethereum
                 </p>
               </div>
            </div>
          </div>
          <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
            <Input placeholder= "Shop Name" name ="shop" type="text" handleChange={()=>{}}/>
            <Input placeholder= "Product Code" name ="code" type="number" handleChange={()=>{}}/>

            <div className='h-[1px] w-full bg-gray-400 my-2'/>
            {false ? (
              <Loader />
            ): (
              <button
              type="button"
              onClick={handleSubmit}
              >

              </button>
            )}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Welcome