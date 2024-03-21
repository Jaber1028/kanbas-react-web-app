import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./Navigation";
import { HiMiniBars3 } from "react-icons/hi2";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import "bootstrap/dist/css/bootstrap.min.css";

function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div  className="container">
      <h1><HiMiniBars3 /> Course {course?.name}</h1>
      <CourseNavigation />
      <div className="container">
        <div className="inline-flex">
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

