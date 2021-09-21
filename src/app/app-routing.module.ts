import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { StudyComponent } from './pages/study/study.component';
import { CareerComponent } from './pages/career/career.component';
import { LifeComponent } from './pages/life/life.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'study', component: StudyComponent },
  { path: 'career', component: CareerComponent },
  { path: 'life', component: LifeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
