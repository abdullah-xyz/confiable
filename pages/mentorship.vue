<script setup lang="ts">
const text = ref(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum
      sapien, sagittis in urna et, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum
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
      sollicitudin. Maecenas rhoncus mollis felis vitae rutrum.`)
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4 py-8">
    <div class="px-3 text-3xl font-medium text-primary">
      Our Mentorship Programmes
    </div>
    <div class="px-4 text-lg">
      {{text }}
    </div>
    <div class="px-3  mt-6 text-2xl font-medium text-primary">
      Career Mentorship
    </div>
    <Readmore :turncated="text"></Readmore>
    <div class="px-3  mt-6 text-2xl font-medium text-primary">
      Addiction Recovery Support
    </div>
    <Readmore :turncated="text"></Readmore>
    <div class="px-3  mt-6 text-2xl font-medium text-primary">
      Decission Making Advice
    </div>
    <Readmore :turncated="text"></Readmore>
  </div>
</template>
