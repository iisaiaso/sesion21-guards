import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';



@NgModule({
    imports:
        [
            MatToolbarModule,
            MatIconModule,
            MatButtonModule,
            MatIconModule,
            MatTableModule
        ],
    exports:
        [
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule
        ],
})
export class MaterialModule { }