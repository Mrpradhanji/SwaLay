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
    <div className="min-h-screen flex items-center justify-center bg-[#0e1a2b]">
      <div className="w-full max-w-md mx-auto p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Label Activation</h1>
          <p className="text-lg text-gray-400">For SwaLay AUthorized Employees</p>
        </div>

        <form className="bg-[#112240] p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <div className="space-y-6">
            <LabelInputContainer>
              <Label htmlFor="firstname" className="text-white">Name</Label>
              <Input id="firstname" name="firstname" placeholder="Enter Your Name" type="text" className="bg-[#3a3a3c] text-white" />
              {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname._errors[0]}</p>}
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="email" className="text-white">Email Address</Label>
              <Input id="email" name="email" placeholder="swalay@fc.com" type="email" className="bg-[#3a3a3c] text-white" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email._errors[0]}</p>}
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="contact" className="text-white">Contact</Label>
              <Input id="contact" name="contact" placeholder="123-456-7890" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="bg-[#3a3a3c] text-white" />
              {errors.contact && <p className="text-red-500 text-sm">{errors.contact._errors[0]}</p>}
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="recordLabel" className="text-white">Record Label</Label>
              <Input id="recordLabel" name="recordLabel" placeholder="Enter Your Label" type="text" className="bg-[#3a3a3c] text-white" />
              {errors.recordLabel && <p className="text-red-500 text-sm">{errors.recordLabel._errors[0]}</p>}
            </LabelInputContainer>

            <div>
              <Label className="block mb-2 text-white">Type of user</Label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center text-white">
                  <input type="radio" name="userType" value="Normal Client" defaultChecked />
                  <span className="ml-2">Normal Client</span>
                </label>
                <label className="flex items-center text-white">
                  <input type="radio" name="userType" value="Super Client" />
                  <span className="ml-2">Super Client</span>
                </label>
              </div>
              {errors.userType && <p className="text-red-500 text-sm">{errors.userType._errors[0]}</p>}
            </div>
          </div>

          <button className="w-full bg-green-500 text-white py-3 rounded-lg font-medium mt-6 hover:bg-green-600 transition duration-300" type="submit">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
}

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

export default SignupFormDemo;
