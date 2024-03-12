import crypto from "crypto";
const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const signatureContent = body.order_id + "|" + body.razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", config.razorpayKeySecret)
    .update(signatureContent)
    .digest("hex");

  return expectedSignature === body.razorpay_signature;
});
