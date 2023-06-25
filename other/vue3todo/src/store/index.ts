import mainStore from './modules/mainStore';
import footerStore from './modules/footerStore';

export default function useStore() {
  return {
    main: mainStore(),
    footer: footerStore(),
  };
}
