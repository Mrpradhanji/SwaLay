import connectMongoDB from "../../../../libs/mongodb";

import {  NextResponse } from "next/server";
import Youtube from "../../../../models/youtube";

export async function POST(request) {
    const { id,link,title,status,comment,uid} = await request.json();
    await connectMongoDB();
    await Youtube.create({ id,link,title,status,comment,uid });
    return NextResponse.json({ message: " Successful" }, { status: 201 });
}
