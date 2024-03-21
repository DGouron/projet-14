import { EmployeeDataTable } from "@/components/entities/EmployeeDataTable"
import { useAppContext } from "@/components/providers";

function EmployeeList() {
  const appContext = useAppContext();
  console.log(appContext.employeeList)
  return (
    <main>
      <h1 className="text-3xl font-bold text-slate-900 mt-2 w-full text-center my-10">Current Employees</h1>
      <EmployeeDataTable />
      <button
        type='button'
        onClick={() => appContext.setCurrentPage("createEmployee")}
        className='underline underline-offset-1 hover:text-red-600 text-slate-500 flex justify-center mt-2 w-full'
      >
        Home
      </button>
    </main>
  )
}

export default EmployeeList