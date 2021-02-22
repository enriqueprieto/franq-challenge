import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { HgConsoleFinances } from "../finances";
import { HgConsoleFinancesBitcoinsListComponent } from "./components/list/list.component";
import { HgConsoleFinancesBitcoinsViewComponent } from "./components/view/view.component";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        HgConsoleFinancesBitcoinsListComponent,
        HgConsoleFinancesBitcoinsViewComponent
    ],
    exports: [
        HgConsoleFinancesBitcoinsListComponent,
        HgConsoleFinancesBitcoinsViewComponent
    ],
    providers: [
        HgConsoleFinances
    ]
})
export class HgConsoleFinancesBitcoinsModule{}