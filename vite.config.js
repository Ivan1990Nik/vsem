import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/vsem/',  // <-- важно: косая черта + имя репозитория + косая черта
})
