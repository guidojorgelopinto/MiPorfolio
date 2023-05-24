import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../components/material.module";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HeroComponent } from "./hero/hero.component";

@NgModule({
    declarations: [HeaderComponent, FooterComponent, HeroComponent],

    imports: [CommonModule, RouterModule, MaterialModule],

    exports: [HeaderComponent, FooterComponent, HeroComponent],
})
export class SharedModule {}
