import "./App.css";
import fakeMap from "./assets/HarpsTourMap.jpg";
import tourList from "./assets/tourList.jpg";
import yardsign from "./assets/yardsign.png";
import brochure from "./assets/brochure.pdf";

function App() {
  return (
    <div className="App">
      <div
        className="hero"
        style={{
          width: "100%",
          placeContent: "center",
          padding: "0 15% 0",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          minHeight: "85svh",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "min-content",
            padding: "rem",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          <section className="hero-section">
            <p style={{ color: "white", fontSize: "2rem" }}>
              {" "}
              July 13th & 14th &nbsp;
            </p>
            <h1 className="hero-text">
              Harpswell Open&nbsp;Studio Tour&nbsp;2024
            </h1>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="https://fb.me/e/3ZlMMmEHX" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#3F51B5"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/harpswellopenstudiotour/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 48 48"
                >
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                    cx="19.38"
                    cy="42.035"
                    r="44.899"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#fd5"></stop>
                    <stop offset=".328" stop-color="#ff543f"></stop>
                    <stop offset=".348" stop-color="#fc5245"></stop>
                    <stop offset=".504" stop-color="#e64771"></stop>
                    <stop offset=".643" stop-color="#d53e91"></stop>
                    <stop offset=".761" stop-color="#cc39a4"></stop>
                    <stop offset=".841" stop-color="#c837ab"></stop>
                  </radialGradient>
                  <path
                    fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                    cx="11.786"
                    cy="5.54"
                    r="29.813"
                    gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#4168c9"></stop>
                    <stop
                      offset=".999"
                      stop-color="#4168c9"
                      stop-opacity="0"
                    ></stop>
                  </radialGradient>
                  <path
                    fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                  ></path>
                  <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                  <path
                    fill="#fff"
                    d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                  ></path>
                </svg>
              </a>
            </div>
          </section>
        </div>
      </div>
      <div
        className="about"
        style={{ textAlign: "center", width: "75%", padding: "50px 0" }}
      >
        <p style={{ fonstSize: "22px" }}>
          Join us in Harpswell for our first ever Open Studio Tour, July 13-14,
          2024. Wander through Harpswell Neck, Sebascodegan Island, Cundy's
          Harbor, and Orr's and Bailey Islands, enjoying this unique opportunity
          to visit artists in their studios and galleries. Engage directly with
          creators, learn their stories, inspirations, and methods, and perhaps
          find the perfect piece - or pieces! - to adorn your home. With studios
          and galleries scattered across our picturesque landscape, craft your
          personalized journey through Harpswell's thriving art community.
          You'll find artists working with acrylic, oil and watercolor paints,
          clay, metal, wood, and fiber. Along the way you may choose to refresh
          in one of Harpswell's restaurants and cafes, or stretch your legs on
          one of the town's numerous hiking trails - there's something to please
          every taste and ability level here. Prepare to be inspired as you
          explore the diverse talents that define our town's artistic spirit!
        </p>
      </div>
      <div style={{ backgroundColor: "rgb(64, 100, 133)" }}>
        <div
          className="locations"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            padding: "50px 100px",
            gap: "2rem",
          }}
        >
          <div
            className="maplocations"
            style={{ display: "flex", gap: "2rem", placeContent: "center" }}
          >
            <div style={{ width: "75%" }}>
              <h3 className="map-header" style={{ margin: "1rem 0" }}>
                Event Map
              </h3>

              <img
                src={fakeMap}
                width={"100%"}
                alt="map of participating locations"
              />
            </div>
            {/* <div style={{ width: "75%" }}>
              <h3>List of Participating Locations</h3>
              <img
                src={tourList}
                height={"auto"}
                alt="map of participating locations"
              />
            </div> */}
          </div>
          <div
            style={{
              display: "flex",
              width: "45%",
              flexDirection: "column",
              justifyContent: "space-around",
              gap: "1.5rem",
            }}
            className="sign-img"
          >
            <h3 className="sign-header" style={{ margin: "1rem 0" }}>
              Look for these signs to find participating galleries!
            </h3>
            <img src={yardsign} alt="yardsign" />
          </div>
          <h3
            className="brochure"
            style={{
              width: "100%",
              gridColumnEnd: "3",
              gridColumnStart: "1",
              textAlign: "center",
            }}
          >
            <a
              style={{ color: "white", pointerEvents: "none" }}
              href={brochure}
              download="Harpswell_Tour_Brochure.pdf"
            >
              Brochure will be available July 12th
            </a>
          </h3>
        </div>

        <p
          style={{
            fontSize: "1rem",
            width: "100%",
            textAlign: "center",
            color: "white",
          }}
          className="footer"
        >
          COPYRIGHT © 2024 HARPSWELL OPEN STUDIO TOUR - ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
}

export default App;
