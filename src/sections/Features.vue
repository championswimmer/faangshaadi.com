<template>
  <div class="container py-5" id="featured-3">
    <h2 class="pb-2 border-bottom">Premium Features</h2>
    <div class="row g-5 py-5">
      <FeatureCard 
      v-for="(feature, idx) in features" 
      :key="idx"
      :feature="feature"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import FeatureCard from '@/components/FeatureCard.vue';
import { Feature, features } from '@/data/features';

@Options({ components: { FeatureCard } })
export default class Features extends Vue {
  features = features
}
</script>