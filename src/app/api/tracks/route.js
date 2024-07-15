import connectMongoDB from "../../../../libs/mongodb";
import Track from "../../../../models/track";


export async function POST(request){

    const {id,released,song,composer,singer,lyrics,music,producer,
        isrc,duration,url,cid,trackno,cut,link,SpotifyLink,AppleLink,
        Instagram,Facebook,tags,cut3,platformLinks,otherSinger,otherLyricist,
        otherProducer,otherComposer,category,type,version,composerIPI,
        iprs,role} = await request.json();
        await connectMongoDB();
        await Track.create({id,released,song,composer,singer,lyrics,music,producer,
            isrc,duration,url,cid,trackno,cut,link,SpotifyLink,AppleLink,
            Instagram,Facebook,tags,cut3,platformLinks,otherSinger,otherLyricist,
            otherProducer,otherComposer,category,type,version,composerIPI,
            iprs,role});
        
            return NextResponse.json({ message: "Payment Successful" }, { status: 201 });  

    }
