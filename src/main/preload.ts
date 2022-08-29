import { ipcRenderer, contextBridge } from 'electron'

contextBridge.exposeInMainWorld('dmo', {
  quit: () => ipcRenderer.invoke('quit'),
  goToWebsite: () => ipcRenderer.invoke('go-to-website'),
  changeLanguageToEn:() => ipcRenderer.invoke('changeLanguageToEn',),
  changeLanguageToFr:() => ipcRenderer.invoke('changeLanguageToFr',),
})
