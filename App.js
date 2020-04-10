import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Modal,
  TouchableHighlight,
  FlatList
} from "react-native";
import { Appbar, Button as Button2, DataTable } from "react-native-paper";
import { BottomNavigation } from "react-native-material-ui";
const testList = [];

const teachersApi = [
  {
    key: 1,
    name: "Test A",
    marks: 10,
    selected: false,
  },
  {
    key: 2,
    name: "Test B",
    marks: 10,
    selected: false,
  },
  {
    key: 3,
    name: "Test C",
    marks: 10,
    selected: false,
  },
  {
    key: 4,
    name: "Test D",
    marks: 10,
    selected: false,
  },
  {
    key: 5,
    name: "Test E",
    marks: 10,
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
 
    return (
      <View style={{ top: "20%" }}>
        <Text style={{ textAlign: "center", marginTop: 30 }}>{test.name}</Text>
       

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
      {testListMap}
      <Appbar style={styles.bottom}>
        <Appbar.Content title="Home"></Appbar.Content>
      </Appbar>
      
    </View>
  );
};

//THIS IS THE COMPONENT THAT PAVAN HAS TO DEAL WITH
const TakeTest = props => {
 
  
  return(
    <View>
      <Text>Hello</Text>
     
    </View>
  )
}
//IGNORE EVERYTHING BELOW THIS COMMENT 


const ViewTest = props =>{
 
  return(
    <>
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
      <DataTable style={{ position: "absolute", marginTop: 150 }}>
      <DataTable.Header>
        <DataTable.Title>Tests</DataTable.Title>
        <DataTable.Title numeric>Marks</DataTable.Title>
        <DataTable.Title numeric>Time</DataTable.Title>
      </DataTable.Header>
      {props.stlist}
      </DataTable> 
      </>
  )
}
const Tests = (props) => {
  const [showTakeTest, setShowTakeTest] = useState(false);
  const bookmarkedTests = props.tests;
  const selectedTestList = props.tests.map((test) => (
   
    

      <DataTable.Row>
        <DataTable.Cell>{test}</DataTable.Cell>
    <DataTable.Cell numeric>10</DataTable.Cell>
        <DataTable.Cell numeric>20s</DataTable.Cell>
      </DataTable.Row>

      
  
    
  ));
 
  return (
   <View style={{ marginTop: 22 }}>
      {showTakeTest? 
      <TakeTest tests={bookmarkedTests}/>
      :
      <ViewTest stlist={selectedTestList}/>
      }
      <Button onPress={()=>{setShowTakeTest(!showTakeTest);}} title={showTakeTest?"End Test":"Take Test"}/>
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
