import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { CalendarService } from '../services/calendar.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as _moment from 'moment';
import { defaults, pickModes } from '../config';
import { isIonIconsV4 } from '../utils/icons';
import * as i0 from "@angular/core";
import * as i1 from "../services/calendar.service";
import * as i2 from "@angular/common";
import * as i3 from "@ionic/angular";
import * as i4 from "@angular/forms";
import * as i5 from "./calendar-week.component";
import * as i6 from "./month.component";
import * as i7 from "./month-picker.component";
function CalendarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-button", 5);
    i0.ɵɵlistener("click", function CalendarComponent_ng_template_1_Template_ion_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.switchView()); });
    i0.ɵɵpipe(1, "date");
    i0.ɵɵtext(2);
    i0.ɵɵelement(3, "ion-icon", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", i0.ɵɵpipeBind2(1, 3, ctx_r0.getDate(ctx_r0.monthOpt.original.time), ctx_r0.MONTH_DATE_FORMAT));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0._monthFormat(ctx_r0.monthOpt.original.time), " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", ctx_r0._view === "days" ? ctx_r0._compatibleIcons.caretDown : ctx_r0._compatibleIcons.caretUp);
} }
function CalendarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵpipe(1, "date");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", i0.ɵɵpipeBind2(1, 2, ctx_r2.getDate(ctx_r2.monthOpt.original.time), ctx_r2.MONTH_DATE_FORMAT));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2._monthFormat(ctx_r2.monthOpt.original.time), " ");
} }
function CalendarComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-button", 8);
    i0.ɵɵlistener("click", function CalendarComponent_ng_template_4_Template_ion_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.prev()); });
    i0.ɵɵelement(1, "ion-icon", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ion-button", 10);
    i0.ɵɵlistener("click", function CalendarComponent_ng_template_4_Template_ion_button_click_2_listener() { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.next()); });
    i0.ɵɵelement(3, "ion-icon", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r3.canBack());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", ctx_r3._compatibleIcons.chevronBack);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", !ctx_r3.canNext());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", ctx_r3._compatibleIcons.chevronForward);
} }
const _c0 = function () { return []; };
function CalendarComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelement(0, "ion-calendar-week", 11);
    i0.ɵɵelementStart(1, "ion-calendar-month", 12);
    i0.ɵɵlistener("ngModelChange", function CalendarComponent_ng_template_5_Template_ion_calendar_month_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12._calendarMonthValue = $event); })("change", function CalendarComponent_ng_template_5_Template_ion_calendar_month_change_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.onChanged($event)); })("swipe", function CalendarComponent_ng_template_5_Template_ion_calendar_month_swipe_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.swipeEvent($event)); })("select", function CalendarComponent_ng_template_5_Template_ion_calendar_month_select_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.select.emit($event)); })("selectStart", function CalendarComponent_ng_template_5_Template_ion_calendar_month_selectStart_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.selectStart.emit($event)); })("selectEnd", function CalendarComponent_ng_template_5_Template_ion_calendar_month_selectEnd_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.selectEnd.emit($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("weekArray", ctx_r4._d.weekdays || i0.ɵɵpureFunction0(8, _c0))("weekStart", ctx_r4._d.weekStart || 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("componentMode", true)("ngModel", ctx_r4._calendarMonthValue)("month", ctx_r4.monthOpt)("readonly", ctx_r4.readonly)("pickMode", ctx_r4._d.pickMode)("color", ctx_r4._d.color);
} }
function CalendarComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-calendar-month-picker", 13);
    i0.ɵɵlistener("select", function CalendarComponent_ng_template_6_Template_ion_calendar_month_picker_select_0_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.monthOnSelect($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("color", ctx_r6._d.color)("monthFormat", ctx_r6._options.monthPickerFormat || i0.ɵɵpureFunction0(3, _c0))("month", ctx_r6.monthOpt);
} }
const moment = _moment.default || _moment;
export const ION_CAL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CalendarComponent),
    multi: true,
};
export class CalendarComponent {
    get showToggleButtons() {
        return this._showToggleButtons;
    }
    set showToggleButtons(value) {
        this._showToggleButtons = value;
    }
    get showMonthPicker() {
        return this._showMonthPicker;
    }
    set showMonthPicker(value) {
        this._showMonthPicker = value;
    }
    set options(value) {
        this._options = value;
        this.initOpt();
        if (this.monthOpt && this.monthOpt.original) {
            this.monthOpt = this.createMonth(this.monthOpt.original.time);
        }
    }
    get options() {
        return this._options;
    }
    constructor(calSvc) {
        this.calSvc = calSvc;
        this._view = 'days';
        this._calendarMonthValue = [null, null];
        this._showToggleButtons = true;
        this._showMonthPicker = true;
        this.format = defaults.DATE_FORMAT;
        this.type = 'string';
        this.readonly = false;
        this.change = new EventEmitter();
        this.monthChange = new EventEmitter();
        this.select = new EventEmitter();
        this.selectStart = new EventEmitter();
        this.selectEnd = new EventEmitter();
        this.MONTH_DATE_FORMAT = 'MMMM yyyy';
        this._onChanged = () => { };
        this._onTouched = () => { };
        if (isIonIconsV4()) {
            this._compatibleIcons = {
                caretDown: 'md-arrow-dropdown',
                caretUp: 'md-arrow-dropup',
                chevronBack: 'ios-arrow-back',
                chevronForward: 'ios-arrow-forward',
            };
        }
        else {
            this._compatibleIcons = {
                caretDown: 'caret-down-outline',
                caretUp: 'caret-up-outline',
                chevronBack: 'chevron-back-outline',
                chevronForward: 'chevron-forward-outline',
            };
        }
    }
    ngOnInit() {
        this.initOpt();
        this.monthOpt = this.createMonth(new Date().getTime());
    }
    getViewDate() {
        return this._handleType(this.monthOpt.original.time);
    }
    getDate(date) {
        return new Date(date);
    }
    setViewDate(value) {
        this.monthOpt = this.createMonth(this._payloadToTimeNumber(value));
    }
    switchView() {
        this._view = this._view === 'days' ? 'month' : 'days';
    }
    prev() {
        if (this._view === 'days') {
            this.backMonth();
        }
        else {
            this.prevYear();
        }
    }
    next() {
        if (this._view === 'days') {
            this.nextMonth();
        }
        else {
            this.nextYear();
        }
    }
    prevYear() {
        if (moment(this.monthOpt.original.time).year() === 1970) {
            return;
        }
        const backTime = moment(this.monthOpt.original.time).subtract(1, 'year').valueOf();
        this.monthOpt = this.createMonth(backTime);
    }
    nextYear() {
        const nextTime = moment(this.monthOpt.original.time).add(1, 'year').valueOf();
        this.monthOpt = this.createMonth(nextTime);
    }
    nextMonth() {
        const nextTime = moment(this.monthOpt.original.time).add(1, 'months').valueOf();
        this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(nextTime),
        });
        this.monthOpt = this.createMonth(nextTime);
    }
    canNext() {
        if (!this._d.to || this._view !== 'days') {
            return true;
        }
        return this.monthOpt.original.time < moment(this._d.to).valueOf();
    }
    backMonth() {
        const backTime = moment(this.monthOpt.original.time).subtract(1, 'months').valueOf();
        this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(backTime),
        });
        this.monthOpt = this.createMonth(backTime);
    }
    canBack() {
        if (!this._d.from || this._view !== 'days') {
            return true;
        }
        return this.monthOpt.original.time > moment(this._d.from).valueOf();
    }
    monthOnSelect(month) {
        this._view = 'days';
        const newMonth = moment(this.monthOpt.original.time).month(month).valueOf();
        this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(newMonth),
        });
        this.monthOpt = this.createMonth(newMonth);
    }
    onChanged($event) {
        if (this._d.pickMode === pickModes.SINGLE) {
            const date = this._handleType($event[0].time);
            this._onChanged(date);
            this.change.emit(date);
        }
        else if (this._d.pickMode === pickModes.RANGE) {
            if ($event[0] && $event[1]) {
                const rangeDate = {
                    from: this._handleType($event[0].time),
                    to: this._handleType($event[1].time),
                };
                this._onChanged(rangeDate);
                this.change.emit(rangeDate);
            }
        }
        else if (this._d.pickMode === pickModes.MULTI) {
            const dates = [];
            for (let i = 0; i < $event.length; i++) {
                if ($event[i] && $event[i].time) {
                    dates.push(this._handleType($event[i].time));
                }
            }
            this._onChanged(dates);
            this.change.emit(dates);
        }
        else {
        }
    }
    swipeEvent($event) {
        const isNext = $event.deltaX < 0;
        if (isNext && this.canNext()) {
            this.nextMonth();
        }
        else if (!isNext && this.canBack()) {
            this.backMonth();
        }
    }
    _payloadToTimeNumber(value) {
        let date;
        if (this.type === 'string') {
            date = moment(value, this.format);
        }
        else {
            date = moment(value);
        }
        return date.valueOf();
    }
    _monthFormat(date) {
        // @ts-ignore
        return moment(date).format(this._d.monthFormat.replace(/y/g, 'Y'));
    }
    initOpt() {
        if (this._options && typeof this._options.showToggleButtons === 'boolean') {
            this.showToggleButtons = this._options.showToggleButtons;
        }
        if (this._options && typeof this._options.showMonthPicker === 'boolean') {
            this.showMonthPicker = this._options.showMonthPicker;
            if (this._view !== 'days' && !this.showMonthPicker) {
                this._view = 'days';
            }
        }
        this._d = this.calSvc.safeOpt(this._options || {});
    }
    createMonth(date) {
        return this.calSvc.createMonthsByPeriod(date, 1, this._d)[0];
    }
    _createCalendarDay(value) {
        return this.calSvc.createCalendarDay(this._payloadToTimeNumber(value), this._d);
    }
    _handleType(value) {
        const date = moment(value);
        if (this.type === 'string') {
            return date.format(this.format);
        }
        else if (this.type === 'js-date') {
            return date.toDate();
        }
        else if (this.type === 'moment') {
            return date;
        }
        else if (this.type === 'time') {
            return date.valueOf();
        }
        else if (this.type === 'object') {
            return date.toObject();
        }
        return date;
    }
    writeValue(obj) {
        this._writeValue(obj);
        if (obj) {
            if (this._calendarMonthValue[0]) {
                this.monthOpt = this.createMonth(this._calendarMonthValue[0].time);
            }
            else {
                this.monthOpt = this.createMonth(new Date().getTime());
            }
        }
    }
    registerOnChange(fn) {
        this._onChanged = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    _writeValue(value) {
        if (!value) {
            this._calendarMonthValue = [null, null];
            return;
        }
        if (this._d.pickMode === 'single') {
            this._calendarMonthValue[0] = this._createCalendarDay(value);
        }
        else if (this._d.pickMode === 'range') {
            if (value.from) {
                this._calendarMonthValue[0] = value.from ? this._createCalendarDay(value.from) : null;
            }
            if (value.to) {
                this._calendarMonthValue[1] = value.to ? this._createCalendarDay(value.to) : null;
            }
        }
        else if (this._d.pickMode === 'multi') {
            if (Array.isArray(value)) {
                this._calendarMonthValue = value.map(e => {
                    return this._createCalendarDay(e);
                });
            }
            else {
                this._calendarMonthValue = [null, null];
            }
        }
        else {
        }
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(i0.ɵɵdirectiveInject(i1.CalendarService)); };
CalendarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CalendarComponent, selectors: [["ion-calendar"]], inputs: { format: "format", type: "type", readonly: "readonly", options: "options" }, outputs: { change: "change", monthChange: "monthChange", select: "select", selectStart: "selectStart", selectEnd: "selectEnd" }, features: [i0.ɵɵProvidersFeature([ION_CAL_VALUE_ACCESSOR])], decls: 8, vars: 5, consts: [[1, "title"], [3, "ngIf", "ngIfElse"], ["title", ""], [3, "ngIf"], ["monthPicker", ""], ["type", "button", "fill", "clear", 1, "switch-btn", 3, "click"], [1, "arrow-dropdown", 3, "name"], [1, "switch-btn"], ["type", "button", "fill", "clear", 1, "back", 3, "disabled", "click"], ["slot", "icon-only", "size", "small", 3, "name"], ["type", "button", "fill", "clear", 1, "forward", 3, "disabled", "click"], ["color", "transparent", 3, "weekArray", "weekStart"], [3, "componentMode", "ngModel", "month", "readonly", "pickMode", "color", "ngModelChange", "change", "swipe", "select", "selectStart", "selectEnd"], [3, "color", "monthFormat", "month", "select"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, CalendarComponent_ng_template_1_Template, 4, 6, "ng-template", 1);
        i0.ɵɵtemplate(2, CalendarComponent_ng_template_2_Template, 3, 5, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, CalendarComponent_ng_template_4_Template, 4, 4, "ng-template", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, CalendarComponent_ng_template_5_Template, 2, 9, "ng-template", 1);
        i0.ɵɵtemplate(6, CalendarComponent_ng_template_6_Template, 1, 4, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        const _r5 = i0.ɵɵreference(7);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx._showMonthPicker)("ngIfElse", _r1);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx._showToggleButtons);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx._view === "days")("ngIfElse", _r5);
    } }, dependencies: [i2.NgIf, i3.IonButton, i3.IonIcon, i4.NgControlStatus, i4.NgModel, i5.CalendarWeekComponent, i6.MonthComponent, i7.MonthPickerComponent, i2.DatePipe], styles: ["[_nghost-%COMP%] {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  display: inline-block;\n  background-color: #fff;\n  width: 100%;\n}\n\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 0 40px 0 40px;\n  overflow: hidden;\n}\n\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .forward[_ngcontent-%COMP%], [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .switch-btn[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  float: left;\n  min-height: 32px;\n  margin: 0;\n  padding: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  font-size: 15px;\n}\n\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .forward[_ngcontent-%COMP%] {\n  color: #757575;\n}\n\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  margin-left: -100%;\n  left: -40px;\n  width: 40px;\n}\n\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .forward[_ngcontent-%COMP%] {\n  margin-left: -40px;\n  right: -40px;\n  width: 40px;\n}\n\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .switch-btn[_ngcontent-%COMP%] {\n  --margin-top: 0;\n  --margin-bottom: 0;\n  --margin-start: auto;\n  --margin-end: auto;\n  width: 100%;\n  text-align: center;\n  line-height: 32px;\n  color: #757575;\n}\n\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .switch-btn[_ngcontent-%COMP%]   .arrow-dropdown[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarComponent, [{
        type: Component,
        args: [{ selector: 'ion-calendar', providers: [ION_CAL_VALUE_ACCESSOR], template: `
    <div class="title">
      <ng-template [ngIf]="_showMonthPicker" [ngIfElse]="title">
        <ion-button
          type="button"
          fill="clear"
          class="switch-btn"
          [attr.aria-label]="getDate(monthOpt.original.time) | date : MONTH_DATE_FORMAT"
          (click)="switchView()">
          {{ _monthFormat(monthOpt.original.time) }}
          <ion-icon
            class="arrow-dropdown"
            [name]="_view === 'days' ? _compatibleIcons.caretDown : _compatibleIcons.caretUp"></ion-icon>
        </ion-button>
      </ng-template>
      <ng-template #title>
        <div class="switch-btn" [attr.aria-label]="getDate(monthOpt.original.time) | date : MONTH_DATE_FORMAT">
          {{ _monthFormat(monthOpt.original.time) }}
        </div>
      </ng-template>
      <ng-template [ngIf]="_showToggleButtons">
        <ion-button type="button" fill="clear" class="back" [disabled]="!canBack()" (click)="prev()">
          <ion-icon slot="icon-only" size="small" [name]="_compatibleIcons.chevronBack"></ion-icon>
        </ion-button>
        <ion-button type="button" fill="clear" class="forward" [disabled]="!canNext()" (click)="next()">
          <ion-icon slot="icon-only" size="small" [name]="_compatibleIcons.chevronForward"></ion-icon>
        </ion-button>
      </ng-template>
    </div>
    <ng-template [ngIf]="_view === 'days'" [ngIfElse]="monthPicker">
      <ion-calendar-week color="transparent" [weekArray]="_d.weekdays || []" [weekStart]="_d.weekStart || 1">
      </ion-calendar-week>

      <ion-calendar-month
        [componentMode]="true"
        [(ngModel)]="_calendarMonthValue"
        [month]="monthOpt"
        [readonly]="readonly"
        (change)="onChanged($event)"
        (swipe)="swipeEvent($event)"
        (select)="select.emit($event)"
        (selectStart)="selectStart.emit($event)"
        (selectEnd)="selectEnd.emit($event)"
        [pickMode]="_d.pickMode"
        [color]="_d.color">
      </ion-calendar-month>
    </ng-template>

    <ng-template #monthPicker>
      <ion-calendar-month-picker
        [color]="_d.color"
        [monthFormat]="_options.monthPickerFormat || []"
        (select)="monthOnSelect($event)"
        [month]="monthOpt">
      </ion-calendar-month-picker>
    </ng-template>
  `, styles: [":host {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  display: inline-block;\n  background-color: #fff;\n  width: 100%;\n}\n\n:host .title {\n  padding: 0 40px 0 40px;\n  overflow: hidden;\n}\n\n:host .title .back,\n:host .title .forward,\n:host .title .switch-btn {\n  display: block;\n  position: relative;\n  float: left;\n  min-height: 32px;\n  margin: 0;\n  padding: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  font-size: 15px;\n}\n\n:host .title .back,\n:host .title .forward {\n  color: #757575;\n}\n\n:host .title .back {\n  margin-left: -100%;\n  left: -40px;\n  width: 40px;\n}\n\n:host .title .forward {\n  margin-left: -40px;\n  right: -40px;\n  width: 40px;\n}\n\n:host .title .switch-btn {\n  --margin-top: 0;\n  --margin-bottom: 0;\n  --margin-start: auto;\n  --margin-end: auto;\n  width: 100%;\n  text-align: center;\n  line-height: 32px;\n  color: #757575;\n}\n\n:host .title .switch-btn .arrow-dropdown {\n  margin-left: 5px;\n}"] }]
    }], function () { return [{ type: i1.CalendarService }]; }, { format: [{
            type: Input
        }], type: [{
            type: Input
        }], readonly: [{
            type: Input
        }], change: [{
            type: Output
        }], monthChange: [{
            type: Output
        }], select: [{
            type: Output
        }], selectStart: [{
            type: Output
        }], selectEnd: [{
            type: Output
        }], options: [{
            type: Input
        }] }); })();
//# sourceMappingURL=calendar.component.js.map