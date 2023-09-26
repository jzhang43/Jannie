class MyAppText extends Component {
    render() {
      return (
        <MyAppText>
          <Text style={{fontSize: 12}}>{this.props.children}</Text>
        </MyAppText>
      );
    }
  }
  
  class MyAppHeaderText extends Component {
    render() {
      return (
        <MyAppText>
          <Text style={{fontSize: 20}}>{this.props.children}</Text>
        </MyAppText>
      );
    }
  }