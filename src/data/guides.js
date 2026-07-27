// Combined guides data — merges EN + ZH + New articles
import { guidesPart1 as enPart1 } from './guides-part1.js'
import { guidesPart2 as enPart2 } from './guides-part2.js'
import { guidesNewPart1 as enNewPart1 } from './guides-new-part1.js'
import { guidesNewPart2 as enNewPart2 } from './guides-new-part2.js'
import { guidesZhPart1 as zhPart1 } from './guides-zh-part1.js'
import { guidesZhPart1b as zhPart1b } from './guides-zh-part1b.js'
import { guidesZhPart2a as zhPart2a } from './guides-zh-part2a.js'
import { guidesZhPart2b as zhPart2b } from './guides-zh-part2b.js'
import { guidesZhNewPart1 as zhNewPart1 } from './guides-zh-new-part1.js'
import { guidesZhNewPart2 as zhNewPart2 } from './guides-zh-new-part2.js'

const enGuides = [...enPart1, ...enPart2, ...enNewPart1, ...enNewPart2]
const zhGuides = [...zhPart1, ...zhPart1b, ...zhPart2a, ...zhPart2b, ...zhNewPart1, ...zhNewPart2]

// Merge EN + ZH by slug — if ZH exists, create bilingual object; otherwise keep EN string
export const guides = enGuides.map(enGuide => {
  const zhGuide = zhGuides.find(z => z.slug === enGuide.slug)
  if (!zhGuide) {
    return enGuide // No ZH translation yet — keep as plain strings
  }
  return {
    ...enGuide,
    title: { en: enGuide.title, zh: zhGuide.title },
    excerpt: { en: enGuide.excerpt, zh: zhGuide.excerpt },
    content: { en: enGuide.content, zh: zhGuide.content },
    category: { en: enGuide.category, zh: zhGuide.category || enGuide.category }
  }
})

// Helper to get localized field value
export function localized(field, locale = 'en') {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'object') return field[locale] || field.en || ''
  return String(field)
}

// Bilingual categories
export const categories = [
  { slug: 'beginner', name: { en: 'Beginner', zh: '新手' }, icon: '🛡', description: { en: 'Essential guides for new Tarnished', zh: '新褪色者必备攻略' } },
  { slug: 'builds', name: { en: 'Builds', zh: 'Build' }, icon: '⚔', description: { en: 'Optimize your character with the best builds', zh: '用最强Build优化你的角色' } },
  { slug: 'bosses', name: { en: 'Bosses', zh: 'Boss' }, icon: '💀', description: { en: 'Strategies for every boss encounter', zh: '每个Boss战的攻略策略' } },
  { slug: 'exploration', name: { en: 'Exploration', zh: '探索' }, icon: '🗺', description: { en: 'Discover hidden secrets and locations', zh: '发现隐藏的秘密和地点' } },
  { slug: 'lore', name: { en: 'Lore', zh: '剧情' }, icon: '📖', description: { en: 'Deep dive into the story and world', zh: '深入了解故事与世界' } },
  { slug: 'dlc', name: { en: 'DLC', zh: 'DLC' }, icon: '✨', description: { en: 'Shadow of the Erdtree walkthrough', zh: '黄金树幽影DLC攻略' } },
  { slug: 'pvp', name: { en: 'PvP', zh: 'PvP' }, icon: '🏆', description: { en: 'Dominate in player versus player combat', zh: '在PvP战斗中称霸' } },
  { slug: 'weapons', name: { en: 'Weapons', zh: '武器' }, icon: '🗡', description: { en: 'Find the best weapons for every playstyle', zh: '找到适合每种玩法的最佳武器' } }
]
