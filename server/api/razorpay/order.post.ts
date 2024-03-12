import Razorpay from "razorpay";
const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const instance = new Razorpay({
    key_id: config.public.razorpayApiKey,
    key_secret: config.razorpayKeySecret,
  });

  if (!body.amount || !body.currency || !body.receiptId) {
    throw createError({
      statusCode: 400,
      statusMessage: "price, currency, or receipId not provided",
    });
  }

  const response = await instance.orders.create({
    amount: body.amount,
    currency: body.currency,
    receipt: body.receiptId,
  });
  console.log(response);
  return response;
});
