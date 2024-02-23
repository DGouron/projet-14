import CreateNewEmployeeForm from '@/components/entities/CreateNewEmployeeForm'
import { useAppContext } from '@/components/providers';

function CreateEmployee() {
  const appContext = useAppContext();
  return (
    <main>
      <h1 className="text-3xl font-bold text-slate-900">HRnet</h1>
      <button
        type='button'
        onClick={() => appContext.setCurrentPage("employeeList")}
        className='underline underline-offset-1 hover:text-red-600 text-slate-500 flex justify-center mt-2 w-full'>
        View Current Employees
      </button>
      <CreateNewEmployeeForm />
    </main>
  )
}

export default CreateEmployee