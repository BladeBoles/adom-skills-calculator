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
    <PossibleCombosList :combosList="possibleCombos" />
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
const route = useRoute()
const router = useRouter()
const allCombos = computed(() => JSON.parse(JSON.stringify(allCombosJson)))

const wantedSkills = computed({
  get() {
    console.log(route.query?.skills)
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
  console.log('wantedskills: ', wantedSkills.value)
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
  console.log(
    '🚀 ~ file: SkillPicker.vue:65 ~ findValidCombos ~ comboPossibilities:',
    comboPossibilities
  )
}

watch(wantedSkills, () => findValidCombos(), { immediate: true })

/* TODO: Modify one allCombinations Array to be:
  {
    playableRace: string
    playableProfession: string
    raceSkills: string[]
    classSkills: string[]
  }[]

  Then display icon(s) by each skill showing where it came from.
  On hover the icon has explanation.

  This array could be a single source of truth.  But we could also have

  {
    playableRace: string
    skills: string[]
  }[]
  and
  {
    playableProfession: string
    skills: string[]
  }[]
  For faster lookup on the calculator?

*/
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
</style>
