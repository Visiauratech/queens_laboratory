import { cpSync, rmSync, mkdirSync, existsSync, readdirSync, statSync, copyFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const apiSrc = join(root, 'api')
const apiDest = join(dist, 'api')

/** Files/folders never needed in the uploaded live package */
const skipNames = new Set([
  'node_modules',
  'tests',
  '.git',
  '.env', // will recreate from .env.production
  '.DS_Store',
  'Thumbs.db',
  'README.md',
  'phpunit.xml',
  'package.json',
  'package-lock.json',
  'vite.config.js',
  '.editorconfig',
  '.gitattributes',
  '.phpunit.result.cache',
])

const skipDirNames = new Set([
  'css', // resources/css — unused Laravel Vite front-end
  'js', // resources/js
])

function shouldSkip(name, parentName = '') {
  if (skipNames.has(name) || name.endsWith('.log')) return true
  if (parentName === 'resources' && skipDirNames.has(name)) return true
  return false
}

function copyDir(src, dest, parentName = '') {
  mkdirSync(dest, { recursive: true })
  for (const entry of readdirSync(src)) {
    if (shouldSkip(entry, parentName)) continue
    const from = join(src, entry)
    const to = join(dest, entry)
    const st = statSync(from)
    if (st.isDirectory()) {
      copyDir(from, to, entry)
    } else {
      copyFileSync(from, to)
    }
  }
}

if (!existsSync(dist)) {
  console.error('dist/ missing — run vite build first')
  process.exit(1)
}

const spaHtaccess = join(root, 'public', '.htaccess')
if (existsSync(spaHtaccess)) {
  copyFileSync(spaHtaccess, join(dist, '.htaccess'))
}

if (existsSync(apiDest)) {
  rmSync(apiDest, { recursive: true, force: true })
}

console.log('prepare-dist: copying api → dist/api (includes vendor)...')
copyDir(apiSrc, apiDest)

const prodEnv = join(apiDest, '.env.production')
const liveEnv = join(apiDest, '.env_live')
const destEnv = join(apiDest, '.env')
if (existsSync(prodEnv)) {
  copyFileSync(prodEnv, destEnv)
} else if (existsSync(liveEnv)) {
  copyFileSync(liveEnv, destEnv)
}

// Ensure sqlite file exists for first boot
const dbDir = join(apiDest, 'database')
mkdirSync(dbDir, { recursive: true })
const sqlite = join(dbDir, 'database.sqlite')
if (!existsSync(sqlite)) {
  writeFileSync(sqlite, '')
}

// Writable storage stubs
for (const sub of [
  'storage/framework/cache/data',
  'storage/framework/sessions',
  'storage/framework/views',
  'storage/logs',
  'bootstrap/cache',
]) {
  mkdirSync(join(apiDest, sub), { recursive: true })
}

console.log('prepare-dist: done — zip the contents of dist/ and upload to the server')
