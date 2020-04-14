module powerbi.extensibility.visual {
    // d3
    import Selection = d3.Selection;

    // powerbi.extensibility.utils.interactivity
    import appendClearCatcher = powerbi.extensibility.utils.interactivity.appendClearCatcher;
    import SelectableDataPoint = powerbi.extensibility.utils.interactivity.SelectableDataPoint;
    import IInteractiveBehavior = powerbi.extensibility.utils.interactivity.IInteractiveBehavior;
    import IInteractivityService = powerbi.extensibility.utils.interactivity.IInteractivityService;
    import ISelectionHandler = powerbi.extensibility.utils.interactivity.ISelectionHandler;

    export class PulseChartWebBehavior implements IInteractiveBehavior {
        private selection: Selection<any>;
        private selectionHandler: ISelectionHandler;
        private interactivityService: IInteractivityService;
        private hasHighlights: boolean;
        private onSelectCallback: any;

        public bindEvents(options: BehaviorOptions, selectionHandler: ISelectionHandler): void {
            let clearCatcher: Selection<any> = options.clearCatcher;
            let selection: Selection<any> = this.selection = options.selection;
            this.onSelectCallback = options.onSelectCallback;
            this.selectionHandler = selectionHandler;
            this.interactivityService = options.interactivityService;
            this.hasHighlights = options.hasHighlights;

            selection.call(pulseChartUtils.AddOnTouchClick, function (d: SelectableDataPoint) {
                selectionHandler.handleSelection(d, (d3.event as KeyboardEvent).ctrlKey);
            });

            clearCatcher.call(pulseChartUtils.AddOnTouchClick, function () {
                selectionHandler.handleClearSelection();
            });
        }

        public setSelection(d: SelectableDataPoint): void {
            this.selectionHandler.handleSelection(d, false);
        }

        public renderSelection(hasSelection: boolean): void {
            if (this.onSelectCallback) {
                this.onSelectCallback();
            }
        }
    }

}
