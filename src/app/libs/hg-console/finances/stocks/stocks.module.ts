import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { HgConsoleFinances } from "../finances";
import { HgConsoleFinancesStocksListComponent } from './components/list/list.component';
import { HgConsoleFinancesStocksViewComponent } from './components/view/view.component';
@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        HgConsoleFinancesStocksListComponent,
        HgConsoleFinancesStocksViewComponent
    ],
    exports: [
        HgConsoleFinancesStocksListComponent,
        HgConsoleFinancesStocksViewComponent
    ],
    providers: [
        HgConsoleFinances
    ]
})
export class HgConsoleFinancesStocksModule{}