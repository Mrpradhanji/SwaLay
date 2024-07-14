'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import { z } from 'zod';

// Define the Zod schema for bank details
const Bankdetails = z.object({
  accountHolderName: z.string().nonempty("Account holder name is required"),
  bankName: z.string().nonempty("Bank name is required"),
  branchName: z.string().nonempty("Branch name is required"),
  accountNumber: z.string().nonempty("Account number is required"),
  ifscCode: z.string().nonempty("IFSC code is required"),
  upiId: z.string().nonempty("UPI ID is required"),
  panNumber: z.string().nonempty("PAN number is required"),
  gst: z.string().nonempty("GST number is required"),
});

type BankDetails = z.infer<typeof Bankdetails>;

interface Errors {
  [key: string]: {
    _errors: string[];
  };
}

const BankDetailsForm = () => {
  const [formData, setFormData] = useState<BankDetails>({
    accountHolderName: '',
    bankName: '',
    branchName: '',
    accountNumber: '',
    ifscCode: '',
    upiId: '',
    panNumber: '',
    gst: '',
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = Bankdetails.safeParse(formData);

    if (!result.success) {
      const validationErrors = result.error.format();
      setErrors(validationErrors as unknown as Errors);
    } else {
      setErrors({});
      // Handle form submission logic here
      console.log('Form data submitted:', formData);
    }
  };

  const getLabelWithAsterisk = (label: string) => (
    <span>
      {label} <span className="text-red-500">*</span>
    </span>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="accountHolderName" className="block text-sm font-medium text-gray-700">
          {getLabelWithAsterisk("Account Holder Name")}
        </label>
        <input
          type="text"
          name="accountHolderName"
          id="accountHolderName"
          placeholder="Enter account holder name"
          value={formData.accountHolderName}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
        />
        {errors.accountHolderName && <p className="text-red-500 text-xs">{errors.accountHolderName._errors.join(', ')}</p>}
      </div>
      <div>
        <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">
          {getLabelWithAsterisk("Bank Name")}
        </label>
        <input
          type="text"
          name="bankName"
          id="bankName"
          placeholder="Enter bank name"
          value={formData.bankName}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
        />
        {errors.bankName && <p className="text-red-500 text-xs">{errors.bankName._errors.join(', ')}</p>}
      </div>
      <div>
        <label htmlFor="branchName" className="block text-sm font-medium text-gray-700">
          {getLabelWithAsterisk("Branch Name")}
        </label>
        <input
          type="text"
          name="branchName"
          id="branchName"
          placeholder="Enter branch name"
          value={formData.branchName}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
        />
        {errors.branchName && <p className="text-red-500 text-xs">{errors.branchName._errors.join(', ')}</p>}
      </div>
      <div>
        <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
          {getLabelWithAsterisk("Account Number")}
        </label>
        <input
          type="text"
          name="accountNumber"
          id="accountNumber"
          placeholder="Enter account number"
          value={formData.accountNumber}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
        />
        {errors.accountNumber && <p className="text-red-500 text-xs">{errors.accountNumber._errors.join(', ')}</p>}
      </div>
      <div>
        <label htmlFor="ifscCode" className="block text-sm font-medium text-gray-700">
          {getLabelWithAsterisk("IFSC Code")}
        </label>
        <input
          type="text"
          name="ifscCode"
          id="ifscCode"
          placeholder="Enter IFSC code"
          value={formData.ifscCode}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
        />
        {errors.ifscCode && <p className="text-red-500 text-xs">{errors.ifscCode._errors.join(', ')}</p>}
      </div>
      <div>
        <label htmlFor="upiId" className="block text-sm font-medium text-gray-700">
          {getLabelWithAsterisk("UPI ID")}
        </label>
        <input
          type="text"
          name="upiId"
          id="upiId"
          placeholder="Enter UPI ID"
          value={formData.upiId}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
        />
        {errors.upiId && <p className="text-red-500 text-xs">{errors.upiId._errors.join(', ')}</p>}
      </div>
      <div>
        <label htmlFor="panNumber" className="block text-sm font-medium text-gray-700">
          {getLabelWithAsterisk("PAN Number")}
        </label>
        <input
          type="text"
          name="panNumber"
          id="panNumber"
          placeholder="Enter PAN number"
          value={formData.panNumber}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
        />
        {errors.panNumber && <p className="text-red-500 text-xs">{errors.panNumber._errors.join(', ')}</p>}
      </div>
      <div>
        <label htmlFor="gst" className="block text-sm font-medium text-gray-700">
          {getLabelWithAsterisk("GST")}
        </label>
        <input
          type="text"
          name="gst"
          id="gst"
          placeholder="Enter GST number"
          value={formData.gst}
          onChange={handleChange}
          className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
        />
        {errors.gst && <p className="text-red-500 text-xs">{errors.gst._errors.join(', ')}</p>}
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default BankDetailsForm;
