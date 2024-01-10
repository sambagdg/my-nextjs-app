import EditForm from "@/app/components/EditForm";
import { getTask } from "@/utils/actions";
import Link from "next/link";
import React from "react";

const SingleTaskPage = async ({ params }) => {
    const task = await getTask(params.id);
    return (
        <>
            <div className="mb-20">
                <Link href='/tasks' className="btn font-normal bg-white btn-md shadow-lg">Retour à la liste des tâches</Link>
                <EditForm task={task}/>
            </div>
            
        </>
    );
};
export default SingleTaskPage;
