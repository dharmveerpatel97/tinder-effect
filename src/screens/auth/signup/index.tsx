import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';

interface AppState {
  currentColor: string;
  swatchesOnly: boolean;
  swatchesLast: boolean;
  swatchesEnabled: boolean;
  disc: boolean;
  pickerOpen:boolean
}

class App extends Component<{}, AppState> {
  picker: ColorPicker | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      currentColor: '#334155', // Initialize currentColor state with a default color
      swatchesOnly: false,
      swatchesLast: false,
      swatchesEnabled: false,
      disc: false,
      pickerOpen:false
    };
  }

  onColorChange = (color: string) => {
    this.setState({ currentColor: color });
  };

  onColorChangeComplete = (color: string) => { 
    console.log('Color Change Complete:', color);
  };

  render() {
    return (
      <View style={{alignItems:'center',width:"100%"}}> 
        <TouchableOpacity onPress={()=>{this.setState({pickerOpen:!this.state.pickerOpen})}} style={{ height: 44, width: '90%',marginBottom:10, borderRadius: 8, borderColor: "#CBD5E1", borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, color: '#1E293B', }}>
            {this.state.currentColor.toUpperCase()}
          </Text>
        </TouchableOpacity>
        {
          this.state.pickerOpen &&
          <View style={{ alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: '5%', backgroundColor: '#F2F2F2', width: '90%', alignSelf: 'center', flexDirection: 'row', height: 200 }}>
            <View style={{ width: '50%' }}>
              <ColorPicker
                ref={(r) => {
                  this.picker = r;
                }}
                color={this.state.currentColor}
                swatchesOnly={this.state.swatchesOnly}
                onColorChange={this.onColorChange}
                onColorChangeComplete={this.onColorChangeComplete}
                thumbSize={40}
                sliderSize={40}
                palette={['#C0932C', '#2D3251', '#F0E5FF', '#F2F6F9', "#6200EA", "#334155"]}
                noSnap={true}
                row={false}
                sliderHidden={true}
                swatchesLast={this.state.swatchesLast}
                swatches={this.state.swatchesEnabled}
                discrete={this.state.disc}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <View style={{ height: 44, width: 150, borderRadius: 8, borderColor: "#CBD5E1", borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, color: '#1E293B', }}>
                  {this.state.currentColor.toUpperCase()}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                {
                  ['#C0932C', '#2D3251', '#F0E5FF', '#F2F6F9', "#6200EA", "#334155"].map((item, inndex) => {
                    return <TouchableOpacity onPress={() => { this.setState({ currentColor: item }) }} style={{ height: 20, width: 20, borderRadius: 3, backgroundColor: item }}></TouchableOpacity>
                  })
                }
              </View>
            </View>

          </View>
        }
      </View>
    );
  }
}

export default App;
