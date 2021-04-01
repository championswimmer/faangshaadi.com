<template>
    <div class="container mx-auto row mb-1">
        <ProcessBox 
            v-for="(process, idx) in processes" 
            :key="idx"
            :process="process"
        />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import ProcessBox from "@/components/ProcessBox.vue"
import { Process, processes } from '@/data/processes';

@Options({ components: { ProcessBox } })
export default class About extends Vue {
    processes = processes
}    
</script>