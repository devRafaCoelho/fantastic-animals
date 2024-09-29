import TabNavigation from "./modules/tab-navigation.js";
import Accordion from "./modules/accordion.js";
import AnimatedScroll from "./modules/animated-scroll.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import OpeningHours from "./modules/opening-hours.js";
import initFetchAnimals from "./modules/fetch-animals.js";
import initFecthBitcoin from "./modules/fetch-bitcoin.js";
import { SlideNav } from "./modules/slide.js";

initFetchAnimals();
initFecthBitcoin();

const accordion = new Accordion('[data-animated="accordion"] dt');
accordion.init();

const tabNav = new TabNavigation(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const animatedScroll = new AnimatedScroll('[data-animated="scroll"]');
animatedScroll.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const openingHours = new OpeningHours("[data-week]");
openingHours.init();

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.handleAddEventControl(".custom-control");
