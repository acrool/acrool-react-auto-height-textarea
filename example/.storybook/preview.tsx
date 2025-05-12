import './reset.css';
import '@acrool/react-auto-height-textarea/dist/index.css';
import '@acrool/react-grid/dist/index.css';

import {GridThemeProvider} from '@acrool/react-grid';
import type {Preview} from '@storybook/react';
import {themes} from '@storybook/theming';
import React from 'react';

import Loader from '../src/components/atoms/Loader';


const preview: Preview = {
    parameters: {
        darkMode: {
            dark: {...themes.dark, appPreviewBg: '#000'},
            light: {...themes.dark, appPreviewBg: '#fff'}
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <GridThemeProvider>
                <Story />
            </GridThemeProvider>
        ),
    ],
};

export default preview;
