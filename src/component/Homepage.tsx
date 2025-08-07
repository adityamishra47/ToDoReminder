import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import AppColors from '../utils/AppColors';

const Homepage = () => {
  const inputRef = React.useRef<TextInput>(null);
  const valueRef = React.useRef('');

  const handleAddButtonPress = () => {
    console.log('Add button pressed with text:', valueRef.current);
    // Clear the input imperatively
    inputRef.current?.clear();
    valueRef.current = '';
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.todoContainer}>
          <Text style={styles.titleStyle}>Today</Text>
        </View>
        <View style={styles.inputViewContainer}>
          <TextInput
            ref={inputRef}
            style={styles.textInputStyle}
            placeholder="Write a task..."
            placeholderTextColor={AppColors.textInputColor}
            onChangeText={text => {
              valueRef.current = text;
            }}
          />
          <TouchableOpacity
            style={styles.addButtonContainer}
            // onPress={handleAddButtonPress}
            onPress={() => {
              console.log('Button pressed');
              handleAddButtonPress();
            }}
          >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: AppColors.appBackground,
  },
  todoContainer: {
    flex: 1,
    backgroundColor: AppColors.appBackground,
    paddingHorizontal: 22,
    paddingTop: Platform.OS === 'android' ? 56 : 10,
    paddingBottom: 26,
  },
  titleStyle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: AppColors.darkBlack,
  },
  inputViewContainer: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
  },
  textInputStyle: {
    flex: 1,
    height: 56,
    borderRadius: 12,
    paddingHorizontal: 21,
    paddingVertical: 14,
    fontSize: 18,
    color: AppColors.textInputColor,
    backgroundColor: AppColors.todoBackground,
  },
  addButtonContainer: {
    height: 56,
    width: 77,
    backgroundColor: AppColors.addButtonColor,
    borderRadius: 12,
    marginStart: 12,
  },
  addButtonText: {
    color: AppColors.addButtonTextColor,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 56,
  },
});
