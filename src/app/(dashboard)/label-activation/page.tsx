// components/SignupFormDemo.tsx
"use client";
import React, { useState } from "react";
import SignupSchema from '../../Schema/labelactivation'; 
import { Label } from './ui/label';
import { Input } from './ui/input';
import { cn } from '../../../utils/cn';

 function SignupFormDemo() {
  const [errors, setErrors] = useState<any>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    // Extract form data into an object
    const data = {
      firstname: formData.get('firstname') as string,
      email: formData.get('email') as string,
      contact: formData.get('contact') as string,
      recordLabel: formData.get('recordLabel') as string,
      userType: formData.get('userType') as string,
    };

    // Validate the data against the schema
    const result = SignupSchema.safeParse(data);
    if (!result.success) {
      setErrors(result.error.format());
    } else {
      setErrors({});
      // Handle successful form submission
      console.log(data);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#a9a9bb]">
      <div className="max-w-md w-full mx-auto p-8 m-8">
        <div className="text-white p-8">
          <h2 className="font-bold text-3xl text-center text-blue-600 mb-4">Label Activation</h2>
          <p className="text-center text-blue-600 text-2xl mb-8">For Authorized</p>
        </div>

        <form className="bg-[#8f8fa3] text-white p-8 rounded-lg shadow-lg mt-2" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">Name</Label>
              <Input id="firstname" name="firstname" placeholder="Enter Your Name" type="text" className="bg-[#3a3a3c] text-white" />
              {errors.firstname && <p className="text-black text-sm">{errors.firstname._errors[0]}</p>}
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" placeholder="swalay@fc.com" type="email" className="bg-[#3a3a3c] text-white" />
            {errors.email && <p className="text-black text-sm">{errors.email._errors[0]}</p>}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="contact">Contact</Label>
            <Input id="contact" name="contact" placeholder="123-456-7890" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="bg-[#3a3a3c] text-white" />
            {errors.contact && <p className="text-black text-sm">{errors.contact._errors[0]}</p>}
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="recordLabel">Record Label</Label>
            <Input id="recordLabel" name="recordLabel" placeholder="Enter Your Label" type="text" className="bg-[#3a3a3c] text-white" />
            {errors.recordLabel && <p className="text-black text-sm">{errors.recordLabel._errors[0]}</p>}
          </LabelInputContainer>
          <div className="mb-8">
            <Label className="block mb-2">Type of user</Label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="radio" name="userType" value="Normal Client" defaultChecked />
                <span className="ml-2 text-black">Normal Client</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="userType" value="Super Client" />
                <span className="ml-2 text-black">Super Client</span>
              </label>
            </div>
            {errors.userType && <p className="text-black text-sm">{errors.userType._errors[0]}</p>}
          </div>

          <button className="bg-gradient-to-br from-[#3a3a3c] to-[#1c1c1e] w-full text-white rounded-md h-10 font-medium shadow-lg" type="submit">
            Register Now
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default SignupFormDemo
