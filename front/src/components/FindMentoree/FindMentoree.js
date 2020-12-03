import React from "react"
import Avatar from "@material-ui/core/Avatar"
import { makeStyles, TextField, Button } from "@material-ui/core"
import { matrixLog } from "../../utils/logger"
import Modal from "./utils/modal"
import { AvatarStyle } from "./utils/MaterialStyles"
import ModalFinish from "./utils/modalFinish"

matrixLog("FindMentoree")
console.log("LLEGA A FIND MENTOREE")

const img =
  "https://images.squarespace-cdn.com/content/v1/59dfd6b7268b96c5a9ea78b4/1587998150570-024KONK7WKUF08E1TFI0/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/Charles+Kreshel%2C+MD?format=1500w"

function FindMentoree({
  option, // find/mentor o find/mentee => las opciones son "mentor" o "mentee"
  mentorOne,
  mentorTwo,
  handleClickMentorOne,
  handleClickMentorTwo,
  finish,
}) {
  const classes = AvatarStyle()
  return (
    <div>
      <div className="cardsContainer">
        <p>{option === "mentor" ? "ENCUENTRA TU MENTOR" : "ENCUENTRA TU MENTEE"}</p>
        <Modal />
        {finish ? <ModalFinish /> : null}
        <form onSubmit={(e) => handleClickMentorOne(e, option)}>
          <div className="matchCardOne">
            <Avatar className={classes.large} alt="Remy Sharp" src={img} />
            <h4>
              {mentorOne && mentorOne.firstName} {mentorOne && mentorOne.lastName}
            </h4>
            <p>
              - <em>{mentorOne && mentorOne.country}</em> -<em>{mentorOne && mentorOne.languages}</em>
            </p>
            <div className="skillsConteiner">
              {mentorOne.skillsToTeach &&
                mentorOne.skillsToTeach.map((skill) => {
                  return (
                    <p key={skill} className="matchingSkills">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 34 15">
                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                      </svg>
                      {skill.name}
                    </p>
                  )
                })}
            </div>
            <Button
              type="submit"
              variant="contained"
              /*  onClick={onSubmit} */
            >
              MATCH!
            </Button>
          </div>
        </form>

        <h3>VS</h3>
        <form onSubmit={(e) => handleClickMentorTwo(e, option)}>
          <div className="matchCardTwo">
            <Avatar className={classes.large} alt="Remy Sharp" src={img} />
            <h4>
              {mentorTwo && mentorTwo.firstName} {mentorTwo && mentorTwo.lastName}
            </h4>
            <p>
              - <em>{mentorTwo && mentorTwo.country}</em> -<em>{mentorTwo && mentorTwo.languages}</em>
            </p>
            <div className="skillsConteiner">
              {mentorTwo.skillsToTeach &&
                mentorTwo.skillsToTeach.map((skill) => {
                  return (
                    <p key={skill} className="matchingSkills">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 34 15">
                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                      </svg>
                      {skill.name}
                    </p>
                  )
                })}
            </div>
            <Button
              type="submit"
              variant="contained"
              /*  onClick={onSubmit} */
            >
              MATCH!
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default FindMentoree
