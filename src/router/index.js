import { createRouter, createWebHistory } from 'vue-router'
import SkillCalculator from '../views/SkillCalculator.vue'
import SkillPicker from '../views/SkillPicker.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/skill-calculator',
      name: 'SkillCalculator',
      component: SkillCalculator,
      alias: '/',
      props: (route) => {
        console.log('🚀 ~ file: index.js:14 ~ route:', route.query)
        return { race: route.query?.race || 'Dark Elf', profession: route.query?.profession || 'Archer' }
      },
      query: {
        race: { default: 'Dark Elf' },
        profession: { default: 'Archer' }
      }
    },
    {
      path: '/skill-picker',
      name: 'SkillPicker',
      component: SkillPicker
    }
  ]
})

export default router
