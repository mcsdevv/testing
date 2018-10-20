import * as React from 'react';

export interface ITextProps {
  text: string;
}

class Text extends React.Component<ITextProps> {
  public constructor(props: ITextProps) {
    super(props);
  }
  public render() {
    return (
      <div className="App">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Text;
