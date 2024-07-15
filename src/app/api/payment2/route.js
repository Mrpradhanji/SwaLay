import connectMongoDB from "../../../../libs/mongodb";
import Pay from "../../../../models/payment2";

export async function POST(request){

    const { id, link, title, status, comment,uid } = await request.json();
    await connectMongoDB();
    await Pay.create({ id, link, title, status, comment,uid});
    return NextResponse.json({message:"Payment Successfull"},{status: 201});
    


}