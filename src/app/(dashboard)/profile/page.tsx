import Image from "next/image"
import Style from "../../styles/Profile.module.css"

const Page = () => {
  return (
    
    // <div className="flex" >
    <div className="grid grid-cols-12 gap-4 ">
      {/*
      <div className={`col-span-3 h-screen  ${Style.profileSidebar}`}>

        <div className={`my-4 ${Style.profileImgContainer}`}>
          <Image src={"/images/album3.jpg"} width={250} height={250} alt="profile" className={Style.profileImage} />
        </div>
        <div className="mt-5 mb-5">
          <p className={Style.labelName} >Label  name</p>
          <p className={Style.labelUserName} >Label user name</p>
          <p className={`mt-3 ${Style.labelDescription}`} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vitae recusandae dolores excepturi, rerum ullam sequi officiis non sit magni fugit animi quo officia quae aliquam. Possimus nam architecto deserunt.</p>
        </div>

        <div className="flex mt-5 items-center justify-evenly">
          <Image src={"/images/facebook.png"} width={50} height={50} alt="social" />
          <Image src={"/images/instagram.png"} width={50} height={50} alt="social" />
          <Image src={"/images/youtube.png"} width={50} height={50} alt="social" />

        </div>

      </div>*/}
      {/* <div className={`col-span-9 h-screen ${Style.profileContainer}`}> */}
     {/* <div className={`col-span-9 h-screen `}>

        <div className={Style.profileContainer}>
          <div className="flex items-center justify-between">
            <h3 className={Style.labelHeader}>Label Information</h3>
            <i className={`bi bi-pencil-square ${Style.editIcon}`}></i>
          </div>

          <div className="grid grid-cols-12 gap-4 mt-3 mb-3">

            <div className={`mb-3 col-span-4 `}>
              <p className={Style.labelSubHeader}>Label Name</p>
              <p>Sarkar World Music Ltd</p>
            </div>
            <div className={`mb-3 col-span-4 `}>
              <p className={Style.labelSubHeader}>Label Owner Name</p>
              <p>S Sarkar </p>
            </div>
            <div className={`mb-3 col-span-4 `}>
              <p className={Style.labelSubHeader}>Joining Date</p>
              <p>10th March, 2024</p>
            </div>
            <div className={`mb-3 col-span-4 `}>
              <p className={Style.labelSubHeader}>Email</p>
              <p>s@gmail.com</p>
            </div>
            <div className={`mb-3 col-span-4 `}>
              <p className={Style.labelSubHeader}>Contact</p>
              <p>789654123</p>
            </div>
            <div className={`mb-3 col-span-4 `}>
              <p className={Style.labelSubHeader}>Address</p>
              <p>India</p>
            </div>
            <div className={`mb-3 col-span-4 `}>
              <p className={Style.labelSubHeader}>Total Album</p>
              <p>888k</p>
            </div>
            <div className={`col-span-4 `}>
              <p className={Style.labelSubHeader}>Total Track</p>
              <p>888k</p>
            </div>

            <div className={`mb-3 col-span-4 `}>
              <p className={Style.labelSubHeader}>Total Earning</p>
              <p>88888888k</p>
            </div>



          </div>




        </div>

        <div className={`mt-5 ${Style.profileContainer}`}>

          <div className="flex items-center justify-between">
            <h3 className={Style.labelHeader}>Bank Details</h3>
            <i className={`bi bi-pencil-square ${Style.editIcon}`}></i>
          </div>

          <div className="grid grid-cols-12 gap-4 mt-3 mb-3">

            <div className={`mb-3 col-span-3 `}>
              <p className={Style.labelSubHeader}>Account Holder Name</p>
              <p>S Sarkar</p>
            </div>
            <div className={`col-span-3 `}>
              <p className={Style.labelSubHeader}>Bank Name</p>
              <p>State Bank of India</p>
            </div>

            <div className={`mb-3 col-span-3 `}>
              <p className={Style.labelSubHeader}>Branch Name</p>
              <p>GST NO</p>
            </div>
            <div className={`mb-3 col-span-3 `}>
              <p className={Style.labelSubHeader}>Account Number</p>
              <p>xxxxxxxx321</p>
            </div>
            <div className={`mb-3 col-span-3 `}>
              <p className={Style.labelSubHeader}>IFSC Code</p>
              <p>SBINO24321</p>
            </div>
            <div className={`mb-3 col-span-3 `}>
              <p className={Style.labelSubHeader}>UPI Id</p>
              <p>sdf@sbi.sa</p>
            </div>
            <div className={`mb-3 col-span-3 `}>
              <p className={Style.labelSubHeader}>PAN</p>
              <p>xxxxx321</p>
            </div>
            <div className={`mb-3 col-span-3 `}>
              <p className={Style.labelSubHeader}>GST NO</p>
              <p>2422323241234</p>
            </div>


          </div>




        </div>

//old code

      </div>*/}

    </div>

  )
}

export default Page;