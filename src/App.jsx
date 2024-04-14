import './App.css'
import coastLine from './assets/coastline.jpg'
import fakeMap from './assets/fakemap.png'
import yardsign from './assets/yardsign.png'

function App() {

  return (
    <div className="App">
      <div className='hero' style={{width:'100%', placeContent:'center', padding:'0 15% 0', backgroundSize:'cover', backgroundPosition:'center center', backgroundRepeat:'no-repeat',minHeight:'85svh'}}>
      <div style={{ display:'flex',width:'min-content', padding:'rem', gridTemplateColumns:'repeat(4, 1fr)'}}>
        
        <section className='hero-section'>
        <p style={{color:'white', fontSize:'2rem'}}> July 13th & 14th &nbsp;</p>
        <h1 className='hero-text'>
          Harpswell Open&nbsp;Studio Tour&nbsp;2024
          </h1>
          </section></div>
          </div>
          <div className='about' style={{textAlign:'center', width:'75%', padding:'100px 0'}}>
            <h4>
            Explore Harpswell's Art Scene:
            </h4>
            <p style={{fonstSize:'22px'}}>
            Step into the vibrant world of artistry in Harpswell, Maine! Wander through our coastal town and encounter the unique charm of local artists opening their studios and galleries to the public. Engage directly with creators, discovering their creative processes and the stories behind their works, and perhaps find that perfect piece to adorn your home. With studios scattered across our picturesque landscape, craft your own personalized journey through Harpswell's thriving art community. Prepare to be captivated and inspired as you explore the diverse talents that define our town's artistic spirit!
            </p>
          </div>
          <div style={{backgroundColor:'rgb(64, 100, 133)'}}>
          <div className='locations'style={{display:'grid', textAlign:'center', padding:'100px', 
          gridTemplateColumns:'1fr 1fr', gridTemplateRows:'.05fr .5fr .05fr', gap:'2rem'
        }}>
              <h3 className='map-header' style={{margin:'1rem 0' }}>Event Map</h3>
              <h3 className='sign-header' style={{margin:'1rem 0' }}>Yard Signs</h3>
            <div className='map-img'>
              <img src ={fakeMap} alt='map of participating locations'/>
            </div>
            <div className='sign-img' >
            <img src ={yardsign} alt='yardsign'/>
            </div>

            <p className ='sign-text'style={{ textAlign:'center', margin:'2rem 0 0 0', gridColumnStart:'2', gridColumnEnd:'3',  color:'white', lineHeight:'1.75', fontSize:'16px', fontFamily: "Helvetica, arial, sans-serif"}}>Look for these signs to find participating galleries!

</p>
          </div>
</div>
          <div className='registration-section' style={{padding:'5%',textAlign:'center', display:'flex', flexDirection:'column', gap:'2rem',  width:'75%'}}>
            <h4>Registration and Meet & Greet</h4>
            <p>
            Our idea for an open studio tour sprang from the desire to get acquainted with the local art and craft community.  With that in mind, we’re hosting a “meet and greet” on Saturday, May 18, at Nancy Grice’s studio in Harpswell. If you would like to join the tour and meet your fellow creatives, please email lizstamey@yahoo.com as soon as possible.  
              </p>
            <p>
            Artists must accept any and all liability that may be associated with participating in the Harpswell Open Studio Tour. If you may need event insurance coverage, please consult with your insurance agent. Thank you for your consideration.  We look forward to meeting you. 
              </p>
            </div>
            <div style={{textAlign:'center', width:'100%'}}>
              <p style={{fontSize:'1rem'}}className='footer'>
              COPYRIGHT © 2024 HARPSWELL OPEN STUDIO TOUR - ALL RIGHTS RESERVED.
                </p>
              </div>
    </div>
  )
}

export default App
