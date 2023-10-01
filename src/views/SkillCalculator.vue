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
        <label class="race-class-label" for="player-professions"></label>
        <select
          class="race-class-select"
          v-model="selectedProfession"
          @change="updateRoute($event, 'profession')"
        >
          <option
            v-for="(playerProfession, index) in playableProfessions"
            class="race-class-option"
            :key="`${playerProfession}${index}`"
          >
            <span v-if="playerProfession === 'Bard'"> {{ playerProfession }}*</span>
            <span v-else-if="playerProfession === 'Merchant'"> {{ playerProfession }}** </span>
            <span v-else>
              {{ playerProfession }}
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
                skill.source === 'profession' || skill.source === 'both'
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
        <p><i class="fa-solid fa-shield fa-sm" style="color: #1a5fb4"></i> Profession</p>
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
import { playableRaces, playableProfessions, skillsList } from '../tables/skills.js'
import { computed, onMounted, defineProps } from 'vue'
import { useRouter } from 'vue-router'

const route = useRouter()
console.log('🚀 ~ file: SkillCalculator.vue:92 ~ route:', route.query)

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
const selectedProfession = computed({
  get() {
    return route.query?.profession || props.profession
  },
  set(newValue) {
    console.log('🚀 ~ file: SkillCalculator.vue:107 ~ newValue:', newValue, route.query)
    route.push({ query: { ...route.query, profession: newValue } })
  }
})
const selectedRace = computed({
  get() {
    console.log('route.query: ', route.query)
    return route.query?.race || props.race
  },
  set(newValue) {
    console.log(
      '🚀 ~ file: SkillCalculator.vue:115 ~ selectedRace ~ newValue:',
      route.query,
      newValue
    )

    route.push({ query: { ...route.query, race: newValue } })
  }
})
console.log('selectedRace: ', selectedRace.value, 'selectedProfession: ', selectedProfession.value)

if (!playableRaces.includes('No Race')) {
  playableRaces.push('No Race')
}
if (!playableProfessions.includes('No Profession')) {
  playableProfessions.push('No Profession')
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
      skill.professions.includes(selectedProfession.value || 'All')
    ) {
      let skillObject = { name: `${skill.name}`, source: 'both' }
      startingSkillsListArray.push(skillObject)
    } else if (skill.races.includes(selectedRace.value)) {
      let skillObject = { name: skill.name, source: 'race' }
      startingSkillsListArray.push(skillObject)
    } else if (skill.professions.includes(selectedProfession.value)) {
      let skillObject = { name: skill.name, source: 'profession' }
      startingSkillsListArray.push(skillObject)
    }
  })

  return startingSkillsListArray.sort((a, b) => a.name > b.name)
})

const updateRoute = (event, changed) => {
  console.log(
    '🚀 ~ file: SkillCalculator.vue:141 ~ updateRoute ~ event, changed:',
    event.target.value,
    changed
  )
  const newQuery =
    changed === 'race'
      ? { race: event.target.value, profession: selectedProfession.value }
      : { race: selectedRace.value, profession: event.target.value }
  route.push({ query: newQuery })
}
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
