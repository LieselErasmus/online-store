import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { OnlineSharedModule } from 'app/shared';
import {
  ProductOrderComponent,
  ProductOrderDetailComponent,
  ProductOrderUpdateComponent,
  ProductOrderDeletePopupComponent,
  ProductOrderDeleteDialogComponent,
  productOrderRoute,
  productOrderPopupRoute
} from './';

const ENTITY_STATES = [...productOrderRoute, ...productOrderPopupRoute];

@NgModule({
  imports: [OnlineSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ProductOrderComponent,
    ProductOrderDetailComponent,
    ProductOrderUpdateComponent,
    ProductOrderDeleteDialogComponent,
    ProductOrderDeletePopupComponent
  ],
  entryComponents: [
    ProductOrderComponent,
    ProductOrderUpdateComponent,
    ProductOrderDeleteDialogComponent,
    ProductOrderDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OnlineProductOrderModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
