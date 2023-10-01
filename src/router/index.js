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
      props: route => {
        return { race: route.query?.race || 'Dark Elf', profession: route.query?.profession || 'Archer' }
      },
      beforeEnter: (to, from, next) => {
        if (!to.query.race || !to.query.profession) {
          next({ name: 'SkillCalculator', query: { race: to.query.race || 'Dark Elf', profession: to.query.profession || 'Archer' } })
        } else {
          next()
        }
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