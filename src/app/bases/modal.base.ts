import { Injectable, Input } from '@angular/core';
import { Components } from '@ionic/core';
/**
 * Classe modelo para criar modais dentro do aplicativo.
 * 
 * É importante que no construtor da página extendida seja chamada o método `super()`
 */
@Injectable()
export class ModalsExtends{
    @Input() modal:Components.IonModal;
    back(response:any=null){
        this.modal.dismiss(response);
    }
}