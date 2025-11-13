'use client'
import React from 'react';
import { addFoodAction } from '@/actions/addFoodAction';
import { PiCookingPotBold } from "react-icons/pi";


const BtnDialog = ({children}) => {
    
    return (
        <div className='flex items-center justify-center w-full'>
            {/* The button to open modal */}
            <label htmlFor="my_modal_6" className="flex items-center justify-center gap-x-3 w-2/3 h-10  cursor-pointer
            active:shadow-innertext-xl bg-pink-100 text-pink-600 hover:bg-pink-200 
            py-3 px-8 rounded-full shadow-md transition-transform hover:scale-105 duration-200">
                {children}
                <PiCookingPotBold className="size-7"/>
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal " role="dialog">
                <div className="modal-box bg-gray-100 max-w-250">
                    <h3 className="text-lg font-bold text-gray-900">ثبت غذا</h3>
                    <p className="py-4 text-gray-900">لطفا توضیحات را کامل بنویسید</p>
                    <form action={addFoodAction}>
                    <div className="mb-6">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium
                         text-gray-900  ">اسم غذا</label>
                        <input type="text" 
                        name='name'
                         id="large-input" 
                        className="block text-xl w-full p-3
                         text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                          focus:ring-blue-500 focus:border-blue-500 "/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium
                         text-gray-900  "> مواد اولیه</label>
                        <input type="ingredients" 
                        name='ingredients'
                        // description={description} 
                         id="large-input" 
                        className="block text-xl w-full p-3
                         text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                         t focus:ring-blue-500 focus:border-blue-500 "/>
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium
                         text-gray-900  ">روش پخت</label>
                        <input type="text" 
                        name='description'
                        // description={description} 
                         id="large-input" 
                        className="block text-xl w-full p-3
                         text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                         t focus:ring-blue-500 focus:border-blue-500 "/>
                    </div>
                    <button className='bg-red-500 px-4 py-1'>ثبت غذا</button>

                    </form>

                    <label htmlFor="my_modal_6" className="btn">Close!</label>
                </div>
            </div>
            </div>
      
        // <div>
        //     <div className="cursor-pointer w-full"
        //     onClick={()=>document.getElementById('my_modal_4').showModal()}> 
        //     {children}</div>
        //     <dialog id="my_modal_4" className="modal ">
        //         <div className="modal-box w-11/12 max-w-5xl bg-white">
        //             <div className="modal-action">
        //             <form method="dialog">
        //                 {/* if there is a button, it will close the modal */}
        //                 <button className="btn">Close</button>
        //             </form>
        //             </div>
        //         </div>
        //     </dialog>
        // </div>
    );
}

export default BtnDialog;
