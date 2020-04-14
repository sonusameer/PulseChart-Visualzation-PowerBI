module powerbi.extensibility.visual {
    // d3
    import Selection = d3.Selection;

    export module pulseChartUtils {
        export const DimmedOpacity: number = 0.5;
        export const DefaultOpacity: number = 1.0;

        export function getFillOpacity(selected: boolean, highlight: boolean, hasSelection: boolean, hasPartialHighlights: boolean): number {
            if ((hasPartialHighlights && !highlight) || (hasSelection && !selected)) {
                return DimmedOpacity;
            }
            return DefaultOpacity;
        }

        export function AddOnTouchClick(selection: Selection<any>, callback: (data: any, index: number) => any): Selection<any> {
            let preventDefaultCallback = (data: any, index: number): void => {
                (d3.event as MouseEvent).preventDefault();
                (d3.event as MouseEvent).stopPropagation();
                callback(data, index);
            };
            return selection
                .on("click", preventDefaultCallback)
                .on("touchstart", preventDefaultCallback);
        }
    }

    export module PulseChartDataLabelUtils {
        export function getDefaultPulseChartLabelSettings(): ChartDataLabelsSettings {
            return {
                show: false,
                position: 1, /* PointLabelPosition.Above, */
                displayUnits: 0,
                precision: undefined,
                labelColor: "#777777",
                fontSize: 9,
                labelDensity: "50",
            };
        }
    }
}
