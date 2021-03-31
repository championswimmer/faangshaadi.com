<template>
  <div
    class="modal fade"
    id="disclaimerModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content bg-light">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Disclaimer</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Voila!
          <br /><br />
          We love a good, elaborate April Fool's joke.
          <br /><br />
          Wait, did you think we were actually serious?
          <br /><br />
          We love coders and helping them grow but matchmaking isn't something
          we are venturing out into, just yet. But who knows what the future
          holds! 😉
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-dark"
            data-bs-dismiss="modal"
          >
            Guessed So
          </button>
          <button
            class="btn btn-primary text-light"
            @click="openScaler"
          >
            Damn! You got me
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid bg-dark text-light p-5">
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
      FAANGShaadi is a fully owned subsidary of
      <a href="https://interviewbit.com">InterviewBit Technologies Pvt. Ltd.</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Footer extends Vue {
    openScaler() {
        window.open("https://scaler.com",'_blank');
    }
}
</script>