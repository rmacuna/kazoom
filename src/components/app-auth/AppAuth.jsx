import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

function AppAuth() {
  return <Redirect to="/app" preserveQueryString={true} />;
}

export default AppAuth;
