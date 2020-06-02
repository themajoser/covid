import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistribucionGeograficaComponent } from './components/distribucion-geografica/distribucion-geografica.component';
import { EstadisticasPorPaisComponent } from './components/estadisticas-por-pais/estadisticas-por-pais.component';
import { PaisesConMasMuertesComponent } from './components/paises-con-mas-muertes/paises-con-mas-muertes.component';
import { EvolucionPandemiaComponent } from './components/evolucion-pandemia/evolucion-pandemia.component';


const routes: Routes = [
  { path: 'distribuciongeografica', component: DistribucionGeograficaComponent },
  { path: 'estadisticasporpais', component: EstadisticasPorPaisComponent },
  { path: 'paisesconmasmuertes', component: PaisesConMasMuertesComponent },
  { path: 'evolucionpandemia', component: EvolucionPandemiaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'distribuciongeografica' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
