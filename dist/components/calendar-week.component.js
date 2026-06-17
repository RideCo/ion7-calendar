import { Component, Input } from '@angular/core';
import { defaults } from '../config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ionic/angular";
function CalendarWeekComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const w_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(w_r1);
} }
export class CalendarWeekComponent {
    constructor() {
        this._weekArray = defaults.WEEKS_FORMAT;
        this._displayWeekArray = this._weekArray;
        this._weekStart = 0;
        this.color = defaults.COLOR;
    }
    set weekArray(value) {
        if (value && value.length === 7) {
            this._weekArray = [...value];
            this.adjustSort();
        }
    }
    set weekStart(value) {
        if (value === 0 || value === 1) {
            this._weekStart = value;
            this.adjustSort();
        }
    }
    adjustSort() {
        if (this._weekStart === 1) {
            const cacheWeekArray = [...this._weekArray];
            // @ts-ignore
            cacheWeekArray.push(cacheWeekArray.shift());
            this._displayWeekArray = [...cacheWeekArray];
        }
        else if (this._weekStart === 0) {
            this._displayWeekArray = [...this._weekArray];
        }
    }
}
CalendarWeekComponent.ɵfac = function CalendarWeekComponent_Factory(t) { return new (t || CalendarWeekComponent)(); };
CalendarWeekComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CalendarWeekComponent, selectors: [["ion-calendar-week"]], inputs: { color: "color", weekArray: "weekArray", weekStart: "weekStart" }, decls: 3, vars: 5, consts: [["no-border-top", ""], [4, "ngFor", "ngForOf"]], template: function CalendarWeekComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ion-toolbar", 0)(1, "ul");
        i0.ɵɵtemplate(2, CalendarWeekComponent_li_2_Template, 2, 1, "li", 1);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵclassMap("week-toolbar " + ctx.color);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap("week-title " + ctx.color);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx._displayWeekArray);
    } }, dependencies: [i1.NgForOf, i2.IonToolbar], styles: ["[_nghost-%COMP%]   .toolbar-background-md[_ngcontent-%COMP%], [_nghost-%COMP%]   .toolbar-background-ios[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n[_nghost-%COMP%]   .week-toolbar[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-top: 0;\n}\n\n[_nghost-%COMP%]   .week-toolbar.primary[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n}\n\n[_nghost-%COMP%]   .week-toolbar.secondary[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n}\n\n[_nghost-%COMP%]   .week-toolbar.danger[_ngcontent-%COMP%] {\n  --background: var(--ion-color-danger);\n}\n\n[_nghost-%COMP%]   .week-toolbar.dark[_ngcontent-%COMP%] {\n  --background: var(--ion-color-dark);\n}\n\n[_nghost-%COMP%]   .week-toolbar.light[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n}\n\n[_nghost-%COMP%]   .week-toolbar.transparent[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\n[_nghost-%COMP%]   .week-toolbar.toolbar-md[_ngcontent-%COMP%] {\n  min-height: 44px;\n}\n\n[_nghost-%COMP%]   .week-title[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 44px;\n  width: 100%;\n  padding: 15px 0;\n  color: #fff;\n  font-size: 0.9em;\n}\n\n[_nghost-%COMP%]   .week-title.light[_ngcontent-%COMP%], [_nghost-%COMP%]   .week-title.transparent[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n\n[_nghost-%COMP%]   .week-title[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: block;\n  float: left;\n  width: 14%;\n  text-align: center;\n}\n\n[_nghost-%COMP%]   .week-title[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(7n), [_nghost-%COMP%]   .week-title[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(7n + 1) {\n  width: 15%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarWeekComponent, [{
        type: Component,
        args: [{ selector: 'ion-calendar-week', template: `
    <ion-toolbar [class]="'week-toolbar ' + color" no-border-top>
      <ul [class]="'week-title ' + color">
        <li *ngFor="let w of _displayWeekArray">{{ w }}</li>
      </ul>
    </ion-toolbar>
  `, styles: [":host .toolbar-background-md,\n:host .toolbar-background-ios {\n  background: transparent;\n}\n\n:host .week-toolbar {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-top: 0;\n}\n\n:host .week-toolbar.primary {\n  --background: var(--ion-color-primary);\n}\n\n:host .week-toolbar.secondary {\n  --background: var(--ion-color-secondary);\n}\n\n:host .week-toolbar.danger {\n  --background: var(--ion-color-danger);\n}\n\n:host .week-toolbar.dark {\n  --background: var(--ion-color-dark);\n}\n\n:host .week-toolbar.light {\n  --background: var(--ion-color-light);\n}\n\n:host .week-toolbar.transparent {\n  --background: transparent;\n}\n\n:host .week-toolbar.toolbar-md {\n  min-height: 44px;\n}\n\n:host .week-title {\n  margin: 0;\n  height: 44px;\n  width: 100%;\n  padding: 15px 0;\n  color: #fff;\n  font-size: 0.9em;\n}\n\n:host .week-title.light,\n:host .week-title.transparent {\n  color: #9e9e9e;\n}\n\n:host .week-title li {\n  list-style-type: none;\n  display: block;\n  float: left;\n  width: 14%;\n  text-align: center;\n}\n\n:host .week-title li:nth-of-type(7n),\n:host .week-title li:nth-of-type(7n + 1) {\n  width: 15%;\n}"] }]
    }], function () { return []; }, { color: [{
            type: Input
        }], weekArray: [{
            type: Input
        }], weekStart: [{
            type: Input
        }] }); })();
//# sourceMappingURL=calendar-week.component.js.map