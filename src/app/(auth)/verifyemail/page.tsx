"use client"
import { apiPost } from '@/helpers/axiosRequest';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';

const page = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token')
    const router = useRouter()

    console.log("token ::");
    console.log(token);

    const onVerify = async () => {
        const response = await apiPost('/api/user/verifyemail', token)
        console.log("verify response");
        console.log(response);
        if (!response.sucess) {
            console.log("Incvalid token");
            toast.error("Invalid Token")
        }else{
            router.push('/signin')
        }
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className='center mb-5'>Verify Email</h1>
            <h3>Toekn : {token}</h3>

            <button className='bg-black text-white px-4 py-4' onClick={onVerify} >Verify Email</button>

        </div>
    )
}

export default page