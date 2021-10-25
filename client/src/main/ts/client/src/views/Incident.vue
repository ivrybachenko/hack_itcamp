<template>
  <div class="home">
    <p>
      На этой странице вы можете загрузить инцидент. Введите описание инцидента и
      нажмите кнопку подтверждения. Затем из списка выберите риски, которые были
      затронуты инцидентом и нажмите кнопку "Зафиксировать инцидент".
    </p>
    <div>
      <textarea placeholder="Введите описание инцидента"
                v-model="incident_desc"
                style="width: 50vw; height: 6em;"
      ></textarea>
    </div>
    <div>
      <button v-on:click="confirm_desc">Подтвердить введённое описание инцидента</button>
    </div>
    <div>
      <p>Риски, затронутые инцидентом:</p>
      <div v-if="is_threats_empty">
        Описание инцидента не подтверждено. Невозможно определить связанные
        с инцидентом риски.
      </div>
      <div v-else>
        <div v-if="loading">
          Загрузка...
        </div>
        <div v-else>
          <div v-for="t in threats"
               :key="t.code" >
            <input type="checkbox">
            <ThreatComponent :threat="t" />
          </div>
          <div>
            <button disabled title="Функионал не реализован" style="margin: 0.5em 0;">Добавить новый риск</button>
          </div>
          <div>
            <Button v-on:click="commit_incident">Зафиксировать инцидент</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MenuLink from "@/components/MenuLink.vue";
import ThreatComponent from "@/components/ThreatComponent.vue";
import {findSimilar} from "@/api/Threat";
import {BusinessProcess} from "@/models/BusinessProcess";
import {Threat} from "@/models/Threat"; // @ is an alias to /src

interface IncidentData {
  threats: Array<Threat>,
  loading: boolean,
  incident_desc: string
}

export default Vue.extend({
  name: 'Incident',
  components: {
    ThreatComponent
  },
  data: ():IncidentData => {
    return {
      threats: [],
      loading: false,
      incident_desc: ''
    }
  },
  computed: {
    is_threats_empty() {
      if (this.loading) {
        return false;
      }
      return this.threats.length == 0;
    }
  },
  methods: {
    confirm_desc() {
      this.loading = true
      findSimilar(this.incident_desc).then(r => {
        this.threats = r.data
      }).catch(() => {
        this.threats = []
      }).finally(() => {
        this.loading = false
      })
    },
    commit_incident() {
      alert('Инцидент сохранён')
    }
  }
});
</script>
