'use client'
import { deleteTask } from '@/app/Data/actions';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2';

const Cards = () => {
        type tasksData = {
                title: string;
                description: string;
                status: string;
        }
        const [tasks, setTasks] = useState([]);
        const [update, setUpdate] = useState(0);

        useEffect(() => {
                const tasks = localStorage.getItem('tasks');
                let array: [] = [];
                if (tasks !== null) {
                        array = JSON.parse(tasks);
                        setTasks(array);
                }
        }, [update])

        const deleteTasks = (title: string) => {
                Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                        if (result.isConfirmed) {
                                const status = deleteTask(title);
                                Swal.fire(
                                        'Deleted!',
                                        'Your file has been deleted.',
                                        'success'
                                )

                                // this logic will help to re-render home page after delete a data.
                                if (status === true) {
                                        if (update === 0) {
                                                setUpdate(1);
                                        } else {
                                                setUpdate(0);
                                        }
                                }
                        }
                })
        }

        return (
                <div className="grid grid-cols-2 md:grid-cols-2 gap-2 ">
                        {
                                tasks.map((task: tasksData) =>
                                        <div key={task.title} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                                <div className="card-body">

                                                        <h1 className="card-title">{task.title}</h1>

                                                        <p>{task.description}</p>

                                                        <p>Status : {task.status}</p>

                                                        <hr />
                                                        <div className='flex justify-between items-center'>
                                                                <div>
                                                                        <Link href={`editTask/${encodeURIComponent(task.title)}`}>
                                                                                <button>
                                                                                        <FaEdit size={20} className='text-blue-400'></FaEdit>
                                                                                </button>
                                                                        </Link>
                                                                </div>
                                                                <div>
                                                                        <button onClick={() => deleteTasks(task.title)}>
                                                                                <FaTrash size={20} className='text-red-400'></FaTrash>
                                                                        </button>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                )
                        }
                </div>
        );
};

export default Cards;