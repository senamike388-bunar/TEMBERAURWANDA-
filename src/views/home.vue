<template>
  <div class="w-full min-h-screen bg-gray-100">

    <!-- HERO SECTION -->
    <section
      class="relative h-screen bg-cover bg-center flex items-center justify-center"
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
          src="data:image/jpeg;base64,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"
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