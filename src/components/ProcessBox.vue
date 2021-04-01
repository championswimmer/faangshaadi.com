<template>
  <div class="col-lg-4 my-2 h-100">
    <div class="mt-3 p-2 p-md-5 h-50">
    <img class="img-fluid" :src="imgUrl">
    </div>
    <h3 class="my-4 fw-normal">{{title}}</h3>
    <p v-html="body"></p>
  </div>
</template>

<script lang="ts">
import { Process } from '@/data/processes';
import { Options, Prop, Vue } from 'vue-property-decorator';
import marked from 'marked'

@Options({})
export default class ProcessBox extends Vue {
    @Prop(Object) readonly process!: Process;

    title = this.process.title
    imgUrl = `/illustrations/${this.process.illustration}.svg`
    body = marked(this.process.body)

}
</script>