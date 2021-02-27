/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    value: ComponentFramework.PropertyTypes.NumberProperty;
    Settings: ComponentFramework.PropertyTypes.EnumProperty<"0" | "1" | "2" | "3">;
    decimalPrecision: ComponentFramework.PropertyTypes.EnumProperty<"0" | "1" | "2" | "3" | "4">;
    maxValue: ComponentFramework.PropertyTypes.NumberProperty;
    minValue: ComponentFramework.PropertyTypes.NumberProperty;
    colorIf: ComponentFramework.PropertyTypes.StringProperty;
    backgroundColorIf: ComponentFramework.PropertyTypes.StringProperty;
    colorElse: ComponentFramework.PropertyTypes.StringProperty;
    backgroundColorElse: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
    value?: number;
}
