import axios from 'axios'

export const loadConfig = () => {
  return axios.get('./design.config.json')
}

export const applyDesignConfig = (config: object) => {
  Object.keys(config).forEach(key => {
    document.documentElement.style.setProperty(`--${key}`, config[key]);
  })
}