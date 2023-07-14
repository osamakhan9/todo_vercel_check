'use client'
import { addTask } from '@/app/Data/actions';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import Swal from 'sweetalert2';
import './CSS/style.css'

type Inputs = {
        title: string
        description: string
        status: string
}

const Form = () => {

        const {
                register,
                handleSubmit,
                formState: { errors },
                reset
        } = useForm<Inputs>()
        const onSubmit: SubmitHandler<Inputs> = (data) => {
                addTask(data);
                reset();
                Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success'
                      )
        }

        return (
                <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-6">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type Title</label>
                                {errors.title?.type === "required" && (<p className='text-red-500'>required</p>)}
                                
                                       <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                                        {...register("title", { required: true })}
                                        aria-invalid={errors.title ? "true" : "false"}
                                />
                        </div>

                        <div className="mb-6">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type Description</label>
                                {errors.description?.type === "required" && (<p className='text-red-500'>required</p>)}
                                
                                       <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                                        {...register("description", { required: true })}
                                        aria-invalid={errors.description ? "true" : "false"}
                                />
                        </div>

                        <div>
                                <select {...register("status")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="To Do">To Do</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                </select>
                        </div>

                        <button className="btn btn-info w-full mt-4">
                                <input id='btn' type="submit" />
                        </button>

                </form>
        );
};

export default Form;