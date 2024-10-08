/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // 入口 HTML 文件
    './src/**/*.vue', // Vue 组件
    './src/**/*.js', // JavaScript 文件
    './src/**/*.jsx', // JSX 文件
    './src/**/*.ts', // TypeScript 文件
    './src/**/*.tsx' // TSX 文件
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
