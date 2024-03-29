import { DEFAULT_EMPLOYEE } from "@/lib/contants";
import { generateRandomEmployee } from "@/lib/mock";
import { createContext, useContext, useState } from "react";

const MOCKED_EMPLOYEE_LIST = Array.from({ length: 1211 }, () => generateRandomEmployee());

export type EmployeeType = {
  firstName: string,
  lastName: string,
  dateOfBirth: string,
  startDate: string,
  street: string,
  city: string,
  state: string,
  zip: number,
  jobDepartment: string,
};

type AppContextType = {
  employeeToCreate: EmployeeType | null,
  setEmployeeToCreate: (employee: EmployeeType) => void,
  employeeList: EmployeeType[],
  setEmployeeList: (employeeList: EmployeeType[]) => void,
  currentPage: string,
  setCurrentPage: (page: string) => void,
};

const AppContext = createContext<AppContextType>({
  employeeToCreate: DEFAULT_EMPLOYEE,
  setEmployeeToCreate: () => { },
  employeeList: MOCKED_EMPLOYEE_LIST,
  setEmployeeList: () => { },
  currentPage: "createEmployee",
  setCurrentPage: () => { },
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [employeeToCreate, setEmployeeToCreate] = useState<EmployeeType | null>(DEFAULT_EMPLOYEE);
  const [employeeList, setEmployeeList] = useState<EmployeeType[]>(MOCKED_EMPLOYEE_LIST);
  const [currentPage, setCurrentPage] = useState<string>("createEmployee");

  return (
    <AppContext.Provider value={{ currentPage, setCurrentPage, employeeToCreate, setEmployeeToCreate, employeeList, setEmployeeList }}>
      {children}
    </AppContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppWrapper");
  }
  return context;
}