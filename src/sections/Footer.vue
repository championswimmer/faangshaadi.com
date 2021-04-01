<template>
  <DisclaimerModal></DisclaimerModal>
  <div class="container-fluid bg-dark text-light p-5 mt-2">
    <div class="container mx-auto row">
      <div class="col-md-4 ms-auto">
        <h5>Resources</h5>
        <ul class="list-unstyled">
          <li>
            <a
              class="text-white-50 text-decoration-none"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#disclaimerModal"
              >Disclaimer</a
            >
          </li>
          <li>
            <a
              class="text-white-50 text-decoration-none"
              href="https://scaler.com/privacy"
              target="_blank"
              >Privacy Policy</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="text-center fw-bold">
      FAANGShaadi.com © 2021 · FAANG Shaadi Pvt. Ltd.
    </div>
    <div class="text-center fw-light text-white-50 mt-1">
      FAANGShaadi has been acquired and is a fully owned subsidary of
      <a href="https://interviewbit.com">InterviewBit Technologies Pvt. Ltd.</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import DisclaimerModal from '@/components/DisclaimerModal.vue'

@Options({
  components: { DisclaimerModal }
})
export default class Footer extends Vue {
}
</script>