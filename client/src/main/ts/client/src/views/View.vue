<template>
  <div class="home">
    <p>
      На этой странице вы можете просмотреть список рисков, связанных с операционными процессами.
    </p>
    <p v-if="false">
      Бизнесс-процессы не указаны либо сервер долго не отвечает. Настройка бизнесс-процессов
      может быть выполнена на странице загрузки структуры бизнесс-процессов.
    </p>
    <div v-else>
      <p>Бизнесс-процессы: </p>
      <li v-for="bp in this.$data.business_processes" :key="bp.code">
        {{ bp.name }}
      </li>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {BusinessProcess} from "@/models/BusinessProcess";
import {getBusinessProcesses} from "@/api/Process"; // @ is an alias to /src

interface ViewData {
  business_processes: Array<BusinessProcess>
}

export default Vue.extend({
  name: 'View',
  components: {},
  data: (): ViewData => {
    return {
      business_processes: []
    }
  },
  mounted() {
    getBusinessProcesses().then(r => {
      this.$data.business_processes = r.data
    });
  },
  computed: {
    is_bp_empty() {
      return this.$data.business_processes.length == 0;
    }
  }
});
</script>
