import connectMongoDB from "../../../../libs/mongodb";
import Artist from "../../../../models/artists";


import {  NextResponse } from "next/server";

export async function POST(request) {
    const { id,uid,lable_name,song_name,ISRC,artist_name,spotify,itunes,jiosavan,amazon,status,type } = await request.json();
    await connectMongoDB();
    await Artist.create({ id,uid,lable_name,song_name,ISRC,artist_name,spotify,itunes,jiosavan,amazon,status,type });
    return NextResponse.json({ message: "Payment Successful" }, { status: 201 });
}
