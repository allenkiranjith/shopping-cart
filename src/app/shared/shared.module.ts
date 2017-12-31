import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppStateService } from './services/app-state.service';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [ HeaderComponent, FooterComponent ],
  exports: [ HeaderComponent, FooterComponent ],
  providers: [ AppStateService ]
})
export class SharedModule { }
