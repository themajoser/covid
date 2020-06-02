import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistribucionGeograficaComponent } from './components/distribucion-geografica/distribucion-geografica.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EstadisticasPorPaisComponent } from './components/estadisticas-por-pais/estadisticas-por-pais.component';
import { PaisesConMasMuertesComponent } from './components/paises-con-mas-muertes/paises-con-mas-muertes.component';
import { EvolucionPandemiaComponent } from './components/evolucion-pandemia/evolucion-pandemia.component';

@NgModule({
  declarations: [
    AppComponent,
    DistribucionGeograficaComponent,
    NavbarComponent,
    EstadisticasPorPaisComponent,
    PaisesConMasMuertesComponent,
    EvolucionPandemiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
