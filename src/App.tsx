import './App.css'
import { useAppContext } from './components/providers';
import CreateEmployee from './pages/CreateEmployee'
import EmployeeList from './pages/EmployeeList';

function App() {
  const appContext = useAppContext();
  return (
    <div className='flex justify-center w-full mt-4'>
      {appContext.currentPage === "createEmployee" && <CreateEmployee />}
      {appContext.currentPage === "employeeList" && <EmployeeList />}
    </div>
  )
}

export default App
