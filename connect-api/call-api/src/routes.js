import React from 'react';
import HomePage from './pages/Homepage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const routes = [
    {
        path: '/',
        axact: true,
        main: () => <HomePage />
    },
    {
        path: '',
        axact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;