
import { mergeConfig, coverageConfigDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, {
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: 'happy-dom',
    include: ['./tests/*.test.tsx',"./tests/*.spec.tsx"],
    global: true
  }
})
