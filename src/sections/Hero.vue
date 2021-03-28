<template>
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img
          src="@/assets/illustrations/marriage.svg"
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
          <button type="button" class="btn btn-primary text-white btn-lg px-4 me-md-2">
            Sign up
          </button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';

@Options({})
export default class Hero extends Vue {}
</script>
