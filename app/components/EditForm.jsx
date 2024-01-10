'use client'
import { editTask } from "@/utils/actions";
import React from "react";

const EditForm = ({ task }) => {
    const { id, content, completed } = task;
    return (
        <form action={editTask} className="max-w-sm p-12 border border-base-300 rounded-lg mt-6 shadow-lg">
            <input type="hidden" name="id" value={id} />
            {/* contenu */}
            <label htmlFor="content" className="label-text">Nom de la tâche :</label>
            <input 
                type="text" 
                required defaultValue={content} 
                name="content"  
                className="input input-bordered w-full"
            />
            {/* completée */}
            <div className="form-control my-4">
                <label htmlFor="completed" className="label cursor-pointer">
                    <span className="label-text">completée</span>
                    <input 
                        type="checkbox" 
                        defaultChecked={completed} 
                        id="completed" 
                        name="completed" 
                        className="checkbox checkbox-primary checkbox-xs"
                    />
                    <button type="submit" className="btn btn-primary btn-sm w-20 hover:text-white">modifier</button>
                </label>
            </div>
        </form>
    );
};
export default EditForm;
