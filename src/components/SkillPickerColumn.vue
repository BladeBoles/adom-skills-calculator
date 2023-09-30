<template>
  <div class="column-div">
    <SkillChoiceModal @skill-chosen="showChosen" />
    <ul>
      <li v-for="(skill, index) in chosenSkills" :key="`${skill.name}${index}`">
        <span
          class="skill-name-div"
          :class="{ 'skill-name-div--last': index === chosenSkills.length - 1 }"
          ><span>{{ skill.name }}</span
          ><i id="minus" class="fa-solid fa-square-minus fa-xl" @click="removeSkill(index)"
        /></span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import SkillChoiceModal from './modals/SkillChoiceModal.vue'
import { ref } from 'vue'

const emit = defineEmits(['skill-added'])

const chosenSkills = ref([])

const showChosen = (chosenSkill) => {
  if (chosenSkills.value.filter((skill) => skill.name === chosenSkill).length === 0) {
    chosenSkills.value.push({ name: chosenSkill })
  }
  emit('skill-added', chosenSkills.value)
}

const removeSkill = (skillToRemove) => {
  chosenSkills.value.splice(skillToRemove, 1)
  emit('skill-added', chosenSkills.value)
}
</script>

<style scoped>
#minus {
  color: darkred;
  padding-left: 25px;
}

#minus:hover {
  cursor: pointer;
}
.skill-name-div {
  font-size: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}
.skill-name-div--last {
  margin-bottom: 0px;
}
.column-div {
  display: flex;
  flex-direction: column;
}
ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  padding-top: 10px;
}
</style>
