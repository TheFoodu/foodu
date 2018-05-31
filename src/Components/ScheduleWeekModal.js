import React, { Component } from "react";
import { StyleSheet, Modal, Text, TouchableOpacity, View } from "react-native";

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
              <Text>Hello World!</Text>
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
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: 300,
    height: 300
  },
  containerBox: {
    borderRadius: 4,
    borderWidth: 0.7,
    borderColor: "#666",
    padding: 20
  },
  dateText: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 20
  },
  detailText: {
    fontSize: 18
  }
});
