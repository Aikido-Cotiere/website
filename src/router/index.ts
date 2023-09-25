import { createRouter, createWebHistory } from 'vue-router'
import DojoView from '../views/DojoView.vue'
import TrainingView from '../views/TrainingView.vue'
import SchedulesView from '../views/SchedulesView.vue'
import Prices from '../views/PricesView.vue'
import FormalityView from '../views/FormalityView.vue'
import LocalityView from '../views/LocalityView.vue'
import PlanView from '../views/PlanView.vue'
import PhotoBookView from '../views/PhotoBookView.vue'
import NewsView from '../views/NewsView.vue'
import AikidoView from '../views/AikidoView.vue'
import EquipmentView from '../views/EquipmentView.vue'
import HakamaView from '../views/HakamaView.vue'
import HakamaWearingView from '../views/HakamaWearingView.vue'
import HakamaFoldingView from '../views/HakamaFoldingView.vue'
import ConductCodeView from '../views/ConductCodeView.vue'
import LexiqueView from '../views/LexiqueView.vue'
import ShiatsuView from '../views/ShiatsuView.vue'
import ContactView from '../views/ContactView.vue'
import SubscribeView from '../views/SubscribeView.vue'
import ResubscribeView from '../views/ResubscribeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dojo',
      component: DojoView
    },
    {
      path: '/dojo/entrainements',
      name: 'entrainements',
      component: TrainingView
    },
    {
      path: '/dojo/horaires',
      name: 'horaires',
      component: SchedulesView
    },
    {
      path: '/dojo/tarifs',
      name: 'tarifs',
      component: Prices
    },
    {
      path: '/dojo/formalites',
      name: 'formalites',
      component: FormalityView
    },
    {
      path: '/dojo/situation',
      name: 'situation',
      component: LocalityView
    },
    {
      path: '/dojo/carte',
      name: 'carte',
      component: PlanView
    },
    {
      path: '/dojo/galeriephotos',
      name: 'galeriephotos',
      component: PhotoBookView
    },
    {
      path: '/actus',
      name: 'actus',
      component: NewsView
    },
    {
      path: '/aikido',
      name: 'aikido',
      component: AikidoView
    },
    {
      path: '/aikido/equipement',
      name: 'equipement',
      component: EquipmentView
    },
    {
      path: '/aikido/equipement/le-hakama',
      name: 'hakama',
      component: HakamaView
    },
    {
      path: '/aikido/equipement/le-hakama/porterhakama',
      name: 'porterhakama',
      component: HakamaWearingView
    },
    {
      path: '/aikido/equipement/le-hakama/comment-plier-son-hakama',
      name: 'plierhakama',
      component: HakamaFoldingView
    },
    {
      path: '/aikido/regles',
      name: 'regles',
      component: ConductCodeView
    },
    {
      path: '/aikido/lexique',
      name: 'lexique',
      component: LexiqueView
    },
    {
      path: '/shiatsu',
      name: 'shiatsu',
      component: ShiatsuView
    },
    {
      path: '/frmcontact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: SubscribeView
    },
    {
      path: '/reinscription',
      name: 'reinscription',
      component: ResubscribeView
    },
  ]
})

export default router
