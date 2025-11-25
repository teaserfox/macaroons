import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { BtnHoverDirective } from './directives/btn-hover.directive';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { ShopComponent } from './components/shop/shop.component';
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';

registerLocaleData(localeRu);


@NgModule({
  declarations: [
    AppComponent,
    BtnHoverDirective,
    AdvantageComponent,
    ShopComponent,
    TruncateTextPipe,
    PhoneFormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ru-RU' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
