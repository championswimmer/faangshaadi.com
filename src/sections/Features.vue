<template>
    <div class="container py-5" id="featured-3">
        <h2 class="pb-2 border-bottom">Columns with icons</h2>
        <div class="row g-5 py-5">
            <div class="feature col-md-4">
                <div class="feature-icon bg-primary bg-gradient">
                    <i class="bi bi-code-slash"></i>
                </div>
                <h2>Featured title</h2>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                <a href="#" class="icon-link">
                    Call to action
                    <svg class="bi" width="1em" height="1em">
                        <use xlink:href="#chevron-right" />
                    </svg>
                </a>
            </div>
            <div class="feature col-md-4">
                <div class="feature-icon bg-primary bg-gradient">
                    <svg class="bi" width="1em" height="1em">
                        <use xlink:href="#people-circle" />
                    </svg>
                </div>
                <h2>Featured title</h2>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                <a href="#" class="icon-link">
                    Call to action
                    <svg class="bi" width="1em" height="1em">
                        <use xlink:href="#chevron-right" />
                    </svg>
                </a>
            </div>
            <div class="feature col-md-4">
                <div class="feature-icon bg-primary bg-gradient">
                    <svg class="bi" width="1em" height="1em">
                        <use xlink:href="#toggles2" />
                    </svg>
                </div>
                <h2>Featured title</h2>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                <a href="#" class="icon-link">
                    Call to action
                    <svg class="bi" width="1em" height="1em">
                        <use xlink:href="#chevron-right" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">import { Options, Vue } from "vue-class-component";


@Options({})
export default class Features extends Vue {

}
</script>