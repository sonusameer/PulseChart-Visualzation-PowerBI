module powerbi.extensibility.visual.test {
    import VisualBuilderBase = powerbi.extensibility.utils.test.VisualBuilderBase;

    // PulseChart1459209850231
    import VisualClass = powerbi.extensibility.visual.PulseChart1459209850231.PulseChart;
    export class PulseChartBuilder extends VisualBuilderBase<VisualClass> {
        constructor(width: number, height: number) {
            super(width, height);
        }

        protected build(options: VisualConstructorOptions) {
            return new VisualClass(options);
        }

        public get visualInstance(): VisualClass {
            return this.visual;
        }

        public get settings(): VisualClass {
            return this.visual;
        }

        public get mainElement(): JQuery {
            return this.element.children(".pulseChart");
        }
        public get gaps(): JQuery {
            return this.mainElement
                .children("g.gaps")
                .children("g.gap");
        }

        public get animationDot(): JQuery {
            return this.mainElement
                .children("g.dots")
                .children("circle.animationDot");
        }

        public get chart(): JQuery {
            return this.mainElement.children("g.chart");
        }

        public get lineNode(): JQuery {
            return this.chart.children("g.lineNode");
        }

        public get lineContainer(): JQuery {
            return this.lineNode.children("g.lineContainer");
        }

        public get linePath() {
            return this.lineContainer.children("path.line");
        }

        public get dotsContainer(): JQuery {
            return this.lineNode.children("g.dotsContainer");
        }

        public get dotsContainerDot(): JQuery {
            return this.dotsContainer.children("circle.dot");
        }

        public get xAxisNode(): JQuery {
            return this.lineNode.children("g.xAxisNode");
        }

        public get xAxisNodeTick(): JQuery {
            return this.xAxisNode.children("g.tick");
        }

        public get xAxisNodeRect(): JQuery {
            return this.xAxisNodeTick.children("rect");
        }

        public get yAxis(): JQuery {
            return this.mainElement.children("g.y.axis");
        }

        public get yAxisTicks(): JQuery {
            return this.yAxis.children("g.tick");
        }

        public get tooltipContainer(): JQuery {
            return this.lineNode.children(".tooltipContainer");
        }

        public get tooltipContainerTooltip(): JQuery {
            return this.tooltipContainer.children("g.Tooltip");
        }

        public get animationPlay(): JQuery {
            return this.mainElement
                .children("g")
                .children("g.animationPlay");
        }

        public get animationPrev(): JQuery {
            return this.mainElement
                .children("g")
                .children("g.animationPrev");
        }

        public get animationNext(): JQuery {
            return this.mainElement
                .children("g")
                .children("g.animationNext");
        }
    }
}
