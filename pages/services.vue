<script setup lang="ts">
const serviceGroups = [
  {
    title: "Business Service",
    content: [
      { title: "Business Ideas and Platform", icon: "logo-c.png" },
      { title: "Business Investment Guidance", icon: "logo-c.png" },
      { title: "Training and Development Programs", icon: "logo-c.png" },
      {
        title: "Business Analysis and Optimization Report",
        icon: "logo-c.png",
      },
      {
        title: "Logistics, Network and Brand Building",
        icon: "logo-c.png",
      },
    ],
  },
  {
    title: "Financial Service",
    content: [
      { title: "Business Ideas and Platform", icon: "logo-c.png" },
      { title: "Business Investment Guidance", icon: "logo-c.png" },
      { title: "Training and Development Programs", icon: "logo-c.png" },
      {
        title: "Business Analysis and Optimization Report",
        icon: "logo-c.png",
      },
      {
        title: "Logistics, Network and Brand Building",
        icon: "logo-c.png",
      },
    ],
  },
];
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4 py-8">
    <div class="px-3 text-3xl font-medium text-primary">
      Our Offered Services
    </div>
    <div class="px-4 text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum
      sapien, sagittis in urna et, porttitor malesuada libero. Duis non velit
      ligula. Sed vitae neque porta, dapibus odio sed, dignissim massa. Integer
      congue convallis tellus, eu vulputate purus. Donec accumsan, libero nec
      convallis sollicitudin, elit sem efficitur felis, bibendum venenatis leo
      leo eu massa. Etiam ullamcorper egestas magna, nec cursus ante. Ut
      pulvinar et lectus a molestie. Etiam sagittis sit amet est quis ultricies.
      Donec ut libero quis felis scelerisque ultrices vel et nisl. Cras
      malesuada urna vel nisi commodo fringilla id at lorem. Curabitur at varius
      nisi, ut dictum massa. Integer blandit porta tincidunt. Cras convallis
      vitae erat a dapibus. Fusce est ante, rhoncus vel pretium sit amet,
      finibus vitae odio. Maecenas congue nunc sit amet risus ultricies
      sollicitudin. Maecenas rhoncus mollis felis vitae rutrum.
    </div>
    <Accordian :items="serviceGroups">
      <template #content="{ content }">
        <div v-for="service in content">
          <NuxtLink to="/lecture">
            <div
              class="my-2 flex items-center rounded-md border border-transparent px-4 py-2 text-lg hover:underline hover:shadow hover:shadow-secondary"
            >
        <NuxtImg class="mr-2 size-5" :src="'/img/' + service.icon" />
        <span class="font-medium">{{ service.title }}</span>
            </div>
          </NuxtLink>
        </div>
      </template>
    </Accordian>
  </div>
</template>
