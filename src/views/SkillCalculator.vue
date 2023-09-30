<template>
  <div class="container">
    <div class="choices-outer">
      <div class="choices">
        <label class="race-class-label" for="player-races"></label>
        <select class="race-class-select" v-model="selectedRace">
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
        <select class="race-class-select" v-model="selectedClass">
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
          :class="`skills-list-li-${skill.source}`"
          v-for="(skill, index) in startingSkills"
          :key="`${skill.name}${index}`"
        >
          {{ skill.name }}
          <i
            v-if="skill.source === 'race' || skill.source === 'both'"
            class="fa-solid fa-user"
            style="color: #26a269"
          ></i>
          <i
            v-if="skill.source === 'class' || skill.source === 'both'"
            class="fa-solid fa-shield"
            style="color: #1a5fb4"
          ></i>
        </li>
      </ul>
      <div class="skill-calculator__note-group">
        <p>
          <i class="fa-solid fa-useskill-calculator__ulr fa-sm" style="color: #26a269"></i> Race
          skill
        </p>
        <p><i class="fa-solid fa-shield fa-sm" style="color: #1a5fb4"></i> Class skill</p>
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
import { computed, ref } from 'vue'

const selectedClass = ref('Archer')
const selectedRace = ref('Dark Elf')

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
</script>

<style scoped>
#nav {
  font-size: 20px;
}
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

#race-span {
  color: darkgreen;
  font-weight: 550;
}
#class-span {
  color: darkblue;
  font-weight: 550;
}

.skills-list-li-race {
  text-align: start;
  font-size: 1.4em;
  padding-bottom: 5px;
  width: 100%;
}

.skills-list-li-class {
  text-align: start;
  font-size: 1.4em;
  padding-bottom: 5px;
  width: 100%;
}

.skills-list-li-both {
  font-weight: 550;
  text-align: start;
  font-size: 1.4em;
  padding-bottom: 5px;
  width: 100%;
}

.skills-list-li-free {
  color: black;
  text-align: start;
  font-size: 1.4em;
  padding-bottom: 5px;
}

.skills-list-li-span-race {
  color: darkgreen;
  font-weight: 600;
}
.skills-list-li-span-class {
  color: darkblue;
  font-weight: 600;
}
.skills-list-li-span-both {
  color: darkred;
  font-weight: 600;
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
}
</style>
