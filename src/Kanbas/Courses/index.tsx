import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./Navigation";
import { HiMiniBars3 } from "react-icons/hi2";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import * as db from "../Database";
function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <h1><HiMiniBars3 /> Course {course?.name}</h1>
      <CourseNavigation />
      <div>
        <div className="overflow-y-scroll position-fixed bottom-0 end-0">
          <Routes>
            <Route path="/" element={<Navigate to="Home/*" />} />
            <Route path="Home/*" element={<Home/>} />
            <Route path="Modules/*" element={<Modules/>} />
            <Route path="Assignments/*" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>}/>
            <Route path="Grades/*" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
);}
 export default Courses;

