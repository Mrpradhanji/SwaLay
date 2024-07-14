import { z } from 'zod';

const bankDetailsSchema = z.object({
  accountHolderName: z
    .string()
    .nonempty('Account Holder Name is required')
    .regex(/^[a-zA-Z\s]+$/, 'Account Holder Name can only contain letters and spaces'),
  bankName: z
    .string()
    .nonempty('Bank Name is required')
    .max(100, 'Bank Name should not exceed 100 characters'),
  branchName: z
    .string()
    .nonempty('Branch Name is required')
    .max(100, 'Branch Name should not exceed 100 characters'),
  accountNumber: z
    .string()
    .nonempty('Account Number is required')
    .max(20, 'Account Number should not exceed 20 digits'),
  ifscCode: z
    .string()
    .nonempty('IFSC Code is required')
    .regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, 'Invalid IFSC Code format'),
  upiId: z
    .string()
    .nonempty('UPI ID is required')
    .max(50, 'UPI ID should not exceed 50 characters'),
  panNumber: z
    .string()
    .nonempty('PAN Number is required')
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN Number format'),
  gst: z
    .string()
    .max(10)
    .nonempty('GST is required')
    .regex(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, 'Invalid GST format'),
});

export default bankDetailsSchema;
