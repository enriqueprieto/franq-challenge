import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { HgConsoleFinances } from "../finances";
import { HgConsoleFinancesCurrenciesListComponent } from "./components/list/list.component";
import { HgConsoleFinancesCurrenciesViewComponent } from "./components/view/view.component";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    declarations:[
        HgConsoleFinancesCurrenciesListComponent,
        HgConsoleFinancesCurrenciesViewComponent
    ],
    exports: [
        HgConsoleFinancesCurrenciesListComponent,
        HgConsoleFinancesCurrenciesViewComponent
    ],
    providers: [
        HgConsoleFinances
    ]
})
export class HgConsoleFinancesCurrenciesModule{}