import { applicationDefault, cert, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase-admin/firestore";

const app = initializeApp({
  credential: cert({
    type: "service_account",
    project_id: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
    private_key_id: process.env.firebase_private_key_id,
    private_key: process.env.firebase_private_key,
    client_email: process.env.firebase_client_email,
    client_id: process.env.firebase_client_id,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: process.env.firebase_client_cert_url,
    universe_domain: "googleapis.com",
  }),
});
export const db = getFirestore();
