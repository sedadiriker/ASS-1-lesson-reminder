import React from "react";
import { data } from "../../helper/data";
import LessonCardStyle from "./lesson.module.css";

const LessonCard = () => {
  return (
    <div className={LessonCardStyle.container}>
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
      <button>Clear List</button>
    </div>
  );
};

export default LessonCard;
