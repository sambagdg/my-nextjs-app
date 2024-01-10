'use client';

import { createTaskCustom } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from 'react-dom';
import { toast } from "react-hot-toast";


const SubmitBtn = () => {
    const { pending } = useFormStatus()
    return (
        <button type="submit" className="btn btn-primary join-item hover:text-white" disabled={pending}
        >
            {pending ? 'Patientez svp....' : 'Créer une tâche'}
        </button>
    )
};

const initialState = {
    message: null, 
}

const TaskForm = () => {
    const [state, formAction] = useFormState(createTaskCustom, initialState)
    useEffect(() => {
        if (state.message === 'error') {
            toast.error('opps, nous avons une erreur...')
            return
        }
        if (state.message === 'success') {
            toast.success('Tâche crée avec succés !!')
        }
    }, [state]);
  return (
    <form action={formAction}>
          {/* {state.message ? <p className="mb-2">{state.message}</p> : null} */}
      <div className="join w-full mt-6">
        <input 
          type="text"  
          className="input input-bordered join-item w-full"
          placeholder="écrire ici.."
          name="content"
          required
        />
    
        <SubmitBtn/>
      </div>
    </form>
  );
};
export default TaskForm;
 