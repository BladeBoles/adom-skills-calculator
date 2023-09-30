<template>
  <div class="double-columns-container">
    <form class="skill-picker-form" @submit.prevent="submit">
      <div class="columns-component-div">
        <SkillPickerColumn @skill-added="updateWantedSkills" />
      </div>
    </form>
    <PossibleCombosList :combosList="possibleCombos" />
  </div>
</template>

<script setup>
import SkillPickerColumn from '../components/SkillPickerColumn.vue'
import PossibleCombosList from '../components/PossibleCombosList.vue'
import { ref, computed } from 'vue'
import allCombosJson from '../tables/skills.json'

const allCombos = computed(() => JSON.parse(JSON.stringify(allCombosJson)))

const wantedSkills = ref([])

const possibleCombos = ref([])

const updateWantedSkills = (newSkillsList) => {
  wantedSkills.value = newSkillsList
  findValidCombos(wantedSkills.value)
}

const findValidCombos = (desiredSkills = []) => {
  try {
    const comboPossibilities = []
    allCombos.value.forEach((combination) => {
      if (
        desiredSkills.every(
          (skill) =>
            combination.skills.includes(skill.name) || combination.doubleSkills.includes(skill.name)
        )
      ) {
        comboPossibilities.push(combination)
      }
    })
    possibleCombos.value = comboPossibilities
  } catch (error) {
    console.log('error: ', error)
  }
}

/* TODO: Modify one allCombinations Array to be:
  {
    playableRace: string
    playableClass: string
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
    playableClass: string
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
  width: 80vw;
  max-width: 400px;
  justify-content: space-between;
}
</style>
