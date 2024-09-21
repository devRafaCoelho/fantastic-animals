import initTabNavigation from "./modules/tab-navigation.js";
import Accordion from "./modules/accordion.js";
import initAnimatedScroll from "./modules/animated-scroll.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initOpeningHours from "./modules/opening-hours.js";
import initFetchAnimals from "./modules/fetch-animals.js";
import initFecthBitcoin from "./modules/fetch-bitcoin.js";

initTabNavigation();
initAnimatedScroll();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initOpeningHours();
initFetchAnimals();
initFecthBitcoin();

const accordion = new Accordion('[data-animated="accordion"] dt');
accordion.init();
