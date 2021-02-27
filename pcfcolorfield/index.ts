import * as React from "react";
import * as ReactDOM from "react-dom";
import { NumberInput } from "./components/PCFFieldControl";
import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class pcfcolorfield implements ComponentFramework.StandardControl<IInputs, IOutputs> {
	context: ComponentFramework.Context<IInputs>;
	container: HTMLDivElement;
	textInput: HTMLInputElement;
	notifyOutputChanged: () => void;
	NumberValue: number | null;
	
	/**
	 * Empty constructor.
	 */
	constructor() {

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {
		this.context = context;
		this.container = container;
		this.notifyOutputChanged = notifyOutputChanged;
		this.render();	
		
		
	}



	onTextBlur = (newValue: Number | null): void => {		
		if(newValue == null || isNaN(Number(newValue)))
		{
			this.NumberValue = null;				
		}	
		else
		{
			this.NumberValue = Number(newValue);			
		}			
		
		this.notifyOutputChanged();
	};


	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void {		
		this.context = context;		
		this.render();
		
	}

	public render(): void {
		const value = this.context.parameters.value.raw;
		let style = this.CheckMaxMinValues();
		ReactDOM.render(
			React.createElement(NumberInput, {		
				value: value,				
				decimalPlaces: Number(this.context.parameters.decimalPrecision.raw),			
				fontColor: style[0],
				backgroundColor: style[1],
				onChange: this.onTextBlur,
			}), this.container);
	}

	/**
	 * name
	 */
	public CheckMaxMinValues(): string[] {
		const maxValue = this.context.parameters.maxValue.raw;
		const color = this.context.parameters.color.raw!;
		const backgroundColor = this.context.parameters.backgroundColor.raw!;
		const minValue = this.context.parameters.minValue.raw;
		const value = this.context.parameters.value.raw;
		let style: string[] = ['black', 'white'];
		let settings = this.context.parameters.Settings.raw;

		switch (settings) {
			case "0": //between
				if (maxValue !== null && minValue !== null && value !== null) // between values
				{
					if (value <= maxValue && value >= minValue) {
						style[0] = color == 'val' || color == null ? 'black' : color;
						style[1] = backgroundColor == 'val' || backgroundColor == null ? 'white' : backgroundColor;
					}

				}
				break;

			case "1": //not-between
			if (maxValue !== null && minValue !== null && value !== null) // between values
			{
				if (value >= maxValue || value <= minValue) {
					style[0] = color == 'val' || color == null ? 'black' : color;
					style[1] = backgroundColor == 'val' || backgroundColor == null ? 'white' : backgroundColor;
				}

			}	
				break;

			case "2": //Max

			if (maxValue !== null && value !== null) // between values
			{
				if (value >= maxValue) {
					style[0] = color == 'val' || color == null ? 'black' : color;
					style[1] = backgroundColor == 'val' || backgroundColor == null ? 'white' : backgroundColor;
				}

			}	

				break;

			case "3": //Min
			if (minValue !== null && value !== null) // between values
			{
				if (value <= minValue) {
					style[0] = color == 'val' || color == null ? 'black' : color;
					style[1] = backgroundColor == 'val' || backgroundColor == null ? 'white' : backgroundColor;
				}

			}						
		}
		return style;
	}



	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs {
		return {
			value: this.NumberValue ?? undefined,		
		};
	}

	

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void {
		ReactDOM.unmountComponentAtNode(this.container);

	}
}