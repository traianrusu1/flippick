import AppConfig from 'app/constants'

export default function api(path: string) {
  return `${AppConfig.apiBase}${path}`
}
