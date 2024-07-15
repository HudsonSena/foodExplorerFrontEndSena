import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

import { AuthRoutes } from './auth.routes';
import { AppAdminRoutes } from './appadmin.routes';
import { AppUserRoutes } from './appuser.routes';

export function Routes() {
    const { user, admin } = useAuth();

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