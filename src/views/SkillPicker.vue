<template>
  <div class="double-columns-container">
    <form class="skill-picker-form" @submit.prevent="submit">
      <div class="columns-component-div">
        <SkillPickerColumn
          :skills="wantedSkills"
          @skill-added="addSkill"
          @skill-removed="removeSkill"
        />
      </div>
    </form>
    <div class="skill-picker__divider"></div>
    <div class="skill-picker__toggle-switch">
      <span>Group by: </span>
      <input
        class="skill-picker__race-radio"
        type="radio"
        id="race"
        name="sortByRace"
        v-model="sortBy"
        value="race"
      />
      <label for="race">Race</label>
      <input
        class="skill-picker__profession-radio"
        type="radio"
        id="profession"
        name="sortByRace"
        v-model="sortBy"
        value="profession"
      />
      <label for="profession">Profession</label>
    </div>
    <PossibleCombosList :sortBy="sortBy" :combosList="possibleCombos" />
  </div>
</template>

<script setup>
import SkillPickerColumn from '../components/SkillPickerColumn.vue'
import PossibleCombosList from '../components/PossibleCombosList.vue'
import { ref, computed, watch } from 'vue'
import allCombosJson from '../tables/skills.json'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  skills: {
    type: Array,
    default: () => []
  }
})
const sortBy = ref('race')
const route = useRoute()
const router = useRouter()
const allCombos = computed(() => JSON.parse(JSON.stringify(allCombosJson)))

const wantedSkills = computed({
  get() {
    const toReturn =
      route.query?.skills && route.query.skills.length ? route.query.skills : props.skills
    if (typeof toReturn === 'string') {
      return [toReturn]
    } else {
      return toReturn
    }
  },
  set(newValue) {
    const newQuery = { skills: newValue }
    router.push({ query: newQuery })
  }
})

const possibleCombos = ref([])

const addSkill = (newSkill) => {
  if (!wantedSkills.value.includes(newSkill)) {
    wantedSkills.value = Array.from(new Set([...wantedSkills.value, newSkill]))
  }
}

const removeSkill = (skillToRemove) => {
  wantedSkills.value = wantedSkills.value.filter((skill) => skill !== skillToRemove)
}

const findValidCombos = () => {
  const comboPossibilities = []
  allCombos.value.forEach((combination) => {
    if (
      wantedSkills.value.every(
        (skill) =>
          combination.skills.includes(skill) ||
          combination.doubleSkills.includes(skill) ||
          ['Haggling', 'Listening', 'Climbing', 'First Aid'].includes(skill)
      )
    ) {
      comboPossibilities.push(combination)
    }
  })
  possibleCombos.value = comboPossibilities
}

watch(wantedSkills, () => findValidCombos(), { immediate: true })
</script>

<style scoped>
.double-columns-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
}

.columns-component-div {
  display: flex;
  justify-content: center;
}

.skill-picker-form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  justify-content: space-between;
}

.skill-picker__divider {
  width: 100%;
  height: 1px;
  background-color: rgb(221, 221, 221);
  margin: 20px 0px;
}

.skill-picker__toggle-switch {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-picker__toggle-switch span {
  margin-right: 10px;
  font-weight: bold;
}

.skill-picker__race-radio {
  display: none;
  margin-right: 10px;
}

.skill-picker__profession-radio {
  display: none;
}

.skill-picker__toggle-switch label {
  color: black;
  cursor: pointer;
  padding: 10px 20px;
  background-color: #ddd;
  transition: background-color 0.3s ease;
}

.skill-picker__toggle-switch input[type='radio']:checked + label {
  background-color: green;
  color: #fff;
}
</style>
