import { ClipboardCheck, File, Home, LogOut, Phone, TargetIcon, User, UserCircle, Wallet } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { auth, db } from '@/config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsername = async () => {
            const user = auth.currentUser;
            if (!user) return;
            const userDetailsRef = collection(db, 'users', user.uid, 'userDetails');
            const snapshot = await getDocs(userDetailsRef);
            if (!snapshot.empty) {
                const data = snapshot.docs[0].data();
                setUsername(data.userName || '');
            }
        };
        fetchUsername();
    }, []);

    const handleNavigate = (path) => {
        navigate(path);
    };

    const handleSignOut = async () => {
        await signOut(auth);
        navigate('/');
    };

    return (
        <div className='h-full bg-gradient-to-br from-blue-80 via-purple-80 to-teal-80 backdrop-blur-md p-6 pb-2 rounded-bl-2xl rounded-tl-2xl flex flex-col justify-between items-center text-black'>
            <div className='items-center'>
                <div className='w-full m-8 mt-4 flex items-center '>
                    <div className='flex flex-col items-center justify-center'>
                        <UserCircle className='h-16 w-16 text-[1.6rem]'/>
                        <p className='text-[1.2rem] w-full'>{username ? username : 'Username'}</p>
                    </div>
                </div>
                <div className=' pt-2 pb-16'>
                    <ul>
                        <li className='flex items-center gap-2 text-xl p-2 hover:bg-black/12 rounded-lg text-teal-400 cursor-pointer' onClick={() => handleNavigate('/dashboard')}><span><Home className='h-6 w-6'/></span>Home</li>
                        <li className='flex items-center gap-2 text-xl p-2 hover:bg-black/12 rounded-lg mt-4 cursor-pointer' onClick={() => handleNavigate('/expenses')}><span><Wallet className='h-6 w-6'/></span>Expenses</li>
                        <li className='flex items-center gap-2 text-xl p-2 hover:bg-black/12 rounded-lg mt-4 cursor-pointer' onClick={() => handleNavigate('/tasks')}><span><ClipboardCheck className='h-6 w-6'/></span>Tasks</li>
                        <li className='flex items-center gap-2 text-xl p-2 hover:bg-black/12 rounded-lg mt-4 cursor-pointer' onClick={() => handleNavigate('/reports')}><span><File className='h-6 w-6'/></span>Reports</li>
                        <li className='flex items-center gap-2 text-xl p-2 hover:bg-black/12 rounded-lg mt-4 cursor-pointer' onClick={() => handleNavigate('/support')}><span><Phone className='h-6 w-6'/></span>Support</li>
                        <li className='flex justify-center items-center gap-2 text-xl shadow-xs shadow-gray-500 backdrop-blur-2xl p-2 bg-black/12 rounded-lg mt-12 cursor-pointer' onClick={handleSignOut}>Signout <span><LogOut className='h-6 w-6'/></span></li>
                    </ul>
                </div>
            </div>
            <div className='items-baseline'>
                <h3 className='syncopate-bold text-center mt-4 text-2xl text-black'>EXP<span className='text-teal-400 syncopate-bold'>ensio </span></h3>
            </div>
        </div>
    );
}

export default Sidebar