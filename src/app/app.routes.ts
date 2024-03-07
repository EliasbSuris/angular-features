import { Routes } from '@angular/router';
import { ObjectValues } from '../types/utils.types';

const APP_ROUTES = {
  SINGLE_CONTENT_PROJECTION: 'content-projection/single-content-projection',
} as const;

type AppRoute = ObjectValues<typeof APP_ROUTES>;

const DEFAULT_ROUTE: AppRoute = APP_ROUTES.SINGLE_CONTENT_PROJECTION;

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: DEFAULT_ROUTE,
  },
  {
    path: APP_ROUTES.SINGLE_CONTENT_PROJECTION,
    loadChildren: () => import('./pages/single-content-projection/single-content-projection.routes'),
  },
];
