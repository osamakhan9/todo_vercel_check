import React from 'react';
import Form from './Form';

const page = ({ params }: any) => {
        return (
                <div>
                        <div className="md:w-3/4 mx-auto p-8">
                                <h1 className="text-center text-3xl font-semibold text-info mb-2">Edit the task</h1>
                                <Form params={params}></Form>
                        </div>
                </div>
        );
};

export default page;