import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Modal,
  TouchableHighlight,
} from "react-native";
import { Appbar, Button as Button2, DataTable } from "react-native-paper";
import { BottomNavigation } from "react-native-material-ui";
const testList = [];
const teachersApi = [
  {
    key: 1,
    name: "Test A",
    selected: false,
  },
  {
    key: 2,
    name: "Test B",
    selected: false,
  },
  {
    key: 3,
    name: "Test C",
    selected: false,
  },
  {
    key: 4,
    name: "Test D",
    selected: false,
  },
  {
    key: 5,
    name: "Test E",
    selected: false,
  },
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("Home");
  const [selectedTests, setSelectedTests] = useState([]);
  return (
    <View style={{ height: "100%" }}>
      {currentScreen === "Home" ? (
        <Home
          handleTests={(testlist) => {
            setSelectedTests(testlist);
          }}
        />
      ) : currentScreen === "Tests" ? (
        <Tests tests={selectedTests} />
      ) : (
        <Settings />
      )}
      <Nav
        onChange={(choice) => {
          setCurrentScreen(choice);
        }}
      />
    </View>
  );
}

const Home = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const testListMap = teachersApi.map((test) => {
    // if (test.selected === true) {
    //   return (
    //     <View>
    //       <Text>Hello</Text>
    //     </View>
    //   );
    // }
    return (
      <View style={{ top: "20%" }}>
        <Text style={{ textAlign: "center", marginTop: 30 }}>{test.name}</Text>
        <Modal animationType="none" transparent={true} visible={modalVisible}>
          <View
            style={{
              height: 200,
              width: "100%",
              backgroundColor: "ghostwhite",
              top: "30%",
            }}
          >
            <Text style={{ textAlign: "center" }}>{test.name}</Text>
            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Button2 mode="contained">Hide Modal</Button2>
            </TouchableHighlight>
          </View>
        </Modal>

        <Button2
          style={{ width: 250, left: "16%", backgroundColor: "#4F94CD" }}
          mode="contained"
          onPress={() => {
            testList.push(test.name);
            props.handleTests(testList);
            setModalVisible(true);
          }}
        >
          Add to queue
        </Button2>
      </View>
    );
  });

  return (
    <View>
      <Appbar style={styles.bottom}>
        <Appbar.Content title="Home"></Appbar.Content>
      </Appbar>
      {testListMap}
    </View>
  );
};

const Tests = (props) => {
  const selectedTestList = props.tests.map((test) => (
    <DataTable style={{ position: "absolute", marginTop: 150 }}>
      <DataTable.Header>
        <DataTable.Title>Tests</DataTable.Title>
        <DataTable.Title numeric>Marks</DataTable.Title>
        <DataTable.Title numeric>Time</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>{test}</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Pagination
        page={1}
        numberOfPages={3}
        onPageChange={(page) => {
          console.log(page);
        }}
        label="1-2 of 6"
      />
    </DataTable>
  ));
  return (
    <View style={{ marginTop: 22 }}>
      <Appbar
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "10%",
          backgroundColor: "black",
        }}
      >
        <Appbar.Content title="Tests"></Appbar.Content>
      </Appbar>
      <Text
        style={{
          position: "absolute",
          marginTop: 70,
          fontSize: 35,
          left: "18%",
        }}
      >
        Current Tests
      </Text>
      {selectedTestList}
    </View>
  );
};

const Settings = () => {
  return (
    <View>
      <Appbar
        style={{
          position: "absolute",
          left: 0,
          right: 0,

          marginTop: 24,
          backgroundColor: "black",
        }}
      >
        <Appbar.Content title="Settings"></Appbar.Content>
      </Appbar>
    </View>
  );
};

const Nav = (props) => {
  const [state, setState] = useState("");
  return (
    <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
      <BottomNavigation active={state} hidden={false}>
        <BottomNavigation.Action
          key="Home"
          icon="home"
          label="Home"
          onPress={() => {
            props.onChange("Home");
            setState("Home");
          }}
        />
        <BottomNavigation.Action
          key="Tests"
          icon="people"
          label="Tests"
          onPress={() => {
            props.onChange("Tests");
            setState("Tests");
          }}
        />
        <BottomNavigation.Action
          key="Settings"
          icon="settings"
          label="Settings"
          onPress={() => {
            props.onChange("Settings");
            setState("Settings");
          }}
        />
      </BottomNavigation>
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    top: "5%",
    backgroundColor: "black",
  },
});
