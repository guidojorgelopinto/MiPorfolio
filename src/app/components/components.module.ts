import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "./material.module";

import { SharedModule } from "../shared/shared.module";
import { PrincipalComponent } from "./pages/principal/principal.component";
import { AcercaComponent } from "./pages/acerca/acerca.component";
import { HabilidadesComponent } from "./pages/habilidades/habilidades.component";
import { ServiciosComponent } from "./pages/servicios/servicios.component";
import { ExperienciaComponent } from "./pages/experiencia/experiencia.component";
import { ContactoComponent } from "./pages/contacto/contacto.component";

@NgModule({
    declarations: [
        PrincipalComponent,
        AcercaComponent,
        HabilidadesComponent,
        ServiciosComponent,
        ExperienciaComponent,
        ContactoComponent,
    ],

    imports: [CommonModule, RouterModule, SharedModule, MaterialModule],

    exports: [
        PrincipalComponent,
        AcercaComponent,
        HabilidadesComponent,
        ServiciosComponent,
        ExperienciaComponent,
        ContactoComponent,
    ],
})
export class ComponentsModule {}
