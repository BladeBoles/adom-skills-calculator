<template>
  <div class="container">
    <div class="choices-outer">
      <div class="choices">
        <label class="race-class-label" for="player-races"></label>
        <select
          class="race-class-select"
          v-model="selectedRace"
          @change="updateRoute($event, 'race')"
        >
          <option
            v-for="(playerRace, index) in playableRaces"
            class="race-class-option"
            :key="`${playerRace}${index}`"
          >
            {{ playerRace }}
          </option>
        </select>
      </div>
      <div class="choices">
        <label class="race-class-label" for="player-classes"></label>
        <select
          class="race-class-select"
          :v-model="selectedClass"
          @change="updateRoute($event, 'class')"
        >
          <option
            v-for="(playerClass, index) in playableClasses"
            class="race-class-option"
            :key="`${playerClass}${index}`"
          >
            <span v-if="playerClass === 'Bard'"> {{ playerClass }}*</span>
            <span v-else-if="playerClass === 'Merchant'"> {{ playerClass }}** </span>
            <span v-else>
              {{ playerClass }}
            </span>
          </option>
        </select>
      </div>
    </div>
    <div class="list-and-title">
      <ul class="skill-calculator__ul">
        <li
          class="skills-list-li"
          v-for="(skill, index) in startingSkills"
          :key="`${skill.name}${index}`"
        >
          {{ skill.name }}
          <span class="skills-list-li__icon-group">
            <i
              class="fa-solid fa-user fa-sm"
              :class="
                skill.source === 'race' || skill.source === 'both'
                  ? 'skills-list-li__icon--visible'
                  : 'skills-list-li__icon--hidden'
              "
              style="color: #26a269"
            ></i>
            <i
              class="fa-solid fa-shield fa-sm"
              :class="
                skill.source === 'class' || skill.source === 'both'
                  ? 'skills-list-li__icon--visible'
                  : 'skills-list-li__icon--hidden'
              "
              style="color: #1a5fb4"
            ></i>
          </span>
        </li>
      </ul>
      <div class="skill-calculator__note-group skill-calculator__note-group--key">
        <p><i class="fa-solid fa-user fa-sm" style="color: #26a269"></i> Race</p>
        <p><i class="fa-solid fa-shield fa-sm" style="color: #1a5fb4"></i> Class</p>
      </div>
      <div class="skill-calculator__note-group">
        <p>* Bards start with random skills</p>
        <p>** Merchant skills depend on specialty</p>
      </div>
      <div>
        <p>Climbing, first aid, haggling and listening are available to all characters</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { playableRaces, playableClasses, skillsList } from '../tables/skills.js'
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const route = useRouter()

const props = defineProps({
  race: {
    type: String,
    default: 'Dark Elf'
  },
  profession: {
    type: String,
    default: 'Archer'
  }
})

const selectedClass = computed(() => route?.query?.profession || props.profession)
const selectedRace = computed(() => route?.query?.race || props.race)

if (!playableRaces.includes('No Race')) {
  playableRaces.push('No Race')
}
if (!playableClasses.includes('No Class')) {
  playableClasses.push('No Class')
}

const startingSkills = computed(() => {
  const startingSkillsListArray = [
    { name: 'Climbing', source: 'free' },
    { name: 'First Aid', source: 'free' },
    { name: 'Haggling', source: 'free' },
    { name: 'Listening', source: 'free' }
  ]
  skillsList.forEach((skill) => {
    if (
      skill.races.includes(selectedRace.value || 'All') &&
      skill.classes.includes(selectedClass.value || 'All')
    ) {
      let skillObject = { name: `${skill.name}`, source: 'both' }
      startingSkillsListArray.push(skillObject)
    } else if (skill.races.includes(selectedRace.value)) {
      let skillObject = { name: skill.name, source: 'race' }
      startingSkillsListArray.push(skillObject)
    } else if (skill.classes.includes(selectedClass.value)) {
      let skillObject = { name: skill.name, source: 'class' }
      startingSkillsListArray.push(skillObject)
    }
  })

  return startingSkillsListArray.sort((a, b) => a.name > b.name)
})

const updateRoute = (event, changed) => {
  const newQuery =
    changed === 'race'
      ? { race: event.target.value, profession: selectedClass.value }
      : { race: selectedRace.value, profession: event.target.value }
  route.push({ query: newQuery })
}

onMounted(async () => {
  route.push({ query: { race: props.race, profession: props.profession } })
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
}

.character-choice-header,
ul {
  width: 40vw;
}

.choices-outer {
  display: flex;
  align-items: flex-start;
  width: 350px;
}

.list-and-title {
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.race-class-select {
  margin-right: 10px;
  font-size: 1.4em;
}

.race-class-label {
  font-size: 1.5em;
}

.skills-list-li {
  text-align: start;
  font-size: 1.4em;
  padding-bottom: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.skills-list-li__icon--hidden {
  color: lightgray !important;
}

.skills-list-li__icon-group i {
  padding-right: 5px;
}

h3 {
  font-weight: normal;
  justify-self: flex-start;
  font-size: 1.5em;
}

#combo-span {
  font-weight: 900;
}

label,
select {
  margin-bottom: 10px;
}

p {
  max-width: 500px;
}
ul {
  margin-left: 0;
  padding-left: 0;
}
.skill-calculator__ul {
  width: 100%;
}
li {
  list-style-type: none;
  margin-left: 0;
}

p {
  margin: 0;
  font-size: 18px;
}

.skill-calculator__note-group {
  margin-bottom: 10px;
  width: 100%;
}

.skill-calculator__note-group p {
  margin-right: 10px;
}
.skill-calculator__note-group--key {
  display: flex;
  justify-content: flex-start;
}
</style>
