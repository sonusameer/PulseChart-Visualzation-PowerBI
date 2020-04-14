module powerbi.extensibility.visual {

    export module PulseChartAxisPropertiesHelper {
        export function getCategoryAxisProperties(dataViewMetadata: DataViewMetadata, axisTitleOnByDefault?: boolean): DataViewObject {
            let toReturn: DataViewObject = {};

            if (!dataViewMetadata) {
                return toReturn;
            }

            if (dataViewMetadata.objects) {
                let categoryAxisObject: DataViewObject = dataViewMetadata.objects["categoryAxis"];

                if (categoryAxisObject) {
                    toReturn = {
                        show: categoryAxisObject["show"],
                        axisType: categoryAxisObject["axisType"],
                        axisScale: categoryAxisObject["axisScale"],
                        start: categoryAxisObject["start"],
                        end: categoryAxisObject["end"],
                        showAxisTitle: categoryAxisObject["showAxisTitle"] == null ? axisTitleOnByDefault : categoryAxisObject["showAxisTitle"],
                        axisStyle: categoryAxisObject["axisStyle"],
                        labelColor: categoryAxisObject["labelColor"],
                        labelDisplayUnits: categoryAxisObject["labelDisplayUnits"],
                        labelPrecision: categoryAxisObject["labelPrecision"],
                        duration: categoryAxisObject["duration"],
                    };
                }
            }

            return toReturn;
        }

        export function getValueAxisProperties(dataViewMetadata: DataViewMetadata, axisTitleOnByDefault?: boolean): DataViewObject {
            let toReturn: DataViewObject = {};

            if (!dataViewMetadata) {
                return toReturn;
            }

            if (dataViewMetadata.objects) {
                let valueAxisObject: DataViewObject = dataViewMetadata.objects["valueAxis"];
                if (valueAxisObject) {
                    toReturn = {
                        show: valueAxisObject["show"],
                        position: valueAxisObject["position"],
                        axisScale: valueAxisObject["axisScale"],
                        start: valueAxisObject["start"],
                        end: valueAxisObject["end"],
                        showAxisTitle: valueAxisObject["showAxisTitle"] == null ? axisTitleOnByDefault : valueAxisObject["showAxisTitle"],
                        axisStyle: valueAxisObject["axisStyle"],
                        labelColor: valueAxisObject["labelColor"],
                        labelDisplayUnits: valueAxisObject["labelDisplayUnits"],
                        labelPrecision: valueAxisObject["labelPrecision"],
                        secShow: valueAxisObject["secShow"],
                        secPosition: valueAxisObject["secPosition"],
                        secAxisScale: valueAxisObject["secAxisScale"],
                        secStart: valueAxisObject["secStart"],
                        secEnd: valueAxisObject["secEnd"],
                        secShowAxisTitle: valueAxisObject["secShowAxisTitle"],
                        secAxisStyle: valueAxisObject["secAxisStyle"],
                        secLabelColor: valueAxisObject["secLabelColor"],
                        secLabelDisplayUnits: valueAxisObject["secLabelDisplayUnits"],
                        secLabelPrecision: valueAxisObject["secLabelPrecision"],
                    };
                }
            }

            return toReturn;
        }
    }
}
