import connectMongoDB from "../../../../libs/mongodb";
import Earn from "../../../../models/earn";

import {  NextResponse } from "next/server";

export async function POST(request) {
    const { id,label,earning,period,stamp } = await request.json();
    await connectMongoDB();
    await Earn.create({ id,label,earning,period,stamp });
    return NextResponse.json({ message: "Payment Successful" }, { status: 201 });
}
