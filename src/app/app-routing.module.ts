import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrincipalComponent } from "./components/pages/principal/principal.component";
import { AcercaComponent } from "./components/pages/acerca/acerca.component";
import { HabilidadesComponent } from "./components/pages/habilidades/habilidades.component";
import { ServiciosComponent } from "./components/pages/servicios/servicios.component";
import { ExperienciaComponent } from "./components/pages/experiencia/experiencia.component";
import { ContactoComponent } from "./components/pages/contacto/contacto.component";

const routes: Routes = [
    { path: "", redirectTo: "/principal", pathMatch: "full" },
    { path: "principal", component: PrincipalComponent },
    { path: "acerca", component: AcercaComponent },
    { path: "habilidades", component: HabilidadesComponent },
    { path: "servicios", component: ServiciosComponent },
    { path: "experiencia", component: ExperienciaComponent },
    { path: "contacto", component: ContactoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
