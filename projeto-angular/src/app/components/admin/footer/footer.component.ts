import { Component } from '@angular/core';
import { LogoComponent } from "../../shared/logo/logo.component";
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-footer',
    template:`
            <mat-toolbar class = "footer" color="primary">
                <span>
                   <strong> Developed by WSM </strong>
                    - Angular.16
                </span>
            </mat-toolbar>
    `,
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [CommonModule, MatToolbarModule]
})
export class FooterComponent {



}
