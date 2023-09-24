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
            {{ playerClass }}
          </option>
        </select>
      </div>
    </div>
    <div class="list-and-title">
      <h3 class="character-choice-header">
        Starting Skills for <span id="race-span">{{ selectedRace }} </span>

        <span id="class-span">{{ selectedClass }}</span
        >:
      </h3>
      <ul>
        <li
          :class="`skills-list-li-${skill.source}`"
          v-for="(skill, index) in startingSkills"
          :key="`${skill.name}${index}`"
        >
          {{ skill.name }}
          <span :class="`skills-list-li-span-${skill.source}`">{{
            skill.source !== 'free' ? '(' + skill.source + ')' : null
          }}</span>
        </li>
      </ul>
      <p>
        Bards start with random skills and merchants have slightly different skills depending on
        specialty.
      </p>
      <p>All characters train in listening, haggling, first aid, and climbing.</p>
    </div>
  </div>
</template>

<script setup>
import { playableRaces, playableClasses, skillsList } from '../tables/skills.js'
import { computed } from 'vue'

const selectedClass = 'Archer'
const selectedRace = 'Dark Elf'

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
      skill.races.includes(selectedRace || 'All') &&
      skill.classes.includes(selectedClass || 'All')
    ) {
      let skillObject = { name: `${skill.name}`, source: 'both' }
      startingSkillsListArray.push(skillObject)
    } else if (skill.races.includes(selectedRace)) {
      let skillObject = { name: skill.name, source: 'race' }
      startingSkillsListArray.push(skillObject)
    } else if (skill.classes.includes(selectedClass)) {
      let skillObject = { name: skill.name, source: 'class' }
      startingSkillsListArray.push(skillObject)
    }
  })
  return startingSkillsListArray.sort((a, b) => a.name > b.name)
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
}

.list-and-title {
  display: flex;
  flex-direction: column;
  width: 350px;
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
}

.skills-list-li-class {
  text-align: start;
  font-size: 1.4em;
  padding-bottom: 5px;
}

.skills-list-li-both {
  font-weight: 550;
  text-align: start;
  font-size: 1.4em;
  padding-bottom: 5px;
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
  max-width: 500px;
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
li {
  list-style-type: none;
  margin-left: 0;
}
</style>
