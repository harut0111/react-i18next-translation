import React from 'react';
import logo from '../logo.svg';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


export default function Main() {

    const { t } = useTranslation();
    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    return(
        <div>
            <nav>
                <button onClick={()=>handleClick('en')}> English </button>
                <button onClick={()=>handleClick('arb')}> العربية </button>
                <button onClick={()=>handleClick('arm')}> Հայերեն </button>
            </nav>
            <header className="App-header">
                <h3>{t('Welcome.1')} {t('React.1')}</h3>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    )
}