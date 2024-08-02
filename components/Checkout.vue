<script setup lang="ts">
// Razorpay client only have js
import { useAppStore } from "~/store/app";
import { nanoid } from "nanoid";
const props = defineProps({
  amount: {
    type: Number,
    required: true,
  },
});
const config = useRuntimeConfig();
const appStore = useAppStore();
const currency = "INR";
const receiptId = `receipt_${nanoid(21)}`;
const isSubmitting = ref(false);

async function paymentHandler() {
  isSubmitting.value = true;
  const { data: Order } = await useFetch("/api/razorpay/order", {
    method: "POST",
    body: {
      amount: props.amount,
      currency,
      receiptId,
    },
  });

  if (!Order.value) {
    appStore.createToast({
      type: "error",
      content: "Something went wrong please refresh the page and try again!",
    });
    isSubmitting.value = false;
    return;
  }
  const options = {
    key: config.public.razorpayApiKey,
    order_id: Order.value?.id,
    amount: props.amount,
    currency,
    name: "Confiable Business",
    description: "test Product",
    image: "/img/logo.png",
    theme: {
      color: "#151b56",
    },
    handler: async function (response: any) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
      console.log(response);

      const valid = await useFetch("/api/razorpay/verify", {
        method: "POST",
        body: {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
          order_id: Order.value?.id,
        },
      });
      console.log(valid.data.value);
    },
  };
  console.log(options);
  // @ts-ignore: getting from cdn
  const rzp1 = new Razorpay(options);
  rzp1.on("payment.failed", function (response: any) {
    appStore.createToast({
      type: "error",
      content: response.error.description,
    });
  });
  isSubmitting.value = false;
  rzp1.open();
}
</script>

<template>
  <Button
    @click="paymentHandler"
    label="Buy"
    class="px-6"
    :submitting="isSubmitting"
  />
</template>
