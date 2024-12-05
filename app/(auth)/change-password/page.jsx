'use client'

import { Suspense } from "react";
import ChangePasswordComponent from "../components/ChangePasswordComponent";


const ChangePass = () => {
 
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChangePasswordComponent />
    </Suspense>
  );
};

export default ChangePass;
