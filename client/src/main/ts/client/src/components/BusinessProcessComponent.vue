<template>
  <div>
    [{{bp.code}}] {{ bp.name }}
    <OperationalProcessComponent v-for="op in bp.operationalProcesses"
            :key="op.code"
            :op="op"
            style="margin-left: 1em;" />
  </div>
</template>

<script lang="ts">
import Threat from "@/components/ThreatComponent.vue";
import OperationalProcessComponent from "@/components/OperationalProcessComponent.vue";
import {BusinessProcess} from "@/models/BusinessProcess";

export default {
  name: "BusinessProcessComponent",
  components: {
    OperationalProcessComponent
  },
  props: {
    bp: {
      type: Object as unknown as BusinessProcess,
      required: true
    }
  }
}
</script>

<style scoped>

</style>