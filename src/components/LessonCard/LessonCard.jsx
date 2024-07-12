import React, { useState } from "react";
import { data } from "../../helper/data";
import LessonCardStyle from "./lesson.module.css";

const LessonCard = () => {
  const [clear, setClear] = useState(false)

  const clickClear = () => {
    setClear(!clear)
  }
  return (
    <div className={LessonCardStyle.container}>
     {
      clear ? (
        <>
        <p className={LessonCardStyle.title}>0 lessons today</p>
        <button onClick={clickClear}>Undo</button>

        </>
      ):(
        <>
         <h2 className={LessonCardStyle.title}>6 lessons today</h2>
      <div className={LessonCardStyle.lessons}>
        {data.map(({ name, hour, image }) => (
          <div className={LessonCardStyle.lessonCard}>
            <img src={image} alt="" />
            <div className={LessonCardStyle.text}>
              <p>
                <span className={LessonCardStyle.bolderText}>Lesson Name : </span>
                {name}
              </p>
              <p>
                <span className={LessonCardStyle.bolderText}>Lesson Hour : </span>{hour}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={clickClear}>Clear List</button>
        </>
      )
     }
    </div>
  );
};

export default LessonCard;
