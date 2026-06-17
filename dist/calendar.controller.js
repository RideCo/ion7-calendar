import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarModal } from './components/calendar.modal';
import { CalendarService } from './services/calendar.service';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "./services/calendar.service";
export class CalendarController {
    constructor(modalCtrl, calSvc) {
        this.modalCtrl = modalCtrl;
        this.calSvc = calSvc;
    }
    /**
     * @deprecated
     * @param {CalendarModalOptions} calendarOptions
     * @param {ModalOptions} modalOptions
     * @returns {any}
     */
    openCalendar(calendarOptions, modalOptions = {}) {
        const options = this.calSvc.safeOpt(calendarOptions);
        return this.modalCtrl
            .create({
            component: CalendarModal,
            componentProps: {
                options,
            },
            ...modalOptions,
        })
            .then((calendarModal) => {
            calendarModal.present();
            return calendarModal.onDidDismiss().then((event) => {
                return event.data ? Promise.resolve(event.data) : Promise.reject('cancelled');
            });
        });
    }
}
CalendarController.ɵfac = function CalendarController_Factory(t) { return new (t || CalendarController)(i0.ɵɵinject(i1.ModalController), i0.ɵɵinject(i2.CalendarService)); };
CalendarController.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CalendarController, factory: CalendarController.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarController, [{
        type: Injectable
    }], function () { return [{ type: i1.ModalController }, { type: i2.CalendarService }]; }, null); })();
//# sourceMappingURL=calendar.controller.js.map