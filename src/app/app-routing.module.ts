import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetAppComponent } from './pages/pet-app/pet-app.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component'
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component'
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component'
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component'
import { SignUpComponent } from './pages/sign-up/sign-up.component'

const routes: Routes = [
  { path: 'contact/:id/edit', component: ContactEditPageComponent },
  { path: 'contact/edit', component: ContactEditPageComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'contact', component: ContactsPageComponent },
  { path: 'statistic', component: StatisticPageComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '', component: PetAppComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
