import React, { Component, Fragment } from 'react';
import { TouchableOpacity, Text, Linking, View, Image, ImageBackground, BackHandler } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Qrstyles from '../components/scanStyle';


class QrScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scan: false,
            ScanResult: false,
            result: null
        };
    }
onSuccess = (e) => {
        const check = e.data.substring(0, 4);
        console.log('scanned data' + check);
        this.setState({
            result: e,
            scan: false,
            ScanResult: true
        })
        if (check === 'http') {
            Linking.openURL(e.data).catch(err => console.error('An error occured', err));
        } else {
            this.setState({
                result: e,
                scan: false,
                ScanResult: true
            })
        }
    }
activeQR = () => {
        this.setState({ scan: true })
    }
    scanAgain = () => {
        this.setState({ scan: true, ScanResult: false })
    }
render() {
        const { scan, ScanResult, result } = this.state
        return (
            <View style={Qrstyles.scrollViewStyle}>
                <Fragment>
                    <View style={Qrstyles.header}>
                        {/* <TouchableOpacity onPress={()=> BackHandler.exitApp()}> */}
                            {/* <Image source={require('../recursos/images/back.png')} style={{height: 36, width: 36}}></Image> */}
                        {/* </TouchableOpacity> */}
                        {/* <Text style={Qrstyles.textTitle}>Scan QR Code</Text> */}
                    </View>
                    {!scan && !ScanResult &&
                        <View style={Qrstyles.cardView} >
                            <Image source={require('../recursos/images/camera.png')} style={{height: 36, width: 36}}></Image>
                            <Text numberOfLines={8} style={Qrstyles.descText}>Escanea el código QR {"\n"} con la cámara del teléfono</Text>
                            <Image source={require('../recursos/images/qr-code.png')} style={{margin: 20,height: 190, width: 190}}></Image>
                            <TouchableOpacity onPress={this.activeQR} style={Qrstyles.buttonScan}>
                                <View style={Qrstyles.buttonWrapper}>
                                {/* <Image source={require('../recursos/images/camera.png')} style={{height: 36, width: 36}}></Image> */}
                                <Text style={{...Qrstyles.buttonTextStyle, color: '#ca0029'}}>Escanear</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                    {ScanResult &&
                        <Fragment>
                            <Text style={Qrstyles.textTitle1}>Result</Text>
                            <View style={ScanResult ? Qrstyles.scanCardView : Qrstyles.cardView}>
                                <Text>Type : {result.type}</Text>
                                <Text>Result : {result.data}</Text>
                                <Text numberOfLines={1}>RawData: {result.rawData}</Text>
                                <TouchableOpacity onPress={this.scanAgain} style={Qrstyles.buttonScan}>
                                    <View style={Qrstyles.buttonWrapper}>
                                        <Image source={require('../recursos/images/camera.png')} style={{height: 36, width: 36}}></Image>
                                        <Text style={{...Qrstyles.buttonTextStyle, color: '#2196f3'}}>Click to scan again</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Fragment>
                    }
                    {scan &&
                        <QRCodeScanner
                            reactivate={true}
                            showMarker={true}
                            ref={(node) => { this.scanner = node }}
                            onRead={this.onSuccess}
                            topContent={
                                <Text style={Qrstyles.centerText}>
                                   Please move your camera {"\n"} over the QR Code
                                </Text>
                            }
                            bottomContent={
                                <View>
                                    <ImageBackground source={require('../recursos/images/bottom-panel.png')} style={Qrstyles.bottomContent}>
                                        <TouchableOpacity style={Qrstyles.buttonScan2} 
                                            onPress={() => this.scanner.reactivate()} 
                                            onLongPress={() => this.setState({ scan: false })}>
                                            <Image source={require('../recursos/images/camera2.png')}></Image>
                                        </TouchableOpacity>
                                    </ImageBackground>
                                </View>
                            }
                        />
                    }
                </Fragment>
            </View>
        );
    }
}
export default QrScreen;




// import React from "react";
// import { View, Text } from "react-native";

// const Qr = props => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: "#f9ed69",
//         justifyContent: "center",
//         alignItems: "center"
//       }}
//     >
//       <Text style={{ fontSize: 42, fontWeight: "bold" }}>Qr</Text>
//     </View>
//   );
// };

// export default Qr;