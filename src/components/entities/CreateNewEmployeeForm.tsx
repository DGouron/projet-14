"use client"

import { Button } from "@/components/ui/button"
import { checkFormValidity } from "@/lib/checkers"
import { DEFAULT_EMPLOYEE, DEPARTMENTS_OPTIONS, STATE_OPTIONS } from "@/lib/contants"
import SelectComponent from "magic-select"
import DateModifier from "../actions/DateModifier"
import { useAppContext } from "../providers"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"


export function CreateNewEmployeeForm() {
  const appContext = useAppContext();

  const handleSubmit = () => {
    appContext.setEmployeeList([...appContext.employeeList, appContext.employeeToCreate])
    appContext.setEmployeeToCreate(DEFAULT_EMPLOYEE)
  }


  const triggerJobDepartmentSelection = (value: string) => {
    appContext.setEmployeeToCreate({ ...appContext.employeeToCreate, jobDepartment: value })
  };

  const triggerStateSelection = (value: string) => {
    appContext.setEmployeeToCreate({ ...appContext.employeeToCreate, state: value })
  };

  const handleEmployeeCreation = (key: string, value: string | number) => {
    appContext.setEmployeeToCreate({ ...appContext.employeeToCreate, [key]: value })

  };


  return (
    <section className="mt-2 w-full ">
      <h2 className="w-full text-center text-lg font-bold">Create Employee</h2>
      <form className="space-y-8 border-slate-300 border rounded-md p-4 mt-4 shadow-md flex flex-col gap-4">
        <Input type="text"
          value={appContext?.employeeToCreate?.firstName || ''}
          onChange={(e) => handleEmployeeCreation('firstName', e.target.value)}
          placeholder="First Name"
        />
        <Input type="text"
          value={appContext?.employeeToCreate?.lastName || ''}
          onChange={(e) => handleEmployeeCreation('lastName', e.target.value)}
          placeholder="Last Name"
        />
        <DateModifier
          label="Date of Birth"
          date={new Date(appContext?.employeeToCreate?.dateOfBirth) || new Date()}
          setDate={(dateReceived) => handleEmployeeCreation('dateOfBirth', dateReceived.toISOString())}
        />
        <DateModifier
          label="Start Date"
          date={new Date(appContext?.employeeToCreate?.startDate) || new Date()}
          setDate={(dateReceived) => handleEmployeeCreation('startDate', dateReceived.toISOString())}
        />
        <fieldset className="flex flex-col gap-4 border-slate-400 border-2 p-2 rounded-md">
          <legend>Address</legend>
          <Input type="text"
            value={appContext?.employeeToCreate?.street || ''}
            onChange={(e) => handleEmployeeCreation('street', e.target.value)}
            placeholder="Street"
          />
          <Input type="text"
            value={appContext?.employeeToCreate?.city || ''}
            onChange={(e) => handleEmployeeCreation('city', e.target.value)}
            placeholder="City"
          />
          <SelectComponent
            label="State"
            optionsToDisplay={STATE_OPTIONS}
            triggerCurrentOption={triggerStateSelection}
          />
          <Input type="text"
            pattern="[0-9]{5}"
            value={appContext?.employeeToCreate?.zip || '0'}
            onChange={(e) => handleEmployeeCreation('zip', Number.parseInt(e.target.value))}
            placeholder="Zip"
          />
        </fieldset>
        <SelectComponent
          label="Department"
          optionsToDisplay={DEPARTMENTS_OPTIONS}
          triggerCurrentOption={triggerJobDepartmentSelection}
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button type="button" onClick={handleSubmit} disabled={!checkFormValidity(appContext.employeeToCreate)}>Save</Button>
          </DialogTrigger>
          <DialogContent>Employee Created !</DialogContent>
        </Dialog>
      </form>
    </section>
  )
}

export default CreateNewEmployeeForm;