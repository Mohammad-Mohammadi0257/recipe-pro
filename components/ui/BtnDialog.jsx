'use client'
import { useState ,useEffect } from 'react';
import { addFoodAction } from '@/actions/addFoodAction';
import { PiCookingPotBold } from "react-icons/pi";
import Input from './Input';
import Textarea from './Textarea';



const BtnDialog = ({ children, onSuccess }) => {

     const [state, formAction] = React.useActionState(addFoodAction, {errors:{},success :false})  // ورود اطلاعات غلط
     const [base64 , setBase64]=useState("")     


    //  const uploadFile=(e)=>{
    //      const file=e.target.files?.[0]
    //     const fileReader = new FileReader()

    //     fileReader.onload=()=>{
    //         setBase64(fileReader.result)
    //     }
    //       fileReader.readAsDataURL(file) 
    //  }


    const uploadFile=(e)=>{
        const file = e.target.files?.[0]
        return new Promise((resolve, reject)=>{
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)

            fileReader.onload = (()=>{
                resolve(fileReader.result)
                setBase64(fileReader.result)
            })
        })
    }

  useEffect(() => {
    if (state?.success) {
      // بستن مودال
      const modal = document.getElementById("my_modal_6");
      if (modal) modal.checked = false;

      // اطلاع دادن به parent که غذا اضافه شد
      if (onSuccess) onSuccess();
    }
  }, [state, onSuccess]);


    return (
        <div className='flex items-center justify-center w-full'>
            {/* The button to open modal */}
            <label htmlFor="my_modal_6" className="flex items-center justify-center gap-x-3
             w-2/3 h-10  cursor-pointer
            active:shadow-innertext-xl bg-pink-100 text-pink-600 hover:bg-pink-200 
            py-3 px-8 rounded-full shadow-md transition-transform hover:scale-105 duration-200">
                {children}
                <PiCookingPotBold className="size-7"/>
            </label>

          
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal " role="dialog">
                <div className="modal-box bg-gray-100 max-w-250">
                    <h3 className="text-lg font-bold text-gray-900">ثبت غذا</h3>
                    <p className="py-4 text-gray-900">لطفا توضیحات را کامل بنویسید</p>
                        <form action={formAction}>

                            <div className='mb-6'>
                                <Input 
                                title={' اسم غذا'}
                                name={'title'}
                                type={'text'}
                                placeholder={'نام غدا را وارد کنید'}
                                />
                                {state?.errors?.title &&
                                    <small className='text-red-600'>{state.errors?.title[0]}</small>
                                }
                            </div>

                            <div className='mb-6'>
                                <Input 
                                title={'مواد اولیه'}
                                name={'ingredients'}
                                type={'text'}
                                placeholder={'موارد اولیه را وارد کنید'}
                                />
                                {state?.errors?.ingredients &&
                                    <small className='text-red-600'>{state.errors?.ingredients[0]}</small>
                                }
                            </div>


                              <div className='mb-6'>
                                <Input 
                                title={'زمان پخت'}
                                name={'timeFood'}
                                type={'number'}
                                placeholder={'زمان را بر حسب دقیقه وارد کنید'}
                                />
                                   {state?.errors?.timeFood &&
                                        <small className='text-red-600'>{state.errors?.timeFood[0]}</small>
                                    }
                            </div>

                            <div className='mb-6'>
                                <Textarea
                                title={'روش پخت'}
                                name={'description'}
                                placeholder={'توضیح روش پخت'}
                                />
                                {state?.errors?.description &&
                                    <small className='text-red-600'>{state.errors?.description[0]}</small>
                                }
                            </div>


                             <div className='mb-6'>
                                <input
                                 className="block text-xl w-full p-3 placeholder:text-gray-400
                                  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                                  focus:ring-blue-500 focus:border-blue-500 "
                                    type='file'
                                     name="imageFile"
                                    onChange={(e)=>uploadFile(e)}
                                />
                                   <input type="hidden" name="image" value={base64} />
                                {state?.errors?.image &&
                                    <small className='text-red-600'>{state.errors?.image[0]}</small>
                                }
                            </div>

                            <div className='flex items-center justify-between'>
                                 <button className='bg-red-500 px-4 py-1'>ثبت غذا</button>
                                <label htmlFor="my_modal_6" className="btn ">انصراف</label>
                             </div>

                        </form>

                </div>
            </div>
            </div>
      
    );
}

export default BtnDialog;
