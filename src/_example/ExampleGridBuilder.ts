import { DefaultGridModel } from '../model/default/DefaultGridModel';
import { FlexCell } from './../model/flexi/FlexCell';
import { DefaultGridRow } from '../model/default/DefaultGridRow';
import { GridModel } from './../model/GridModel';
import { GridRow } from '../model/GridRow';
import { GridCell } from '../model/GridCell';


export class ExampleGridBuilder
{
    constructor(private lines:number = 100, private cols:number = 52)
    {
    }

    public build():GridModel
    {
        let cells = [] as GridCell[];

        this.createColumnRow(cells);

        for (let i = 0; i < this.lines; i++)
        {
            this.createResourceRow(cells, i);
        }

        return new DefaultGridModel(cells, [], []);
    }

    private createColumnRow(cells:GridCell[]):void
    {
        cells.push(new FlexCell({
            colRef: 0,
            rowRef: 0,
            value: '+',
        }));

        for (let i = 0; i < this.cols; i++)
        {
            cells.push(new FlexCell({
                colRef: i + 1,
                rowRef: 0,
                value: 'Vertical #' + (i + 1),
            }));
        }
    }

    private createResourceRow(cells:GridCell[], line:number):void
    {
        cells.push(new FlexCell({
            colRef: 0,
            rowRef: line + 1,
            value: `Horizontal #${line}`,
        }));

        for (let i = 0; i < this.cols; i++)
        {
            cells.push(new FlexCell({
                colRef: i + 1,
                rowRef: line + 1,
                value: (line + i).toString(),
            }));
        }
    }
}