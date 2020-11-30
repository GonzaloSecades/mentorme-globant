import React from "react"
import Modal from "./utils/modal"
import ModalFinish from './utils/modalFinish'
const img = 'https://images.squarespace-cdn.com/content/v1/59dfd6b7268b96c5a9ea78b4/1587998150570-024KONK7WKUF08E1TFI0/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/Charles+Kreshel%2C+MD?format=1500w'



function Matching({mentorOne, mentorTwo, handleClickMentorOne,handleClickMentorTwo,finish}) {  
  return (    
  <section className='matchingFather'>
  <Modal/>
  {finish ? <ModalFinish/> : null}
  <form className="matchingOne"  onSubmit={(e)=>handleClickMentorOne(e)}>
    
    <img className='matchingMentorOrMenteeIMG' src={img} alt=""/>
    <div>
  <h5>{mentorOne && mentorOne.firstName} {mentorOne && mentorOne.lastName}</h5>      
  <p>{mentorOne && mentorOne.country}</p>
      <section>
        My Skills: <br/>
        {
          mentorOne && mentorOne.skillsToTeach.map((skill)=>{
          return <p key={skill} className='matchingSkills'>*{skill.name}</p>
          })
          
        }
        
      </section>
      <button className='myButton'>SELECT</button>
    </div>
   
  </form>
  <img className='matchingImgVS' src="https://minddata.org/wp-content/uploads/2020/01/Diversity-and-AI-Artificial-Intelligence.png" alt=""/>
  <form className='matchingTwo' onSubmit={(e)=>handleClickMentorTwo(e)}>
  <img className='matchingMentorOrMenteeIMG' src={img} alt=""/>
  <div>
  <h5>{mentorTwo && mentorTwo.firstName} {mentorTwo && mentorTwo.lastName}</h5>      
  <p>{mentorTwo && mentorTwo.country}</p>
      <section>
        My Skills: <br/>
        {
          mentorTwo && mentorTwo.skillsToTeach.map((skill)=>{
          return <p key={skill}  className='matchingSkills'>*{skill.name}</p>
          })
          
        }
        
      </section>
      <button className='myButton'>SELECT</button>
    </div>
  </form>
  </section>
  )
}
export default Matching