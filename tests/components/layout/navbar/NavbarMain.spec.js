import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';
import NavbarMain from '@/components/layout/navbar/NavbarMain.vue';
import { createI18n } from "vue-i18n";
const i18n = createI18n({
  legacy: false, // assuming you're using Composition API mode
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: {},
    pt: {},
  },
});


describe('NavbarMain', () => {
  it('should render without crashing', () => {
    const wrapper = mount(NavbarMain, {
      global: {
        plugins: [i18n],
      },
    });
    expect(wrapper.exists()).toBe(true);
  })
})
