<template>
  <div style="display: inline-block;">
    <span v-if="threat.isManaged">
      [Управляемый]
    </span>
    <span v-else>
      [Неуправляемый]
    </span>
    {{threat.shortDescription}}
  </div>
</template>

<script lang="ts">
export default {
  name: "ThreatComponent",
  props: {
    threat: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>