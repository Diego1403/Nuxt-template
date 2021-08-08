<template>
  <nav class=" w-full z-30 top-0 bg-white">
    <div
      class="row w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
    >
      <div class="column pl-4 flex center">
        <logo />
      </div>
      <div class="column pl-5 flex center">
        <div class="row">
          <a
            class="nav-link waves-effect waves-light"
            href="https://www.facebook.com"
          >
            <img src="~assets/img/fb.png" width="40px" />
          </a>

          <a
            class="nav-link waves-effect waves-light"
            href="https://www.instagram.com"
          >
            <img src="~assets/img/ig.png" width="40px" />
          </a>

          <a
            class="nav-link waves-effect waves-light"
            href="https://www.linkedin.com"
          >
            <img src="~assets/img/ln.png" width="40px" />
          </a>
        </div>
      </div>
      <!--  <button
          :class="navActionClassList"
          class="mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
        >
         Ir a google/ appstore
        </button> -->
    </div>
     <hr class="border-b border-gray-100 opacity-100 my-0 py-0" />
  </nav>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'TheHeader',
  components: {
    logo: Logo,
  },
}
</script>
