<template>
  <div class="home">
    <p>
      На этой странице вы можете просмотреть список рисков, связанных с операционными процессами.
    </p>
    <div v-if="loading">
      Загрузка...
    </div>
    <div v-else>
      <p v-if="is_bp_empty">
        Бизнес-процессы, зарегистрированные в системе, отсутствуют.
      </p>
      <div v-else style="text-align: left;">
        <p>Бизнесс-процессы: </p>
        <BusinessProcessComponent v-for="bp in this.$data.business_processes"
                                  :key="bp.code"
                                  :bp="bp" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {BusinessProcess} from "@/models/BusinessProcess";
import {getBusinessProcesses} from "@/api/Process";
import BusinessProcessComponent from "@/components/BusinessProcessComponent.vue"; // @ is an alias to /src

interface ViewData {
  business_processes: Array<BusinessProcess>
  loading: boolean
}

export default Vue.extend({
  name: 'TheView',
  components: {
    BusinessProcessComponent
  },
  data: (): ViewData => {
    return {
      business_processes: [],
      loading: false
    }
  },
  mounted() {
    const vm = this
    vm.loading = true
    getBusinessProcesses().then(r => {
      vm.business_processes = r.data
    }).finally(() => {
      vm.loading = false
    });
  },
  computed: {
    is_bp_empty() {
      if (this.$data.loading) {
        return false;
      }
      return this.$data.business_processes.length == 0;
    }
  }
});
</script>
