import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the Payment document
interface IPayment extends Document {
  id: number;
  label: string;
  amount: string;
  status?: number;
  time: string;
}

// Define the schema for the Payment collection
const PaymentSchema: Schema<IPayment> = new Schema<IPayment>({
  id: {
    type: Number,
    required: [true, "Please provide an id"],
    unique: true,
  },
  label: {
    type: String,
    required: [true, "Enter payment label"],
  },
  amount: {
    type: String,
    required: [true, "Enter Amount"],
  },
  status: {
    type: Number,
    max: 99999999999, // Maximum value for status
  },
  time: {
    type: String,
    required: [true, "Enter Time"],
  },
});

PaymentSchema.index({ id: 1 }, { unique: true });

// Create the model for the Payment collection
const Payment = mongoose.models.Payment as mongoose.Model<IPayment> || mongoose.model<IPayment>("Payment", PaymentSchema);

export default Payment;
