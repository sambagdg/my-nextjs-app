
import Link from 'next/link';
import DeleteForm from './DeleteForm';
import { getAllTasks } from '@/utils/actions';

const TaskList = async () => {
  const tasks = await getAllTasks(); 
  
  if (tasks.length === 0) {
    return <h2 className='mt-8 font-medium text-lg'>Pas de tâches disponile.....</h2>
  }

  return (
    <ul className='mt-8'>
      {
        tasks.map((task) => {
          return <li key={task.id} className='flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg hover:bg-gray-100'>
            <h2 className={`text-lg capitalize ${task.completed ? 'line-through' : null}`}>
              {task.content}
            </h2>
            <div className='flex gap-6 items-center ml-3'>
              <Link href={`/tasks/${task.id}`} className='btn btn-accent btn-xs hover:text-white'>
                modifier
              </Link>
              <DeleteForm id={task.id}/>
            </div>
          </li>
        })
      }
    </ul>
  );
};

export default TaskList;
