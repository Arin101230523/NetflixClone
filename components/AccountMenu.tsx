import { signOut } from 'next-auth/react';
import React from 'react';
import useCurrentUser from '@/hooks/useCurrentUser';

interface AccountMenuProps {
    visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({
    visible
}) => {
    if (!visible) return null;
    const { data } = useCurrentUser();

    return (
        <div className='bg-black w-56 absolute top-14 right-0 py-5 border-2 border-gray-800 flex flex-col'>
            <div className='flex flex-col gap-3 px-3'>
                <div className='flex flex-row gap-3 items-center'>
                    <img className='w-8 rounded-md' src='/images/Profile_Blue.png' alt='Profile Picture' />
                    <p className='text-white text-sm group-hover:item:underline'>
                        {data?.email}
                    </p>
                </div>
                <hr className='bg-gray-600 border-0 h-px my-4' />
                <div onClick={() => signOut()} className='text-center text-white text-sm hover:underline'>
                    Sign out of Netflix?
                </div>
            </div>
        </div>
    );
}

export default AccountMenu;