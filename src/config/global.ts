import { GlobalConfig } from '@eui/core';

export const GLOBAL: GlobalConfig = {
    appTitle: 'CSDR-app',
    i18n: {
        i18nService: {
            defaultLanguage: 'en',
            languages: ['en', 'fr'],
        },
        i18nLoader: {
            i18nFolders: ['i18n-eui', 'i18n-ecl', 'i18n'],
        },
    },
    user: {
        defaultUserPreferences: {
            dashboard: { },
            lang: 'en',
        },
    },
};
