<template>
    <div class="row p-4 p-md-5 mb-4 text-white bg-dark">
        <div class="col">
            <h1 class="display-4 fst-italic">Title of a longer featured blog post</h1>
            <p
                class="lead my-3"
            >Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
            <p class="lead mb-0">
                <a href="#" class="text-white fw-bold">Continue reading...</a>
            </p>
        </div>
        <div class="col">
            <img src="@/assets/illustrations/holding-hands.svg">
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";


@Options({})
export default class Hero extends Vue {
}
</script>
