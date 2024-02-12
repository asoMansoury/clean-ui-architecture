import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug:true,
        lng:'en',
        fallbackLng:"en",
        returnObjects:true,
        resources:{
            en:{
                translation:{
                    Header:{
                        Home:"Home",
                        Stats:"Stats",
                        About:"About"
                    }
                }
            },
            fr:{
                translation:{
                    Header:{
                        Home:"Maison",
                        Stats:"Statistiques",
                        About:"À propos"
                    }
                }
            }
        }
    })