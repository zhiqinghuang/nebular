/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngd-methods-block',
  template: `
    <div class="block-container">
      <p class="block-title"><a [routerLink]="" fragment="{{ className }}Methods" ngdFragment></a> Methods</p>
      <div class="table-container">
        <table class="table" *ngIf="classMethods?.length > 0">
          <thead>
          <tr>
            <td>Name</td>
            <td>Description</td>
          </tr>
          </thead>
          <tbody>
          <tr *ngFor="let method of classMethods">
            <ng-container *ngIf="method.shortDescription || method.description">
              <td>{{ method.name }} <br><i *ngIf="method.isStatic">static method</i></td>
              <td>
                <div class="method-signature">
                  <div *ngIf="method.params.length > 0"><i>parameters:</i>
                    <span *ngFor="let param of method.params; let last = last">
                      {{param.name}}: <code>{{param.type}}</code><span *ngIf="!last">,</span>
                    </span>
                  </div>
                  <div *ngIf="method.type.length > 0 && method.type[0] !== 'void'">
                    <i>return type:</i>
                    <code>{{ method.type.join(",\\n") }}</code>
                  </div>
                </div>
                <div *ngIf="method.shortDescription || method.description" class="method-description" ngdDescription>
                  {{method.shortDescription}} <br> {{ method.description }}
                </div>
              </td>
            </ng-container>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class NgdMethodsBlockComponent {

  classMethods: any;
  className: string;

  @Input('source')
  set setSource(source: any) {
    this.classMethods = source.methods;
    this.className = source.name;
  };
}
