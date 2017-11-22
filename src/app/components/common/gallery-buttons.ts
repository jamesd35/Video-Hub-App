export const GalleryButtonsOrder = [
  'showThumbnails',
  'showFilmstrip',
  'showFiles',
  'showMoreInfo',
  'previewSize',
  'hoverDisabled',
  'randomImage',
  'makeSmaller',
  'makeLarger',
  'darkMode'
]

export let GalleryButtons = {
  'showThumbnails': {
    hidden: false,
    toggled: true,
    iconName: 'icon-layout',
    title: 'Show thumbnails',
    spaceAfter: false,
    description: 'Show thumbnails view'
  },
  'showFilmstrip': {
    hidden: false,
    toggled: false,
    iconName: 'icon-menu',
    title: 'Show filmstrip',
    spaceAfter: false,
    description: 'Show filmstrip view'
  },
  'showFiles': {
    hidden: false,
    toggled: false,
    iconName: 'icon-menu',
    title: 'Show files',
    spaceAfter: true,
    description: 'Show files view'
  },
  'showMoreInfo': {
    hidden: false,
    toggled: true,              // coincides with `this.showMoreInfo` variable
    iconName: 'icon-tag',
    title: 'Show more info',
    spaceAfter: false,
    description: 'Show more info'
  },
  'previewSize': {
    hidden: false,
    toggled: false,              // coincides with `this.previewSize` variable
    iconName: 'icon-resize-full',
    title: 'Toggle preview size',
    spaceAfter: false,
    description: 'Make the preview items larger or smaller'
  },
  'hoverDisabled': {
    hidden: false,
    toggled: false,              // coincides with `this.hoverDisabled` variable
    iconName: 'icon-feather',
    title: 'Toggle hover animations',
    spaceAfter: false,
    description: 'Scrolling over preview shows different screenshots'
  },
  'randomImage': {
    hidden: false,
    toggled: true,              // coincides with `this.randomImage` variable
    iconName: 'icon-shuffle',
    title: 'Show random screenshot',
    spaceAfter: true,
    description: 'Show random screenshot in the preview'
  },
  'makeSmaller': {
    hidden: false,
    toggled: false,
    iconName: 'icon-minus',
    title: 'Decrease preview size',
    spaceAfter: false,
    description: 'Decrease preview size'
  },
  'makeLarger': {
    hidden: false,
    toggled: false,
    iconName: 'icon-plus',
    title: 'Increase preview size',
    spaceAfter: true,
    description: 'Increase preview size'
  },
  'darkMode': {
    hidden: false,
    toggled: false,
    iconName: 'icon-adjust',
    title: 'Dark mode',
    spaceAfter: false,
    description: 'Dark mode'
  }
}
