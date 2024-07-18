import Input from '@/components/input';
import { useState } from 'react';

const Auth = () => {
    const {email, setEmail} = useState('');
    const {name, setName} = useState('');
    const{password, setPassword} = useState('');

    return (
        <div className = "relative h-full w-full bg-[url('/images/hero.jpg')] bg-center bg-fixed bg-cover">
            <div className='bg-black w-full h-full lg:bg-opacity-50'>
                <nav className = 'px-12 py-5'>
                    <img src = "/images/logo.png" alt = 'Logo' className = 'h-12'/>
                </nav>
                <div className = 'flex justify-center'>
                    <div className = 'bg -black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md w-full'>
                        <h2 className = 'text-white text-4xl mb-8 font-semibold'>
                            Sign In
                        </h2>
                        <div className = 'flex flex-col gap-4'>
                            <Input 
                                label = "Username"
                                onChange={(ev: any) => setName(ev.target.value)}
                                id="name"
                                value={name}
                            />
                            <Input 
                                label = "Email"
                                onChange={(ev: any) => setPassword(ev.target.value)}
                                id="email"
                                type="email"
                                value={email}
                            />
                            <Input 
                                label = "Password"
                                onChange={(ev: any) => setEmail(ev.target.value)}
                                id="password"
                                type="password"
                                value={password}
                            />
                        </div>
                        <button className = 'bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
                            Login
                        </button>
                        <p className = 'text-entural-500 mt-12'>
                            First time using Netflix?
                            <span className = "text-white ml-1 hover:underline cursor-pointer">
                                Create an account
                            </span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Auth;