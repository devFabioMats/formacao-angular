import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const alunosRoutes: any[] = [];

@NgModule({
    imports: [ RouterModule.forChild(alunosRoutes) ],
    exports: [ RouterModule ],
    declarations: [],
    bootstrap: [],
})
export class AlunosRoutingModule { }
