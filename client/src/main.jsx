// index.js
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "react-oidc-context";
import "./index.css";

// ✅ AWS Cognito OIDC Config
const cognitoAuthConfig = {
  authority: "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_7ZTSiQbOx",
  client_id: "2bj3dclck188frppha31hd0u9s",
  redirect_uri: "https://d84l1y8p4kdic.cloudfront.net", // replace with local during dev if needed
  response_type: "code",
  scope: "phone openid email",
};

// ✅ Mount App with OIDC AuthProvider
const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </StrictMode>
);
