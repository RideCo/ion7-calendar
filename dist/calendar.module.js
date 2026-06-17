import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { CalendarController } from './calendar.controller';
import { DEFAULT_CALENDAR_OPTIONS } from './services/calendar-options.provider';
import { CalendarService } from './services/calendar.service';
import { CALENDAR_COMPONENTS } from './components';
import * as i0 from "@angular/core";
import * as i1 from "./components/calendar.modal";
import * as i2 from "./components/calendar-week.component";
import * as i3 from "./components/month.component";
import * as i4 from "./components/calendar.component";
import * as i5 from "./components/month-picker.component";
export function calendarController(modalCtrl, calSvc) {
    return new CalendarController(modalCtrl, calSvc);
}
export class CalendarModule {
    static forRoot(defaultOptions = {}) {
        return {
            ngModule: CalendarModule,
            providers: [{ provide: DEFAULT_CALENDAR_OPTIONS, useValue: defaultOptions }],
        };
    }
}
CalendarModule.ɵfac = function CalendarModule_Factory(t) { return new (t || CalendarModule)(); };
CalendarModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CalendarModule });
CalendarModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        CalendarService,
        {
            provide: CalendarController,
            useFactory: calendarController,
            deps: [ModalController, CalendarService],
        },
    ], imports: [CommonModule, IonicModule, FormsModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, IonicModule, FormsModule],
                declarations: CALENDAR_COMPONENTS,
                exports: CALENDAR_COMPONENTS,
                entryComponents: CALENDAR_COMPONENTS,
                providers: [
                    CalendarService,
                    {
                        provide: CalendarController,
                        useFactory: calendarController,
                        deps: [ModalController, CalendarService],
                    },
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CalendarModule, { declarations: [i1.CalendarModal, i2.CalendarWeekComponent, i3.MonthComponent, i4.CalendarComponent, i5.MonthPickerComponent], imports: [CommonModule, IonicModule, FormsModule], exports: [i1.CalendarModal, i2.CalendarWeekComponent, i3.MonthComponent, i4.CalendarComponent, i5.MonthPickerComponent] }); })();
//# sourceMappingURL=calendar.module.js.map