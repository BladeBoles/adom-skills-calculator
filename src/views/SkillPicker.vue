<template>
  <div class="double-columns-container">
    <form class="skill-picker-form" @submit.prevent="submit">
      <div class="columns-component-div">
        <SkillPickerColumn @skill-added="updateWantedSkills($event)" />
      </div>

      <CalculateCombosButton @click="calculateCombos">Calculate Combos</CalculateCombosButton>
    </form>
    <PossibleCombosList :combosList="possibleCombos" />
  </div>
</template>

<script setup>
import SkillPickerColumn from '../components/SkillPickerColumn.vue'
import CalculateCombosButton from '../components/CalculateCombosButton.vue'
import PossibleCombosList from '../components/PossibleCombosList.vue'
import { ref, onMounted } from 'vue'
import { allCombinations } from '../tables/skills.js'

const wantedSkills = ref([])
const allCombos = ref([])
const possibleCombos = ref([])

const updateWantedSkills = (newSkillsList) => {
  wantedSkills.value = newSkillsList
}

const calculateCombos = () => {
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

onMounted(() => {
  allCombos.value = allCombinations()
})
</script>

<style scoped>
.double-columns-container {
  display: flex;
  flex-direction: column;
  align-items: center;
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
