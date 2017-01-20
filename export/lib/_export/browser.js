"use strict";
var ClipboardExtension_1 = require("../extensions/ClipboardExtension");
var ComputeExtension_1 = require("../extensions/ComputeExtension");
var EditingExtension_1 = require("../extensions/EditingExtension");
var HistoryExtension_1 = require("../extensions/HistoryExtension");
var PanExtension_1 = require("../extensions/PanExtension");
var ScrollerExtension_1 = require("../extensions/ScrollerExtension");
var SelectorExtension_1 = require("../extensions/SelectorExtension");
var Point_1 = require("../geom/Point");
var Rect_1 = require("../geom/Rect");
var DefaultGridCell_1 = require("../model/default/DefaultGridCell");
var DefaultGridColumn_1 = require("../model/default/DefaultGridColumn");
var DefaultGridModel_1 = require("../model/default/DefaultGridModel");
var DefaultGridRow_1 = require("../model/default/DefaultGridRow");
var Style_1 = require("../model/styled/Style");
var StyledGridCell_1 = require("../model/styled/StyledGridCell");
var GridRange_1 = require("../model/GridRange");
var GridElement_1 = require("../ui/GridElement");
var GridKernel_1 = require("../ui/GridKernel");
var Widget_1 = require("../ui/Widget");
var EventEmitter_1 = require("../ui/internal/EventEmitter");
var Extensibility_1 = require("../ui/Extensibility");
(function (ext) {
    ext.ClipboardExtension = ClipboardExtension_1.ClipboardExtension;
    ext.ComputeExtension = ComputeExtension_1.ComputeExtension;
    ext.EditingExtension = EditingExtension_1.EditingExtension;
    ext.HistoryExtension = HistoryExtension_1.HistoryExtension;
    ext.PanExtension = PanExtension_1.PanExtension;
    ext.ScrollerExtension = ScrollerExtension_1.ScrollerExtension;
    ext.SelectorExtension = SelectorExtension_1.SelectorExtension;
    ext.Point = Point_1.Point;
    ext.Rect = Rect_1.Rect;
    ext.DefaultGridCell = DefaultGridCell_1.DefaultGridCell;
    ext.DefaultGridColumn = DefaultGridColumn_1.DefaultGridColumn;
    ext.DefaultGridModel = DefaultGridModel_1.DefaultGridModel;
    ext.DefaultGridRow = DefaultGridRow_1.DefaultGridRow;
    ext.Style = Style_1.Style;
    ext.StyledGridCell = StyledGridCell_1.StyledGridCell;
    ext.GridRange = GridRange_1.GridRange;
    ext.GridElement = GridElement_1.GridElement;
    ext.GridKernel = GridKernel_1.GridKernel;
    ext.AbsWidgetBase = Widget_1.AbsWidgetBase;
    ext.EventEmitterBase = EventEmitter_1.EventEmitterBase;
    ext.command = Extensibility_1.command;
    ext.variable = Extensibility_1.variable;
    ext.routine = Extensibility_1.routine;
    ext.renderer = Extensibility_1.renderer;
    ext.visualize = Extensibility_1.visualize;
})(window['cattle'] || (window['cattle'] = {}));
//# sourceMappingURL=browser.js.map