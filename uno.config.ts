import { defineConfig, presetAttributify, presetIcons, presetWind4, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      center: 'flex items-center justify-center',
      _active: 'cursor-pointer active:brightness-90',
    },
  ],
  presets: [
    presetAttributify(),
    presetWind4(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },
    }),
  ],

  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})
