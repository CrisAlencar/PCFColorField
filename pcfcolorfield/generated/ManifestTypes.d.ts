/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    value: ComponentFramework.PropertyTypes.NumberProperty;
    decimalPrecision: ComponentFramework.PropertyTypes.EnumProperty<"0" | "1" | "2" | "3" | "4">;
    maxValue: ComponentFramework.PropertyTypes.NumberProperty;
    minValue: ComponentFramework.PropertyTypes.NumberProperty;
    color: ComponentFramework.PropertyTypes.StringProperty;
    backgroundColor: ComponentFramework.PropertyTypes.StringProperty;
    Settings: ComponentFramework.PropertyTypes.EnumProperty<"0" | "1" | "2" | "3">;
}
export interface IOutputs {
    value?: number;
}
