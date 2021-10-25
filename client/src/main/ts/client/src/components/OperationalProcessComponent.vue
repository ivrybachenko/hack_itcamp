<template>
  <div>
    [{{op.code}}] {{op.name}}
    <div v-for="t in op.threats" :key="t.code">
      <ThreatComponent
              :threat="t"
              style="margin-left: 1em;" />
    </div>
  </div>
</template>

<script lang="ts">

import {OperationalProcess} from "@/models/OperationalProcess";
import ThreatComponent from "@/components/ThreatComponent.vue";

export default {
  name: "OperationalProcessComponent",
  components: {
    ThreatComponent
  },
  props: {
    op: {
      type: Object as unknown as OperationalProcess,
      required: true
    }
  }
}
</script>

<style scoped>

</style>