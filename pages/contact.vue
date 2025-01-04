<template>
  <div class="mx-auto max-w-screen-xl px-4 py-8">
    <div class="px-4 py-1 text-lg">
      <span class="font-medium">Phone:</span> 1234567890
    </div>
    <div class="px-4 py-1 text-lg">
      <span class="font-medium">Email:</span>
      <a href="mailto:confiablebusiness@gmail.com"
        >confiablebusiness@gmail.com</a
      >
    </div>
    <div class="px-4 py-1 text-lg">
      <span class="font-medium">Address:</span>
      <div class="px-4">123/421, Some Street</div>
      <div class="px-4">Some Locality</div>
      <div class="px-4">City, 130031</div>
    </div>
    <div class="px-4 py-1 text-lg">
      Join Us at
      <div class="px-2 hover:cursor-pointer">
        <Icon name="skill-icons:instagram" /> Instagram
      </div>
      <div class="px-2 hover:cursor-pointer">
        <Icon name="devicon:linkedin" /> Linkedin
      </div>
      <div class="px-2 hover:cursor-pointer">
        <Icon name="devicon:twitter" /> X (Twitter)
      </div>
    </div>
    <div class="mt-3 rounded-md p-4 shadow-md shadow-secondary max-w-lg text-lg">
      <div class="flex flex-col gap-2">
        <div class="flex justify-between">
          <label for="email">Email:</label>
          <input name="email" type="email" class="w-72 rounded-md bg-background border border-muted focus:ring-secondary focus:ring-1 focus:outline-none text-base" />
        </div>
        <div class="flex justify-between">
          <label for="name">Name:</label
          ><input name="name" type="text" class="w-72 rounded-md bg-background border border-muted focus:ring-secondary focus:ring-1 focus:outline-none text-base" />
        </div>
        <div class="flex justify-between">
          <label for="feedback">Feedback:</label
          ><textarea name="feedback" rows="4" class="w-72 rounded-md bg-background border border-muted focus:ring-secondary focus:ring-1 focus:outline-none text-base" />
        </div>
      </div>
    </div>
  </div>
</template>
