// Assets need to be imported into the module, or they are not available
import { NgModule } from "@angular/core";
import { CommonModule, hookAction } from "@c8y/ngx-components";
import { ChristmasComponent } from "./christmas.component";

@NgModule({
  declarations: [ChristmasComponent],
  imports: [CommonModule],
  exports: [],
  providers: [
    hookAction({
      component: ChristmasComponent,
    }),
  ],
})
export class ChristmasModule {}
