import { createRouter, createWebHistory } from 'vue-router'
const DojoView = () => import('../views/DojoView.vue')
const TrainingView = () => import('../views/TrainingView.vue')
const SchedulesView = () => import('../views/SchedulesView.vue')
const DiscoverView = () => import('../views/DiscoverView.vue')
const Prices = () => import('../views/PricesView.vue')
const FormalityView = () => import('../views/FormalityView.vue')
const LocalityView = () => import('../views/LocalityView.vue')
const PlanView = () => import('../views/PlanView.vue')
const PhotoBookView = () => import('../views/PhotoBookView.vue')
const NewsView = () => import('../views/NewsView.vue')
const AikidoView = () => import('../views/AikidoView.vue')
const EquipmentView = () => import('../views/EquipmentView.vue')
const HakamaView = () => import('../views/HakamaView.vue')
const HakamaWearingView = () => import('../views/HakamaWearingView.vue')
const HakamaFoldingView = () => import('../views/HakamaFoldingView.vue')
const ConductCodeView = () => import('../views/ConductCodeView.vue')
const LexiqueView = () => import('../views/LexiqueView.vue')
const ShiatsuView = () => import('../views/ShiatsuView.vue')
const ContactView = () => import('../views/ContactView.vue')
const SubscribeView = () => import('../views/SubscribeView.vue')
const ResubscribeView = () => import('../views/ResubscribeView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dojo',
      component: DojoView
    },
    {
      path: '/dojo',
      name: 'dojo2',
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
      path: '/dojo/horaires/decouverte',
      name: 'decouverte',
      component: DiscoverView
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
      path: '/contact',
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
