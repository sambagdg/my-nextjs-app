import { createTask } from "@/utils/actions";


const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full mt-6">
        <input 
          type="text"  
          className="input input-bordered join-item w-full"
          placeholder="écrire ici.."
          name="content"
          required
        />
        <button type="submit" className="btn btn-primary join-item hover:text-white">Créer une tâche</button>
      </div>
    </form>
  );
};
export default TaskForm;
 