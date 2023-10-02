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
      alias: '/',
      name: 'SkillPicker',
      component: SkillPicker,
      props: route => {
        return { skills: route.query?.skills || [] }
      },
      beforeEnter: (to, from, next) => {
        if (!to.query.skills) {
          next({ name: 'SkillPicker', query: { skills: [] } })
        } else {
          next()
        }
      }
    }
  ]
})

export default router