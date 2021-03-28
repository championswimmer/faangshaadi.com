<template>
  <div class="feature col-md-4">
    <div class="feature-icon bg-primary bg-gradient">
      <i class="bi" :class="icon"></i>
    </div>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <a href="#" class="icon-link">
      Call to action
      <svg class="bi" width="1em" height="1em">
        <use xlink:href="#chevron-right" />
      </svg>
    </a>
  </div>
</template>

<script lang="ts">
import { Options, Prop, Vue } from 'vue-property-decorator';
import { Feature, features } from '@/data/features';

@Options({})
export default class FeatureCard extends Vue {
  @Prop(Object) readonly feature!: Feature;

  title = this.feature.title;
  icon = `bi-${this.feature.icon}`;
  description = this.feature.description;
}
</script>