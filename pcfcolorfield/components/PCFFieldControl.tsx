import * as React from "react";
import { ITextFieldProps, TextField } from "office-ui-fabric-react";


export interface NumberInputProps {
  value: number | null;
  onChange: (newValue: number | null) => void;
  textFieldProps?: ITextFieldProps;
  decimalPlaces: number;
  backgroundColor: string;
  fontColor:string
 
}


export interface NumberInputState {
  //isEditing: boolean;
  textValue?: string;
  numberValue: number | null;
}


export class NumberInput extends React.Component<NumberInputProps, NumberInputState> {
  private isEditing = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: NumberInputProps) {
    super(props);
    this.state = {    
      textValue: this.formatNumber(this.props.value),
      numberValue: this.props.value,
      
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange = (event: any, newValue?: string | undefined, fontColor?: string, backgroundColor?: string) : void => {
    this.isEditing = true;
    // Remove any non-numeric chars
    const formattedNewValue = newValue && newValue.replace(/[^0-9|.|-]/gi, "");
    let numberValue = formattedNewValue ? Number.parseFloat(formattedNewValue as string) : null;  
    this.setState({     
      textValue: formattedNewValue,
     numberValue: numberValue,
    });
  };



  onBlur = (): void => {
    if (!this.isEditing) return;
    this.isEditing = false;
    if (this.props.onChange) this.props.onChange(this.state.numberValue);
  };

  formatNumber(value?: number | null): string {
    return value != null ? value.toFixed(this.props.decimalPlaces) : "";
  }

  render(): JSX.Element {
    const {textValue } = this.state;
    const { value,fontColor,backgroundColor} = this.props;
    return (
      <TextField
        placeholder="---"       
        value={this.isEditing ? textValue : this.formatNumber(value)}
        onBlur={this.onBlur}
        onChange={this.onChange}
        {...this.props.textFieldProps}
        style={{backgroundColor: backgroundColor, color: fontColor}} 
      ></TextField>
    );
  }
}
