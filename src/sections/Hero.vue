<template>
  <div @mousemove="updateLogos" class="container-fluid col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img
          :style="logoStyle(0, 0)"
          class="position-absolute faang-logo"
          src="@/assets/logos/facebook.svg"
          width="24"
          height="24"
        />
        <img
          :style="logoStyle(0, 1)"
          class="position-absolute faang-logo"
          src="@/assets/logos/apple.svg"
          width="24"
          height="24"
        />
        <img
          :style="logoStyle(0, 2)"
          class="position-absolute faang-logo"
          src="@/assets/logos/amazon.svg"
          width="24"
          height="24"
        />
        <img
          :style="logoStyle(1, 1)"
          class="position-absolute faang-logo"
          src="@/assets/logos/netflix.svg"
          width="24"
          height="24"
        />
        <img
          :style="logoStyle(1, 2)"
          class="position-absolute faang-logo"
          src="@/assets/logos/google.svg"
          width="24"
          height="24"
        />
        <img
          :style="logoStyle(1, 3)"
          class="position-absolute faang-logo"
          src="@/assets/logos/facebook.svg"
          width="24"
          height="24"
        />
        <img
          :style="logoStyle(2, 2)"
          class="position-absolute faang-logo"
          src="@/assets/logos/apple.svg"
          width="24"
          height="24"
        />
        <img
          :style="logoStyle(2, 3)"
          class="position-absolute faang-logo"
          src="@/assets/logos/amazon.svg"
          width="24"
          height="24"
        />
        <img
          :style="logoStyle(3, 2)"
          class="position-absolute faang-logo"
          src="@/assets/logos/netflix.svg"
          width="24"
          height="24"
        />
        <img
          :style="logoStyle(3, 3)"
          class="position-absolute faang-logo"
          src="@/assets/logos/google.svg"
          width="24"
          height="24"
        />
        <img
          src="@/assets/illustrations/fs-hero-marriage.svg"
          class="d-block mx-lg-auto img-fluid"
          alt="Bootstrap Themes"
          loading="lazy"
          width="700"
          height="500"
        />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">FAANG Shaadi</h1>
        <p class="lead">
          Finding your soulmate among the top tech companies, because you
          deserve no less.
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button
            type="button"
            class="btn btn-primary text-white btn-lg px-4 me-md-2"
          >
            > sign up
          </button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            > learn more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';

@Options({})
export default class Hero extends Vue {
  logoPointX = 200;
  logoPointY = 80;

  get logoStyle() {
    const x = this.logoPointX;
    const y = this.logoPointY;
    return (n: number, m: number) => {
      const k = Math.random() * 20 + n * 60;
      const l = Math.random() * 20 + m * 60;
      return { transform: `translate(${k + x}px, ${l + y}px)` };
    };
  }

  updateLogos(e: MouseEvent) {
    this.logoPointX = 200 + e.clientX / 30;
    this.logoPointY = 80 + e.clientY / 30;
  }
}
</script>

<style>
.faang-logo {
  transition: transform 2s;
  transition-timing-function: linear;
}
</style>