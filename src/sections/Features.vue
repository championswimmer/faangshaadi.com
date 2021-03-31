<template>
  <div class="py-3 bg-primary text-white">
    <div class="container mx-auto row pb-4">
      <h2 class="py-3 border-bottom fw-bold">Premium Features</h2>
      <div class="row g-4">
        <FeatureCard
          v-for="(feature, idx) in features"
          :key="idx"
          :feature="feature"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import FeatureCard from '@/components/FeatureCard.vue';
import { Feature, features } from '@/data/features';

@Options({ components: { FeatureCard } })
export default class Features extends Vue {
  features = features;
}
</script>