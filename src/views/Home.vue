<script setup lang="ts">

</script>

<template>
<div class="hero max-h-[50%] bg-base-200 pt-8 pb-8">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Gotta brew them all</h1>
      <p class="py-6">Ever wonder how the coffee you drink stack up to what others are drinking. CoffeeDex is your virtual leaderboard for coffee from some of the best roasters around the world.</p>
      <button class="btn btn-secondary"><RouterLink to="/leaderboard">See where your coffee ranks</RouterLink></button>
    </div>
  </div>
</div>
<div class="carousel carousel-center p-4 space-x-4 bg-base-200">
  <div class="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" class="rounded-box" />
  </div>
  <div class="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" class="rounded-box" />
  </div>
  <div class="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" class="rounded-box" />
  </div>
  <div class="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" class="rounded-box" />
  </div>
  <div class="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" class="rounded-box" />
  </div>
  <div class="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" class="rounded-box" />
  </div>
  <div class="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" class="rounded-box" />
  </div>
</div>
</template>
