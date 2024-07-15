import connectMongoDB from "../../../../libs/mongodb";

import {  NextResponse } from "next/server";
import Lyric from "../../../../models/lyrics";

export async function POST(request) {
    const { Lyid, uid, Label_name,Email_Address, Phone_Number, Song_Name,Writer_Name,Language,Isrc,Lyrics,status } = await request.json();
    await connectMongoDB();
    await Lyric.create({ Lyid, uid, Label_name,Email_Address, Phone_Number, Song_Name,Writer_Name,Language,Isrc,Lyrics,status });
    return NextResponse.json({ message: " Successful" }, { status: 201 });
}
