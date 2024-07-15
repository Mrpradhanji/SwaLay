import connectMongoDB from "../../../../libs/mongodb";
import Anotation from "../../../../models/anotation"
import { NextResponse } from "next/server";

export async function POST(request) {
    const { id, label, earning, period, time } = await request.json();
    await connectMongoDB();
    await Anotation.create({ id, label, earning, period, time });
    return NextResponse.json({ message: "Payment Successful" }, { status: 201 });
}
