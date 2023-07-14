import Form from "./Form";

const AddTaskPage = () => {

        return (
                <div className="md:w-3/4 mx-auto p-8">
                        <h1 className="text-center text-3xl font-semibold text-info mb-2">Add a new task</h1>
                        <Form></Form>
                </div>
        );
};

export default AddTaskPage;