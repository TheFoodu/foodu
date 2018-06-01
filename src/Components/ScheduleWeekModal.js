import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default class ScheduleWeekModal extends Component {
  render() {
    return (
      <View>
        <Modal
          animationType="none"
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <TouchableOpacity
            style={styles.container}
            activeOpacity={1}
            onPressOut={() =>
              this.props.setModalVisible(!this.props.modalVisible)
            }
          >
            <View style={styles.innerContainer}>
              <Image
                style={styles.banner}
                source={require("../Images/Barrel-Bar-at-dusk-1Normal.png")}
              />
              <Image
                style={styles.circleImage}
                source={require("../Images/blur-bread-bun.jpg")}
              />
              <Text>Restraunt Name</Text>
              <Text>Address</Text>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,.5)"
  },
  innerContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    width: 300,
    height: 300
  },
  banner: {
    width: 300,
    height: 100
  },
  circleImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: "relative",
    top: -50
  }
});
