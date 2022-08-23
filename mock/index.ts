import type { MockMethod } from 'vite-plugin-mock'
import menu from './menu'

const modules: Record<string, MockMethod[]> = {
  menu,
}

const mockModules: MockMethod[] = []
Object.keys(modules).forEach((key) => {
  mockModules.push(...modules[key])
})

export default mockModules
