import AddExpense from '@/components/AddExpense'
import Expenses from '@/components/Expenses'
import Sidebar from '@/components/Sidebar'
import Tasks from '@/components/Tasks'
import React from 'react'

const Dashboard = () => {
  return (
    <div className="flex h-[100vh] bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
      <div><Sidebar/></div>
      <div className="w-full h-full flex flex-col justify-end p-8 md:p-12 rounded-tr-2xl rounded-br-2xl">
        <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Tasks />
          <Expenses />
        </div>
        <div>
          <AddExpense />
        </div>
      </div>
    </div>
  )
}

export default Dashboard