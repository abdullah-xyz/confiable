// import { db } from "../utils/firebase";

// export default defineEventHandler(async (event) => {
//   const coursesRef = db.collection("Course");
//   const courses = await coursesRef.get();
//   const docs: FirebaseFirestore.DocumentData = [];
//   courses.forEach((course) => {
//     docs.push(course.data());
//   });
//   return docs;
// });
