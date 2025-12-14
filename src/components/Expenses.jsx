import React, { useEffect, useState } from 'react'
import { Trash2 } from 'lucide-react'

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [user, setUser] = useState(null);

  

  

 
  return (
    <div className="h-full bg-black/8 backdrop-blur-lg shadow-xl border border-white/20 rounded-2xl p-6 m-4 min-h-[220px]">
      <h2 className="font-semibold text-[2rem]">Recent Expenses</h2>
      <hr className="border-blue-200 mb-4"/>
      <div className="flex justify-between text-blue-700/60 text-lg pt-2 pb-2">
        <p>Subject</p>
        <p>Amount</p>
      </div>
    <div className='p-6'>
      <div className="overflow-y-scroll h-90 scrollbar-hidden">
        {expenses.map((e) => (
          <div
            className="flex items-center justify-between mt-2 p-4 bg-white/60 rounded-lg transition hover:bg-blue-100/60"
            key={e.id}
          >
            <div>
              <p className="text-[1.4rem]">{e.subject}</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="item-title text-red-500">{"\u20B9"} {e.expense}</p>
              <span
                className="cursor-pointer hover:bg-black p-2 hover:text-white rounded-lg shadow-lg"
                onClick={() => handleDelete(e.id)}
                title="Delete"
              >
                <Trash2 />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Expenses
