import { ClipboardCheck, TargetIcon, Wallet } from 'lucide-react'
import React, { useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const AddExpense = () => {
  const [task, setTasks] = useState('');
  const [lastDate, setLastDate] = useState('');
  const [subject, setSubject] = useState('');
  const [expense, setExpense] = useState('');

  return (
    <div className="card bg-white/40 backdrop-blur-lg shadow-xl border border-white/20 rounded-2xl p-6 m-4 mt-2">
      <h2 className="section-title">Quick Access</h2>
      <hr className="border-teal-200 mb-4" />
      <div className="flex justify-around mt-4">
        <AlertDialog>
          <AlertDialogTrigger>
            <div className="cursor-pointer bg-white/60 rounded-md flex items-center gap-4 p-3 transition hover:bg-blue-100/60">
              <span className="bg-red-500/52 rounded-4xl backdrop-blur-xs p-2 text-white"><Wallet/></span>
              <p className="item-title">+ New expense</p>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <form >
              <AlertDialogHeader>
                <AlertDialogTitle>Add New Expense</AlertDialogTitle>
                  <AlertDialogDescription>
                    <input placeholder='Coffee...' type='text' className='w-full border-2 border-blue-300 rounded-lg focus:border-blue-500 placeholder:text-blue-400 text-blue-900 text-xl p-2 mb-4'/>
                  </AlertDialogDescription>
                  <AlertDialogDescription>
                    <input type="number" placeholder='$59' required  className='w-full border-2 border-blue-300 rounded-lg focus:border-blue-500 placeholder:text-blue-400 text-blue-900 text-xl p-2 mb-4' min={0}/>
                  </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction type='submit'>Add Expense</AlertDialogAction>
              </AlertDialogFooter>
            </form>
          </AlertDialogContent>
        </AlertDialog>
        <AlertDialog>
          <AlertDialogTrigger>
            <div className="cursor-pointer bg-white/60 rounded-md flex items-center gap-4 p-3 transition hover:bg-purple-100/60">
              <span className="bg-violet-500/82 rounded-4xl backdrop-blur-xs p-2 text-white"><ClipboardCheck/></span>
              <p className="item-title">+ New task</p>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <form >
              <AlertDialogHeader>
                <AlertDialogTitle>Add New Task</AlertDialogTitle>
                  <AlertDialogDescription>
                    <input placeholder='Pending fee..'  type='text' required className='w-full border-2 border-purple-300 rounded-lg focus:border-purple-500 placeholder:text-purple-400 text-purple-900 text-xl p-2 mb-4'/>
                  </AlertDialogDescription>
                  <AlertDialogDescription>
                    <input type="date"  className='w-full border-2 border-purple-300 rounded-lg focus:border-purple-500 placeholder:text-purple-400 text-purple-900 text-xl p-2 mb-4' min={0}/>
                  </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction type='submit'>Add Task</AlertDialogAction>
              </AlertDialogFooter>
            </form>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  )
}

export default AddExpense
