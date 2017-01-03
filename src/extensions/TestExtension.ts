import { CellModel } from '../model/CellModel';
import { GridKernel } from './../ui/GridKernel';
import { GridElement, GridMouseEvent, GridMouseDragEvent } from './../ui/GridElement';
import { GridModelIndex } from '../model/GridModelIndex';
import { KeyInput } from '../input/KeyInput';
import { Point } from '../geom/Point';
import { RectLike, Rect } from '../geom/Rect';
import { MouseInput } from '../input/MouseInput';
import { MouseDragEventSupport } from '../input/MouseDragEventSupport';
import { MouseDragEvent } from '../input/MouseDragEvent';
import * as Tether from 'tether';
import * as Dom from '../misc/Dom';


export class TestExtension
{
    private layer:HTMLElement;

    constructor(private grid:GridElement, private kernel:GridKernel)
    {
        //kernel.override('select', (cells:string[], autoScroll:boolean, original:Function) =>
        //{
        //    original.call(this, cells, autoScroll);
        //});
    }
}