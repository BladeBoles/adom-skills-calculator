<template>
  <div>
    <transition name="modal">
      <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false">
          <div class="modal">
            <h1>Choose a Skill</h1>
            <ul class="choice-list-ul">
              <li
                class="choice-list-li"
                v-for="(skill, index) in skillsList"
                :key="`${skill.name}${index}`"
                @click.prevent="chooseSkill(skill.name)"
              >
                {{ skill.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>

    <button class="add-skill-button" @click.prevent="isOpen = !isOpen">
      <i id="plus-circle" class="fa-solid fa-square-minus" />
      <span id="add-skill-text">Add Skill</span>
    </button>
  </div>
</template>

<script setup>
import { skillsList } from '../../tables/skills'
import { ref } from 'vue'

const emit = defineEmits(['skill-chosen'])

const isOpen = ref(false)

const chooseSkill = (chosenSkill) => {
  emit('skill-chosen', chosenSkill.name)
  isOpen.value = false
}
</script>

<style scoped>
.add-skill-button {
  border: none;
  background-color: transparent;
  margin: 15px 0px;
  font-size: 20px;
}

.choice-list-ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style-type: none;
}

.choice-list-li {
  font-size: 24px;
  padding: 10px 20px;
}

.choice-list-li:hover {
  cursor: pointer;
  text-decoration: underline;
  background-color: burlywood;
  border: 1px transparent;
  border-radius: 1em;
}

#plus-circle {
  font-size: 24px;
  margin: 0px 10px;
}

#plus-circle:hover {
  color: green;
  cursor: pointer;
}

#add-skill-text {
  padding-left: 0px;
}

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  max-height: 70vh;
  width: 80vw;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px 3px;
  transition: all 0.2s ease-in;
  font-family: Helvetica, Arial, sans-serif;
}

.fadeIn-enter {
  opacity: 0;
}

.fadeIn-leave-active {
  opacity: 0;
  transition: all 0.2s step-end;
}

.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 999;
  transition: opacity 0.2s ease;
}
</style>
