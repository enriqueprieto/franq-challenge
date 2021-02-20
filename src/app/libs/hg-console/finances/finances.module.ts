import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { HgConsoleApiModule } from "../api/api.module";
import { HgConsoleFinancesSectionComponent } from "./components/section/section.component";
import { HgConsoleFinances } from "./finances";
import { HgConsoleFinancesCurrenciesModule } from './currencies/currencies.module';
@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        HgConsoleFinancesCurrenciesModule,
        HgConsoleApiModule
    ],
    declarations: [HgConsoleFinancesSectionComponent],
    exports: [
        HgConsoleFinancesSectionComponent,
        HgConsoleFinancesCurrenciesModule
    ],
    providers: [HgConsoleFinances]
})
export class HgConsoleFinancesModule{}