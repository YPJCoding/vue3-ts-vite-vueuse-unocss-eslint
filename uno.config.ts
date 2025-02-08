import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      center: 'flex items-center justify-center',
      _active: 'cursor-pointer active:brightness-90',
    },
  ],
  presets: [
    presetAttributify(),
    presetUno(),
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
