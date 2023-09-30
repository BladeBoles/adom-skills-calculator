<template>
  <div class="combos-list">
    <ul class="combos-list__combos-dropdowns" v-if="combosList.length > 0">
      <li
        class="combos-list__dropdown-item"
        v-for="(race, index) in uniqueRaces"
        :key="`${race}${index}`"
      >
        <div class="race-list-header" @click="toggleRaceVisibility(race)">
          <h4>{{ race }}</h4>
          <div class="toggle-button">
            <i class="fa-solid fa-caret-up" v-if="!hiddenRaces.includes(race)" />
            <i class="fa-solid fa-caret-down" v-else />
          </div>
        </div>

        <ul class="race-list" v-if="!hiddenRaces.includes(race)">
          <li v-for="(combo, index) in combosForRace(race)" :key="`${combo}${index}`">
            {{ combo.playableClass }}
          </li>
        </ul>
      </li>
    </ul>
    <p v-else>Sorry, no combo begins the game with that skill list.</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  combosList: {
    type: Array,
    required: true
  }
})

const hiddenRaces = ref([
  'Dark Elf',
  'Drakeling',
  'Dwarf',
  'Gnome',
  'Gray Elf',
  'High Elf',
  'Human',
  'Hurthling',
  'Mist Elf',
  'Orc',
  'Ratling',
  'Troll',
  'No Race'
])

const uniqueRaces = computed(() => {
  const races = []
  props.combosList.forEach((combo) => {
    if (!races.includes(combo.race)) {
      races.push(combo.race)
    }
  })
  return races
})

const combosForRace = (race) => {
  return props.combosList.filter((combo) => combo.race === race)
}

const toggleRaceVisibility = (race) => {
  if (hiddenRaces.value.includes(race)) {
    hiddenRaces.value.splice(hiddenRaces.value.indexOf(race), 1)
  } else {
    hiddenRaces.value.push(race)
  }
}
</script>

<style scoped>
.combos-list {
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #333;
  width: 100%;
}

h4 {
  margin: 0px 5px 0px 0px;
}

ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
}
ul.race-list {
  margin-bottom: 10px;
}

.combos-list__dropdown-item {
  margin-right: 10px;
}

.combos-list__combos-dropdowns {
  display: flex;
  flex-direction: column;
}

div.race-list-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 10px;
  cursor: pointer;
}

.toggle-button {
  margin-left: auto;
  font-size: 20px;
  font-weight: bold;
  transition: transform 0.2s ease-in-out;
}

.toggle-button span {
  display: inline-block;
  transform: rotate(0deg);
}

.toggle-button span:last-child {
  margin-left: 5px;
}

.race-list {
  padding-left: 20px;
  border-left: 1px solid #ccc;
}

.race-list li {
  margin-bottom: 5px;
}

.hidden {
  display: none;
}
</style>
