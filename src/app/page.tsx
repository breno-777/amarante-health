// "use client";

// import style from "./page.module.css";
// import { Navbar } from "@/components/navbar";
// import { Sidebar } from "@/components/sidebar";
// import { AddPatient } from "./pages/patient/add";
// import { AllPatients } from "./pages/patient/all";
// import React, { useState } from "react";
// import { PatientDetails } from "./pages/patient/details";
// import { Home } from "./pages/home";
// import { CurrentPageContext } from "@/context";

// export default function Page() {
//   const [currentPage, setCurrentPage] = useState<string>("Home");

//   const renderPage = () => {
//     switch (currentPage) {
//       case "Home":
//         return <Home />;
//       case "AllPatients":
//         return <AllPatients />;
//       case "AddPatient":
//         return <AddPatient isEditing={true} />;
//       case "PatientDetails":
//         return <PatientDetails patient_id={""} />;
//       default:
//         return <Home />;
//     }
//   };

//   return (
//     <div className={style.page}>
//       <main className={style.main}>
//         <div className={style.container}>
//           <div className={style.dashboard}>
//             <div className={style.header}><Navbar /></div>
//             <Sidebar setCurrentPage={setCurrentPage} />
//             <div className={style.contents}>
//               <CurrentPageContext.Provider value={[currentPage, setCurrentPage]}>
//                 {renderPage()}
//               </CurrentPageContext.Provider>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div >
//   );
// }
"use client";

import style from "./page.module.css";
import { usePathname } from "next/navigation";
import { Home } from "./pages/home/page";
import AllPatients from "./pages/patient/all/page";
import AddPatient from "./pages/patient/add/page";
import PatientDetails from "./pages/patient/details/[id]/page";

export default function Page() {
  const pathName = usePathname();

  const renderPage = () => {
    if (pathName === "/") {
      return <Home />;
    } else if (pathName === "/patient/all") {
      return <AllPatients />;
    } else if (pathName === "/patient/add") {
      return <AddPatient isEditing={true} />;
    } else if (pathName.startsWith("/patient/details/")) {
      return <PatientDetails />;
    } else {
      return <Home />;
    }
  };

  return (
    <div className={style.contents}>
      {renderPage()}
    </div>
  );
}
