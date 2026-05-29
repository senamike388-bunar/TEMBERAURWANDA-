<template>
  <div class="w-full min-h-screen bg-gray-100">

    <!-- HERO SECTION -->
    <section
      class="relative h-screen bg-cover bg-center flex items-center"
      style="background-image: url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1600&auto=format&fit=crop');"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50"></div>

      <!-- Content -->
      <div class="relative z-10 text-white px-10 md:px-20 max-w-3xl">
        <h1 class="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Welcome to Rwanda
        </h1>

        <p class="text-lg md:text-2xl mb-8 text-gray-200">
          Discover the beauty of the Land of a Thousand Hills,
          where culture, nature, cleanliness, peace, and innovation meet together.
        </p>

        <div class="flex gap-5">
          <button
            class="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition duration-300"
          >
            Explore Rwanda
          </button>

          <button
            class="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>

    <!-- ABOUT RWANDA -->
    <section class="py-20 px-8 md:px-20 bg-white">
      <div class="grid md:grid-cols-2 gap-12 items-center">

        <img
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop"
          class="rounded-2xl shadow-2xl h-[450px] object-cover w-full"
        />

        <div>
          <h2 class="text-4xl font-bold text-green-700 mb-6">
            The Heart of Africa
          </h2>

          <p class="text-gray-600 text-lg leading-8 mb-6">
            Rwanda is known for its breathtaking hills, mountain gorillas,
            beautiful culture, safety, and rapid development.
            Kigali, the capital city, is among the cleanest cities in Africa.
          </p>

          <p class="text-gray-600 text-lg leading-8">
            From tourism and technology to agriculture and sports,
            Rwanda continues to inspire the world with unity and innovation.
          </p>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="py-20 px-8 md:px-20 bg-gray-100">

      <div class="text-center mb-14">
        <h2 class="text-4xl font-bold text-green-700">
          Why Visit Rwanda?
        </h2>

        <p class="text-gray-600 mt-4 text-lg">
          Experience nature, culture, wildlife, and modern Africa.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">

        <!-- Card 1 -->
        <div
          class="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
        >
          <img
            src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1200&auto=format&fit=crop"
            class="h-60 w-full object-cover"
          />

          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700 mb-4">
              Mountain Gorillas
            </h3>

            <p class="text-gray-600 leading-7">
              Visit Volcanoes National Park and experience Rwanda’s famous gorillas.
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
        >
          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop"
            class="h-60 w-full object-cover"
          />

          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700 mb-4">
              Beautiful Culture
            </h3>

            <p class="text-gray-600 leading-7">
              Enjoy traditional dance, art, music, and Rwanda’s rich heritage.
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
        >
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
            class="h-60 w-full object-cover"
          />

          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700 mb-4">
              Amazing Nature
            </h3>

            <p class="text-gray-600 leading-7">
              Explore lakes, green hills, forests, and beautiful landscapes.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- STATISTICS -->
    <section class="bg-green-700 text-white py-20 px-8 md:px-20">

      <div class="grid md:grid-cols-4 gap-10 text-center">

        <div>
          <h1 class="text-5xl font-bold mb-3">1000+</h1>
          <p class="text-lg">Beautiful Hills</p>
        </div>

        <div>
          <h1 class="text-5xl font-bold mb-3">4</h1>
          <p class="text-lg">National Parks</p>
        </div>

        <div>
          <h1 class="text-5xl font-bold mb-3">135+</h1>
          <p class="text-lg">Bird Species</p>
        </div>

        <div>
          <h1 class="text-5xl font-bold mb-3">1M+</h1>
          <p class="text-lg">Visitors Every Year</p>
        </div>

      </div>
    </section>

    <!-- GALLERY -->
    <section class="py-20 px-8 md:px-20 bg-white">

      <div class="text-center mb-14">
        <h2 class="text-4xl font-bold text-green-700">
          Explore Rwanda
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-6">

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
          class="rounded-2xl h-72 object-cover w-full hover:scale-105 transition duration-300"
        />

        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop"
          class="rounded-2xl h-72 object-cover w-full hover:scale-105 transition duration-300"
        />

        <img
          src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1200&auto=format&fit=crop"
          class="rounded-2xl h-72 object-cover w-full hover:scale-105 transition duration-300"
        />

      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-green-900 text-white py-10 text-center">
      <h2 class="text-3xl font-bold mb-3">
        Visit Rwanda
      </h2>

      <p class="text-gray-300">
        Experience Peace, Beauty, and Culture
      </p>
    </footer>

  </div>
</template>

<script setup>
</script>