import { r, s, $, c as customElementNames } from "./index.js";
import { c as color, e, n } from "./const.js";
import { n as night } from "./nightmode.js";
const iconList = r`
  .fa-500px::before {
    content: '\\f26e';
  }

  .fa-abacus::before {
    content: '\\f640';
  }

  .fa-accessible-icon::before {
    content: '\\f368';
  }

  .fa-accusoft::before {
    content: '\\f369';
  }

  .fa-acorn::before {
    content: '\\f6ae';
  }

  .fa-acquisitions-incorporated::before {
    content: '\\f6af';
  }

  .fa-ad::before {
    content: '\\f641';
  }

  .fa-address-book::before {
    content: '\\f2b9';
  }

  .fa-address-card::before {
    content: '\\f2bb';
  }

  .fa-adjust::before {
    content: '\\f042';
  }

  .fa-adn::before {
    content: '\\f170';
  }

  .fa-adobe::before {
    content: '\\f778';
  }

  .fa-adversal::before {
    content: '\\f36a';
  }

  .fa-affiliatetheme::before {
    content: '\\f36b';
  }

  .fa-air-freshener::before {
    content: '\\f5d0';
  }

  .fa-airbnb::before {
    content: '\\f834';
  }

  .fa-alarm-clock::before {
    content: '\\f34e';
  }

  .fa-alarm-exclamation::before {
    content: '\\f843';
  }

  .fa-alarm-plus::before {
    content: '\\f844';
  }

  .fa-alarm-snooze::before {
    content: '\\f845';
  }

  .fa-algolia::before {
    content: '\\f36c';
  }

  .fa-alicorn::before {
    content: '\\f6b0';
  }

  .fa-align-center::before {
    content: '\\f037';
  }

  .fa-align-justify::before {
    content: '\\f039';
  }

  .fa-align-left::before {
    content: '\\f036';
  }

  .fa-align-right::before {
    content: '\\f038';
  }

  .fa-align-slash::before {
    content: '\\f846';
  }

  .fa-alipay::before {
    content: '\\f642';
  }

  .fa-allergies::before {
    content: '\\f461';
  }

  .fa-amazon::before {
    content: '\\f270';
  }

  .fa-amazon-pay::before {
    content: '\\f42c';
  }

  .fa-ambulance::before {
    content: '\\f0f9';
  }

  .fa-american-sign-language-interpreting::before {
    content: '\\f2a3';
  }

  .fa-amilia::before {
    content: '\\f36d';
  }

  .fa-analytics::before {
    content: '\\f643';
  }

  .fa-anchor::before {
    content: '\\f13d';
  }

  .fa-android::before {
    content: '\\f17b';
  }

  .fa-angel::before {
    content: '\\f779';
  }

  .fa-angellist::before {
    content: '\\f209';
  }

  .fa-angle-double-down::before {
    content: '\\f103';
  }

  .fa-angle-double-left::before {
    content: '\\f100';
  }

  .fa-angle-double-right::before {
    content: '\\f101';
  }

  .fa-angle-double-up::before {
    content: '\\f102';
  }

  .fa-angle-down::before {
    content: '\\f107';
  }

  .fa-angle-left::before {
    content: '\\f104';
  }

  .fa-angle-right::before {
    content: '\\f105';
  }

  .fa-angle-up::before {
    content: '\\f106';
  }

  .fa-angry::before {
    content: '\\f556';
  }

  .fa-angrycreative::before {
    content: '\\f36e';
  }

  .fa-angular::before {
    content: '\\f420';
  }

  .fa-ankh::before {
    content: '\\f644';
  }

  .fa-app-store::before {
    content: '\\f36f';
  }

  .fa-app-store-ios::before {
    content: '\\f370';
  }

  .fa-apper::before {
    content: '\\f371';
  }

  .fa-apple::before {
    content: '\\f179';
  }

  .fa-apple-alt::before {
    content: '\\f5d1';
  }

  .fa-apple-crate::before {
    content: '\\f6b1';
  }

  .fa-apple-pay::before {
    content: '\\f415';
  }

  .fa-archive::before {
    content: '\\f187';
  }

  .fa-archway::before {
    content: '\\f557';
  }

  .fa-arrow-alt-circle-down::before {
    content: '\\f358';
  }

  .fa-arrow-alt-circle-left::before {
    content: '\\f359';
  }

  .fa-arrow-alt-circle-right::before {
    content: '\\f35a';
  }

  .fa-arrow-alt-circle-up::before {
    content: '\\f35b';
  }

  .fa-arrow-alt-down::before {
    content: '\\f354';
  }

  .fa-arrow-alt-from-bottom::before {
    content: '\\f346';
  }

  .fa-arrow-alt-from-left::before {
    content: '\\f347';
  }

  .fa-arrow-alt-from-right::before {
    content: '\\f348';
  }

  .fa-arrow-alt-from-top::before {
    content: '\\f349';
  }

  .fa-arrow-alt-left::before {
    content: '\\f355';
  }

  .fa-arrow-alt-right::before {
    content: '\\f356';
  }

  .fa-arrow-alt-square-down::before {
    content: '\\f350';
  }

  .fa-arrow-alt-square-left::before {
    content: '\\f351';
  }

  .fa-arrow-alt-square-right::before {
    content: '\\f352';
  }

  .fa-arrow-alt-square-up::before {
    content: '\\f353';
  }

  .fa-arrow-alt-to-bottom::before {
    content: '\\f34a';
  }

  .fa-arrow-alt-to-left::before {
    content: '\\f34b';
  }

  .fa-arrow-alt-to-right::before {
    content: '\\f34c';
  }

  .fa-arrow-alt-to-top::before {
    content: '\\f34d';
  }

  .fa-arrow-alt-up::before {
    content: '\\f357';
  }

  .fa-arrow-circle-down::before {
    content: '\\f0ab';
  }

  .fa-arrow-circle-left::before {
    content: '\\f0a8';
  }

  .fa-arrow-circle-right::before {
    content: '\\f0a9';
  }

  .fa-arrow-circle-up::before {
    content: '\\f0aa';
  }

  .fa-arrow-down::before {
    content: '\\f063';
  }

  .fa-arrow-from-bottom::before {
    content: '\\f342';
  }

  .fa-arrow-from-left::before {
    content: '\\f343';
  }

  .fa-arrow-from-right::before {
    content: '\\f344';
  }

  .fa-arrow-from-top::before {
    content: '\\f345';
  }

  .fa-arrow-left::before {
    content: '\\f060';
  }

  .fa-arrow-right::before {
    content: '\\f061';
  }

  .fa-arrow-square-down::before {
    content: '\\f339';
  }

  .fa-arrow-square-left::before {
    content: '\\f33a';
  }

  .fa-arrow-square-right::before {
    content: '\\f33b';
  }

  .fa-arrow-square-up::before {
    content: '\\f33c';
  }

  .fa-arrow-to-bottom::before {
    content: '\\f33d';
  }

  .fa-arrow-to-left::before {
    content: '\\f33e';
  }

  .fa-arrow-to-right::before {
    content: '\\f340';
  }

  .fa-arrow-to-top::before {
    content: '\\f341';
  }

  .fa-arrow-up::before {
    content: '\\f062';
  }

  .fa-arrows::before {
    content: '\\f047';
  }

  .fa-arrows-alt::before {
    content: '\\f0b2';
  }

  .fa-arrows-alt-h::before {
    content: '\\f337';
  }

  .fa-arrows-alt-v::before {
    content: '\\f338';
  }

  .fa-arrows-h::before {
    content: '\\f07e';
  }

  .fa-arrows-v::before {
    content: '\\f07d';
  }

  .fa-artstation::before {
    content: '\\f77a';
  }

  .fa-assistive-listening-systems::before {
    content: '\\f2a2';
  }

  .fa-asterisk::before {
    content: '\\f069';
  }

  .fa-asymmetrik::before {
    content: '\\f372';
  }

  .fa-at::before {
    content: '\\f1fa';
  }

  .fa-atlas::before {
    content: '\\f558';
  }

  .fa-atlassian::before {
    content: '\\f77b';
  }

  .fa-atom::before {
    content: '\\f5d2';
  }

  .fa-atom-alt::before {
    content: '\\f5d3';
  }

  .fa-audible::before {
    content: '\\f373';
  }

  .fa-audio-description::before {
    content: '\\f29e';
  }

  .fa-autoprefixer::before {
    content: '\\f41c';
  }

  .fa-avianex::before {
    content: '\\f374';
  }

  .fa-aviato::before {
    content: '\\f421';
  }

  .fa-award::before {
    content: '\\f559';
  }

  .fa-aws::before {
    content: '\\f375';
  }

  .fa-axe::before {
    content: '\\f6b2';
  }

  .fa-axe-battle::before {
    content: '\\f6b3';
  }

  .fa-baby::before {
    content: '\\f77c';
  }

  .fa-baby-carriage::before {
    content: '\\f77d';
  }

  .fa-backpack::before {
    content: '\\f5d4';
  }

  .fa-backspace::before {
    content: '\\f55a';
  }

  .fa-backward::before {
    content: '\\f04a';
  }

  .fa-bacon::before {
    content: '\\f7e5';
  }

  .fa-badge::before {
    content: '\\f335';
  }

  .fa-badge-check::before {
    content: '\\f336';
  }

  .fa-badge-dollar::before {
    content: '\\f645';
  }

  .fa-badge-percent::before {
    content: '\\f646';
  }

  .fa-badger-honey::before {
    content: '\\f6b4';
  }

  .fa-bags-shopping::before {
    content: '\\f847';
  }

  .fa-balance-scale::before {
    content: '\\f24e';
  }

  .fa-balance-scale-left::before {
    content: '\\f515';
  }

  .fa-balance-scale-right::before {
    content: '\\f516';
  }

  .fa-ball-pile::before {
    content: '\\f77e';
  }

  .fa-ballot::before {
    content: '\\f732';
  }

  .fa-ballot-check::before {
    content: '\\f733';
  }

  .fa-ban::before {
    content: '\\f05e';
  }

  .fa-band-aid::before {
    content: '\\f462';
  }

  .fa-bandcamp::before {
    content: '\\f2d5';
  }

  .fa-barcode::before {
    content: '\\f02a';
  }

  .fa-barcode-alt::before {
    content: '\\f463';
  }

  .fa-barcode-read::before {
    content: '\\f464';
  }

  .fa-barcode-scan::before {
    content: '\\f465';
  }

  .fa-bars::before {
    content: '\\f0c9';
  }

  .fa-baseball::before {
    content: '\\f432';
  }

  .fa-baseball-ball::before {
    content: '\\f433';
  }

  .fa-basketball-ball::before {
    content: '\\f434';
  }

  .fa-basketball-hoop::before {
    content: '\\f435';
  }

  .fa-bat::before {
    content: '\\f6b5';
  }

  .fa-bath::before {
    content: '\\f2cd';
  }

  .fa-battery-bolt::before {
    content: '\\f376';
  }

  .fa-battery-empty::before {
    content: '\\f244';
  }

  .fa-battery-full::before {
    content: '\\f240';
  }

  .fa-battery-half::before {
    content: '\\f242';
  }

  .fa-battery-quarter::before {
    content: '\\f243';
  }

  .fa-battery-slash::before {
    content: '\\f377';
  }

  .fa-battery-three-quarters::before {
    content: '\\f241';
  }

  .fa-battle-net::before {
    content: '\\f835';
  }

  .fa-bed::before {
    content: '\\f236';
  }

  .fa-beer::before {
    content: '\\f0fc';
  }

  .fa-behance::before {
    content: '\\f1b4';
  }

  .fa-behance-square::before {
    content: '\\f1b5';
  }

  .fa-bell::before {
    content: '\\f0f3';
  }

  .fa-bell-exclamation::before {
    content: '\\f848';
  }

  .fa-bell-plus::before {
    content: '\\f849';
  }

  .fa-bell-school::before {
    content: '\\f5d5';
  }

  .fa-bell-school-slash::before {
    content: '\\f5d6';
  }

  .fa-bell-slash::before {
    content: '\\f1f6';
  }

  .fa-bells::before {
    content: '\\f77f';
  }

  .fa-bezier-curve::before {
    content: '\\f55b';
  }

  .fa-bible::before {
    content: '\\f647';
  }

  .fa-bicycle::before {
    content: '\\f206';
  }

  .fa-biking::before {
    content: '\\f84a';
  }

  .fa-biking-mountain::before {
    content: '\\f84b';
  }

  .fa-bimobject::before {
    content: '\\f378';
  }

  .fa-binoculars::before {
    content: '\\f1e5';
  }

  .fa-biohazard::before {
    content: '\\f780';
  }

  .fa-birthday-cake::before {
    content: '\\f1fd';
  }

  .fa-bitbucket::before {
    content: '\\f171';
  }

  .fa-bitcoin::before {
    content: '\\f379';
  }

  .fa-bity::before {
    content: '\\f37a';
  }

  .fa-black-tie::before {
    content: '\\f27e';
  }

  .fa-blackberry::before {
    content: '\\f37b';
  }

  .fa-blanket::before {
    content: '\\f498';
  }

  .fa-blender::before {
    content: '\\f517';
  }

  .fa-blender-phone::before {
    content: '\\f6b6';
  }

  .fa-blind::before {
    content: '\\f29d';
  }

  .fa-blog::before {
    content: '\\f781';
  }

  .fa-blogger::before {
    content: '\\f37c';
  }

  .fa-blogger-b::before {
    content: '\\f37d';
  }

  .fa-bluetooth::before {
    content: '\\f293';
  }

  .fa-bluetooth-b::before {
    content: '\\f294';
  }

  .fa-bold::before {
    content: '\\f032';
  }

  .fa-bolt::before {
    content: '\\f0e7';
  }

  .fa-bomb::before {
    content: '\\f1e2';
  }

  .fa-bone::before {
    content: '\\f5d7';
  }

  .fa-bone-break::before {
    content: '\\f5d8';
  }

  .fa-bong::before {
    content: '\\f55c';
  }

  .fa-book::before {
    content: '\\f02d';
  }

  .fa-book-alt::before {
    content: '\\f5d9';
  }

  .fa-book-dead::before {
    content: '\\f6b7';
  }

  .fa-book-heart::before {
    content: '\\f499';
  }

  .fa-book-medical::before {
    content: '\\f7e6';
  }

  .fa-book-open::before {
    content: '\\f518';
  }

  .fa-book-reader::before {
    content: '\\f5da';
  }

  .fa-book-spells::before {
    content: '\\f6b8';
  }

  .fa-book-user::before {
    content: '\\f7e7';
  }

  .fa-bookmark::before {
    content: '\\f02e';
  }

  .fa-books::before {
    content: '\\f5db';
  }

  .fa-books-medical::before {
    content: '\\f7e8';
  }

  .fa-boot::before {
    content: '\\f782';
  }

  .fa-booth-curtain::before {
    content: '\\f734';
  }

  .fa-bootstrap::before {
    content: '\\f836';
  }

  .fa-border-all::before {
    content: '\\f84c';
  }

  .fa-border-bottom::before {
    content: '\\f84d';
  }

  .fa-border-inner::before {
    content: '\\f84e';
  }

  .fa-border-left::before {
    content: '\\f84f';
  }

  .fa-border-none::before {
    content: '\\f850';
  }

  .fa-border-outer::before {
    content: '\\f851';
  }

  .fa-border-right::before {
    content: '\\f852';
  }

  .fa-border-style::before {
    content: '\\f853';
  }

  .fa-border-style-alt::before {
    content: '\\f854';
  }

  .fa-border-top::before {
    content: '\\f855';
  }

  .fa-bow-arrow::before {
    content: '\\f6b9';
  }

  .fa-bowling-ball::before {
    content: '\\f436';
  }

  .fa-bowling-pins::before {
    content: '\\f437';
  }

  .fa-box::before {
    content: '\\f466';
  }

  .fa-box-alt::before {
    content: '\\f49a';
  }

  .fa-box-ballot::before {
    content: '\\f735';
  }

  .fa-box-check::before {
    content: '\\f467';
  }

  .fa-box-fragile::before {
    content: '\\f49b';
  }

  .fa-box-full::before {
    content: '\\f49c';
  }

  .fa-box-heart::before {
    content: '\\f49d';
  }

  .fa-box-open::before {
    content: '\\f49e';
  }

  .fa-box-up::before {
    content: '\\f49f';
  }

  .fa-box-usd::before {
    content: '\\f4a0';
  }

  .fa-boxes::before {
    content: '\\f468';
  }

  .fa-boxes-alt::before {
    content: '\\f4a1';
  }

  .fa-boxing-glove::before {
    content: '\\f438';
  }

  .fa-brackets::before {
    content: '\\f7e9';
  }

  .fa-brackets-curly::before {
    content: '\\f7ea';
  }

  .fa-braille::before {
    content: '\\f2a1';
  }

  .fa-brain::before {
    content: '\\f5dc';
  }

  .fa-bread-loaf::before {
    content: '\\f7eb';
  }

  .fa-bread-slice::before {
    content: '\\f7ec';
  }

  .fa-briefcase::before {
    content: '\\f0b1';
  }

  .fa-briefcase-medical::before {
    content: '\\f469';
  }

  .fa-bring-forward::before {
    content: '\\f856';
  }

  .fa-bring-front::before {
    content: '\\f857';
  }

  .fa-broadcast-tower::before {
    content: '\\f519';
  }

  .fa-broom::before {
    content: '\\f51a';
  }

  .fa-browser::before {
    content: '\\f37e';
  }

  .fa-brush::before {
    content: '\\f55d';
  }

  .fa-btc::before {
    content: '\\f15a';
  }

  .fa-buffer::before {
    content: '\\f837';
  }

  .fa-bug::before {
    content: '\\f188';
  }

  .fa-building::before {
    content: '\\f1ad';
  }

  .fa-bullhorn::before {
    content: '\\f0a1';
  }

  .fa-bullseye::before {
    content: '\\f140';
  }

  .fa-bullseye-arrow::before {
    content: '\\f648';
  }

  .fa-bullseye-pointer::before {
    content: '\\f649';
  }

  .fa-burger-soda::before {
    content: '\\f858';
  }

  .fa-burn::before {
    content: '\\f46a';
  }

  .fa-buromobelexperte::before {
    content: '\\f37f';
  }

  .fa-burrito::before {
    content: '\\f7ed';
  }

  .fa-bus::before {
    content: '\\f207';
  }

  .fa-bus-alt::before {
    content: '\\f55e';
  }

  .fa-bus-school::before {
    content: '\\f5dd';
  }

  .fa-business-time::before {
    content: '\\f64a';
  }

  .fa-buysellads::before {
    content: '\\f20d';
  }

  .fa-cabinet-filing::before {
    content: '\\f64b';
  }

  .fa-calculator::before {
    content: '\\f1ec';
  }

  .fa-calculator-alt::before {
    content: '\\f64c';
  }

  .fa-calendar::before {
    content: '\\f133';
  }

  .fa-calendar-alt::before {
    content: '\\f073';
  }

  .fa-calendar-check::before {
    content: '\\f274';
  }

  .fa-calendar-day::before {
    content: '\\f783';
  }

  .fa-calendar-edit::before {
    content: '\\f333';
  }

  .fa-calendar-exclamation::before {
    content: '\\f334';
  }

  .fa-calendar-minus::before {
    content: '\\f272';
  }

  .fa-calendar-plus::before {
    content: '\\f271';
  }

  .fa-calendar-star::before {
    content: '\\f736';
  }

  .fa-calendar-times::before {
    content: '\\f273';
  }

  .fa-calendar-week::before {
    content: '\\f784';
  }

  .fa-camera::before {
    content: '\\f030';
  }

  .fa-camera-alt::before {
    content: '\\f332';
  }

  .fa-camera-retro::before {
    content: '\\f083';
  }

  .fa-campfire::before {
    content: '\\f6ba';
  }

  .fa-campground::before {
    content: '\\f6bb';
  }

  .fa-canadian-maple-leaf::before {
    content: '\\f785';
  }

  .fa-candle-holder::before {
    content: '\\f6bc';
  }

  .fa-candy-cane::before {
    content: '\\f786';
  }

  .fa-candy-corn::before {
    content: '\\f6bd';
  }

  .fa-cannabis::before {
    content: '\\f55f';
  }

  .fa-capsules::before {
    content: '\\f46b';
  }

  .fa-car::before {
    content: '\\f1b9';
  }

  .fa-car-alt::before {
    content: '\\f5de';
  }

  .fa-car-battery::before {
    content: '\\f5df';
  }

  .fa-car-building::before {
    content: '\\f859';
  }

  .fa-car-bump::before {
    content: '\\f5e0';
  }

  .fa-car-bus::before {
    content: '\\f85a';
  }

  .fa-car-crash::before {
    content: '\\f5e1';
  }

  .fa-car-garage::before {
    content: '\\f5e2';
  }

  .fa-car-mechanic::before {
    content: '\\f5e3';
  }

  .fa-car-side::before {
    content: '\\f5e4';
  }

  .fa-car-tilt::before {
    content: '\\f5e5';
  }

  .fa-car-wash::before {
    content: '\\f5e6';
  }

  .fa-caret-circle-down::before {
    content: '\\f32d';
  }

  .fa-caret-circle-left::before {
    content: '\\f32e';
  }

  .fa-caret-circle-right::before {
    content: '\\f330';
  }

  .fa-caret-circle-up::before {
    content: '\\f331';
  }

  .fa-caret-down::before {
    content: '\\f0d7';
  }

  .fa-caret-left::before {
    content: '\\f0d9';
  }

  .fa-caret-right::before {
    content: '\\f0da';
  }

  .fa-caret-square-down::before {
    content: '\\f150';
  }

  .fa-caret-square-left::before {
    content: '\\f191';
  }

  .fa-caret-square-right::before {
    content: '\\f152';
  }

  .fa-caret-square-up::before {
    content: '\\f151';
  }

  .fa-caret-up::before {
    content: '\\f0d8';
  }

  .fa-carrot::before {
    content: '\\f787';
  }

  .fa-cars::before {
    content: '\\f85b';
  }

  .fa-cart-arrow-down::before {
    content: '\\f218';
  }

  .fa-cart-plus::before {
    content: '\\f217';
  }

  .fa-cash-register::before {
    content: '\\f788';
  }

  .fa-cat::before {
    content: '\\f6be';
  }

  .fa-cauldron::before {
    content: '\\f6bf';
  }

  .fa-cc-amazon-pay::before {
    content: '\\f42d';
  }

  .fa-cc-amex::before {
    content: '\\f1f3';
  }

  .fa-cc-apple-pay::before {
    content: '\\f416';
  }

  .fa-cc-diners-club::before {
    content: '\\f24c';
  }

  .fa-cc-discover::before {
    content: '\\f1f2';
  }

  .fa-cc-jcb::before {
    content: '\\f24b';
  }

  .fa-cc-mastercard::before {
    content: '\\f1f1';
  }

  .fa-cc-paypal::before {
    content: '\\f1f4';
  }

  .fa-cc-stripe::before {
    content: '\\f1f5';
  }

  .fa-cc-visa::before {
    content: '\\f1f0';
  }

  .fa-centercode::before {
    content: '\\f380';
  }

  .fa-centos::before {
    content: '\\f789';
  }

  .fa-certificate::before {
    content: '\\f0a3';
  }

  .fa-chair::before {
    content: '\\f6c0';
  }

  .fa-chair-office::before {
    content: '\\f6c1';
  }

  .fa-chalkboard::before {
    content: '\\f51b';
  }

  .fa-chalkboard-teacher::before {
    content: '\\f51c';
  }

  .fa-charging-station::before {
    content: '\\f5e7';
  }

  .fa-chart-area::before {
    content: '\\f1fe';
  }

  .fa-chart-bar::before {
    content: '\\f080';
  }

  .fa-chart-line::before {
    content: '\\f201';
  }

  .fa-chart-line-down::before {
    content: '\\f64d';
  }

  .fa-chart-network::before {
    content: '\\f78a';
  }

  .fa-chart-pie::before {
    content: '\\f200';
  }

  .fa-chart-pie-alt::before {
    content: '\\f64e';
  }

  .fa-chart-scatter::before {
    content: '\\f7ee';
  }

  .fa-check::before {
    content: '\\f00c';
  }

  .fa-check-circle::before {
    content: '\\f058';
  }

  .fa-check-double::before {
    content: '\\f560';
  }

  .fa-check-square::before {
    content: '\\f14a';
  }

  .fa-cheese::before {
    content: '\\f7ef';
  }

  .fa-cheese-swiss::before {
    content: '\\f7f0';
  }

  .fa-cheeseburger::before {
    content: '\\f7f1';
  }

  .fa-chess::before {
    content: '\\f439';
  }

  .fa-chess-bishop::before {
    content: '\\f43a';
  }

  .fa-chess-bishop-alt::before {
    content: '\\f43b';
  }

  .fa-chess-board::before {
    content: '\\f43c';
  }

  .fa-chess-clock::before {
    content: '\\f43d';
  }

  .fa-chess-clock-alt::before {
    content: '\\f43e';
  }

  .fa-chess-king::before {
    content: '\\f43f';
  }

  .fa-chess-king-alt::before {
    content: '\\f440';
  }

  .fa-chess-knight::before {
    content: '\\f441';
  }

  .fa-chess-knight-alt::before {
    content: '\\f442';
  }

  .fa-chess-pawn::before {
    content: '\\f443';
  }

  .fa-chess-pawn-alt::before {
    content: '\\f444';
  }

  .fa-chess-queen::before {
    content: '\\f445';
  }

  .fa-chess-queen-alt::before {
    content: '\\f446';
  }

  .fa-chess-rook::before {
    content: '\\f447';
  }

  .fa-chess-rook-alt::before {
    content: '\\f448';
  }

  .fa-chevron-circle-down::before {
    content: '\\f13a';
  }

  .fa-chevron-circle-left::before {
    content: '\\f137';
  }

  .fa-chevron-circle-right::before {
    content: '\\f138';
  }

  .fa-chevron-circle-up::before {
    content: '\\f139';
  }

  .fa-chevron-double-down::before {
    content: '\\f322';
  }

  .fa-chevron-double-left::before {
    content: '\\f323';
  }

  .fa-chevron-double-right::before {
    content: '\\f324';
  }

  .fa-chevron-double-up::before {
    content: '\\f325';
  }

  .fa-chevron-down::before {
    content: '\\f078';
  }

  .fa-chevron-left::before {
    content: '\\f053';
  }

  .fa-chevron-right::before {
    content: '\\f054';
  }

  .fa-chevron-square-down::before {
    content: '\\f329';
  }

  .fa-chevron-square-left::before {
    content: '\\f32a';
  }

  .fa-chevron-square-right::before {
    content: '\\f32b';
  }

  .fa-chevron-square-up::before {
    content: '\\f32c';
  }

  .fa-chevron-up::before {
    content: '\\f077';
  }

  .fa-child::before {
    content: '\\f1ae';
  }

  .fa-chimney::before {
    content: '\\f78b';
  }

  .fa-chrome::before {
    content: '\\f268';
  }

  .fa-chromecast::before {
    content: '\\f838';
  }

  .fa-church::before {
    content: '\\f51d';
  }

  .fa-circle::before {
    content: '\\f111';
  }

  .fa-circle-notch::before {
    content: '\\f1ce';
  }

  .fa-city::before {
    content: '\\f64f';
  }

  .fa-claw-marks::before {
    content: '\\f6c2';
  }

  .fa-clinic-medical::before {
    content: '\\f7f2';
  }

  .fa-clipboard::before {
    content: '\\f328';
  }

  .fa-clipboard-check::before {
    content: '\\f46c';
  }

  .fa-clipboard-list::before {
    content: '\\f46d';
  }

  .fa-clipboard-list-check::before {
    content: '\\f737';
  }

  .fa-clipboard-prescription::before {
    content: '\\f5e8';
  }

  .fa-clipboard-user::before {
    content: '\\f7f3';
  }

  .fa-clock::before {
    content: '\\f017';
  }

  .fa-clone::before {
    content: '\\f24d';
  }

  .fa-closed-captioning::before {
    content: '\\f20a';
  }

  .fa-cloud::before {
    content: '\\f0c2';
  }

  .fa-cloud-download::before {
    content: '\\f0ed';
  }

  .fa-cloud-download-alt::before {
    content: '\\f381';
  }

  .fa-cloud-drizzle::before {
    content: '\\f738';
  }

  .fa-cloud-hail::before {
    content: '\\f739';
  }

  .fa-cloud-hail-mixed::before {
    content: '\\f73a';
  }

  .fa-cloud-meatball::before {
    content: '\\f73b';
  }

  .fa-cloud-moon::before {
    content: '\\f6c3';
  }

  .fa-cloud-moon-rain::before {
    content: '\\f73c';
  }

  .fa-cloud-rain::before {
    content: '\\f73d';
  }

  .fa-cloud-rainbow::before {
    content: '\\f73e';
  }

  .fa-cloud-showers::before {
    content: '\\f73f';
  }

  .fa-cloud-showers-heavy::before {
    content: '\\f740';
  }

  .fa-cloud-sleet::before {
    content: '\\f741';
  }

  .fa-cloud-snow::before {
    content: '\\f742';
  }

  .fa-cloud-sun::before {
    content: '\\f6c4';
  }

  .fa-cloud-sun-rain::before {
    content: '\\f743';
  }

  .fa-cloud-upload::before {
    content: '\\f0ee';
  }

  .fa-cloud-upload-alt::before {
    content: '\\f382';
  }

  .fa-clouds::before {
    content: '\\f744';
  }

  .fa-clouds-moon::before {
    content: '\\f745';
  }

  .fa-clouds-sun::before {
    content: '\\f746';
  }

  .fa-cloudscale::before {
    content: '\\f383';
  }

  .fa-cloudsmith::before {
    content: '\\f384';
  }

  .fa-cloudversify::before {
    content: '\\f385';
  }

  .fa-club::before {
    content: '\\f327';
  }

  .fa-cocktail::before {
    content: '\\f561';
  }

  .fa-code::before {
    content: '\\f121';
  }

  .fa-code-branch::before {
    content: '\\f126';
  }

  .fa-code-commit::before {
    content: '\\f386';
  }

  .fa-code-merge::before {
    content: '\\f387';
  }

  .fa-codepen::before {
    content: '\\f1cb';
  }

  .fa-codiepie::before {
    content: '\\f284';
  }

  .fa-coffee::before {
    content: '\\f0f4';
  }

  .fa-coffee-togo::before {
    content: '\\f6c5';
  }

  .fa-coffin::before {
    content: '\\f6c6';
  }

  .fa-cog::before {
    content: '\\f013';
  }

  .fa-cogs::before {
    content: '\\f085';
  }

  .fa-coin::before {
    content: '\\f85c';
  }

  .fa-coins::before {
    content: '\\f51e';
  }

  .fa-columns::before {
    content: '\\f0db';
  }

  .fa-comment::before {
    content: '\\f075';
  }

  .fa-comment-alt::before {
    content: '\\f27a';
  }

  .fa-comment-alt-check::before {
    content: '\\f4a2';
  }

  .fa-comment-alt-dollar::before {
    content: '\\f650';
  }

  .fa-comment-alt-dots::before {
    content: '\\f4a3';
  }

  .fa-comment-alt-edit::before {
    content: '\\f4a4';
  }

  .fa-comment-alt-exclamation::before {
    content: '\\f4a5';
  }

  .fa-comment-alt-lines::before {
    content: '\\f4a6';
  }

  .fa-comment-alt-medical::before {
    content: '\\f7f4';
  }

  .fa-comment-alt-minus::before {
    content: '\\f4a7';
  }

  .fa-comment-alt-plus::before {
    content: '\\f4a8';
  }

  .fa-comment-alt-slash::before {
    content: '\\f4a9';
  }

  .fa-comment-alt-smile::before {
    content: '\\f4aa';
  }

  .fa-comment-alt-times::before {
    content: '\\f4ab';
  }

  .fa-comment-check::before {
    content: '\\f4ac';
  }

  .fa-comment-dollar::before {
    content: '\\f651';
  }

  .fa-comment-dots::before {
    content: '\\f4ad';
  }

  .fa-comment-edit::before {
    content: '\\f4ae';
  }

  .fa-comment-exclamation::before {
    content: '\\f4af';
  }

  .fa-comment-lines::before {
    content: '\\f4b0';
  }

  .fa-comment-medical::before {
    content: '\\f7f5';
  }

  .fa-comment-minus::before {
    content: '\\f4b1';
  }

  .fa-comment-plus::before {
    content: '\\f4b2';
  }

  .fa-comment-slash::before {
    content: '\\f4b3';
  }

  .fa-comment-smile::before {
    content: '\\f4b4';
  }

  .fa-comment-times::before {
    content: '\\f4b5';
  }

  .fa-comments::before {
    content: '\\f086';
  }

  .fa-comments-alt::before {
    content: '\\f4b6';
  }

  .fa-comments-alt-dollar::before {
    content: '\\f652';
  }

  .fa-comments-dollar::before {
    content: '\\f653';
  }

  .fa-compact-disc::before {
    content: '\\f51f';
  }

  .fa-compass::before {
    content: '\\f14e';
  }

  .fa-compass-slash::before {
    content: '\\f5e9';
  }

  .fa-compress::before {
    content: '\\f066';
  }

  .fa-compress-alt::before {
    content: '\\f422';
  }

  .fa-compress-arrows-alt::before {
    content: '\\f78c';
  }

  .fa-compress-wide::before {
    content: '\\f326';
  }

  .fa-concierge-bell::before {
    content: '\\f562';
  }

  .fa-confluence::before {
    content: '\\f78d';
  }

  .fa-connectdevelop::before {
    content: '\\f20e';
  }

  .fa-construction::before {
    content: '\\f85d';
  }

  .fa-container-storage::before {
    content: '\\f4b7';
  }

  .fa-contao::before {
    content: '\\f26d';
  }

  .fa-conveyor-belt::before {
    content: '\\f46e';
  }

  .fa-conveyor-belt-alt::before {
    content: '\\f46f';
  }

  .fa-cookie::before {
    content: '\\f563';
  }

  .fa-cookie-bite::before {
    content: '\\f564';
  }

  .fa-copy::before {
    content: '\\f0c5';
  }

  .fa-copyright::before {
    content: '\\f1f9';
  }

  .fa-corn::before {
    content: '\\f6c7';
  }

  .fa-couch::before {
    content: '\\f4b8';
  }

  .fa-cow::before {
    content: '\\f6c8';
  }

  .fa-cpanel::before {
    content: '\\f388';
  }

  .fa-creative-commons::before {
    content: '\\f25e';
  }

  .fa-creative-commons-by::before {
    content: '\\f4e7';
  }

  .fa-creative-commons-nc::before {
    content: '\\f4e8';
  }

  .fa-creative-commons-nc-eu::before {
    content: '\\f4e9';
  }

  .fa-creative-commons-nc-jp::before {
    content: '\\f4ea';
  }

  .fa-creative-commons-nd::before {
    content: '\\f4eb';
  }

  .fa-creative-commons-pd::before {
    content: '\\f4ec';
  }

  .fa-creative-commons-pd-alt::before {
    content: '\\f4ed';
  }

  .fa-creative-commons-remix::before {
    content: '\\f4ee';
  }

  .fa-creative-commons-sa::before {
    content: '\\f4ef';
  }

  .fa-creative-commons-sampling::before {
    content: '\\f4f0';
  }

  .fa-creative-commons-sampling-plus::before {
    content: '\\f4f1';
  }

  .fa-creative-commons-share::before {
    content: '\\f4f2';
  }

  .fa-creative-commons-zero::before {
    content: '\\f4f3';
  }

  .fa-credit-card::before {
    content: '\\f09d';
  }

  .fa-credit-card-blank::before {
    content: '\\f389';
  }

  .fa-credit-card-front::before {
    content: '\\f38a';
  }

  .fa-cricket::before {
    content: '\\f449';
  }

  .fa-critical-role::before {
    content: '\\f6c9';
  }

  .fa-croissant::before {
    content: '\\f7f6';
  }

  .fa-crop::before {
    content: '\\f125';
  }

  .fa-crop-alt::before {
    content: '\\f565';
  }

  .fa-cross::before {
    content: '\\f654';
  }

  .fa-crosshairs::before {
    content: '\\f05b';
  }

  .fa-crow::before {
    content: '\\f520';
  }

  .fa-crown::before {
    content: '\\f521';
  }

  .fa-crutch::before {
    content: '\\f7f7';
  }

  .fa-crutches::before {
    content: '\\f7f8';
  }

  .fa-css3::before {
    content: '\\f13c';
  }

  .fa-css3-alt::before {
    content: '\\f38b';
  }

  .fa-cube::before {
    content: '\\f1b2';
  }

  .fa-cubes::before {
    content: '\\f1b3';
  }

  .fa-curling::before {
    content: '\\f44a';
  }

  .fa-cut::before {
    content: '\\f0c4';
  }

  .fa-cuttlefish::before {
    content: '\\f38c';
  }

  .fa-d-and-d::before {
    content: '\\f38d';
  }

  .fa-d-and-d-beyond::before {
    content: '\\f6ca';
  }

  .fa-dagger::before {
    content: '\\f6cb';
  }

  .fa-dashcube::before {
    content: '\\f210';
  }

  .fa-database::before {
    content: '\\f1c0';
  }

  .fa-deaf::before {
    content: '\\f2a4';
  }

  .fa-debug::before {
    content: '\\f7f9';
  }

  .fa-deer::before {
    content: '\\f78e';
  }

  .fa-deer-rudolph::before {
    content: '\\f78f';
  }

  .fa-delicious::before {
    content: '\\f1a5';
  }

  .fa-democrat::before {
    content: '\\f747';
  }

  .fa-deploydog::before {
    content: '\\f38e';
  }

  .fa-deskpro::before {
    content: '\\f38f';
  }

  .fa-desktop::before {
    content: '\\f108';
  }

  .fa-desktop-alt::before {
    content: '\\f390';
  }

  .fa-dev::before {
    content: '\\f6cc';
  }

  .fa-deviantart::before {
    content: '\\f1bd';
  }

  .fa-dewpoint::before {
    content: '\\f748';
  }

  .fa-dharmachakra::before {
    content: '\\f655';
  }

  .fa-dhl::before {
    content: '\\f790';
  }

  .fa-diagnoses::before {
    content: '\\f470';
  }

  .fa-diamond::before {
    content: '\\f219';
  }

  .fa-diaspora::before {
    content: '\\f791';
  }

  .fa-dice::before {
    content: '\\f522';
  }

  .fa-dice-d10::before {
    content: '\\f6cd';
  }

  .fa-dice-d12::before {
    content: '\\f6ce';
  }

  .fa-dice-d20::before {
    content: '\\f6cf';
  }

  .fa-dice-d4::before {
    content: '\\f6d0';
  }

  .fa-dice-d6::before {
    content: '\\f6d1';
  }

  .fa-dice-d8::before {
    content: '\\f6d2';
  }

  .fa-dice-five::before {
    content: '\\f523';
  }

  .fa-dice-four::before {
    content: '\\f524';
  }

  .fa-dice-one::before {
    content: '\\f525';
  }

  .fa-dice-six::before {
    content: '\\f526';
  }

  .fa-dice-three::before {
    content: '\\f527';
  }

  .fa-dice-two::before {
    content: '\\f528';
  }

  .fa-digg::before {
    content: '\\f1a6';
  }

  .fa-digging::before {
    content: '\\f85e';
  }

  .fa-digital-ocean::before {
    content: '\\f391';
  }

  .fa-digital-tachograph::before {
    content: '\\f566';
  }

  .fa-diploma::before {
    content: '\\f5ea';
  }

  .fa-directions::before {
    content: '\\f5eb';
  }

  .fa-discord::before {
    content: '\\f392';
  }

  .fa-discourse::before {
    content: '\\f393';
  }

  .fa-disease::before {
    content: '\\f7fa';
  }

  .fa-divide::before {
    content: '\\f529';
  }

  .fa-dizzy::before {
    content: '\\f567';
  }

  .fa-dna::before {
    content: '\\f471';
  }

  .fa-do-not-enter::before {
    content: '\\f5ec';
  }

  .fa-dochub::before {
    content: '\\f394';
  }

  .fa-docker::before {
    content: '\\f395';
  }

  .fa-dog::before {
    content: '\\f6d3';
  }

  .fa-dog-leashed::before {
    content: '\\f6d4';
  }

  .fa-dollar-sign::before {
    content: '\\f155';
  }

  .fa-dolly::before {
    content: '\\f472';
  }

  .fa-dolly-empty::before {
    content: '\\f473';
  }

  .fa-dolly-flatbed::before {
    content: '\\f474';
  }

  .fa-dolly-flatbed-alt::before {
    content: '\\f475';
  }

  .fa-dolly-flatbed-empty::before {
    content: '\\f476';
  }

  .fa-donate::before {
    content: '\\f4b9';
  }

  .fa-door-closed::before {
    content: '\\f52a';
  }

  .fa-door-open::before {
    content: '\\f52b';
  }

  .fa-dot-circle::before {
    content: '\\f192';
  }

  .fa-dove::before {
    content: '\\f4ba';
  }

  .fa-download::before {
    content: '\\f019';
  }

  .fa-draft2digital::before {
    content: '\\f396';
  }

  .fa-drafting-compass::before {
    content: '\\f568';
  }

  .fa-dragon::before {
    content: '\\f6d5';
  }

  .fa-draw-circle::before {
    content: '\\f5ed';
  }

  .fa-draw-polygon::before {
    content: '\\f5ee';
  }

  .fa-draw-square::before {
    content: '\\f5ef';
  }

  .fa-dreidel::before {
    content: '\\f792';
  }

  .fa-dribbble::before {
    content: '\\f17d';
  }

  .fa-dribbble-square::before {
    content: '\\f397';
  }

  .fa-drone::before {
    content: '\\f85f';
  }

  .fa-drone-alt::before {
    content: '\\f860';
  }

  .fa-dropbox::before {
    content: '\\f16b';
  }

  .fa-drum::before {
    content: '\\f569';
  }

  .fa-drum-steelpan::before {
    content: '\\f56a';
  }

  .fa-drumstick::before {
    content: '\\f6d6';
  }

  .fa-drumstick-bite::before {
    content: '\\f6d7';
  }

  .fa-drupal::before {
    content: '\\f1a9';
  }

  .fa-dryer::before {
    content: '\\f861';
  }

  .fa-dryer-alt::before {
    content: '\\f862';
  }

  .fa-duck::before {
    content: '\\f6d8';
  }

  .fa-dumbbell::before {
    content: '\\f44b';
  }

  .fa-dumpster::before {
    content: '\\f793';
  }

  .fa-dumpster-fire::before {
    content: '\\f794';
  }

  .fa-dungeon::before {
    content: '\\f6d9';
  }

  .fa-dyalog::before {
    content: '\\f399';
  }

  .fa-ear::before {
    content: '\\f5f0';
  }

  .fa-ear-muffs::before {
    content: '\\f795';
  }

  .fa-earlybirds::before {
    content: '\\f39a';
  }

  .fa-ebay::before {
    content: '\\f4f4';
  }

  .fa-eclipse::before {
    content: '\\f749';
  }

  .fa-eclipse-alt::before {
    content: '\\f74a';
  }

  .fa-edge::before {
    content: '\\f282';
  }

  .fa-edit::before {
    content: '\\f044';
  }

  .fa-egg::before {
    content: '\\f7fb';
  }

  .fa-egg-fried::before {
    content: '\\f7fc';
  }

  .fa-eject::before {
    content: '\\f052';
  }

  .fa-elementor::before {
    content: '\\f430';
  }

  .fa-elephant::before {
    content: '\\f6da';
  }

  .fa-ellipsis-h::before {
    content: '\\f141';
  }

  .fa-ellipsis-h-alt::before {
    content: '\\f39b';
  }

  .fa-ellipsis-v::before {
    content: '\\f142';
  }

  .fa-ellipsis-v-alt::before {
    content: '\\f39c';
  }

  .fa-ello::before {
    content: '\\f5f1';
  }

  .fa-ember::before {
    content: '\\f423';
  }

  .fa-empire::before {
    content: '\\f1d1';
  }

  .fa-empty-set::before {
    content: '\\f656';
  }

  .fa-engine-warning::before {
    content: '\\f5f2';
  }

  .fa-envelope::before {
    content: '\\f0e0';
  }

  .fa-envelope-open::before {
    content: '\\f2b6';
  }

  .fa-envelope-open-dollar::before {
    content: '\\f657';
  }

  .fa-envelope-open-text::before {
    content: '\\f658';
  }

  .fa-envelope-square::before {
    content: '\\f199';
  }

  .fa-envira::before {
    content: '\\f299';
  }

  .fa-equals::before {
    content: '\\f52c';
  }

  .fa-eraser::before {
    content: '\\f12d';
  }

  .fa-erlang::before {
    content: '\\f39d';
  }

  .fa-ethereum::before {
    content: '\\f42e';
  }

  .fa-ethernet::before {
    content: '\\f796';
  }

  .fa-etsy::before {
    content: '\\f2d7';
  }

  .fa-euro-sign::before {
    content: '\\f153';
  }

  .fa-evernote::before {
    content: '\\f839';
  }

  .fa-exchange::before {
    content: '\\f0ec';
  }

  .fa-exchange-alt::before {
    content: '\\f362';
  }

  .fa-exclamation::before {
    content: '\\f12a';
  }

  .fa-exclamation-circle::before {
    content: '\\f06a';
  }

  .fa-exclamation-square::before {
    content: '\\f321';
  }

  .fa-exclamation-triangle::before {
    content: '\\f071';
  }

  .fa-expand::before {
    content: '\\f065';
  }

  .fa-expand-alt::before {
    content: '\\f424';
  }

  .fa-expand-arrows::before {
    content: '\\f31d';
  }

  .fa-expand-arrows-alt::before {
    content: '\\f31e';
  }

  .fa-expand-wide::before {
    content: '\\f320';
  }

  .fa-expeditedssl::before {
    content: '\\f23e';
  }

  .fa-external-link::before {
    content: '\\f08e';
  }

  .fa-external-link-alt::before {
    content: '\\f35d';
  }

  .fa-external-link-square::before {
    content: '\\f14c';
  }

  .fa-external-link-square-alt::before {
    content: '\\f360';
  }

  .fa-eye::before {
    content: '\\f06e';
  }

  .fa-eye-dropper::before {
    content: '\\f1fb';
  }

  .fa-eye-evil::before {
    content: '\\f6db';
  }

  .fa-eye-slash::before {
    content: '\\f070';
  }

  .fa-facebook::before {
    content: '\\f09a';
  }

  .fa-facebook-f::before {
    content: '\\f39e';
  }

  .fa-facebook-messenger::before {
    content: '\\f39f';
  }

  .fa-facebook-square::before {
    content: '\\f082';
  }

  .fa-fan::before {
    content: '\\f863';
  }

  .fa-fantasy-flight-games::before {
    content: '\\f6dc';
  }

  .fa-farm::before {
    content: '\\f864';
  }

  .fa-fast-backward::before {
    content: '\\f049';
  }

  .fa-fast-forward::before {
    content: '\\f050';
  }

  .fa-fax::before {
    content: '\\f1ac';
  }

  .fa-feather::before {
    content: '\\f52d';
  }

  .fa-feather-alt::before {
    content: '\\f56b';
  }

  .fa-fedex::before {
    content: '\\f797';
  }

  .fa-fedora::before {
    content: '\\f798';
  }

  .fa-female::before {
    content: '\\f182';
  }

  .fa-field-hockey::before {
    content: '\\f44c';
  }

  .fa-fighter-jet::before {
    content: '\\f0fb';
  }

  .fa-figma::before {
    content: '\\f799';
  }

  .fa-file::before {
    content: '\\f15b';
  }

  .fa-file-alt::before {
    content: '\\f15c';
  }

  .fa-file-archive::before {
    content: '\\f1c6';
  }

  .fa-file-audio::before {
    content: '\\f1c7';
  }

  .fa-file-certificate::before {
    content: '\\f5f3';
  }

  .fa-file-chart-line::before {
    content: '\\f659';
  }

  .fa-file-chart-pie::before {
    content: '\\f65a';
  }

  .fa-file-check::before {
    content: '\\f316';
  }

  .fa-file-code::before {
    content: '\\f1c9';
  }

  .fa-file-contract::before {
    content: '\\f56c';
  }

  .fa-file-csv::before {
    content: '\\f6dd';
  }

  .fa-file-download::before {
    content: '\\f56d';
  }

  .fa-file-edit::before {
    content: '\\f31c';
  }

  .fa-file-excel::before {
    content: '\\f1c3';
  }

  .fa-file-exclamation::before {
    content: '\\f31a';
  }

  .fa-file-export::before {
    content: '\\f56e';
  }

  .fa-file-image::before {
    content: '\\f1c5';
  }

  .fa-file-import::before {
    content: '\\f56f';
  }

  .fa-file-invoice::before {
    content: '\\f570';
  }

  .fa-file-invoice-dollar::before {
    content: '\\f571';
  }

  .fa-file-medical::before {
    content: '\\f477';
  }

  .fa-file-medical-alt::before {
    content: '\\f478';
  }

  .fa-file-minus::before {
    content: '\\f318';
  }

  .fa-file-pdf::before {
    content: '\\f1c1';
  }

  .fa-file-plus::before {
    content: '\\f319';
  }

  .fa-file-powerpoint::before {
    content: '\\f1c4';
  }

  .fa-file-prescription::before {
    content: '\\f572';
  }

  .fa-file-search::before {
    content: '\\f865';
  }

  .fa-file-signature::before {
    content: '\\f573';
  }

  .fa-file-spreadsheet::before {
    content: '\\f65b';
  }

  .fa-file-times::before {
    content: '\\f317';
  }

  .fa-file-upload::before {
    content: '\\f574';
  }

  .fa-file-user::before {
    content: '\\f65c';
  }

  .fa-file-video::before {
    content: '\\f1c8';
  }

  .fa-file-word::before {
    content: '\\f1c2';
  }

  .fa-files-medical::before {
    content: '\\f7fd';
  }

  .fa-fill::before {
    content: '\\f575';
  }

  .fa-fill-drip::before {
    content: '\\f576';
  }

  .fa-film::before {
    content: '\\f008';
  }

  .fa-film-alt::before {
    content: '\\f3a0';
  }

  .fa-filter::before {
    content: '\\f0b0';
  }

  .fa-fingerprint::before {
    content: '\\f577';
  }

  .fa-fire::before {
    content: '\\f06d';
  }

  .fa-fire-alt::before {
    content: '\\f7e4';
  }

  .fa-fire-extinguisher::before {
    content: '\\f134';
  }

  .fa-fire-smoke::before {
    content: '\\f74b';
  }

  .fa-firefox::before {
    content: '\\f269';
  }

  .fa-fireplace::before {
    content: '\\f79a';
  }

  .fa-first-aid::before {
    content: '\\f479';
  }

  .fa-first-order::before {
    content: '\\f2b0';
  }

  .fa-first-order-alt::before {
    content: '\\f50a';
  }

  .fa-firstdraft::before {
    content: '\\f3a1';
  }

  .fa-fish::before {
    content: '\\f578';
  }

  .fa-fish-cooked::before {
    content: '\\f7fe';
  }

  .fa-fist-raised::before {
    content: '\\f6de';
  }

  .fa-flag::before {
    content: '\\f024';
  }

  .fa-flag-alt::before {
    content: '\\f74c';
  }

  .fa-flag-checkered::before {
    content: '\\f11e';
  }

  .fa-flag-usa::before {
    content: '\\f74d';
  }

  .fa-flame::before {
    content: '\\f6df';
  }

  .fa-flask::before {
    content: '\\f0c3';
  }

  .fa-flask-poison::before {
    content: '\\f6e0';
  }

  .fa-flask-potion::before {
    content: '\\f6e1';
  }

  .fa-flickr::before {
    content: '\\f16e';
  }

  .fa-flipboard::before {
    content: '\\f44d';
  }

  .fa-flower::before {
    content: '\\f7ff';
  }

  .fa-flower-daffodil::before {
    content: '\\f800';
  }

  .fa-flower-tulip::before {
    content: '\\f801';
  }

  .fa-flushed::before {
    content: '\\f579';
  }

  .fa-fly::before {
    content: '\\f417';
  }

  .fa-fog::before {
    content: '\\f74e';
  }

  .fa-folder::before {
    content: '\\f07b';
  }

  .fa-folder-minus::before {
    content: '\\f65d';
  }

  .fa-folder-open::before {
    content: '\\f07c';
  }

  .fa-folder-plus::before {
    content: '\\f65e';
  }

  .fa-folder-times::before {
    content: '\\f65f';
  }

  .fa-folder-tree::before {
    content: '\\f802';
  }

  .fa-folders::before {
    content: '\\f660';
  }

  .fa-font::before {
    content: '\\f031';
  }

  .fa-font-awesome::before {
    content: '\\f2b4';
  }

  .fa-font-awesome-alt::before {
    content: '\\f35c';
  }

  .fa-font-awesome-flag::before {
    content: '\\f425';
  }

  .fa-font-awesome-logo-full::before {
    content: '\\f4e6';
  }

  .fa-font-case::before {
    content: '\\f866';
  }

  .fa-fonticons::before {
    content: '\\f280';
  }

  .fa-fonticons-fi::before {
    content: '\\f3a2';
  }

  .fa-football-ball::before {
    content: '\\f44e';
  }

  .fa-football-helmet::before {
    content: '\\f44f';
  }

  .fa-forklift::before {
    content: '\\f47a';
  }

  .fa-fort-awesome::before {
    content: '\\f286';
  }

  .fa-fort-awesome-alt::before {
    content: '\\f3a3';
  }

  .fa-forumbee::before {
    content: '\\f211';
  }

  .fa-forward::before {
    content: '\\f04e';
  }

  .fa-foursquare::before {
    content: '\\f180';
  }

  .fa-fragile::before {
    content: '\\f4bb';
  }

  .fa-free-code-camp::before {
    content: '\\f2c5';
  }

  .fa-freebsd::before {
    content: '\\f3a4';
  }

  .fa-french-fries::before {
    content: '\\f803';
  }

  .fa-frog::before {
    content: '\\f52e';
  }

  .fa-frosty-head::before {
    content: '\\f79b';
  }

  .fa-frown::before {
    content: '\\f119';
  }

  .fa-frown-open::before {
    content: '\\f57a';
  }

  .fa-fulcrum::before {
    content: '\\f50b';
  }

  .fa-function::before {
    content: '\\f661';
  }

  .fa-funnel-dollar::before {
    content: '\\f662';
  }

  .fa-futbol::before {
    content: '\\f1e3';
  }

  .fa-galactic-republic::before {
    content: '\\f50c';
  }

  .fa-galactic-senate::before {
    content: '\\f50d';
  }

  .fa-game-board::before {
    content: '\\f867';
  }

  .fa-game-board-alt::before {
    content: '\\f868';
  }

  .fa-gamepad::before {
    content: '\\f11b';
  }

  .fa-gas-pump::before {
    content: '\\f52f';
  }

  .fa-gas-pump-slash::before {
    content: '\\f5f4';
  }

  .fa-gavel::before {
    content: '\\f0e3';
  }

  .fa-gem::before {
    content: '\\f3a5';
  }

  .fa-genderless::before {
    content: '\\f22d';
  }

  .fa-get-pocket::before {
    content: '\\f265';
  }

  .fa-gg::before {
    content: '\\f260';
  }

  .fa-gg-circle::before {
    content: '\\f261';
  }

  .fa-ghost::before {
    content: '\\f6e2';
  }

  .fa-gift::before {
    content: '\\f06b';
  }

  .fa-gift-card::before {
    content: '\\f663';
  }

  .fa-gifts::before {
    content: '\\f79c';
  }

  .fa-gingerbread-man::before {
    content: '\\f79d';
  }

  .fa-git::before {
    content: '\\f1d3';
  }

  .fa-git-alt::before {
    content: '\\f841';
  }

  .fa-git-square::before {
    content: '\\f1d2';
  }

  .fa-github::before {
    content: '\\f09b';
  }

  .fa-github-alt::before {
    content: '\\f113';
  }

  .fa-github-square::before {
    content: '\\f092';
  }

  .fa-gitkraken::before {
    content: '\\f3a6';
  }

  .fa-gitlab::before {
    content: '\\f296';
  }

  .fa-gitter::before {
    content: '\\f426';
  }

  .fa-glass::before {
    content: '\\f804';
  }

  .fa-glass-champagne::before {
    content: '\\f79e';
  }

  .fa-glass-cheers::before {
    content: '\\f79f';
  }

  .fa-glass-citrus::before {
    content: '\\f869';
  }

  .fa-glass-martini::before {
    content: '\\f000';
  }

  .fa-glass-martini-alt::before {
    content: '\\f57b';
  }

  .fa-glass-whiskey::before {
    content: '\\f7a0';
  }

  .fa-glass-whiskey-rocks::before {
    content: '\\f7a1';
  }

  .fa-glasses::before {
    content: '\\f530';
  }

  .fa-glasses-alt::before {
    content: '\\f5f5';
  }

  .fa-glide::before {
    content: '\\f2a5';
  }

  .fa-glide-g::before {
    content: '\\f2a6';
  }

  .fa-globe::before {
    content: '\\f0ac';
  }

  .fa-globe-africa::before {
    content: '\\f57c';
  }

  .fa-globe-americas::before {
    content: '\\f57d';
  }

  .fa-globe-asia::before {
    content: '\\f57e';
  }

  .fa-globe-europe::before {
    content: '\\f7a2';
  }

  .fa-globe-snow::before {
    content: '\\f7a3';
  }

  .fa-globe-stand::before {
    content: '\\f5f6';
  }

  .fa-gofore::before {
    content: '\\f3a7';
  }

  .fa-golf-ball::before {
    content: '\\f450';
  }

  .fa-golf-club::before {
    content: '\\f451';
  }

  .fa-goodreads::before {
    content: '\\f3a8';
  }

  .fa-goodreads-g::before {
    content: '\\f3a9';
  }

  .fa-google::before {
    content: '\\f1a0';
  }

  .fa-google-drive::before {
    content: '\\f3aa';
  }

  .fa-google-play::before {
    content: '\\f3ab';
  }

  .fa-google-plus::before {
    content: '\\f2b3';
  }

  .fa-google-plus-g::before {
    content: '\\f0d5';
  }

  .fa-google-plus-square::before {
    content: '\\f0d4';
  }

  .fa-google-wallet::before {
    content: '\\f1ee';
  }

  .fa-gopuram::before {
    content: '\\f664';
  }

  .fa-graduation-cap::before {
    content: '\\f19d';
  }

  .fa-gratipay::before {
    content: '\\f184';
  }

  .fa-grav::before {
    content: '\\f2d6';
  }

  .fa-greater-than::before {
    content: '\\f531';
  }

  .fa-greater-than-equal::before {
    content: '\\f532';
  }

  .fa-grimace::before {
    content: '\\f57f';
  }

  .fa-grin::before {
    content: '\\f580';
  }

  .fa-grin-alt::before {
    content: '\\f581';
  }

  .fa-grin-beam::before {
    content: '\\f582';
  }

  .fa-grin-beam-sweat::before {
    content: '\\f583';
  }

  .fa-grin-hearts::before {
    content: '\\f584';
  }

  .fa-grin-squint::before {
    content: '\\f585';
  }

  .fa-grin-squint-tears::before {
    content: '\\f586';
  }

  .fa-grin-stars::before {
    content: '\\f587';
  }

  .fa-grin-tears::before {
    content: '\\f588';
  }

  .fa-grin-tongue::before {
    content: '\\f589';
  }

  .fa-grin-tongue-squint::before {
    content: '\\f58a';
  }

  .fa-grin-tongue-wink::before {
    content: '\\f58b';
  }

  .fa-grin-wink::before {
    content: '\\f58c';
  }

  .fa-grip-horizontal::before {
    content: '\\f58d';
  }

  .fa-grip-lines::before {
    content: '\\f7a4';
  }

  .fa-grip-lines-vertical::before {
    content: '\\f7a5';
  }

  .fa-grip-vertical::before {
    content: '\\f58e';
  }

  .fa-gripfire::before {
    content: '\\f3ac';
  }

  .fa-grunt::before {
    content: '\\f3ad';
  }

  .fa-guitar::before {
    content: '\\f7a6';
  }

  .fa-gulp::before {
    content: '\\f3ae';
  }

  .fa-h-square::before {
    content: '\\f0fd';
  }

  .fa-h1::before {
    content: '\\f313';
  }

  .fa-h2::before {
    content: '\\f314';
  }

  .fa-h3::before {
    content: '\\f315';
  }

  .fa-h4::before {
    content: '\\f86a';
  }

  .fa-hacker-news::before {
    content: '\\f1d4';
  }

  .fa-hacker-news-square::before {
    content: '\\f3af';
  }

  .fa-hackerrank::before {
    content: '\\f5f7';
  }

  .fa-hamburger::before {
    content: '\\f805';
  }

  .fa-hammer::before {
    content: '\\f6e3';
  }

  .fa-hammer-war::before {
    content: '\\f6e4';
  }

  .fa-hamsa::before {
    content: '\\f665';
  }

  .fa-hand-heart::before {
    content: '\\f4bc';
  }

  .fa-hand-holding::before {
    content: '\\f4bd';
  }

  .fa-hand-holding-box::before {
    content: '\\f47b';
  }

  .fa-hand-holding-heart::before {
    content: '\\f4be';
  }

  .fa-hand-holding-magic::before {
    content: '\\f6e5';
  }

  .fa-hand-holding-seedling::before {
    content: '\\f4bf';
  }

  .fa-hand-holding-usd::before {
    content: '\\f4c0';
  }

  .fa-hand-holding-water::before {
    content: '\\f4c1';
  }

  .fa-hand-lizard::before {
    content: '\\f258';
  }

  .fa-hand-middle-finger::before {
    content: '\\f806';
  }

  .fa-hand-paper::before {
    content: '\\f256';
  }

  .fa-hand-peace::before {
    content: '\\f25b';
  }

  .fa-hand-point-down::before {
    content: '\\f0a7';
  }

  .fa-hand-point-left::before {
    content: '\\f0a5';
  }

  .fa-hand-point-right::before {
    content: '\\f0a4';
  }

  .fa-hand-point-up::before {
    content: '\\f0a6';
  }

  .fa-hand-pointer::before {
    content: '\\f25a';
  }

  .fa-hand-receiving::before {
    content: '\\f47c';
  }

  .fa-hand-rock::before {
    content: '\\f255';
  }

  .fa-hand-scissors::before {
    content: '\\f257';
  }

  .fa-hand-spock::before {
    content: '\\f259';
  }

  .fa-hands::before {
    content: '\\f4c2';
  }

  .fa-hands-heart::before {
    content: '\\f4c3';
  }

  .fa-hands-helping::before {
    content: '\\f4c4';
  }

  .fa-hands-usd::before {
    content: '\\f4c5';
  }

  .fa-handshake::before {
    content: '\\f2b5';
  }

  .fa-handshake-alt::before {
    content: '\\f4c6';
  }

  .fa-hanukiah::before {
    content: '\\f6e6';
  }

  .fa-hard-hat::before {
    content: '\\f807';
  }

  .fa-hashtag::before {
    content: '\\f292';
  }

  .fa-hat-chef::before {
    content: '\\f86b';
  }

  .fa-hat-santa::before {
    content: '\\f7a7';
  }

  .fa-hat-winter::before {
    content: '\\f7a8';
  }

  .fa-hat-witch::before {
    content: '\\f6e7';
  }

  .fa-hat-wizard::before {
    content: '\\f6e8';
  }

  .fa-haykal::before {
    content: '\\f666';
  }

  .fa-hdd::before {
    content: '\\f0a0';
  }

  .fa-head-side::before {
    content: '\\f6e9';
  }

  .fa-head-side-brain::before {
    content: '\\f808';
  }

  .fa-head-side-medical::before {
    content: '\\f809';
  }

  .fa-head-vr::before {
    content: '\\f6ea';
  }

  .fa-heading::before {
    content: '\\f1dc';
  }

  .fa-headphones::before {
    content: '\\f025';
  }

  .fa-headphones-alt::before {
    content: '\\f58f';
  }

  .fa-headset::before {
    content: '\\f590';
  }

  .fa-heart::before {
    content: '\\f004';
  }

  .fa-heart-broken::before {
    content: '\\f7a9';
  }

  .fa-heart-circle::before {
    content: '\\f4c7';
  }

  .fa-heart-rate::before {
    content: '\\f5f8';
  }

  .fa-heart-square::before {
    content: '\\f4c8';
  }

  .fa-heartbeat::before {
    content: '\\f21e';
  }

  .fa-helicopter::before {
    content: '\\f533';
  }

  .fa-helmet-battle::before {
    content: '\\f6eb';
  }

  .fa-hexagon::before {
    content: '\\f312';
  }

  .fa-highlighter::before {
    content: '\\f591';
  }

  .fa-hiking::before {
    content: '\\f6ec';
  }

  .fa-hippo::before {
    content: '\\f6ed';
  }

  .fa-hips::before {
    content: '\\f452';
  }

  .fa-hire-a-helper::before {
    content: '\\f3b0';
  }

  .fa-history::before {
    content: '\\f1da';
  }

  .fa-hockey-mask::before {
    content: '\\f6ee';
  }

  .fa-hockey-puck::before {
    content: '\\f453';
  }

  .fa-hockey-sticks::before {
    content: '\\f454';
  }

  .fa-holly-berry::before {
    content: '\\f7aa';
  }

  .fa-home::before {
    content: '\\f015';
  }

  .fa-home-alt::before {
    content: '\\f80a';
  }

  .fa-home-heart::before {
    content: '\\f4c9';
  }

  .fa-home-lg::before {
    content: '\\f80b';
  }

  .fa-home-lg-alt::before {
    content: '\\f80c';
  }

  .fa-hood-cloak::before {
    content: '\\f6ef';
  }

  .fa-hooli::before {
    content: '\\f427';
  }

  .fa-horizontal-rule::before {
    content: '\\f86c';
  }

  .fa-hornbill::before {
    content: '\\f592';
  }

  .fa-horse::before {
    content: '\\f6f0';
  }

  .fa-horse-head::before {
    content: '\\f7ab';
  }

  .fa-hospital::before {
    content: '\\f0f8';
  }

  .fa-hospital-alt::before {
    content: '\\f47d';
  }

  .fa-hospital-symbol::before {
    content: '\\f47e';
  }

  .fa-hospital-user::before {
    content: '\\f80d';
  }

  .fa-hospitals::before {
    content: '\\f80e';
  }

  .fa-hot-tub::before {
    content: '\\f593';
  }

  .fa-hotdog::before {
    content: '\\f80f';
  }

  .fa-hotel::before {
    content: '\\f594';
  }

  .fa-hotjar::before {
    content: '\\f3b1';
  }

  .fa-hourglass::before {
    content: '\\f254';
  }

  .fa-hourglass-end::before {
    content: '\\f253';
  }

  .fa-hourglass-half::before {
    content: '\\f252';
  }

  .fa-hourglass-start::before {
    content: '\\f251';
  }

  .fa-house-damage::before {
    content: '\\f6f1';
  }

  .fa-house-flood::before {
    content: '\\f74f';
  }

  .fa-houzz::before {
    content: '\\f27c';
  }

  .fa-hryvnia::before {
    content: '\\f6f2';
  }

  .fa-html5::before {
    content: '\\f13b';
  }

  .fa-hubspot::before {
    content: '\\f3b2';
  }

  .fa-humidity::before {
    content: '\\f750';
  }

  .fa-hurricane::before {
    content: '\\f751';
  }

  .fa-i-cursor::before {
    content: '\\f246';
  }

  .fa-ice-cream::before {
    content: '\\f810';
  }

  .fa-ice-skate::before {
    content: '\\f7ac';
  }

  .fa-icicles::before {
    content: '\\f7ad';
  }

  .fa-icons::before {
    content: '\\f86d';
  }

  .fa-icons-alt::before {
    content: '\\f86e';
  }

  .fa-id-badge::before {
    content: '\\f2c1';
  }

  .fa-id-card::before {
    content: '\\f2c2';
  }

  .fa-id-card-alt::before {
    content: '\\f47f';
  }

  .fa-igloo::before {
    content: '\\f7ae';
  }

  .fa-image::before {
    content: '\\f03e';
  }

  .fa-images::before {
    content: '\\f302';
  }

  .fa-imdb::before {
    content: '\\f2d8';
  }

  .fa-inbox::before {
    content: '\\f01c';
  }

  .fa-inbox-in::before {
    content: '\\f310';
  }

  .fa-inbox-out::before {
    content: '\\f311';
  }

  .fa-indent::before {
    content: '\\f03c';
  }

  .fa-industry::before {
    content: '\\f275';
  }

  .fa-industry-alt::before {
    content: '\\f3b3';
  }

  .fa-infinity::before {
    content: '\\f534';
  }

  .fa-info::before {
    content: '\\f129';
  }

  .fa-info-circle::before {
    content: '\\f05a';
  }

  .fa-info-square::before {
    content: '\\f30f';
  }

  .fa-inhaler::before {
    content: '\\f5f9';
  }

  .fa-instagram::before {
    content: '\\f16d';
  }

  .fa-integral::before {
    content: '\\f667';
  }

  .fa-intercom::before {
    content: '\\f7af';
  }

  .fa-internet-explorer::before {
    content: '\\f26b';
  }

  .fa-intersection::before {
    content: '\\f668';
  }

  .fa-inventory::before {
    content: '\\f480';
  }

  .fa-invision::before {
    content: '\\f7b0';
  }

  .fa-ioxhost::before {
    content: '\\f208';
  }

  .fa-island-tropical::before {
    content: '\\f811';
  }

  .fa-italic::before {
    content: '\\f033';
  }

  .fa-itch-io::before {
    content: '\\f83a';
  }

  .fa-itunes::before {
    content: '\\f3b4';
  }

  .fa-itunes-note::before {
    content: '\\f3b5';
  }

  .fa-jack-o-lantern::before {
    content: '\\f30e';
  }

  .fa-java::before {
    content: '\\f4e4';
  }

  .fa-jedi::before {
    content: '\\f669';
  }

  .fa-jedi-order::before {
    content: '\\f50e';
  }

  .fa-jenkins::before {
    content: '\\f3b6';
  }

  .fa-jira::before {
    content: '\\f7b1';
  }

  .fa-joget::before {
    content: '\\f3b7';
  }

  .fa-joint::before {
    content: '\\f595';
  }

  .fa-joomla::before {
    content: '\\f1aa';
  }

  .fa-journal-whills::before {
    content: '\\f66a';
  }

  .fa-js::before {
    content: '\\f3b8';
  }

  .fa-js-square::before {
    content: '\\f3b9';
  }

  .fa-jsfiddle::before {
    content: '\\f1cc';
  }

  .fa-kaaba::before {
    content: '\\f66b';
  }

  .fa-kaggle::before {
    content: '\\f5fa';
  }

  .fa-kerning::before {
    content: '\\f86f';
  }

  .fa-key::before {
    content: '\\f084';
  }

  .fa-key-skeleton::before {
    content: '\\f6f3';
  }

  .fa-keybase::before {
    content: '\\f4f5';
  }

  .fa-keyboard::before {
    content: '\\f11c';
  }

  .fa-keycdn::before {
    content: '\\f3ba';
  }

  .fa-keynote::before {
    content: '\\f66c';
  }

  .fa-khanda::before {
    content: '\\f66d';
  }

  .fa-kickstarter::before {
    content: '\\f3bb';
  }

  .fa-kickstarter-k::before {
    content: '\\f3bc';
  }

  .fa-kidneys::before {
    content: '\\f5fb';
  }

  .fa-kiss::before {
    content: '\\f596';
  }

  .fa-kiss-beam::before {
    content: '\\f597';
  }

  .fa-kiss-wink-heart::before {
    content: '\\f598';
  }

  .fa-kite::before {
    content: '\\f6f4';
  }

  .fa-kiwi-bird::before {
    content: '\\f535';
  }

  .fa-knife-kitchen::before {
    content: '\\f6f5';
  }

  .fa-korvue::before {
    content: '\\f42f';
  }

  .fa-lambda::before {
    content: '\\f66e';
  }

  .fa-lamp::before {
    content: '\\f4ca';
  }

  .fa-landmark::before {
    content: '\\f66f';
  }

  .fa-landmark-alt::before {
    content: '\\f752';
  }

  .fa-language::before {
    content: '\\f1ab';
  }

  .fa-laptop::before {
    content: '\\f109';
  }

  .fa-laptop-code::before {
    content: '\\f5fc';
  }

  .fa-laptop-medical::before {
    content: '\\f812';
  }

  .fa-laravel::before {
    content: '\\f3bd';
  }

  .fa-lastfm::before {
    content: '\\f202';
  }

  .fa-lastfm-square::before {
    content: '\\f203';
  }

  .fa-laugh::before {
    content: '\\f599';
  }

  .fa-laugh-beam::before {
    content: '\\f59a';
  }

  .fa-laugh-squint::before {
    content: '\\f59b';
  }

  .fa-laugh-wink::before {
    content: '\\f59c';
  }

  .fa-layer-group::before {
    content: '\\f5fd';
  }

  .fa-layer-minus::before {
    content: '\\f5fe';
  }

  .fa-layer-plus::before {
    content: '\\f5ff';
  }

  .fa-leaf::before {
    content: '\\f06c';
  }

  .fa-leaf-heart::before {
    content: '\\f4cb';
  }

  .fa-leaf-maple::before {
    content: '\\f6f6';
  }

  .fa-leaf-oak::before {
    content: '\\f6f7';
  }

  .fa-leanpub::before {
    content: '\\f212';
  }

  .fa-lemon::before {
    content: '\\f094';
  }

  .fa-less::before {
    content: '\\f41d';
  }

  .fa-less-than::before {
    content: '\\f536';
  }

  .fa-less-than-equal::before {
    content: '\\f537';
  }

  .fa-level-down::before {
    content: '\\f149';
  }

  .fa-level-down-alt::before {
    content: '\\f3be';
  }

  .fa-level-up::before {
    content: '\\f148';
  }

  .fa-level-up-alt::before {
    content: '\\f3bf';
  }

  .fa-life-ring::before {
    content: '\\f1cd';
  }

  .fa-lightbulb::before {
    content: '\\f0eb';
  }

  .fa-lightbulb-dollar::before {
    content: '\\f670';
  }

  .fa-lightbulb-exclamation::before {
    content: '\\f671';
  }

  .fa-lightbulb-on::before {
    content: '\\f672';
  }

  .fa-lightbulb-slash::before {
    content: '\\f673';
  }

  .fa-lights-holiday::before {
    content: '\\f7b2';
  }

  .fa-line::before {
    content: '\\f3c0';
  }

  .fa-line-columns::before {
    content: '\\f870';
  }

  .fa-line-height::before {
    content: '\\f871';
  }

  .fa-link::before {
    content: '\\f0c1';
  }

  .fa-linkedin::before {
    content: '\\f08c';
  }

  .fa-linkedin-in::before {
    content: '\\f0e1';
  }

  .fa-linode::before {
    content: '\\f2b8';
  }

  .fa-linux::before {
    content: '\\f17c';
  }

  .fa-lips::before {
    content: '\\f600';
  }

  .fa-lira-sign::before {
    content: '\\f195';
  }

  .fa-list::before {
    content: '\\f03a';
  }

  .fa-list-alt::before {
    content: '\\f022';
  }

  .fa-list-ol::before {
    content: '\\f0cb';
  }

  .fa-list-ul::before {
    content: '\\f0ca';
  }

  .fa-location::before {
    content: '\\f601';
  }

  .fa-location-arrow::before {
    content: '\\f124';
  }

  .fa-location-circle::before {
    content: '\\f602';
  }

  .fa-location-slash::before {
    content: '\\f603';
  }

  .fa-lock::before {
    content: '\\f023';
  }

  .fa-lock-alt::before {
    content: '\\f30d';
  }

  .fa-lock-open::before {
    content: '\\f3c1';
  }

  .fa-lock-open-alt::before {
    content: '\\f3c2';
  }

  .fa-long-arrow-alt-down::before {
    content: '\\f309';
  }

  .fa-long-arrow-alt-left::before {
    content: '\\f30a';
  }

  .fa-long-arrow-alt-right::before {
    content: '\\f30b';
  }

  .fa-long-arrow-alt-up::before {
    content: '\\f30c';
  }

  .fa-long-arrow-down::before {
    content: '\\f175';
  }

  .fa-long-arrow-left::before {
    content: '\\f177';
  }

  .fa-long-arrow-right::before {
    content: '\\f178';
  }

  .fa-long-arrow-up::before {
    content: '\\f176';
  }

  .fa-loveseat::before {
    content: '\\f4cc';
  }

  .fa-low-vision::before {
    content: '\\f2a8';
  }

  .fa-luchador::before {
    content: '\\f455';
  }

  .fa-luggage-cart::before {
    content: '\\f59d';
  }

  .fa-lungs::before {
    content: '\\f604';
  }

  .fa-lyft::before {
    content: '\\f3c3';
  }

  .fa-mace::before {
    content: '\\f6f8';
  }

  .fa-magento::before {
    content: '\\f3c4';
  }

  .fa-magic::before {
    content: '\\f0d0';
  }

  .fa-magnet::before {
    content: '\\f076';
  }

  .fa-mail-bulk::before {
    content: '\\f674';
  }

  .fa-mailbox::before {
    content: '\\f813';
  }

  .fa-mailchimp::before {
    content: '\\f59e';
  }

  .fa-male::before {
    content: '\\f183';
  }

  .fa-mandalorian::before {
    content: '\\f50f';
  }

  .fa-mandolin::before {
    content: '\\f6f9';
  }

  .fa-map::before {
    content: '\\f279';
  }

  .fa-map-marked::before {
    content: '\\f59f';
  }

  .fa-map-marked-alt::before {
    content: '\\f5a0';
  }

  .fa-map-marker::before {
    content: '\\f041';
  }

  .fa-map-marker-alt::before {
    content: '\\f3c5';
  }

  .fa-map-marker-alt-slash::before {
    content: '\\f605';
  }

  .fa-map-marker-check::before {
    content: '\\f606';
  }

  .fa-map-marker-edit::before {
    content: '\\f607';
  }

  .fa-map-marker-exclamation::before {
    content: '\\f608';
  }

  .fa-map-marker-minus::before {
    content: '\\f609';
  }

  .fa-map-marker-plus::before {
    content: '\\f60a';
  }

  .fa-map-marker-question::before {
    content: '\\f60b';
  }

  .fa-map-marker-slash::before {
    content: '\\f60c';
  }

  .fa-map-marker-smile::before {
    content: '\\f60d';
  }

  .fa-map-marker-times::before {
    content: '\\f60e';
  }

  .fa-map-pin::before {
    content: '\\f276';
  }

  .fa-map-signs::before {
    content: '\\f277';
  }

  .fa-markdown::before {
    content: '\\f60f';
  }

  .fa-marker::before {
    content: '\\f5a1';
  }

  .fa-mars::before {
    content: '\\f222';
  }

  .fa-mars-double::before {
    content: '\\f227';
  }

  .fa-mars-stroke::before {
    content: '\\f229';
  }

  .fa-mars-stroke-h::before {
    content: '\\f22b';
  }

  .fa-mars-stroke-v::before {
    content: '\\f22a';
  }

  .fa-mask::before {
    content: '\\f6fa';
  }

  .fa-mastodon::before {
    content: '\\f4f6';
  }

  .fa-maxcdn::before {
    content: '\\f136';
  }

  .fa-meat::before {
    content: '\\f814';
  }

  .fa-medal::before {
    content: '\\f5a2';
  }

  .fa-medapps::before {
    content: '\\f3c6';
  }

  .fa-medium::before {
    content: '\\f23a';
  }

  .fa-medium-m::before {
    content: '\\f3c7';
  }

  .fa-medkit::before {
    content: '\\f0fa';
  }

  .fa-medrt::before {
    content: '\\f3c8';
  }

  .fa-meetup::before {
    content: '\\f2e0';
  }

  .fa-megaphone::before {
    content: '\\f675';
  }

  .fa-megaport::before {
    content: '\\f5a3';
  }

  .fa-meh::before {
    content: '\\f11a';
  }

  .fa-meh-blank::before {
    content: '\\f5a4';
  }

  .fa-meh-rolling-eyes::before {
    content: '\\f5a5';
  }

  .fa-memory::before {
    content: '\\f538';
  }

  .fa-mendeley::before {
    content: '\\f7b3';
  }

  .fa-menorah::before {
    content: '\\f676';
  }

  .fa-mercury::before {
    content: '\\f223';
  }

  .fa-meteor::before {
    content: '\\f753';
  }

  .fa-microchip::before {
    content: '\\f2db';
  }

  .fa-microphone::before {
    content: '\\f130';
  }

  .fa-microphone-alt::before {
    content: '\\f3c9';
  }

  .fa-microphone-alt-slash::before {
    content: '\\f539';
  }

  .fa-microphone-slash::before {
    content: '\\f131';
  }

  .fa-microscope::before {
    content: '\\f610';
  }

  .fa-microsoft::before {
    content: '\\f3ca';
  }

  .fa-mind-share::before {
    content: '\\f677';
  }

  .fa-minus::before {
    content: '\\f068';
  }

  .fa-minus-circle::before {
    content: '\\f056';
  }

  .fa-minus-hexagon::before {
    content: '\\f307';
  }

  .fa-minus-octagon::before {
    content: '\\f308';
  }

  .fa-minus-square::before {
    content: '\\f146';
  }

  .fa-mistletoe::before {
    content: '\\f7b4';
  }

  .fa-mitten::before {
    content: '\\f7b5';
  }

  .fa-mix::before {
    content: '\\f3cb';
  }

  .fa-mixcloud::before {
    content: '\\f289';
  }

  .fa-mizuni::before {
    content: '\\f3cc';
  }

  .fa-mobile::before {
    content: '\\f10b';
  }

  .fa-mobile-alt::before {
    content: '\\f3cd';
  }

  .fa-mobile-android::before {
    content: '\\f3ce';
  }

  .fa-mobile-android-alt::before {
    content: '\\f3cf';
  }

  .fa-modx::before {
    content: '\\f285';
  }

  .fa-monero::before {
    content: '\\f3d0';
  }

  .fa-money-bill::before {
    content: '\\f0d6';
  }

  .fa-money-bill-alt::before {
    content: '\\f3d1';
  }

  .fa-money-bill-wave::before {
    content: '\\f53a';
  }

  .fa-money-bill-wave-alt::before {
    content: '\\f53b';
  }

  .fa-money-check::before {
    content: '\\f53c';
  }

  .fa-money-check-alt::before {
    content: '\\f53d';
  }

  .fa-money-check-edit::before {
    content: '\\f872';
  }

  .fa-money-check-edit-alt::before {
    content: '\\f873';
  }

  .fa-monitor-heart-rate::before {
    content: '\\f611';
  }

  .fa-monkey::before {
    content: '\\f6fb';
  }

  .fa-monument::before {
    content: '\\f5a6';
  }

  .fa-moon::before {
    content: '\\f186';
  }

  .fa-moon-cloud::before {
    content: '\\f754';
  }

  .fa-moon-stars::before {
    content: '\\f755';
  }

  .fa-mortar-pestle::before {
    content: '\\f5a7';
  }

  .fa-mosque::before {
    content: '\\f678';
  }

  .fa-motorcycle::before {
    content: '\\f21c';
  }

  .fa-mountain::before {
    content: '\\f6fc';
  }

  .fa-mountains::before {
    content: '\\f6fd';
  }

  .fa-mouse-pointer::before {
    content: '\\f245';
  }

  .fa-mug::before {
    content: '\\f874';
  }

  .fa-mug-hot::before {
    content: '\\f7b6';
  }

  .fa-mug-marshmallows::before {
    content: '\\f7b7';
  }

  .fa-mug-tea::before {
    content: '\\f875';
  }

  .fa-music::before {
    content: '\\f001';
  }

  .fa-napster::before {
    content: '\\f3d2';
  }

  .fa-narwhal::before {
    content: '\\f6fe';
  }

  .fa-neos::before {
    content: '\\f612';
  }

  .fa-network-wired::before {
    content: '\\f6ff';
  }

  .fa-neuter::before {
    content: '\\f22c';
  }

  .fa-newspaper::before {
    content: '\\f1ea';
  }

  .fa-nimblr::before {
    content: '\\f5a8';
  }

  .fa-node::before {
    content: '\\f419';
  }

  .fa-node-js::before {
    content: '\\f3d3';
  }

  .fa-not-equal::before {
    content: '\\f53e';
  }

  .fa-notes-medical::before {
    content: '\\f481';
  }

  .fa-npm::before {
    content: '\\f3d4';
  }

  .fa-ns8::before {
    content: '\\f3d5';
  }

  .fa-nutritionix::before {
    content: '\\f3d6';
  }

  .fa-object-group::before {
    content: '\\f247';
  }

  .fa-object-ungroup::before {
    content: '\\f248';
  }

  .fa-octagon::before {
    content: '\\f306';
  }

  .fa-odnoklassniki::before {
    content: '\\f263';
  }

  .fa-odnoklassniki-square::before {
    content: '\\f264';
  }

  .fa-oil-can::before {
    content: '\\f613';
  }

  .fa-oil-temp::before {
    content: '\\f614';
  }

  .fa-old-republic::before {
    content: '\\f510';
  }

  .fa-om::before {
    content: '\\f679';
  }

  .fa-omega::before {
    content: '\\f67a';
  }

  .fa-opencart::before {
    content: '\\f23d';
  }

  .fa-openid::before {
    content: '\\f19b';
  }

  .fa-opera::before {
    content: '\\f26a';
  }

  .fa-optin-monster::before {
    content: '\\f23c';
  }

  .fa-ornament::before {
    content: '\\f7b8';
  }

  .fa-osi::before {
    content: '\\f41a';
  }

  .fa-otter::before {
    content: '\\f700';
  }

  .fa-outdent::before {
    content: '\\f03b';
  }

  .fa-overline::before {
    content: '\\f876';
  }

  .fa-page-break::before {
    content: '\\f877';
  }

  .fa-page4::before {
    content: '\\f3d7';
  }

  .fa-pagelines::before {
    content: '\\f18c';
  }

  .fa-pager::before {
    content: '\\f815';
  }

  .fa-paint-brush::before {
    content: '\\f1fc';
  }

  .fa-paint-brush-alt::before {
    content: '\\f5a9';
  }

  .fa-paint-roller::before {
    content: '\\f5aa';
  }

  .fa-palette::before {
    content: '\\f53f';
  }

  .fa-palfed::before {
    content: '\\f3d8';
  }

  .fa-pallet::before {
    content: '\\f482';
  }

  .fa-pallet-alt::before {
    content: '\\f483';
  }

  .fa-paper-plane::before {
    content: '\\f1d8';
  }

  .fa-paperclip::before {
    content: '\\f0c6';
  }

  .fa-parachute-box::before {
    content: '\\f4cd';
  }

  .fa-paragraph::before {
    content: '\\f1dd';
  }

  .fa-paragraph-rtl::before {
    content: '\\f878';
  }

  .fa-parking::before {
    content: '\\f540';
  }

  .fa-parking-circle::before {
    content: '\\f615';
  }

  .fa-parking-circle-slash::before {
    content: '\\f616';
  }

  .fa-parking-slash::before {
    content: '\\f617';
  }

  .fa-passport::before {
    content: '\\f5ab';
  }

  .fa-pastafarianism::before {
    content: '\\f67b';
  }

  .fa-paste::before {
    content: '\\f0ea';
  }

  .fa-patreon::before {
    content: '\\f3d9';
  }

  .fa-pause::before {
    content: '\\f04c';
  }

  .fa-pause-circle::before {
    content: '\\f28b';
  }

  .fa-paw::before {
    content: '\\f1b0';
  }

  .fa-paw-alt::before {
    content: '\\f701';
  }

  .fa-paw-claws::before {
    content: '\\f702';
  }

  .fa-paypal::before {
    content: '\\f1ed';
  }

  .fa-peace::before {
    content: '\\f67c';
  }

  .fa-pegasus::before {
    content: '\\f703';
  }

  .fa-pen::before {
    content: '\\f304';
  }

  .fa-pen-alt::before {
    content: '\\f305';
  }

  .fa-pen-fancy::before {
    content: '\\f5ac';
  }

  .fa-pen-nib::before {
    content: '\\f5ad';
  }

  .fa-pen-square::before {
    content: '\\f14b';
  }

  .fa-pencil::before {
    content: '\\f040';
  }

  .fa-pencil-alt::before {
    content: '\\f303';
  }

  .fa-pencil-paintbrush::before {
    content: '\\f618';
  }

  .fa-pencil-ruler::before {
    content: '\\f5ae';
  }

  .fa-pennant::before {
    content: '\\f456';
  }

  .fa-penny-arcade::before {
    content: '\\f704';
  }

  .fa-people-carry::before {
    content: '\\f4ce';
  }

  .fa-pepper-hot::before {
    content: '\\f816';
  }

  .fa-percent::before {
    content: '\\f295';
  }

  .fa-percentage::before {
    content: '\\f541';
  }

  .fa-periscope::before {
    content: '\\f3da';
  }

  .fa-person-booth::before {
    content: '\\f756';
  }

  .fa-person-carry::before {
    content: '\\f4cf';
  }

  .fa-person-dolly::before {
    content: '\\f4d0';
  }

  .fa-person-dolly-empty::before {
    content: '\\f4d1';
  }

  .fa-person-sign::before {
    content: '\\f757';
  }

  .fa-phabricator::before {
    content: '\\f3db';
  }

  .fa-phoenix-framework::before {
    content: '\\f3dc';
  }

  .fa-phoenix-squadron::before {
    content: '\\f511';
  }

  .fa-phone::before {
    content: '\\f095';
  }

  .fa-phone-alt::before {
    content: '\\f879';
  }

  .fa-phone-laptop::before {
    content: '\\f87a';
  }

  .fa-phone-office::before {
    content: '\\f67d';
  }

  .fa-phone-plus::before {
    content: '\\f4d2';
  }

  .fa-phone-slash::before {
    content: '\\f3dd';
  }

  .fa-phone-square::before {
    content: '\\f098';
  }

  .fa-phone-square-alt::before {
    content: '\\f87b';
  }

  .fa-phone-volume::before {
    content: '\\f2a0';
  }

  .fa-photo-video::before {
    content: '\\f87c';
  }

  .fa-php::before {
    content: '\\f457';
  }

  .fa-pi::before {
    content: '\\f67e';
  }

  .fa-pie::before {
    content: '\\f705';
  }

  .fa-pied-piper::before {
    content: '\\f2ae';
  }

  .fa-pied-piper-alt::before {
    content: '\\f1a8';
  }

  .fa-pied-piper-hat::before {
    content: '\\f4e5';
  }

  .fa-pied-piper-pp::before {
    content: '\\f1a7';
  }

  .fa-pig::before {
    content: '\\f706';
  }

  .fa-piggy-bank::before {
    content: '\\f4d3';
  }

  .fa-pills::before {
    content: '\\f484';
  }

  .fa-pinterest::before {
    content: '\\f0d2';
  }

  .fa-pinterest-p::before {
    content: '\\f231';
  }

  .fa-pinterest-square::before {
    content: '\\f0d3';
  }

  .fa-pizza::before {
    content: '\\f817';
  }

  .fa-pizza-slice::before {
    content: '\\f818';
  }

  .fa-place-of-worship::before {
    content: '\\f67f';
  }

  .fa-plane::before {
    content: '\\f072';
  }

  .fa-plane-alt::before {
    content: '\\f3de';
  }

  .fa-plane-arrival::before {
    content: '\\f5af';
  }

  .fa-plane-departure::before {
    content: '\\f5b0';
  }

  .fa-play::before {
    content: '\\f04b';
  }

  .fa-play-circle::before {
    content: '\\f144';
  }

  .fa-playstation::before {
    content: '\\f3df';
  }

  .fa-plug::before {
    content: '\\f1e6';
  }

  .fa-plus::before {
    content: '\\f067';
  }

  .fa-plus-circle::before {
    content: '\\f055';
  }

  .fa-plus-hexagon::before {
    content: '\\f300';
  }

  .fa-plus-octagon::before {
    content: '\\f301';
  }

  .fa-plus-square::before {
    content: '\\f0fe';
  }

  .fa-podcast::before {
    content: '\\f2ce';
  }

  .fa-podium::before {
    content: '\\f680';
  }

  .fa-podium-star::before {
    content: '\\f758';
  }

  .fa-poll::before {
    content: '\\f681';
  }

  .fa-poll-h::before {
    content: '\\f682';
  }

  .fa-poll-people::before {
    content: '\\f759';
  }

  .fa-poo::before {
    content: '\\f2fe';
  }

  .fa-poo-storm::before {
    content: '\\f75a';
  }

  .fa-poop::before {
    content: '\\f619';
  }

  .fa-popcorn::before {
    content: '\\f819';
  }

  .fa-portrait::before {
    content: '\\f3e0';
  }

  .fa-pound-sign::before {
    content: '\\f154';
  }

  .fa-power-off::before {
    content: '\\f011';
  }

  .fa-pray::before {
    content: '\\f683';
  }

  .fa-praying-hands::before {
    content: '\\f684';
  }

  .fa-prescription::before {
    content: '\\f5b1';
  }

  .fa-prescription-bottle::before {
    content: '\\f485';
  }

  .fa-prescription-bottle-alt::before {
    content: '\\f486';
  }

  .fa-presentation::before {
    content: '\\f685';
  }

  .fa-print::before {
    content: '\\f02f';
  }

  .fa-print-search::before {
    content: '\\f81a';
  }

  .fa-print-slash::before {
    content: '\\f686';
  }

  .fa-procedures::before {
    content: '\\f487';
  }

  .fa-product-hunt::before {
    content: '\\f288';
  }

  .fa-project-diagram::before {
    content: '\\f542';
  }

  .fa-pumpkin::before {
    content: '\\f707';
  }

  .fa-pushed::before {
    content: '\\f3e1';
  }

  .fa-puzzle-piece::before {
    content: '\\f12e';
  }

  .fa-python::before {
    content: '\\f3e2';
  }

  .fa-qq::before {
    content: '\\f1d6';
  }

  .fa-qrcode::before {
    content: '\\f029';
  }

  .fa-question::before {
    content: '\\f128';
  }

  .fa-question-circle::before {
    content: '\\f059';
  }

  .fa-question-square::before {
    content: '\\f2fd';
  }

  .fa-quidditch::before {
    content: '\\f458';
  }

  .fa-quinscape::before {
    content: '\\f459';
  }

  .fa-quora::before {
    content: '\\f2c4';
  }

  .fa-quote-left::before {
    content: '\\f10d';
  }

  .fa-quote-right::before {
    content: '\\f10e';
  }

  .fa-quran::before {
    content: '\\f687';
  }

  .fa-r-project::before {
    content: '\\f4f7';
  }

  .fa-rabbit::before {
    content: '\\f708';
  }

  .fa-rabbit-fast::before {
    content: '\\f709';
  }

  .fa-racquet::before {
    content: '\\f45a';
  }

  .fa-radiation::before {
    content: '\\f7b9';
  }

  .fa-radiation-alt::before {
    content: '\\f7ba';
  }

  .fa-rainbow::before {
    content: '\\f75b';
  }

  .fa-raindrops::before {
    content: '\\f75c';
  }

  .fa-ram::before {
    content: '\\f70a';
  }

  .fa-ramp-loading::before {
    content: '\\f4d4';
  }

  .fa-random::before {
    content: '\\f074';
  }

  .fa-raspberry-pi::before {
    content: '\\f7bb';
  }

  .fa-ravelry::before {
    content: '\\f2d9';
  }

  .fa-react::before {
    content: '\\f41b';
  }

  .fa-reacteurope::before {
    content: '\\f75d';
  }

  .fa-readme::before {
    content: '\\f4d5';
  }

  .fa-rebel::before {
    content: '\\f1d0';
  }

  .fa-receipt::before {
    content: '\\f543';
  }

  .fa-rectangle-landscape::before {
    content: '\\f2fa';
  }

  .fa-rectangle-portrait::before {
    content: '\\f2fb';
  }

  .fa-rectangle-wide::before {
    content: '\\f2fc';
  }

  .fa-recycle::before {
    content: '\\f1b8';
  }

  .fa-red-river::before {
    content: '\\f3e3';
  }

  .fa-reddit::before {
    content: '\\f1a1';
  }

  .fa-reddit-alien::before {
    content: '\\f281';
  }

  .fa-reddit-square::before {
    content: '\\f1a2';
  }

  .fa-redhat::before {
    content: '\\f7bc';
  }

  .fa-redo::before {
    content: '\\f01e';
  }

  .fa-redo-alt::before {
    content: '\\f2f9';
  }

  .fa-registered::before {
    content: '\\f25d';
  }

  .fa-remove-format::before {
    content: '\\f87d';
  }

  .fa-renren::before {
    content: '\\f18b';
  }

  .fa-repeat::before {
    content: '\\f363';
  }

  .fa-repeat-1::before {
    content: '\\f365';
  }

  .fa-repeat-1-alt::before {
    content: '\\f366';
  }

  .fa-repeat-alt::before {
    content: '\\f364';
  }

  .fa-reply::before {
    content: '\\f3e5';
  }

  .fa-reply-all::before {
    content: '\\f122';
  }

  .fa-replyd::before {
    content: '\\f3e6';
  }

  .fa-republican::before {
    content: '\\f75e';
  }

  .fa-researchgate::before {
    content: '\\f4f8';
  }

  .fa-resolving::before {
    content: '\\f3e7';
  }

  .fa-restroom::before {
    content: '\\f7bd';
  }

  .fa-retweet::before {
    content: '\\f079';
  }

  .fa-retweet-alt::before {
    content: '\\f361';
  }

  .fa-rev::before {
    content: '\\f5b2';
  }

  .fa-ribbon::before {
    content: '\\f4d6';
  }

  .fa-ring::before {
    content: '\\f70b';
  }

  .fa-rings-wedding::before {
    content: '\\f81b';
  }

  .fa-road::before {
    content: '\\f018';
  }

  .fa-robot::before {
    content: '\\f544';
  }

  .fa-rocket::before {
    content: '\\f135';
  }

  .fa-rocketchat::before {
    content: '\\f3e8';
  }

  .fa-rockrms::before {
    content: '\\f3e9';
  }

  .fa-route::before {
    content: '\\f4d7';
  }

  .fa-route-highway::before {
    content: '\\f61a';
  }

  .fa-route-interstate::before {
    content: '\\f61b';
  }

  .fa-rss::before {
    content: '\\f09e';
  }

  .fa-rss-square::before {
    content: '\\f143';
  }

  .fa-ruble-sign::before {
    content: '\\f158';
  }

  .fa-ruler::before {
    content: '\\f545';
  }

  .fa-ruler-combined::before {
    content: '\\f546';
  }

  .fa-ruler-horizontal::before {
    content: '\\f547';
  }

  .fa-ruler-triangle::before {
    content: '\\f61c';
  }

  .fa-ruler-vertical::before {
    content: '\\f548';
  }

  .fa-running::before {
    content: '\\f70c';
  }

  .fa-rupee-sign::before {
    content: '\\f156';
  }

  .fa-rv::before {
    content: '\\f7be';
  }

  .fa-sack::before {
    content: '\\f81c';
  }

  .fa-sack-dollar::before {
    content: '\\f81d';
  }

  .fa-sad-cry::before {
    content: '\\f5b3';
  }

  .fa-sad-tear::before {
    content: '\\f5b4';
  }

  .fa-safari::before {
    content: '\\f267';
  }

  .fa-salad::before {
    content: '\\f81e';
  }

  .fa-salesforce::before {
    content: '\\f83b';
  }

  .fa-sandwich::before {
    content: '\\f81f';
  }

  .fa-sass::before {
    content: '\\f41e';
  }

  .fa-satellite::before {
    content: '\\f7bf';
  }

  .fa-satellite-dish::before {
    content: '\\f7c0';
  }

  .fa-sausage::before {
    content: '\\f820';
  }

  .fa-save::before {
    content: '\\f0c7';
  }

  .fa-scalpel::before {
    content: '\\f61d';
  }

  .fa-scalpel-path::before {
    content: '\\f61e';
  }

  .fa-scanner::before {
    content: '\\f488';
  }

  .fa-scanner-keyboard::before {
    content: '\\f489';
  }

  .fa-scanner-touchscreen::before {
    content: '\\f48a';
  }

  .fa-scarecrow::before {
    content: '\\f70d';
  }

  .fa-scarf::before {
    content: '\\f7c1';
  }

  .fa-schlix::before {
    content: '\\f3ea';
  }

  .fa-school::before {
    content: '\\f549';
  }

  .fa-screwdriver::before {
    content: '\\f54a';
  }

  .fa-scribd::before {
    content: '\\f28a';
  }

  .fa-scroll::before {
    content: '\\f70e';
  }

  .fa-scroll-old::before {
    content: '\\f70f';
  }

  .fa-scrubber::before {
    content: '\\f2f8';
  }

  .fa-scythe::before {
    content: '\\f710';
  }

  .fa-sd-card::before {
    content: '\\f7c2';
  }

  .fa-search::before {
    content: '\\f002';
  }

  .fa-search-dollar::before {
    content: '\\f688';
  }

  .fa-search-location::before {
    content: '\\f689';
  }

  .fa-search-minus::before {
    content: '\\f010';
  }

  .fa-search-plus::before {
    content: '\\f00e';
  }

  .fa-searchengin::before {
    content: '\\f3eb';
  }

  .fa-seedling::before {
    content: '\\f4d8';
  }

  .fa-sellcast::before {
    content: '\\f2da';
  }

  .fa-sellsy::before {
    content: '\\f213';
  }

  .fa-send-back::before {
    content: '\\f87e';
  }

  .fa-send-backward::before {
    content: '\\f87f';
  }

  .fa-server::before {
    content: '\\f233';
  }

  .fa-servicestack::before {
    content: '\\f3ec';
  }

  .fa-shapes::before {
    content: '\\f61f';
  }

  .fa-share::before {
    content: '\\f064';
  }

  .fa-share-all::before {
    content: '\\f367';
  }

  .fa-share-alt::before {
    content: '\\f1e0';
  }

  .fa-share-alt-square::before {
    content: '\\f1e1';
  }

  .fa-share-square::before {
    content: '\\f14d';
  }

  .fa-sheep::before {
    content: '\\f711';
  }

  .fa-shekel-sign::before {
    content: '\\f20b';
  }

  .fa-shield::before {
    content: '\\f132';
  }

  .fa-shield-alt::before {
    content: '\\f3ed';
  }

  .fa-shield-check::before {
    content: '\\f2f7';
  }

  .fa-shield-cross::before {
    content: '\\f712';
  }

  .fa-ship::before {
    content: '\\f21a';
  }

  .fa-shipping-fast::before {
    content: '\\f48b';
  }

  .fa-shipping-timed::before {
    content: '\\f48c';
  }

  .fa-shirtsinbulk::before {
    content: '\\f214';
  }

  .fa-shish-kebab::before {
    content: '\\f821';
  }

  .fa-shoe-prints::before {
    content: '\\f54b';
  }

  .fa-shopping-bag::before {
    content: '\\f290';
  }

  .fa-shopping-basket::before {
    content: '\\f291';
  }

  .fa-shopping-cart::before {
    content: '\\f07a';
  }

  .fa-shopware::before {
    content: '\\f5b5';
  }

  .fa-shovel::before {
    content: '\\f713';
  }

  .fa-shovel-snow::before {
    content: '\\f7c3';
  }

  .fa-shower::before {
    content: '\\f2cc';
  }

  .fa-shredder::before {
    content: '\\f68a';
  }

  .fa-shuttle-van::before {
    content: '\\f5b6';
  }

  .fa-shuttlecock::before {
    content: '\\f45b';
  }

  .fa-sickle::before {
    content: '\\f822';
  }

  .fa-sigma::before {
    content: '\\f68b';
  }

  .fa-sign::before {
    content: '\\f4d9';
  }

  .fa-sign-in::before {
    content: '\\f090';
  }

  .fa-sign-in-alt::before {
    content: '\\f2f6';
  }

  .fa-sign-language::before {
    content: '\\f2a7';
  }

  .fa-sign-out::before {
    content: '\\f08b';
  }

  .fa-sign-out-alt::before {
    content: '\\f2f5';
  }

  .fa-signal::before {
    content: '\\f012';
  }

  .fa-signal-1::before {
    content: '\\f68c';
  }

  .fa-signal-2::before {
    content: '\\f68d';
  }

  .fa-signal-3::before {
    content: '\\f68e';
  }

  .fa-signal-4::before {
    content: '\\f68f';
  }

  .fa-signal-alt::before {
    content: '\\f690';
  }

  .fa-signal-alt-1::before {
    content: '\\f691';
  }

  .fa-signal-alt-2::before {
    content: '\\f692';
  }

  .fa-signal-alt-3::before {
    content: '\\f693';
  }

  .fa-signal-alt-slash::before {
    content: '\\f694';
  }

  .fa-signal-slash::before {
    content: '\\f695';
  }

  .fa-signature::before {
    content: '\\f5b7';
  }

  .fa-sim-card::before {
    content: '\\f7c4';
  }

  .fa-simplybuilt::before {
    content: '\\f215';
  }

  .fa-sistrix::before {
    content: '\\f3ee';
  }

  .fa-sitemap::before {
    content: '\\f0e8';
  }

  .fa-sith::before {
    content: '\\f512';
  }

  .fa-skating::before {
    content: '\\f7c5';
  }

  .fa-skeleton::before {
    content: '\\f620';
  }

  .fa-sketch::before {
    content: '\\f7c6';
  }

  .fa-ski-jump::before {
    content: '\\f7c7';
  }

  .fa-ski-lift::before {
    content: '\\f7c8';
  }

  .fa-skiing::before {
    content: '\\f7c9';
  }

  .fa-skiing-nordic::before {
    content: '\\f7ca';
  }

  .fa-skull::before {
    content: '\\f54c';
  }

  .fa-skull-crossbones::before {
    content: '\\f714';
  }

  .fa-skyatlas::before {
    content: '\\f216';
  }

  .fa-skype::before {
    content: '\\f17e';
  }

  .fa-slack::before {
    content: '\\f198';
  }

  .fa-slack-hash::before {
    content: '\\f3ef';
  }

  .fa-slash::before {
    content: '\\f715';
  }

  .fa-sledding::before {
    content: '\\f7cb';
  }

  .fa-sleigh::before {
    content: '\\f7cc';
  }

  .fa-sliders-h::before {
    content: '\\f1de';
  }

  .fa-sliders-h-square::before {
    content: '\\f3f0';
  }

  .fa-sliders-v::before {
    content: '\\f3f1';
  }

  .fa-sliders-v-square::before {
    content: '\\f3f2';
  }

  .fa-slideshare::before {
    content: '\\f1e7';
  }

  .fa-smile::before {
    content: '\\f118';
  }

  .fa-smile-beam::before {
    content: '\\f5b8';
  }

  .fa-smile-plus::before {
    content: '\\f5b9';
  }

  .fa-smile-wink::before {
    content: '\\f4da';
  }

  .fa-smog::before {
    content: '\\f75f';
  }

  .fa-smoke::before {
    content: '\\f760';
  }

  .fa-smoking::before {
    content: '\\f48d';
  }

  .fa-smoking-ban::before {
    content: '\\f54d';
  }

  .fa-sms::before {
    content: '\\f7cd';
  }

  .fa-snake::before {
    content: '\\f716';
  }

  .fa-snapchat::before {
    content: '\\f2ab';
  }

  .fa-snapchat-ghost::before {
    content: '\\f2ac';
  }

  .fa-snapchat-square::before {
    content: '\\f2ad';
  }

  .fa-snooze::before {
    content: '\\f880';
  }

  .fa-snow-blowing::before {
    content: '\\f761';
  }

  .fa-snowboarding::before {
    content: '\\f7ce';
  }

  .fa-snowflake::before {
    content: '\\f2dc';
  }

  .fa-snowflakes::before {
    content: '\\f7cf';
  }

  .fa-snowman::before {
    content: '\\f7d0';
  }

  .fa-snowmobile::before {
    content: '\\f7d1';
  }

  .fa-snowplow::before {
    content: '\\f7d2';
  }

  .fa-socks::before {
    content: '\\f696';
  }

  .fa-solar-panel::before {
    content: '\\f5ba';
  }

  .fa-sort::before {
    content: '\\f0dc';
  }

  .fa-sort-alpha-down::before {
    content: '\\f15d';
  }

  .fa-sort-alpha-down-alt::before {
    content: '\\f881';
  }

  .fa-sort-alpha-up::before {
    content: '\\f15e';
  }

  .fa-sort-alpha-up-alt::before {
    content: '\\f882';
  }

  .fa-sort-alt::before {
    content: '\\f883';
  }

  .fa-sort-amount-down::before {
    content: '\\f160';
  }

  .fa-sort-amount-down-alt::before {
    content: '\\f884';
  }

  .fa-sort-amount-up::before {
    content: '\\f161';
  }

  .fa-sort-amount-up-alt::before {
    content: '\\f885';
  }

  .fa-sort-down::before {
    content: '\\f0dd';
  }

  .fa-sort-numeric-down::before {
    content: '\\f162';
  }

  .fa-sort-numeric-down-alt::before {
    content: '\\f886';
  }

  .fa-sort-numeric-up::before {
    content: '\\f163';
  }

  .fa-sort-numeric-up-alt::before {
    content: '\\f887';
  }

  .fa-sort-shapes-down::before {
    content: '\\f888';
  }

  .fa-sort-shapes-down-alt::before {
    content: '\\f889';
  }

  .fa-sort-shapes-up::before {
    content: '\\f88a';
  }

  .fa-sort-shapes-up-alt::before {
    content: '\\f88b';
  }

  .fa-sort-size-down::before {
    content: '\\f88c';
  }

  .fa-sort-size-down-alt::before {
    content: '\\f88d';
  }

  .fa-sort-size-up::before {
    content: '\\f88e';
  }

  .fa-sort-size-up-alt::before {
    content: '\\f88f';
  }

  .fa-sort-up::before {
    content: '\\f0de';
  }

  .fa-soundcloud::before {
    content: '\\f1be';
  }

  .fa-soup::before {
    content: '\\f823';
  }

  .fa-sourcetree::before {
    content: '\\f7d3';
  }

  .fa-spa::before {
    content: '\\f5bb';
  }

  .fa-space-shuttle::before {
    content: '\\f197';
  }

  .fa-spade::before {
    content: '\\f2f4';
  }

  .fa-sparkles::before {
    content: '\\f890';
  }

  .fa-speakap::before {
    content: '\\f3f3';
  }

  .fa-speaker-deck::before {
    content: '\\f83c';
  }

  .fa-spell-check::before {
    content: '\\f891';
  }

  .fa-spider::before {
    content: '\\f717';
  }

  .fa-spider-black-widow::before {
    content: '\\f718';
  }

  .fa-spider-web::before {
    content: '\\f719';
  }

  .fa-spinner::before {
    content: '\\f110';
  }

  .fa-spinner-third::before {
    content: '\\f3f4';
  }

  .fa-splotch::before {
    content: '\\f5bc';
  }

  .fa-spotify::before {
    content: '\\f1bc';
  }

  .fa-spray-can::before {
    content: '\\f5bd';
  }

  .fa-square::before {
    content: '\\f0c8';
  }

  .fa-square-full::before {
    content: '\\f45c';
  }

  .fa-square-root::before {
    content: '\\f697';
  }

  .fa-square-root-alt::before {
    content: '\\f698';
  }

  .fa-squarespace::before {
    content: '\\f5be';
  }

  .fa-squirrel::before {
    content: '\\f71a';
  }

  .fa-stack-exchange::before {
    content: '\\f18d';
  }

  .fa-stack-overflow::before {
    content: '\\f16c';
  }

  .fa-stackpath::before {
    content: '\\f842';
  }

  .fa-staff::before {
    content: '\\f71b';
  }

  .fa-stamp::before {
    content: '\\f5bf';
  }

  .fa-star::before {
    content: '\\f005';
  }

  .fa-star-and-crescent::before {
    content: '\\f699';
  }

  .fa-star-christmas::before {
    content: '\\f7d4';
  }

  .fa-star-exclamation::before {
    content: '\\f2f3';
  }

  .fa-star-half::before {
    content: '\\f089';
  }

  .fa-star-half-alt::before {
    content: '\\f5c0';
  }

  .fa-star-of-david::before {
    content: '\\f69a';
  }

  .fa-star-of-life::before {
    content: '\\f621';
  }

  .fa-stars::before {
    content: '\\f762';
  }

  .fa-staylinked::before {
    content: '\\f3f5';
  }

  .fa-steak::before {
    content: '\\f824';
  }

  .fa-steam::before {
    content: '\\f1b6';
  }

  .fa-steam-square::before {
    content: '\\f1b7';
  }

  .fa-steam-symbol::before {
    content: '\\f3f6';
  }

  .fa-steering-wheel::before {
    content: '\\f622';
  }

  .fa-step-backward::before {
    content: '\\f048';
  }

  .fa-step-forward::before {
    content: '\\f051';
  }

  .fa-stethoscope::before {
    content: '\\f0f1';
  }

  .fa-sticker-mule::before {
    content: '\\f3f7';
  }

  .fa-sticky-note::before {
    content: '\\f249';
  }

  .fa-stocking::before {
    content: '\\f7d5';
  }

  .fa-stomach::before {
    content: '\\f623';
  }

  .fa-stop::before {
    content: '\\f04d';
  }

  .fa-stop-circle::before {
    content: '\\f28d';
  }

  .fa-stopwatch::before {
    content: '\\f2f2';
  }

  .fa-store::before {
    content: '\\f54e';
  }

  .fa-store-alt::before {
    content: '\\f54f';
  }

  .fa-strava::before {
    content: '\\f428';
  }

  .fa-stream::before {
    content: '\\f550';
  }

  .fa-street-view::before {
    content: '\\f21d';
  }

  .fa-stretcher::before {
    content: '\\f825';
  }

  .fa-strikethrough::before {
    content: '\\f0cc';
  }

  .fa-stripe::before {
    content: '\\f429';
  }

  .fa-stripe-s::before {
    content: '\\f42a';
  }

  .fa-stroopwafel::before {
    content: '\\f551';
  }

  .fa-studiovinari::before {
    content: '\\f3f8';
  }

  .fa-stumbleupon::before {
    content: '\\f1a4';
  }

  .fa-stumbleupon-circle::before {
    content: '\\f1a3';
  }

  .fa-subscript::before {
    content: '\\f12c';
  }

  .fa-subway::before {
    content: '\\f239';
  }

  .fa-suitcase::before {
    content: '\\f0f2';
  }

  .fa-suitcase-rolling::before {
    content: '\\f5c1';
  }

  .fa-sun::before {
    content: '\\f185';
  }

  .fa-sun-cloud::before {
    content: '\\f763';
  }

  .fa-sun-dust::before {
    content: '\\f764';
  }

  .fa-sun-haze::before {
    content: '\\f765';
  }

  .fa-sunglasses::before {
    content: '\\f892';
  }

  .fa-sunrise::before {
    content: '\\f766';
  }

  .fa-sunset::before {
    content: '\\f767';
  }

  .fa-superpowers::before {
    content: '\\f2dd';
  }

  .fa-superscript::before {
    content: '\\f12b';
  }

  .fa-supple::before {
    content: '\\f3f9';
  }

  .fa-surprise::before {
    content: '\\f5c2';
  }

  .fa-suse::before {
    content: '\\f7d6';
  }

  .fa-swatchbook::before {
    content: '\\f5c3';
  }

  .fa-swimmer::before {
    content: '\\f5c4';
  }

  .fa-swimming-pool::before {
    content: '\\f5c5';
  }

  .fa-sword::before {
    content: '\\f71c';
  }

  .fa-swords::before {
    content: '\\f71d';
  }

  .fa-symfony::before {
    content: '\\f83d';
  }

  .fa-synagogue::before {
    content: '\\f69b';
  }

  .fa-sync::before {
    content: '\\f021';
  }

  .fa-sync-alt::before {
    content: '\\f2f1';
  }

  .fa-syringe::before {
    content: '\\f48e';
  }

  .fa-table::before {
    content: '\\f0ce';
  }

  .fa-table-tennis::before {
    content: '\\f45d';
  }

  .fa-tablet::before {
    content: '\\f10a';
  }

  .fa-tablet-alt::before {
    content: '\\f3fa';
  }

  .fa-tablet-android::before {
    content: '\\f3fb';
  }

  .fa-tablet-android-alt::before {
    content: '\\f3fc';
  }

  .fa-tablet-rugged::before {
    content: '\\f48f';
  }

  .fa-tablets::before {
    content: '\\f490';
  }

  .fa-tachometer::before {
    content: '\\f0e4';
  }

  .fa-tachometer-alt::before {
    content: '\\f3fd';
  }

  .fa-tachometer-alt-average::before {
    content: '\\f624';
  }

  .fa-tachometer-alt-fast::before {
    content: '\\f625';
  }

  .fa-tachometer-alt-fastest::before {
    content: '\\f626';
  }

  .fa-tachometer-alt-slow::before {
    content: '\\f627';
  }

  .fa-tachometer-alt-slowest::before {
    content: '\\f628';
  }

  .fa-tachometer-average::before {
    content: '\\f629';
  }

  .fa-tachometer-fast::before {
    content: '\\f62a';
  }

  .fa-tachometer-fastest::before {
    content: '\\f62b';
  }

  .fa-tachometer-slow::before {
    content: '\\f62c';
  }

  .fa-tachometer-slowest::before {
    content: '\\f62d';
  }

  .fa-taco::before {
    content: '\\f826';
  }

  .fa-tag::before {
    content: '\\f02b';
  }

  .fa-tags::before {
    content: '\\f02c';
  }

  .fa-tally::before {
    content: '\\f69c';
  }

  .fa-tanakh::before {
    content: '\\f827';
  }

  .fa-tape::before {
    content: '\\f4db';
  }

  .fa-tasks::before {
    content: '\\f0ae';
  }

  .fa-tasks-alt::before {
    content: '\\f828';
  }

  .fa-taxi::before {
    content: '\\f1ba';
  }

  .fa-teamspeak::before {
    content: '\\f4f9';
  }

  .fa-teeth::before {
    content: '\\f62e';
  }

  .fa-teeth-open::before {
    content: '\\f62f';
  }

  .fa-telegram::before {
    content: '\\f2c6';
  }

  .fa-telegram-plane::before {
    content: '\\f3fe';
  }

  .fa-temperature-frigid::before {
    content: '\\f768';
  }

  .fa-temperature-high::before {
    content: '\\f769';
  }

  .fa-temperature-hot::before {
    content: '\\f76a';
  }

  .fa-temperature-low::before {
    content: '\\f76b';
  }

  .fa-tencent-weibo::before {
    content: '\\f1d5';
  }

  .fa-tenge::before {
    content: '\\f7d7';
  }

  .fa-tennis-ball::before {
    content: '\\f45e';
  }

  .fa-terminal::before {
    content: '\\f120';
  }

  .fa-text::before {
    content: '\\f893';
  }

  .fa-text-height::before {
    content: '\\f034';
  }

  .fa-text-size::before {
    content: '\\f894';
  }

  .fa-text-width::before {
    content: '\\f035';
  }

  .fa-th::before {
    content: '\\f00a';
  }

  .fa-th-large::before {
    content: '\\f009';
  }

  .fa-th-list::before {
    content: '\\f00b';
  }

  .fa-the-red-yeti::before {
    content: '\\f69d';
  }

  .fa-theater-masks::before {
    content: '\\f630';
  }

  .fa-themeco::before {
    content: '\\f5c6';
  }

  .fa-themeisle::before {
    content: '\\f2b2';
  }

  .fa-thermometer::before {
    content: '\\f491';
  }

  .fa-thermometer-empty::before {
    content: '\\f2cb';
  }

  .fa-thermometer-full::before {
    content: '\\f2c7';
  }

  .fa-thermometer-half::before {
    content: '\\f2c9';
  }

  .fa-thermometer-quarter::before {
    content: '\\f2ca';
  }

  .fa-thermometer-three-quarters::before {
    content: '\\f2c8';
  }

  .fa-theta::before {
    content: '\\f69e';
  }

  .fa-think-peaks::before {
    content: '\\f731';
  }

  .fa-thumbs-down::before {
    content: '\\f165';
  }

  .fa-thumbs-up::before {
    content: '\\f164';
  }

  .fa-thumbtack::before {
    content: '\\f08d';
  }

  .fa-thunderstorm::before {
    content: '\\f76c';
  }

  .fa-thunderstorm-moon::before {
    content: '\\f76d';
  }

  .fa-thunderstorm-sun::before {
    content: '\\f76e';
  }

  .fa-ticket::before {
    content: '\\f145';
  }

  .fa-ticket-alt::before {
    content: '\\f3ff';
  }

  .fa-tilde::before {
    content: '\\f69f';
  }

  .fa-times::before {
    content: '\\f00d';
  }

  .fa-times-circle::before {
    content: '\\f057';
  }

  .fa-times-hexagon::before {
    content: '\\f2ee';
  }

  .fa-times-octagon::before {
    content: '\\f2f0';
  }

  .fa-times-square::before {
    content: '\\f2d3';
  }

  .fa-tint::before {
    content: '\\f043';
  }

  .fa-tint-slash::before {
    content: '\\f5c7';
  }

  .fa-tire::before {
    content: '\\f631';
  }

  .fa-tire-flat::before {
    content: '\\f632';
  }

  .fa-tire-pressure-warning::before {
    content: '\\f633';
  }

  .fa-tire-rugged::before {
    content: '\\f634';
  }

  .fa-tired::before {
    content: '\\f5c8';
  }

  .fa-toggle-off::before {
    content: '\\f204';
  }

  .fa-toggle-on::before {
    content: '\\f205';
  }

  .fa-toilet::before {
    content: '\\f7d8';
  }

  .fa-toilet-paper::before {
    content: '\\f71e';
  }

  .fa-toilet-paper-alt::before {
    content: '\\f71f';
  }

  .fa-tombstone::before {
    content: '\\f720';
  }

  .fa-tombstone-alt::before {
    content: '\\f721';
  }

  .fa-toolbox::before {
    content: '\\f552';
  }

  .fa-tools::before {
    content: '\\f7d9';
  }

  .fa-tooth::before {
    content: '\\f5c9';
  }

  .fa-toothbrush::before {
    content: '\\f635';
  }

  .fa-torah::before {
    content: '\\f6a0';
  }

  .fa-torii-gate::before {
    content: '\\f6a1';
  }

  .fa-tornado::before {
    content: '\\f76f';
  }

  .fa-tractor::before {
    content: '\\f722';
  }

  .fa-trade-federation::before {
    content: '\\f513';
  }

  .fa-trademark::before {
    content: '\\f25c';
  }

  .fa-traffic-cone::before {
    content: '\\f636';
  }

  .fa-traffic-light::before {
    content: '\\f637';
  }

  .fa-traffic-light-go::before {
    content: '\\f638';
  }

  .fa-traffic-light-slow::before {
    content: '\\f639';
  }

  .fa-traffic-light-stop::before {
    content: '\\f63a';
  }

  .fa-train::before {
    content: '\\f238';
  }

  .fa-tram::before {
    content: '\\f7da';
  }

  .fa-transgender::before {
    content: '\\f224';
  }

  .fa-transgender-alt::before {
    content: '\\f225';
  }

  .fa-trash::before {
    content: '\\f1f8';
  }

  .fa-trash-alt::before {
    content: '\\f2ed';
  }

  .fa-trash-restore::before {
    content: '\\f829';
  }

  .fa-trash-restore-alt::before {
    content: '\\f82a';
  }

  .fa-trash-undo::before {
    content: '\\f895';
  }

  .fa-trash-undo-alt::before {
    content: '\\f896';
  }

  .fa-treasure-chest::before {
    content: '\\f723';
  }

  .fa-tree::before {
    content: '\\f1bb';
  }

  .fa-tree-alt::before {
    content: '\\f400';
  }

  .fa-tree-christmas::before {
    content: '\\f7db';
  }

  .fa-tree-decorated::before {
    content: '\\f7dc';
  }

  .fa-tree-large::before {
    content: '\\f7dd';
  }

  .fa-tree-palm::before {
    content: '\\f82b';
  }

  .fa-trees::before {
    content: '\\f724';
  }

  .fa-trello::before {
    content: '\\f181';
  }

  .fa-triangle::before {
    content: '\\f2ec';
  }

  .fa-tripadvisor::before {
    content: '\\f262';
  }

  .fa-trophy::before {
    content: '\\f091';
  }

  .fa-trophy-alt::before {
    content: '\\f2eb';
  }

  .fa-truck::before {
    content: '\\f0d1';
  }

  .fa-truck-container::before {
    content: '\\f4dc';
  }

  .fa-truck-couch::before {
    content: '\\f4dd';
  }

  .fa-truck-loading::before {
    content: '\\f4de';
  }

  .fa-truck-monster::before {
    content: '\\f63b';
  }

  .fa-truck-moving::before {
    content: '\\f4df';
  }

  .fa-truck-pickup::before {
    content: '\\f63c';
  }

  .fa-truck-plow::before {
    content: '\\f7de';
  }

  .fa-truck-ramp::before {
    content: '\\f4e0';
  }

  .fa-tshirt::before {
    content: '\\f553';
  }

  .fa-tty::before {
    content: '\\f1e4';
  }

  .fa-tumblr::before {
    content: '\\f173';
  }

  .fa-tumblr-square::before {
    content: '\\f174';
  }

  .fa-turkey::before {
    content: '\\f725';
  }

  .fa-turtle::before {
    content: '\\f726';
  }

  .fa-tv::before {
    content: '\\f26c';
  }

  .fa-tv-retro::before {
    content: '\\f401';
  }

  .fa-twitch::before {
    content: '\\f1e8';
  }

  .fa-twitter::before {
    content: '\\f099';
  }

  .fa-twitter-square::before {
    content: '\\f081';
  }

  .fa-typo3::before {
    content: '\\f42b';
  }

  .fa-uber::before {
    content: '\\f402';
  }

  .fa-ubuntu::before {
    content: '\\f7df';
  }

  .fa-uikit::before {
    content: '\\f403';
  }

  .fa-umbrella::before {
    content: '\\f0e9';
  }

  .fa-umbrella-beach::before {
    content: '\\f5ca';
  }

  .fa-underline::before {
    content: '\\f0cd';
  }

  .fa-undo::before {
    content: '\\f0e2';
  }

  .fa-undo-alt::before {
    content: '\\f2ea';
  }

  .fa-unicorn::before {
    content: '\\f727';
  }

  .fa-union::before {
    content: '\\f6a2';
  }

  .fa-uniregistry::before {
    content: '\\f404';
  }

  .fa-universal-access::before {
    content: '\\f29a';
  }

  .fa-university::before {
    content: '\\f19c';
  }

  .fa-unlink::before {
    content: '\\f127';
  }

  .fa-unlock::before {
    content: '\\f09c';
  }

  .fa-unlock-alt::before {
    content: '\\f13e';
  }

  .fa-untappd::before {
    content: '\\f405';
  }

  .fa-upload::before {
    content: '\\f093';
  }

  .fa-ups::before {
    content: '\\f7e0';
  }

  .fa-usb::before {
    content: '\\f287';
  }

  .fa-usd-circle::before {
    content: '\\f2e8';
  }

  .fa-usd-square::before {
    content: '\\f2e9';
  }

  .fa-user::before {
    content: '\\f007';
  }

  .fa-user-alt::before {
    content: '\\f406';
  }

  .fa-user-alt-slash::before {
    content: '\\f4fa';
  }

  .fa-user-astronaut::before {
    content: '\\f4fb';
  }

  .fa-user-chart::before {
    content: '\\f6a3';
  }

  .fa-user-check::before {
    content: '\\f4fc';
  }

  .fa-user-circle::before {
    content: '\\f2bd';
  }

  .fa-user-clock::before {
    content: '\\f4fd';
  }

  .fa-user-cog::before {
    content: '\\f4fe';
  }

  .fa-user-crown::before {
    content: '\\f6a4';
  }

  .fa-user-edit::before {
    content: '\\f4ff';
  }

  .fa-user-friends::before {
    content: '\\f500';
  }

  .fa-user-graduate::before {
    content: '\\f501';
  }

  .fa-user-hard-hat::before {
    content: '\\f82c';
  }

  .fa-user-headset::before {
    content: '\\f82d';
  }

  .fa-user-injured::before {
    content: '\\f728';
  }

  .fa-user-lock::before {
    content: '\\f502';
  }

  .fa-user-md::before {
    content: '\\f0f0';
  }

  .fa-user-md-chat::before {
    content: '\\f82e';
  }

  .fa-user-minus::before {
    content: '\\f503';
  }

  .fa-user-ninja::before {
    content: '\\f504';
  }

  .fa-user-nurse::before {
    content: '\\f82f';
  }

  .fa-user-plus::before {
    content: '\\f234';
  }

  .fa-user-secret::before {
    content: '\\f21b';
  }

  .fa-user-shield::before {
    content: '\\f505';
  }

  .fa-user-slash::before {
    content: '\\f506';
  }

  .fa-user-tag::before {
    content: '\\f507';
  }

  .fa-user-tie::before {
    content: '\\f508';
  }

  .fa-user-times::before {
    content: '\\f235';
  }

  .fa-users::before {
    content: '\\f0c0';
  }

  .fa-users-class::before {
    content: '\\f63d';
  }

  .fa-users-cog::before {
    content: '\\f509';
  }

  .fa-users-crown::before {
    content: '\\f6a5';
  }

  .fa-users-medical::before {
    content: '\\f830';
  }

  .fa-usps::before {
    content: '\\f7e1';
  }

  .fa-ussunnah::before {
    content: '\\f407';
  }

  .fa-utensil-fork::before {
    content: '\\f2e3';
  }

  .fa-utensil-knife::before {
    content: '\\f2e4';
  }

  .fa-utensil-spoon::before {
    content: '\\f2e5';
  }

  .fa-utensils::before {
    content: '\\f2e7';
  }

  .fa-utensils-alt::before {
    content: '\\f2e6';
  }

  .fa-vaadin::before {
    content: '\\f408';
  }

  .fa-value-absolute::before {
    content: '\\f6a6';
  }

  .fa-vector-square::before {
    content: '\\f5cb';
  }

  .fa-venus::before {
    content: '\\f221';
  }

  .fa-venus-double::before {
    content: '\\f226';
  }

  .fa-venus-mars::before {
    content: '\\f228';
  }

  .fa-viacoin::before {
    content: '\\f237';
  }

  .fa-viadeo::before {
    content: '\\f2a9';
  }

  .fa-viadeo-square::before {
    content: '\\f2aa';
  }

  .fa-vial::before {
    content: '\\f492';
  }

  .fa-vials::before {
    content: '\\f493';
  }

  .fa-viber::before {
    content: '\\f409';
  }

  .fa-video::before {
    content: '\\f03d';
  }

  .fa-video-plus::before {
    content: '\\f4e1';
  }

  .fa-video-slash::before {
    content: '\\f4e2';
  }

  .fa-vihara::before {
    content: '\\f6a7';
  }

  .fa-vimeo::before {
    content: '\\f40a';
  }

  .fa-vimeo-square::before {
    content: '\\f194';
  }

  .fa-vimeo-v::before {
    content: '\\f27d';
  }

  .fa-vine::before {
    content: '\\f1ca';
  }

  .fa-vk::before {
    content: '\\f189';
  }

  .fa-vnv::before {
    content: '\\f40b';
  }

  .fa-voicemail::before {
    content: '\\f897';
  }

  .fa-volcano::before {
    content: '\\f770';
  }

  .fa-volleyball-ball::before {
    content: '\\f45f';
  }

  .fa-volume::before {
    content: '\\f6a8';
  }

  .fa-volume-down::before {
    content: '\\f027';
  }

  .fa-volume-mute::before {
    content: '\\f6a9';
  }

  .fa-volume-off::before {
    content: '\\f026';
  }

  .fa-volume-slash::before {
    content: '\\f2e2';
  }

  .fa-volume-up::before {
    content: '\\f028';
  }

  .fa-vote-nay::before {
    content: '\\f771';
  }

  .fa-vote-yea::before {
    content: '\\f772';
  }

  .fa-vr-cardboard::before {
    content: '\\f729';
  }

  .fa-vuejs::before {
    content: '\\f41f';
  }

  .fa-walker::before {
    content: '\\f831';
  }

  .fa-walking::before {
    content: '\\f554';
  }

  .fa-wallet::before {
    content: '\\f555';
  }

  .fa-wand::before {
    content: '\\f72a';
  }

  .fa-wand-magic::before {
    content: '\\f72b';
  }

  .fa-warehouse::before {
    content: '\\f494';
  }

  .fa-warehouse-alt::before {
    content: '\\f495';
  }

  .fa-washer::before {
    content: '\\f898';
  }

  .fa-watch::before {
    content: '\\f2e1';
  }

  .fa-watch-fitness::before {
    content: '\\f63e';
  }

  .fa-water::before {
    content: '\\f773';
  }

  .fa-water-lower::before {
    content: '\\f774';
  }

  .fa-water-rise::before {
    content: '\\f775';
  }

  .fa-wave-sine::before {
    content: '\\f899';
  }

  .fa-wave-square::before {
    content: '\\f83e';
  }

  .fa-wave-triangle::before {
    content: '\\f89a';
  }

  .fa-waze::before {
    content: '\\f83f';
  }

  .fa-webcam::before {
    content: '\\f832';
  }

  .fa-webcam-slash::before {
    content: '\\f833';
  }

  .fa-weebly::before {
    content: '\\f5cc';
  }

  .fa-weibo::before {
    content: '\\f18a';
  }

  .fa-weight::before {
    content: '\\f496';
  }

  .fa-weight-hanging::before {
    content: '\\f5cd';
  }

  .fa-weixin::before {
    content: '\\f1d7';
  }

  .fa-whale::before {
    content: '\\f72c';
  }

  .fa-whatsapp::before {
    content: '\\f232';
  }

  .fa-whatsapp-square::before {
    content: '\\f40c';
  }

  .fa-wheat::before {
    content: '\\f72d';
  }

  .fa-wheelchair::before {
    content: '\\f193';
  }

  .fa-whistle::before {
    content: '\\f460';
  }

  .fa-whmcs::before {
    content: '\\f40d';
  }

  .fa-wifi::before {
    content: '\\f1eb';
  }

  .fa-wifi-1::before {
    content: '\\f6aa';
  }

  .fa-wifi-2::before {
    content: '\\f6ab';
  }

  .fa-wifi-slash::before {
    content: '\\f6ac';
  }

  .fa-wikipedia-w::before {
    content: '\\f266';
  }

  .fa-wind::before {
    content: '\\f72e';
  }

  .fa-wind-turbine::before {
    content: '\\f89b';
  }

  .fa-wind-warning::before {
    content: '\\f776';
  }

  .fa-window::before {
    content: '\\f40e';
  }

  .fa-window-alt::before {
    content: '\\f40f';
  }

  .fa-window-close::before {
    content: '\\f410';
  }

  .fa-window-maximize::before {
    content: '\\f2d0';
  }

  .fa-window-minimize::before {
    content: '\\f2d1';
  }

  .fa-window-restore::before {
    content: '\\f2d2';
  }

  .fa-windows::before {
    content: '\\f17a';
  }

  .fa-windsock::before {
    content: '\\f777';
  }

  .fa-wine-bottle::before {
    content: '\\f72f';
  }

  .fa-wine-glass::before {
    content: '\\f4e3';
  }

  .fa-wine-glass-alt::before {
    content: '\\f5ce';
  }

  .fa-wix::before {
    content: '\\f5cf';
  }

  .fa-wizards-of-the-coast::before {
    content: '\\f730';
  }

  .fa-wolf-pack-battalion::before {
    content: '\\f514';
  }

  .fa-won-sign::before {
    content: '\\f159';
  }

  .fa-wordpress::before {
    content: '\\f19a';
  }

  .fa-wordpress-simple::before {
    content: '\\f411';
  }

  .fa-wpbeginner::before {
    content: '\\f297';
  }

  .fa-wpexplorer::before {
    content: '\\f2de';
  }

  .fa-wpforms::before {
    content: '\\f298';
  }

  .fa-wpressr::before {
    content: '\\f3e4';
  }

  .fa-wreath::before {
    content: '\\f7e2';
  }

  .fa-wrench::before {
    content: '\\f0ad';
  }

  .fa-x-ray::before {
    content: '\\f497';
  }

  .fa-xbox::before {
    content: '\\f412';
  }

  .fa-xing::before {
    content: '\\f168';
  }

  .fa-xing-square::before {
    content: '\\f169';
  }

  .fa-y-combinator::before {
    content: '\\f23b';
  }

  .fa-yahoo::before {
    content: '\\f19e';
  }

  .fa-yammer::before {
    content: '\\f840';
  }

  .fa-yandex::before {
    content: '\\f413';
  }

  .fa-yandex-international::before {
    content: '\\f414';
  }

  .fa-yarn::before {
    content: '\\f7e3';
  }

  .fa-yelp::before {
    content: '\\f1e9';
  }

  .fa-yen-sign::before {
    content: '\\f157';
  }

  .fa-yin-yang::before {
    content: '\\f6ad';
  }

  .fa-yoast::before {
    content: '\\f2b1';
  }

  .fa-youtube::before {
    content: '\\f167';
  }

  .fa-youtube-square::before {
    content: '\\f431';
  }

  .fa-zhihu::before {
    content: '\\f63f';
  }
`;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let KaskusIcon = class extends s {
  constructor() {
    super(...arguments);
    this.variant = "";
    this.color = "grey";
    this.size = "medium";
    this.type = "regular";
  }
  getClass() {
    return `icon fa-${this.variant} ${this.size} ${this.color} ${this.type} ${night}`;
  }
  render() {
    return $`
      <i class="${this.getClass()}" @click=${this._onClick}> </i>
      <slot></slot>
    `;
  }
  _onClick() {
  }
};
KaskusIcon.styles = [
  iconList,
  r`
      :host {
        display: flex;
        align-items: center;
      }
      .icon {
        font-family: 'Font Awesome 5 Pro', 'Font Awesome 5 Brands';
        font-weight: 900;
        font-style: normal;
        font-size: 16px;
        position: relative;
        border-radius: 3px;
        overflow: hidden;
      }

      .outline {
        border: 1px solid;
      }

      .small {
        padding: 4px;
      }
      .medium {
        padding: 8px;
      }
      .large {
        padding: 12px;
      }

      .white {
        color: ${color.white};
      }
      .blue {
        color: ${color.blue};
      }
      .blue.solid {
        color: ${color.white};
        background-color: ${color.blue};
      }
      .blue.nightmode {
        color: ${color.blueNight};
      }
      .blue.solid.nightmode {
        color: ${color.white};
        background-color: ${color.blueNight};
      }
      .blue:hover {
        background-color: ${color.blueHover1};
      }
      .blue.solid:hover {
        background-color: ${color.blueHover};
      }
      .blue.solid.nightmode:hover {
        color: ${color.white};
        background-color: ${color.blueNightHover};
      }

      .grey {
        color: ${color.secondaryGrey};
      }
      .grey.solid {
        color: ${color.white};
        background-color: ${color.secondaryGrey};
      }
      .grey.nightmode {
        color: ${color.secondaryGreyNight};
      }
      .grey.solid.nightmode {
        color: ${color.white};
        background-color: ${color["grey-6"]};
      }
      .grey:hover {
        background-color: ${color["grey-1"]};
      }
      .grey.solid:hover {
        background-color: ${color["grey-4"]};
      }
      .grey.nightmode:hover {
        background-color: ${color["grey-8"]};
      }
      .grey.solid.nightmode:hover {
        color: ${color.white};
        background-color: ${color["grey-5"]};
      }
    `
];
__decorateClass([
  e({ type: String })
], KaskusIcon.prototype, "variant", 2);
__decorateClass([
  e({ type: String })
], KaskusIcon.prototype, "color", 2);
__decorateClass([
  e({ type: String })
], KaskusIcon.prototype, "size", 2);
__decorateClass([
  e({ type: "solid" })
], KaskusIcon.prototype, "type", 2);
KaskusIcon = __decorateClass([
  n(customElementNames.kaskusIcon)
], KaskusIcon);
export { KaskusIcon };
