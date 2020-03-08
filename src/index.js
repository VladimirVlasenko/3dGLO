'use strict';   
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'promise-polyfill';
import 'fetch-polyfill';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calcMod from './modules/calcMod';
import sendForm from './modules/sendForm';
import formValidation from './modules/formValidation';
import changeImages from './modules/changeImages';

// timer
countTimer('9 march 2020');
// Меню
toggleMenu();
// Popup окно
togglePopup();
//  Табы
tabs();
// слайдер
slider();
// Замена картинок
changeImages();
// Калькулятор на сайте(1)
calcMod();
// отправляем ajax форму
sendForm();
// Валидация форм
formValidation();