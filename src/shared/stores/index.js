import { types, getParent } from 'mobx-state-tree';

export default types.model('CustomHTML').views(self => ({
  get root() {
    return getParent(self, 1);
  },
  get settings() {
    return self.root.settings;
  },
  get build() {
    return self.root.build;
  },
  get pwaFills() {
    return (self.settings.customHtml.fills || [])
      .filter(fill => fill.content.pwa)
      .map(fill => ({ ...fill, content: fill.content.pwa }));
  },
  get ampFills() {
    return (self.settings.customHtml.fills || [])
      .filter(fill => fill.content.amp)
      .map(fill => ({ ...fill, content: fill.content.amp }));
  },
  get fills() {
    return self.build.isAmp ? self.ampFills : self.pwaFills;
  },
}));
