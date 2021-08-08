<template>
  <a
    :class="classList"
    class="no-underline hover:no-underline font-bold text-2xl lg:text-2xl"
    href="#"
  >
    <!--Icon from: http://www.potlabicons.com/ -->
    <svg
      class="h-8 fill-current inline"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400.005 400.005"
    >
<g transform="translate(0.000000,370.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2275 3495 c-87 -19 -254 -82 -297 -111 -59 -41 -161 -144 -212 -214
-63 -85 -100 -159 -133 -267 -25 -81 -27 -102 -28 -260 0 -157 2 -174 20 -199
11 -14 81 -61 154 -104 74 -42 151 -91 172 -108 l38 -32 133 72 c165 88 237
136 310 205 62 58 92 66 110 29 8 -19 7 -34 -6 -66 -23 -59 -21 -88 9 -102 22
-10 32 -5 100 46 98 74 159 151 244 307 l36 66 95 -84 c127 -114 168 -143 200
-143 45 0 64 32 69 117 19 393 -280 762 -690 848 -85 18 -242 18 -324 0z"/>
<path d="M4105 2498 c-168 -92 -216 -108 -353 -119 -74 -6 -168 -24 -270 -50
-87 -22 -213 -53 -282 -68 -234 -54 -372 -123 -499 -250 -106 -107 -209 -293
-242 -439 l-13 -52 -23 82 c-106 371 -361 588 -813 688 -117 26 -520 90 -568
90 -38 0 -224 80 -258 111 -24 23 -67 25 -84 4 -25 -30 0 -129 149 -600 84
-264 201 -639 261 -834 60 -194 121 -372 134 -396 38 -65 74 -75 259 -75 316
0 530 -66 771 -239 147 -105 172 -105 323 -5 176 117 331 182 533 225 83 17
142 22 280 23 120 1 182 5 197 14 31 17 54 67 93 197 18 61 86 279 152 485 66
206 180 571 254 810 74 239 137 443 140 453 3 9 2 17 -3 17 -4 0 -66 -32 -138
-72z"/>
</g></svg >&nbsp;Template

      
  </a>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    isStickable: {
      type: Boolean,
      default: false
    },
    isSticky: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList() {
      let classList = ''
      if (this.isStickable) {
        classList = this.isSticky ? 'text-gray-800' : 'text-black'
      } else {
        classList = 'text-black'
      }
      return classList
    }
  }
}
</script>
