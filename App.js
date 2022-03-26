// import { StatusBar } from 'expo-status-bar';
import React, { useState, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Modal, Button, Platform, Pressable, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


// const CustomAlert = () => {
//   return (
//     <Modal
//       animationType='fade'
//       transparent={true}
//       // visible={modalVisible}
//       onRequestClose={() => {
//         setModalVisible(false);
//       }}
//     >
//       </Modal>
//       // {/* <Pressable
//       //   style={[Platform.OS === "ios" ? styles.iOSBackdrop : styles.androidBackdrop, styles.backdrop]}
//       //   onPress={() => props.setModalVisible(true)}>Show</Pressable>
//       // <View> */}

//       // {/* </View> */}
//   )
// }



const App = () => {
  const initialList = [
    {
      id: '1',
      name: 'Robin',
      occupation: "Barista",
    },
    {
      id: '2',
      name: 'Dennis',
      occupation: "Barista",
    },
    {
      id: '3',
      name: 'Christina',
      occupation: "Barista",
    },
  ];
  const [list, setList] = useState(initialList);
  const [name, setName] = useState('');
  // const [users, setUsers] = useState(initialList);

  // function handleChange(event) {
  //   setName(event.target.value);
  // }

  // function handleAdd() {
  //   const newList = list.concat({ name, id: uuidv4() });

  //   setList(newList);

  //   setName('');
  // }

  const handleAdd = (e) => {
    const name = e.target.getAttribute("name");
    setList(list.filter(item => item.name == name));
  }
  // setList([...list, name]);

  const onRemove = (e) => {
    const name = e.target.getAttribute("name")
    setList(list.filter(item => item.name !== name));
  };

  {/*come back to onremove*/ }

  // const onRemove = (id) => {
  //   // const name = e.target.getAttribute("name")
  //   setList(list => list.filter((item) => item.id !== id));
  // };






  // const onRemove = id => e => {
  //   setUsers(users.filter(user => user.id !== id));
  // };






  // function handleDelete() {
  //   const deleted = list.pop({ name, id: uuidv4() });
  //   setList(deleted);
  //   setName('');
  // }

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <div>
        <Text style={styles.title}>Name</Text>
        <View style={styles.list}>
          {list.map((item) => (
            <span name={item.name} style={{
              color: "white",
              fontWeight: "bold"
            }} onClick={onRemove} key={item.name}>
              {item.name}
              <Icon
                style={styles.view}
                name="star"
                size={16}
                // color="#CD853F"
                // backgroundColor={'#27285C'}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
              {/* <span>{item.occupation}</span>  */}
            </span>
          ))}
        </View>
      </div>
      <div>
        <Text style={styles.title}>Occupation</Text>
        <Text style={styles.title}>Last online</Text>
        <Icon
          style={styles.title}
          name="star"
          size={16}
        />
      </div>


      {/* <div>
          {users.map(user => (
            <UserItem key={user.id} {...user} onPress={onRemove}/>
          ))}
        </div> */}
      <View style={styles.iconContainer}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modal}>
            <Text style={styles.text}>This is one of your Top Rated Matches! <br /> Would you like to add them to your list?</Text>
            <View style={styles.viewButtons}>
              <Pressable
                style={styles.button}
                // title="Cancel"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                Cancel
              </Pressable>

              <Pressable
                style={styles.button}
                // title="Yes, Please!"
                onChange={handleAdd}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>Add</Pressable>
            </View>
          </View>
        </Modal>

        {/* <TouchableOpacity
          visible={modalVisible}
          onPress={() => setModalVisible(true)}
          onPress={CustomAlert}> */}

        {/* <Icon.Button
          title="Click to open modal"
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        /> */}





        {/* // onPress={CustomAlert}  */}

        {/* </TouchableOpacity> */}


        {/* <CustomAlert
          title={"Congratulations!"}
          message={"You found a top rated match!"}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        >click meeeeeeee</CustomAlert> */}
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: '#27285C',
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
  },
  title: {
    // backgroundColor: "#A9A9A9",
    padding: 10,
    color: "white",
    // margin: 20,
    // paddingLeft: 10,
    // paddingRight: 10,
    fontWeight: "bold",
    // marginBottom: 20,
    height: 20,
    // borderRadius: 5,
    // maxWidth: 400,
    // borderBottomColor: "red",
    // borderBottomWidth: StyleSheet.hairlineWidth
  },
  text: {
    fontSize: 24,
    backgroundColor: "black",
    color: "white",
    padding: 50,
    textAlign: "center",
    borderRadius: 20,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'violet',
    padding: 100,
  },
  viewButtons: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 20,

  },
  button: {
    backgroundColor: "aqua",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    margin: 20,
  },
  icon: {
    // backgroundColor: "white",
    // padding: 2,
  },
  list: {
    // textAlign: "center",
    paddingTop: 40,
  },
  star: {
    // float: "right"
  },
  view: {
    margin: 0,
    // paddingLeft: 50,
  },
  // name: {
  //   color: "white",
  //   fontWeight: "bold",
  // }
  // iOSBackdrop: {
  //   backgroundColor: "#000000",
  //   opacity: 0.32
  // },
  // backdrop: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  // }
  // iconContainer: {
  //   margin: 50,
  //   flex: 1,
  // },
  // title: {
  //   marginTop: 16,
  //   paddingVertical: 8,
  //   borderWidth: 4,
  //   borderRadius: 6,
  //   borderColor: "#FFF",
  //   color: "#FFF",
  //   textAlign: "center",
  //   fontSize: 30,
  //   fontWeight: "bold",
  // }
});

export default App;