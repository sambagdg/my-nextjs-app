
import TaskForm from "../components/TaskForm";
import TaskFormCustom from "../components/TaskFormCustom";
import TaskList from "../components/TaskList";
export const dynamic = 'force-dynamic';

const TasksPage = () => {
  return (
    <div className=" max-w-3xl items-center justify-center h-screen">
      <TaskFormCustom />
      <TaskList/>
    </div>
  );
};

export default TasksPage;
