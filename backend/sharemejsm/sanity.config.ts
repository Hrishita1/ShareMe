import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'shareme_jsm',

  projectId: 'l1t4hg8b',
  dataset: 'shareme',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
