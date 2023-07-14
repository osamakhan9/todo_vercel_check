'use client'
import { editAndUpdate, getSingleTask } from '@/app/Data/actions';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import Swal from 'sweetalert2';
import '../../Task/CSS/style.css'

type Inputs = {
        title: string
        description: string
        status: string
}

const Form = ({ params }: any) => {
        const decoded = decodeURIComponent(params.id);
        const getTask = getSingleTask(decoded);

        const {
                register,
                handleSubmit,
                formState: { errors },
        } = useForm<Inputs>()
        const onSubmit: SubmitHandler<Inputs> = (data) => {
                editAndUpdate(data);
                Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success'
                )
        }

        return (
                <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
                        <div>
                                {errors.title?.type === "required" && (<p className='text-red-500'>required</p>)}
                                <input
                                        defaultValue={getTask?.title}
                                        type="text"
                                        placeholder="Type here"
                                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  

                                        {...register("title", { required: true })}
                                        aria-invalid={errors.title ? "true" : "false"}
                                />
                        </div>

                        <div className='my-4'>
                                {errors.description?.type === "required" && (<p className='text-red-500'>required</p>)}
                                <textarea
                                        defaultValue={getTask?.description}
                                        placeholder="Type here"
                                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                                        {...register("description", { required: true })}
                                        aria-invalid={errors.description ? "true" : "false"}
                                />
                        </div>

                        <div>
                                <select {...register("status")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value={getTask?.status} disabled hidden selected>{getTask?.status}</option>
                                        <option value="To Do">To Do</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                </select>
                        </div>

                        <button className="btn btn-info w-full mt-4">
                                <input id='btn' type="submit" value="Confirm Change" />
                        </button>

                </form>
        );
};

export default Form;