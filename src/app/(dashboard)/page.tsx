import Image from "next/image";
import Style from "../styles/Home.module.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import HomeStatsCard from "@/components/HomeStatsCard";

const Home = () => {


  return (
    <div className="min-h-screen ">
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}

      {/* <div className={Style.statsContainer} >

        <div className={Style.greetContainer}>
          <h1 className={Style.heading}>Welcome, Admin</h1>
          <p className={Style.para}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>

        <div className={Style.statusCardContainer}>
          <div className={Style.statusCard}>
            <div className={Style.statCardDetails}>
              <p className={Style.statNumber}>30</p>
              <p className={Style.statLabel}>Albums</p>
            </div>
            <i className={`bi bi-vinyl ${Style.statIcon}`}></i>
          </div>
          

          <div className={Style.statusCard}>
            <div className={Style.statCardDetails}>
              <p className={Style.statNumber}>50</p>
              <p className={Style.statLabel}>Tracks</p>
            </div>
            <i className={`bi bi-music-note ${Style.statIcon}`}></i>
          </div>

          <div className={Style.statusCard}>
            <div className={Style.statCardDetails}>
              <p className={Style.statNumber}>10</p>
              <p className={Style.statLabel}>Labels</p>

            </div>
            <i className={`bi bi-person-circle ${Style.statIcon}`}></i>
          </div>

        </div>

      </div> */}
      <HomeStatsCard/>

      <div className={`mt-3 p-2  ${Style.toolContainer}`}>

        <div className={`p-3 border-thin-gray ${Style.toolBox}`}>
          <h4 className={Style.headingLabel}>Tools</h4>
          <div className={Style.toolList}>
            <div className={Style.toolRed}>
              <i className={`bi bi-music-note-beamed ${Style.toolIcon}`}></i>
              <p>Add New Album</p>
            </div>
            <div className={Style.toolBlue}>
              <i className={`bi bi-file-earmark-minus-fill ${Style.toolIcon}`}></i>
              <p>Label Agreement</p>
            </div>
            <div className={Style.toolPurple}>
              <i className={`bi bi-plus-circle-fill ${Style.toolIcon}`}></i>
              <p>Label Registration</p>
            </div>
            <div className={Style.toolYellow}>
              <i className={`bi bi-youtube ${Style.toolIcon}`}></i>
              <p>Copyright Claims</p>
            </div>
            <div className={Style.toolPink}>
              <i className={`bi bi-currency-rupee ${Style.toolIcon}`}></i>
              <p>Add Payments</p>
            </div>
          </div>
        </div>

        <div className={`p-3 px-5 border-thin-gray ${Style.notesBook}`}>
          <h4 className={Style.headingLabel}>Notification</h4>

          <div className="mb-3">

            <label htmlFor="note-type" className="block mb-2 text-sm font-medium text-gray-700">Note Type</label>
            <select name="note-type" id="note-type" className="form-input block w-full px-4 py-2 bg-white border border-gray-300 rounded hover:border-blue-500">
              <option value="label">Label</option>
              <option value="notification">Notification</option>
              <option value="message">Message</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="">Write Note</label>
            <textarea
              className="form-input block w-full px-4 py-2 bg-white border border-gray-300 rounded hover:border-blue-500"
              placeholder="Write here"
            />
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            type="button"
          >
            Submit
          </button>

          <h4 className={`mt-3 mb-3 ${Style.headingLabel}`}>All Notes</h4>
          <ul>

            <li className={`p-2 mb-3 ${Style.noteItem}`}>
              <div className={Style.noteItemTop}>
                <span className={Style.noteType}>Note type</span>
                <div className={Style.noteController}>
                  <i className={`bi bi-pencil-square me-4 ${Style.editBtn}`}></i>
                  <i className={`bi bi-trash-fill ${Style.deleteBtn}`}></i>
                </div>
              </div>
              <p className={`mt-3 mb-2`}>This is notification this is notification this is notification </p>
            </li>
            <li className={`p-2 mb-3 ${Style.noteItem}`}>
              <div className={Style.noteItemTop}>
                <span className={Style.noteType}>Note type</span>
                <div className={Style.noteController}>
                  <i className={`bi bi-pencil-square me-4 ${Style.editBtn}`}></i>
                  <i className={`bi bi-trash-fill ${Style.deleteBtn}`}></i>
                </div>
              </div>
              <p className={`mt-3 mb-2`}>This is notification this is notification this is notification </p>
            </li>
            <li className={`p-2 mb-3 ${Style.noteItem}`}>
              <div className={Style.noteItemTop}>
                <span className={Style.noteType}>Note type</span>
                <div className={Style.noteController}>
                  <i className={`bi bi-pencil-square me-4 ${Style.editBtn}`}></i>
                  <i className={`bi bi-trash-fill ${Style.deleteBtn}`}></i>
                </div>
              </div>
              <p className={`mt-3 mb-2`}>This is notification this is notification this is notification </p>
            </li>


          </ul>


        </div>

      </div>



    </div >
  );
}



export default Home