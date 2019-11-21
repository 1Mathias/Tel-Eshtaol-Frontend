import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewspostComponent } from './newspost/newspost.component';

export const routing=RouterModule.forRoot([
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path: 'login',component:LoginComponent},
    {path: 'newspost',component:NewspostComponent}

]);