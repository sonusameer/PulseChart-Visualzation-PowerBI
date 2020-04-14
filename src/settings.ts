module powerbi.extensibility.visual {
    // powerbi.extensibility.utils.dataview
    import DataViewObjectsParser = utils.dataview.DataViewObjectsParser;
    import ValueFormatterOptions = utils.formatting.ValueFormatterOptions;

    export class PulseChartSettings extends DataViewObjectsParser {
        public popup: PopupSettings = new PopupSettings();
        public dots: DotsSettings = new DotsSettings();
        public gaps: GapsSettings = new GapsSettings();
        public series: SeriesSettings = new SeriesSettings();
        public xAxis: XAxisSettings = new XAxisSettings();
        public yAxis: YAxisSettings = new YAxisSettings;
        public playback: PlaybackSettings = new PlaybackSettings();
        public runnerCounter: RunnerCounterSettings = new RunnerCounterSettings();
    }

    export class PopupSettings {
        public show: boolean = true;
        public alwaysOnTop: boolean = false;
        public width: number = 100;
        public height: number = 80;
        public color: string = "#808181";
        public fontSize: number = 10;
        public fontColor: string = "#ffffff";
        public showTime: boolean = true;
        public showTitle: boolean = true;
        public timeColor: string = "#ffffff";
        public timeFill: string = "#010101";
        public stroke: string = undefined;
    }

    export class DotsSettings {
        public color: string = "#808181";
        public size: number = 5;
        public minSize: number = 5;
        public maxSize: number = 20;
        public transparency: number = 25;
    }

    export class GapsSettings {
        public show: boolean = false;
        public transparency: number = 1;
    }

    export class SeriesSettings {
        public fill: string = "#3779B7";
        public width: number = 2;
    }

    export class AxisSettings {
        public formatterOptions?: ValueFormatterOptions;
        public fontColor: string = "#777777";
        public color: string = "#777777";
        public show: boolean = true;
    }

    export class XAxisSettings extends AxisSettings {
        public backgroundColor: string = "#E1F2F7";
        public position: XAxisPosition = XAxisPosition.Center;
        public dateFormat?: XAxisDateFormat = XAxisDateFormat.TimeOnly;
    }

    export class YAxisSettings extends AxisSettings { }

    export class PlaybackSettings {
        public autoplay: boolean = false;
        public repeat: boolean = false;
        public playSpeed: number = 5;
        public pauseDuration: number = 10;
        public autoplayPauseDuration: number = 0;
        public color: string = "#777777";
        public position: AnimationPosition = null;
    }

    export class RunnerCounterSettings {
        public show: boolean = true;
        public label: string = "";
        public position: RunnerCounterPosition = RunnerCounterPosition.TopRight;
        public fontSize: number = 13;
        public fontColor: string = "#777777";
    }
}
