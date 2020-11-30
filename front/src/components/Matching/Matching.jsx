import React from "react"
import Modal from "./utils/modal"

const img = 'https://images.squarespace-cdn.com/content/v1/59dfd6b7268b96c5a9ea78b4/1587998150570-024KONK7WKUF08E1TFI0/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/Charles+Kreshel%2C+MD?format=1500w'



function Matching() { 
  return (
    
  <section className='matchingFather'>
  <Modal/>
  <div className='matchingOne'>
    <img className='matchingMentorOrMenteeIMG' src={img} alt=""/>
    <div>
      <h4>MentorName</h4>      
      <p>Idiomas</p>
      <section>
        My Skills: <br/>
        <p className='matchingSkills'>hola</p>
      </section>
    </div>
   
  </div>
  <img className='matchingImgVS' src="https://minddata.org/wp-content/uploads/2020/01/Diversity-and-AI-Artificial-Intelligence.png" alt=""/>
  <div className='matchingTwo'>
  <img className='matchingMentorOrMenteeIMG' src={img} alt=""/>
  <div>
      <h4>MentorName</h4>      
      <p>Pais</p>
      <section>
        My Skills: <br/>
        <p className='matchingSkills'>hola
        hola</p>
      </section>
    </div>
  </div>
  </section>
  )
}
export default Matching