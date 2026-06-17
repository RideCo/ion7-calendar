import { ChangeDetectorRef, Component, ElementRef, HostBinding, Input, Renderer2, ViewChild, } from '@angular/core';
import { IonContent, ModalController, NavParams } from '@ionic/angular';
import { CalendarService } from '../services/calendar.service';
import * as _moment from 'moment';
import { pickModes } from '../config';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "../services/calendar.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "./calendar-week.component";
import * as i6 from "./month.component";
const _c0 = ["months"];
function CalendarModal_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0._d.closeLabel);
} }
function CalendarModal_ion_icon_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 13);
} }
function CalendarModal_ion_button_9_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r6._d.clearLabel);
} }
function CalendarModal_ion_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-button", 14);
    i0.ɵɵlistener("click", function CalendarModal_ion_button_9_Template_ion_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.clear()); });
    i0.ɵɵtemplate(1, CalendarModal_ion_button_9_span_1_Template, 2, 1, "span", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r2.canClear());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2._d.clearLabel !== "");
} }
function CalendarModal_ion_button_10_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r9._d.doneLabel);
} }
function CalendarModal_ion_button_10_ion_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 17);
} }
function CalendarModal_ion_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-button", 15);
    i0.ɵɵlistener("click", function CalendarModal_ion_button_10_Template_ion_button_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.done()); });
    i0.ɵɵtemplate(1, CalendarModal_ion_button_10_span_1_Template, 2, 1, "span", 3);
    i0.ɵɵtemplate(2, CalendarModal_ion_button_10_ion_icon_2_Template, 1, 0, "ion-icon", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r3.canDone());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3._d.doneLabel !== "" && !ctx_r3._d.doneIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3._d.doneIcon);
} }
function CalendarModal_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "h4", 19);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ion-calendar-month", 20);
    i0.ɵɵlistener("change", function CalendarModal_ng_template_16_Template_ion_calendar_month_change_3_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.onChange($event)); })("ngModelChange", function CalendarModal_ng_template_16_Template_ion_calendar_month_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.datesTemp = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const month_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("month-invisible", !ctx_r5.scrolledToInitialPosition);
    i0.ɵɵattribute("data-month", ctx_r5._monthFormatYYYYMM(month_r13.original.date))("id", "month-" + i_r14);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r5._monthFormat(month_r13.original.date));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("month", month_r13)("pickMode", ctx_r5._d.pickMode || "")("isSaveHistory", ctx_r5._d.isSaveHistory || false)("id", ctx_r5._d.id)("color", ctx_r5._d.color || "")("ngModel", ctx_r5.datesTemp);
} }
const _c1 = [[["", "sub-header", ""]]];
const _c2 = function () { return []; };
const _c3 = function (a0) { return { "multi-selection": a0 }; };
const _c4 = ["[sub-header]"];
const moment = _moment.default || _moment;
const NUM_OF_MONTHS_TO_CREATE = 6;
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class CalendarModal {
    constructor(_renderer, _elementRef, params, modalCtrl, ref, calSvc) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.ref = ref;
        this.calSvc = calSvc;
        this.ionPage = true;
        // @ts-ignore
        this.datesTemp = [null, null];
        this.scrolledToInitialPosition = false;
        this._scrollLock = false;
        this.prependingMonths = false;
    }
    ngOnInit() {
        this.init();
        this.initDefaultDate();
    }
    async ngAfterViewInit() {
        this.findCssClass();
        if (this._d.canBackwardsSelected) {
            await this.backwardsMonth();
        }
        await this.scrollToDefaultDate();
    }
    init() {
        this._d = this.calSvc.safeOpt(this.options);
        this._d.showAdjacentMonthDay = false;
        this.step = this._d.step;
        if (this.step < this.calSvc.DEFAULT_STEP) {
            this.step = this.calSvc.DEFAULT_STEP;
        }
        const dateToUse = this.getDateToUse();
        this.calendarMonths = this.calSvc.createMonthsByPeriod(moment(dateToUse).startOf('month').subtract(2, 'months').valueOf(), this.findInitMonthNumber(this._d.defaultScrollTo, dateToUse) + this.step, this._d);
    }
    initDefaultDate() {
        const { pickMode, defaultDate, defaultDateRange, defaultDates } = this._d;
        if (pickMode === pickModes.SINGLE) {
            if (defaultDate) {
                this.datesTemp[0] = this.calSvc.createCalendarDay(this._getDayTime(defaultDate), this._d);
            }
        }
        else if (pickMode === pickModes.RANGE) {
            if (defaultDateRange) {
                if (defaultDateRange.from) {
                    this.datesTemp[0] = this.calSvc.createCalendarDay(this._getDayTime(defaultDateRange.from), this._d);
                }
                if (defaultDateRange.to) {
                    this.datesTemp[1] = this.calSvc.createCalendarDay(this._getDayTime(defaultDateRange.to), this._d);
                }
            }
        }
        else if (pickMode === pickModes.MULTI) {
            if (defaultDates && defaultDates.length) {
                this.datesTemp = defaultDates.map(e => this.calSvc.createCalendarDay(this._getDayTime(e), this._d));
            }
        }
        else {
            // @ts-ignore
            this.datesTemp = [null, null];
        }
    }
    findCssClass() {
        const { cssClass } = this._d;
        if (cssClass) {
            cssClass.split(' ').forEach((_class) => {
                if (_class.trim() !== '')
                    this._renderer.addClass(this._elementRef.nativeElement, _class);
            });
        }
    }
    onChange(data) {
        const { pickMode, autoDone } = this._d;
        this.datesTemp = data;
        this.ref.detectChanges();
        if (pickMode !== pickModes.MULTI && autoDone && this.canDone()) {
            this.done();
        }
        this.repaintDOM();
    }
    onCancel() {
        this.modalCtrl.dismiss(null, 'cancel');
    }
    done() {
        const { pickMode } = this._d;
        this.modalCtrl.dismiss(this.calSvc.wrapResult(this.datesTemp, pickMode), 'done');
    }
    canDone() {
        if (!Array.isArray(this.datesTemp)) {
            return false;
        }
        const { pickMode, defaultEndDateToStartDate } = this._d;
        if (pickMode === pickModes.SINGLE) {
            return !!(this.datesTemp[0] && this.datesTemp[0].time);
        }
        else if (pickMode === pickModes.RANGE) {
            if (defaultEndDateToStartDate) {
                return !!(this.datesTemp[0] && this.datesTemp[0].time);
            }
            return !!(this.datesTemp[0] && this.datesTemp[1]) && !!(this.datesTemp[0].time && this.datesTemp[1].time);
        }
        else if (pickMode === pickModes.MULTI) {
            return this.datesTemp.length > 0 && this.datesTemp.every(e => !!e && !!e.time);
        }
        else {
            return false;
        }
    }
    clear() {
        // @ts-ignore
        this.datesTemp = [null, null];
        this.modalCtrl.dismiss(null, 'clear');
    }
    canClear() {
        return !!this.datesTemp[0];
    }
    nextMonth(event) {
        if (this.prependingMonths) {
            return;
        }
        const len = this.calendarMonths.length;
        const final = this.calendarMonths[len - 1];
        const nextTime = moment(final.original.time).add(1, 'M').valueOf();
        const rangeEnd = this._d.to ? moment(this._d.to).subtract(1, 'M') : 0;
        if (len <= 0 || (rangeEnd !== 0 && moment(final.original.time).isAfter(rangeEnd))) {
            event.target.disabled = true;
            return;
        }
        this.calendarMonths.push(...this.calSvc.createMonthsByPeriod(nextTime, NUM_OF_MONTHS_TO_CREATE, this._d));
        event.target.complete();
        this.repaintDOM();
    }
    async backwardsMonth() {
        const first = this.calendarMonths[0];
        if (first.original.time <= 0) {
            this._d.canBackwardsSelected = false;
            return;
        }
        const firstTime = (this.actualFirstTime = moment(first.original.time)
            .subtract(NUM_OF_MONTHS_TO_CREATE, 'M')
            .valueOf());
        this.calendarMonths.unshift(...this.calSvc.createMonthsByPeriod(firstTime, NUM_OF_MONTHS_TO_CREATE, this._d));
        this.ref.detectChanges();
        await this.repaintDOM();
    }
    async scrollToDate(date) {
        const dateToUse = this.getDateToUse();
        const monthSelector = moment(dateToUse).format('YYYY-MM');
        const element = document.querySelector(`[data-month="${monthSelector}"]`);
        if (!element) {
            return;
        }
        try {
            this._scrollLock = true;
            await this.waitForElementTop(element);
            const offsetMargin = 10;
            const defaultMonthScrollPosition = element.offsetTop - offsetMargin;
            await this.content.scrollToPoint(0, defaultMonthScrollPosition, 10);
            this._scrollLock = false;
            this.scrolledToInitialPosition = true;
        }
        catch (e) {
            this._scrollLock = false;
            this.scrolledToInitialPosition = true;
            console.error(`Could not scroll to month with index: ${monthSelector}`);
        }
    }
    async waitForElementTop(element, timeout = 2000) {
        const start = Date.now();
        let now = 0;
        return new Promise((resolve, reject) => {
            const interval = setInterval(() => {
                if (element.offsetTop) {
                    clearInterval(interval);
                    resolve(element);
                }
                now = Date.now();
                if (now - start >= timeout) {
                    reject(`Could not find the element  within ${timeout} ms`);
                }
            }, 50);
        });
    }
    async scrollToDefaultDate() {
        await this.scrollToDate(this._d.defaultScrollTo);
    }
    async onScroll($event) {
        if (this._scrollLock || this.prependingMonths) {
            return;
        }
        const threshold = 100;
        const scrollElem = await this.content.getScrollElement();
        const currentY = $event.detail.scrollTop;
        const isOnTopOfScreen = currentY < threshold;
        if (!isOnTopOfScreen) {
            return;
        }
        this.prependingMonths = true;
        this._scrollLock = true;
        const heightBeforeMonthPrepend = scrollElem.scrollHeight;
        await this.backwardsMonth();
        const heightAfterMonthPrepend = scrollElem.scrollHeight;
        const heightAdded = heightAfterMonthPrepend - heightBeforeMonthPrepend;
        const scrollPositionToGo = heightAdded + 100; // NOTE: idk why 100 works
        await this.content.scrollToPoint(0, scrollPositionToGo, 1);
        this._scrollLock = false;
        setTimeout(() => {
            this.prependingMonths = false;
        }, 500);
    }
    /**
     * In some older Safari versions (observed at Mac's Safari 10.0), there is an issue where style updates to
     * shadowRoot descendants don't cause a browser repaint.
     * See for more details: https://github.com/Polymer/polymer/issues/4701
     */
    repaintDOM() {
        return this.content.getScrollElement().then(scrollElem => {
            // Update scrollElem to ensure that height of the container changes as Months are appended/prepended
            scrollElem.style.zIndex = '2';
            scrollElem.style.zIndex = 'initial';
            // Update monthsEle to ensure selected state is reflected when tapping on a day
            this.monthsEle.nativeElement.style.zIndex = '2';
            this.monthsEle.nativeElement.style.zIndex = 'initial';
        });
    }
    findInitMonthNumber(date, fromDate = this._d.from) {
        let startDate = this.actualFirstTime ? moment(this.actualFirstTime) : moment(fromDate);
        const defaultScrollTo = moment(date);
        const isAfter = defaultScrollTo.isAfter(startDate);
        if (!isAfter)
            return -1;
        if (this.showYearPicker) {
            startDate = moment(new Date(this.year, 0, 1));
        }
        return defaultScrollTo.diff(startDate, 'month');
    }
    _getDayTime(date) {
        return moment(moment(date).format('YYYY-MM-DD')).valueOf();
    }
    _monthFormat(date) {
        // @ts-ignore
        return moment(date).format(this._d.monthFormat.replace(/y/g, 'Y'));
    }
    _monthFormatYYYYMM(date) {
        // @ts-ignore
        return moment(date).format('YYYY-MM');
    }
    trackByIndex(index, momentDate) {
        return momentDate.original ? momentDate.original.time : index;
    }
    getDateToUse() {
        const date = this._d.defaultDate || this._d.defaultScrollTo;
        return date ? moment(date).toDate() : this._d.defaultFrom;
    }
}
CalendarModal.ɵfac = function CalendarModal_Factory(t) { return new (t || CalendarModal)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NavParams), i0.ɵɵdirectiveInject(i1.ModalController), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.CalendarService)); };
CalendarModal.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CalendarModal, selectors: [["ion-calendar-modal"]], viewQuery: function CalendarModal_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(IonContent, 5);
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.monthsEle = _t.first);
    } }, hostVars: 2, hostBindings: function CalendarModal_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ion-page", ctx.ionPage);
    } }, inputs: { options: "options" }, ngContentSelectors: _c4, decls: 19, vars: 16, consts: [[3, "color"], ["slot", "start"], ["type", "button", "slot", "icon-only", "fill", "clear", 3, "click"], [4, "ngIf"], ["name", "close", 4, "ngIf"], ["slot", "end"], ["type", "button", "fill", "clear", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "slot", "icon-only", "fill", "clear", 3, "disabled", "click", 4, "ngIf"], [3, "color", "weekArray", "weekStart"], [1, "calendar-page", 3, "scrollEvents", "ngClass", "ionScroll"], ["months", ""], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], ["threshold", "25%", "position", "bottom", 3, "ionInfinite"], ["name", "close"], ["type", "button", "fill", "clear", 3, "disabled", "click"], ["type", "button", "slot", "icon-only", "fill", "clear", 3, "disabled", "click"], ["name", "checkmark", 4, "ngIf"], ["name", "checkmark"], [1, "month-box"], [1, "text-center", "month-title"], [3, "month", "pickMode", "isSaveHistory", "id", "color", "ngModel", "change", "ngModelChange"]], template: function CalendarModal_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵelementStart(0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1)(3, "ion-button", 2);
        i0.ɵɵlistener("click", function CalendarModal_Template_ion_button_click_3_listener() { return ctx.onCancel(); });
        i0.ɵɵtemplate(4, CalendarModal_span_4_Template, 2, 1, "span", 3);
        i0.ɵɵtemplate(5, CalendarModal_ion_icon_5_Template, 1, 0, "ion-icon", 4);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(6, "ion-title");
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "ion-buttons", 5);
        i0.ɵɵtemplate(9, CalendarModal_ion_button_9_Template, 2, 2, "ion-button", 6);
        i0.ɵɵtemplate(10, CalendarModal_ion_button_10_Template, 3, 3, "ion-button", 7);
        i0.ɵɵelementEnd()();
        i0.ɵɵprojection(11);
        i0.ɵɵelement(12, "ion-calendar-week", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "ion-content", 9);
        i0.ɵɵlistener("ionScroll", function CalendarModal_Template_ion_content_ionScroll_13_listener($event) { return ctx.onScroll($event); });
        i0.ɵɵelementStart(14, "div", null, 10);
        i0.ɵɵtemplate(16, CalendarModal_ng_template_16_Template, 4, 11, "ng-template", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "ion-infinite-scroll", 12);
        i0.ɵɵlistener("ionInfinite", function CalendarModal_Template_ion_infinite_scroll_ionInfinite_17_listener($event) { return ctx.nextMonth($event); });
        i0.ɵɵelement(18, "ion-infinite-scroll-content");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx._d.color || "");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx._d.closeLabel !== "" && !ctx._d.closeIcon);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx._d.closeIcon);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx._d.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !!ctx._d.clearLabel);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx._d.autoDone);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("color", ctx._d.color || "")("weekArray", ctx._d.weekdays || i0.ɵɵpureFunction0(13, _c2))("weekStart", ctx._d.weekStart || 1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("scrollEvents", true)("ngClass", i0.ɵɵpureFunction1(14, _c3, ctx._d.pickMode === "multi"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.calendarMonths)("ngForTrackBy", ctx.trackByIndex);
    } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i1.IonButton, i1.IonButtons, i1.IonContent, i1.IonHeader, i1.IonIcon, i1.IonInfiniteScroll, i1.IonInfiniteScrollContent, i1.IonTitle, i1.IonToolbar, i4.NgControlStatus, i4.NgModel, i5.CalendarWeekComponent, i6.MonthComponent], styles: ["[_nghost-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n\n[_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%]    > .select-icon-inner[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-text[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n\n[_nghost-%COMP%]   ion-select.select-ios[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n\n[_nghost-%COMP%]   .calendar-page[_ngcontent-%COMP%] {\n  background-color: #fbfbfb;\n}\n\n[_nghost-%COMP%]   .month-box[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding-bottom: 1em;\n  border-bottom: 1px solid #f1f1f1;\n}\n\n[_nghost-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 1.1rem;\n  display: block;\n  text-align: center;\n  margin: 1rem 0 0;\n  color: #929292;\n}\n\n[_nghost-%COMP%]   .month-invisible[_ngcontent-%COMP%] {\n  opacity: 0;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarModal, [{
        type: Component,
        args: [{ selector: 'ion-calendar-modal', template: `
    <ion-header>
      <ion-toolbar [color]="_d.color || ''">
        <ion-buttons slot="start">
          <ion-button type="button" slot="icon-only" fill="clear" (click)="onCancel()">
            <span *ngIf="_d.closeLabel !== '' && !_d.closeIcon">{{ _d.closeLabel }}</span>
            <ion-icon *ngIf="_d.closeIcon" name="close"></ion-icon>
          </ion-button>
        </ion-buttons>

        <ion-title>{{ _d.title }}</ion-title>

        <ion-buttons slot="end">
          <ion-button type="button" *ngIf="!!_d.clearLabel" fill="clear" [disabled]="!canClear()" (click)="clear()">
            <span *ngIf="_d.clearLabel !== ''">{{ _d.clearLabel }}</span>
          </ion-button>
          <ion-button
            type="button"
            slot="icon-only"
            *ngIf="!_d.autoDone"
            fill="clear"
            [disabled]="!canDone()"
            (click)="done()">
            <span *ngIf="_d.doneLabel !== '' && !_d.doneIcon">{{ _d.doneLabel }}</span>
            <ion-icon *ngIf="_d.doneIcon" name="checkmark"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>

      <ng-content select="[sub-header]"></ng-content>

      <ion-calendar-week [color]="_d.color || ''" [weekArray]="_d.weekdays || []" [weekStart]="_d.weekStart || 1">
      </ion-calendar-week>
    </ion-header>

    <ion-content
      (ionScroll)="onScroll($event)"
      class="calendar-page"
      [scrollEvents]="true"
      [ngClass]="{ 'multi-selection': _d.pickMode === 'multi' }">
      <div #months>
        <ng-template ngFor let-month [ngForOf]="calendarMonths" [ngForTrackBy]="trackByIndex" let-i="index">
          <div class="month-box"
               [class.month-invisible]="!scrolledToInitialPosition"
               [attr.data-month]="_monthFormatYYYYMM(month.original.date)"
               [attr.id]="'month-' + i">
            <h4 class="text-center month-title">{{ _monthFormat(month.original.date) }}</h4>
            <ion-calendar-month
              [month]="month"
              [pickMode]="_d.pickMode || ''"
              [isSaveHistory]="_d.isSaveHistory || false"
              [id]="_d.id"
              [color]="_d.color || ''"
              (change)="onChange($event)"
              [(ngModel)]="datesTemp">
            </ion-calendar-month>
          </div>
        </ng-template>
      </div>

      <ion-infinite-scroll threshold="25%" (ionInfinite)="nextMonth($event)" position="bottom">
        <ion-infinite-scroll-content></ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  `, styles: [":host ion-select {\n  max-width: unset;\n}\n\n:host ion-select .select-icon > .select-icon-inner,\n:host ion-select .select-text {\n  color: #fff !important;\n}\n\n:host ion-select.select-ios {\n  max-width: unset;\n}\n\n:host .calendar-page {\n  background-color: #fbfbfb;\n}\n\n:host .month-box {\n  display: inline-block;\n  width: 100%;\n  padding-bottom: 1em;\n  border-bottom: 1px solid #f1f1f1;\n}\n\n:host h4 {\n  font-weight: 400;\n  font-size: 1.1rem;\n  display: block;\n  text-align: center;\n  margin: 1rem 0 0;\n  color: #929292;\n}\n\n:host .month-invisible {\n  opacity: 0;\n}"] }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.NavParams }, { type: i1.ModalController }, { type: i0.ChangeDetectorRef }, { type: i2.CalendarService }]; }, { content: [{
            type: ViewChild,
            args: [IonContent]
        }], monthsEle: [{
            type: ViewChild,
            args: ['months']
        }], ionPage: [{
            type: HostBinding,
            args: ['class.ion-page']
        }], options: [{
            type: Input
        }] }); })();
//# sourceMappingURL=calendar.modal.js.map