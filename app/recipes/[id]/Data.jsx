'use client'
import React, { useEffect, useState } from "react";
import { addComment } from "../../../actions/actions";
import { TfiCommentAlt } from "react-icons/tfi";
import { FaUserPen } from "react-icons/fa6";
import { FaPenFancy } from "react-icons/fa6";
import BtnUpdateAction from '../../../components/ui/BtnUpdateAction';

const Data =  ({id,data,comments}) => {



    return data ? (
    <div className="min-h-screen bg-linear-to-b from-orange-50 to-white p-5 flex justify-center">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl overflow-hidden border border-orange-100">
        {/* تصویر غذا */}
        <div className="relative group">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-b from-black/70 to-transparent p-4">
            <h1 className="text-white font-bold text-3xl drop-shadow-md">
              {data.title}
            </h1>
          </div>
        </div>

        {/* محتوا */}
        <div className="p-6 space-y-6">
          {/* توضیحات */}
          <div className="text-gray-700 leading-relaxed">
            <p className="text-lg font-semibold">
              🕒 زمان لازم برای پخت:{" "}
              <span className="text-orange-600">{data.prepTime} دقیقه</span>
            </p>
            <p className="mt-2 text-gray-600">{data.description}</p>
          </div>

          {/* مواد اولیه */}
          <div>
            <h2 className="font-bold text-2xl text-orange-700 mb-3">🥣 مواد اولیه</h2>
            <ol className="list-decimal list-inside space-y-1 text-gray-700 bg-orange-50 p-3 rounded-xl border border-orange-100">
              {data.ingredients.map((ingredient, i) => (
                <li key={i} className="text-base">
                  <span className="font-medium">{ingredient.name}</span> –{" "}
                  <span className="text-orange-600">{ingredient.amount} پیمانه</span>
                </li>
              ))}
            </ol>
          </div>

          {/* مراحل پخت */}
          <div>
            <h2 className="font-bold text-2xl text-orange-700 mb-3">👨‍🍳 روش پخت</h2>
            <ul className="list-decimal list-inside space-y-2 bg-orange-50 p-4 rounded-xl border border-orange-100">
              {data.steps.map((step, i) => (
                <li key={i} className="text-gray-700 leading-relaxed">
                  {step}
                </li>
              ))}
            </ul>
          </div>

          {/* فرم */}

         
          <div className='flex items-center gap-x-2'>
               <FaPenFancy className='size-6 text-green-700'/>
              <div>ثبت نظر جدید </div>
           </div>

          <form className="mx-auto px-5" action={addComment}>
            <input type="hidden" name="recipeId" value={id} />

            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                نام شما
              </label>
              <input
                type="text"
                id="name"
                name='name'
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="نام"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                نظر شما
              </label>
                <textarea id="message" name='text' rows="4" className="block p-2.5 w-full text-sm text-gray-900
                 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500
                   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="نظر خود را وارد کنید" required></textarea>

            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
               focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
               text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              ثبت نظر
            </button>

            {/* <BtnUpdateAction type="submit" path={`/recipes/${id}`}/> */}
          </form>

            <div className='flex items-center gap-x-2'>
              <span>نظرات کاربران </span>
              <TfiCommentAlt className='size-6 text-red-500'/>
            </div>
          {comments.map((c,index)=>(
        <div key={index}>
               <div className='flex flex-col gap-y-3 w-full h-full bg-red-100 p-2.5 rounded-xl '>
                <div className='flex items-center gap-x-2'>
                  <FaUserPen className='size-6 text-gray-600'/>
                  <h2 className='border-b border-gray-300 '>{c.name} </h2>
                </div>
                <h3 className="text-gray-700">{c.text}</h3>
          </div>
     </div>
          ))}

        </div>
      </div>
    </div>
  ) : (
    <h1>لطفا صبر کنید</h1>
  );

  

};

export default Data;
