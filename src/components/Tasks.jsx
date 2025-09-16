import { auth, db } from '@/config/firebase';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { Clock, Trash2, User } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribeAuth = auth.onAuthStateChanged((firebaseUser) => {
            setUser(firebaseUser);
        });
        return () => unsubscribeAuth();
    }, []);

    useEffect(() => {
        if (!user) return;
        const q = query(collection(db, "users", user.uid, "tasks"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const taskArray = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setTasks(taskArray);
        });
        return () => unsubscribe();
    }, [user]);

    const handleDelete = async (taskId) => {
        if (!user) return;
        await deleteDoc(doc(db, "users", user.uid, "tasks", taskId));
    };

    return (
        <div className="h-full bg-black/8 backdrop-blur-lg shadow-xl border border-white/20 rounded-2xl p-6 m-4 min-h-[220px]">
            <h2 className="font-semibold text-[2rem]">Pending Tasks</h2>
            <hr className="border-purple-200 mb-4"/>
            <div className='p-6'>
                <div className="overflow-y-scroll h-90 scrollbar-hidden">
                {tasks.map((t) => (
                    <div
                        className="flex items-center justify-between shadow-lg mt-2 p-4 bg-white/60 rounded-lg transition hover:bg-purple-500/20"
                        key={t.id}
                    >
                        <div>
                            <p className="text-[1.4rem]">{t.task}</p>
                            <p className="item-title text-blue-900">{t.lastDate}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span
                                className="cursor-pointer hover:bg-black p-2 hover:text-white rounded-lg shadow-lg"
                                onClick={() => handleDelete(t.id)}
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
    );
}

export default Tasks