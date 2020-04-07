import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';
import { BottomNavigation } from 'react-native-material-ui';
const testList = [];
const teachersApi = [
  {
    key: 1,
    name:"Test A",
    selected:false
  },
  {
    key: 2,
    name:"Test B",
    selected:false
  },
  {
    key: 3,
    name:"Test C",
    selected:false
  },
  {
    key: 4,
    name:"Test D",
    selected:false
  },
  {
    key: 5,
    name:"Test E",
    selected:false
  }
]

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("Home");
  const [selectedTests, setSelectedTests] = useState([]);
  return (
    <View>
      
     {currentScreen==="Home"?<Home handleTests={testlist=>{setSelectedTests(testlist);}}/>:currentScreen==="Tests"?<Tests tests={selectedTests}/>:<Settings/>}
     <Nav onChange={choice=>{setCurrentScreen(choice);}}/>
    </View>
    
  );
}

const Home = (props) => {
  
  const testListMap = teachersApi.map((test)=>(
    <View>
      <Text>{test.name}</Text>
      <Button onPress={()=>{testList.push(test.name);props.handleTests(testList)}} title="Add To queue"/>
    </View>
  ))
  
  return(
    <View>
      
      <Text style={{fontSize: 90}}>HOME</Text>
      {testListMap}
    </View>
  )
}

const Tests = (props) => {
  
  const selectedTestList = props.tests.map(test => (
    <Text>{test}</Text>
  ))
  return(
    <View>
      <Text style={{fontSize: 86}}>Tests</Text>
       {selectedTestList}
    </View>
  )
}

const Settings = () => {
  return(
    <View>
      <Text style={{fontSize: 90}}>Settings</Text>
    </View>
  )
}

const Nav = props => {
  const [state, setState] = useState("");
  return(
    <BottomNavigation active={state} hidden={false} >
        <BottomNavigation.Action
            key="Home"
            icon="home" 
            label="Home"
            onPress={() =>{props.onChange("Home");setState("Home");}}
        />
        <BottomNavigation.Action
            key="Tests"
            icon="people"
            label="Tests"
            onPress={() => {props.onChange("Tests");setState("Tests")}}
        />
        <BottomNavigation.Action
            key="Settings"
            icon="settings"
            label="Settings"
            onPress={() => {props.onChange("Settings");setState("Settings")}}
        />
        
    </BottomNavigation>
  )
}

