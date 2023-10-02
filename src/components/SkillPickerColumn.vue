<template>
  <div class="column-div">
    <SkillChoiceModal @skill-chosen="addSkill" />
    <ul>
      <li v-for="(skill, index) in skills" :key="`${skill}${index}`">
        <span
          class="skill-name-div"
          :class="{ 'skill-name-div--last': index === skills.length - 1 }"
          ><span>{{ skill }}</span
          ><i id="minus" class="fa-solid fa-square-minus fa-xl" @click="removeSkill(skill)"
        /></span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import SkillChoiceModal from './modals/SkillChoiceModal.vue'

const emit = defineEmits(['skill-added', 'skill-removed'])

const props = defineProps({
  skills: {
    type: Array,
    default: () => []
  }
})

const addSkill = (newSkill) => {
  if (!props.skills.includes(newSkill)) {
    emit('skill-added', newSkill)
  }
}

const removeSkill = (skillToRemove) => {
  emit('skill-removed', skillToRemove)
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
  margin-bottom: -20px;
}
ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  padding-top: 10px;
}
</style>
