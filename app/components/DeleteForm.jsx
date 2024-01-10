'use client';
import { deleteTask } from "@/utils/actions";
import { useFormStatus } from "react-dom";

const SubmiBtn = () => {
  const { pending } = useFormStatus ()
  return <button className="btn btn-error btn-xs hover:text-white" disabled={pending}>
    {pending? 'En attente..' : 'Supprimer'}
  </button>
}
const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <SubmiBtn />
    </form>
  );
};
export default DeleteForm;
