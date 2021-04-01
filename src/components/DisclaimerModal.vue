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
          <button class="btn btn-primary text-light" @click="openScaler">
            Damn! You got me
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

@Options({})
export default class DisclaimerModal extends Vue {
    openScaler() {
        window.open("https://scaler.com",'_blank');
    }

}
</script>