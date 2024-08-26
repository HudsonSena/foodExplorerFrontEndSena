import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

import { AuthRoutes } from './auth.routes';
import { AppAdminRoutes } from './appadmin.routes';
import { AppUserRoutes } from './appuser.routes';
import { useEffect } from 'react';
import { api } from '../services/api';

export function Routes() {
    const { user, admin, signOut } = useAuth();

    useEffect(() => {
        api.get('/users/validated').catch((error) => {
            if (error.response?.status == 401) {
                console.log(error);
                signOut()
            }
        })
    }, [])

    return (
        <BrowserRouter>
            {
                !user ? <AuthRoutes />
                    : admin == 1 ? <AppAdminRoutes />
                        : <AppUserRoutes />
            }
        </BrowserRouter>
    )
}