import { cert, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const config = useRuntimeConfig();

const app = initializeApp({
  credential: cert({
    type: "service_account",
    project_id: config.public.firebaseProjectId,
    private_key_id: config.firebasePrivateKeyId,
    private_key: config.firebasePrivateKey,
    client_email: config.firebaseClientEmail,
    client_id: config.firebaseClientId,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: config.firebaseClientCertUrl,
    universe_domain: "googleapis.com",
  }),
});
export const db = getFirestore();
