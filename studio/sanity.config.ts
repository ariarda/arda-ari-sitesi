// studio/sanity.config.ts

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import { schema } from './schemaTypes' // <<< DÜZELTME 1: Doğru ismi import ettik.

export default defineConfig({
  name: 'default',
  title: 'Arı Hukuk Sitesi',

  projectId: 'dlwl2ln9', // Lütfen kendi Proje ID'nizi buraya yazın
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: schema, // <<< DÜZELTME 2: Doğru değişkeni kullandık.
})