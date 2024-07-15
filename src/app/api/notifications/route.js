import connectMongoDB from "../../../../libs/mongodb";
import Notify from "../../../../models/notification";

import {  NextResponse } from "next/server";

export async function POST(request) {
    const { id,time,message } = await request.json();
    await connectMongoDB();
    await Notify.create({ id,time,message });
    return NextResponse.json({ message: "Payment Successful" }, { status: 201 });
}
