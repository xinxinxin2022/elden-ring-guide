import { createRouter, createWebHistory } from 'vue-router'
import { guides, localized } from '@/data/guides'
import { getLanguage } from '@/i18n'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
    meta: {
      title: 'Elden Ring Guide - Ultimate Walkthrough, Builds & Boss Strategies',
      description: 'Your comprehensive Elden Ring guide covering beginner tips, best builds, boss strategies, hidden secrets, and DLC walkthroughs.'
    }
  },
  {
    path: '/guides',
    name: 'Guides',
    component: () => import('@/views/GuidesList.vue'),
    meta: {
      title: 'All Elden Ring Guides & Walkthroughs',
      description: 'Browse our complete collection of Elden Ring guides, walkthroughs, build recommendations, and boss strategies.'
    }
  },
  {
    path: '/guides/:slug',
    name: 'GuideDetail',
    component: () => import('@/views/GuideDetail.vue'),
    props: true,
    meta: {
      description: 'Detailed Elden Ring guide with expert tips and strategies.'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutPage.vue'),
    meta: {
      title: 'About Us - Elden Ring Guide',
      description: 'Learn about the team behind the most comprehensive Elden Ring guide on the internet.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/ContactPage.vue'),
    meta: {
      title: 'Contact Us - Elden Ring Guide',
      description: 'Get in touch with the Elden Ring Guide team. Send us your feedback, suggestions, or questions.'
    }
  },
  {
    path: '/privacy-policy',
    name: 'Privacy',
    component: () => import('@/views/PrivacyPage.vue'),
    meta: {
      title: 'Privacy Policy - Elden Ring Guide',
      description: 'Our privacy policy explains how we collect, use, and protect your personal information.'
    }
  },
  {
    path: '/terms-of-service',
    name: 'Terms',
    component: () => import('@/views/TermsPage.vue'),
    meta: {
      title: 'Terms of Service - Elden Ring Guide',
      description: 'Read our terms and conditions for using the Elden Ring Guide website.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: '404 - Page Not Found',
      description: 'The page you are looking for does not exist.'
    }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

// Dynamic meta per route
router.beforeEach((to) => {
  if (to.name === 'GuideDetail') {
    const slug = to.params.slug
    const guide = guides.find(g => g.slug === slug)
    if (guide) {
      const lang = getLanguage()
      const title = localized(guide.title, lang)
      const desc = localized(guide.excerpt, lang)
      to.meta.title = `${title} - Elden Ring Guide`
      to.meta.description = desc
      to.meta.image = guide.image
    }
  }
})

export default router
