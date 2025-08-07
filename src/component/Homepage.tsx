import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AppColors from '../utils/AppColors';

const Homepage = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.todoContainer}>
        <Text style={styles.titleStyle}>Today</Text>
      </View>
      <View style={styles.inputViewContainer}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Write a task..."
          placeholderTextColor={AppColors.textInputColor}
        />
        <TouchableOpacity style={styles.addButtonContainer}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
