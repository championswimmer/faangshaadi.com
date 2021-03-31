<template>
  <div class="feature col-md-4 pt-3">
    <div class="card bg-light pt-3 h-100 text-dark">
    <div class="feature-icon bg-primary border border-2 border-light">
      <i class="bi" :class="icon"></i>
    </div>
      <div class="card-body">
      <h3 class="h4 py-3">{{ title }}</h3>
      <p v-html="description"></p>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Prop, Vue } from 'vue-property-decorator';
import { Feature, features } from '@/data/features';
import marked from 'marked';

@Options({ filters: { marked } })
export default class FeatureCard extends Vue {
  @Prop(Object) readonly feature!: Feature;

  title = this.feature.title;
  icon = `bi-${this.feature.icon}`;
  description = marked(this.feature.description);
}
</script>

<style>
.feature-icon {
  position: absolute;
  left: 30px;
  top: -30px
}

</style>