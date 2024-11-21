"use client";
import {Suspense } from "react";

import ResetPasswordForm from "../(dashboard)/components/ResetPassword";

const ResetPassword = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ResetPasswordForm/>
      </Suspense>
    </>
  );
};

export default ResetPassword;
