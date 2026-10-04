'use client'

import React from 'react'
import { useForm } from 'react-hook-form'

function page() {
    function submitData(data) {
        console.log(data);
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    return (
        <div className='min-h-screen flex items-center justify-center bg-slate-100 px-4'>

            <form
                onSubmit={handleSubmit(submitData)}
                className='w-full max-w-md bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-200'
            >

                {/* Heading */}
                <div className='mb-8 text-center'>
                    <h1 className='text-3xl font-bold text-slate-800'>
                        Registration Form
                    </h1>

                    <p className='mt-2 text-sm text-slate-500'>
                        Create your account to get started
                    </p>
                </div>

                {/* First Name */}
                <div className='mb-5'>
                    <label className='block text-sm font-medium text-slate-700 mb-2'>
                        First Name
                    </label>

                    <input
                        {...register("firstName")}
                        className='w-full px-4 py-3 rounded-lg border border-slate-300
                        bg-slate-50 text-slate-800 outline-none
                        focus:bg-white focus:border-blue-500
                        focus:ring-2 focus:ring-blue-100
                        transition duration-200'
                        placeholder='Enter your first name'
                    />
                </div>
                
                {/* Last Name */}
                <div className='mb-5'>
                    <label className='block text-sm font-medium text-slate-700 mb-2'>
                        Last Name
                    </label>

                    <input
                        {...register("lastname", {
                            minLength: {
                                value: 3,
                                message: "Minimum 3 characters"
                            }
                        })}

                        className='w-full px-4 py-3 rounded-lg border border-slate-300
                    bg-slate-50 text-slate-800 outline-none
                    focus:bg-white focus:border-blue-500
                    focus:ring-2 focus:ring-blue-100
                    transition duration-200'
                        placeholder='Enter your last name'
                    />
                    {errors.name && (
                    <p>
                        {errors.name.message}
                    </p>
                )}
                </div>

                {/* Email */}
                <div className='mb-7'>
                    <label className='block text-sm font-medium text-slate-700 mb-2'>
                        Email Address
                    </label>

                    <input
                        {...register("email")}
                        type='email'
                        className='w-full px-4 py-3 rounded-lg border border-slate-300
                        bg-slate-50 text-slate-800 outline-none
                        focus:bg-white focus:border-blue-500
                        focus:ring-2 focus:ring-blue-100
                        transition duration-200'
                        placeholder='Enter your email'
                    />
                </div>

                {/* Submit */}
                <button
                    type='submit'
                    className='w-full py-3 px-4 rounded-lg
                    bg-blue-600 text-white font-semibold
                    hover:bg-blue-700
                    active:scale-[0.98]
                    focus:outline-none focus:ring-2 focus:ring-blue-300
                    transition duration-200 shadow-md'
                >
                    Create Account
                </button>

            </form>
        </div>
    )
}

export default page
