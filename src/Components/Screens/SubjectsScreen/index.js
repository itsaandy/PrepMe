import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import LightText from '../../Common/Atoms/LightText';
import Button from '../../Common/Atoms/Button';
import Header from '../../Common/Molecules/Header';
import SubjectButton from '../../Common/Atoms/SubjectButton';

const SubjectsScreen = ({
  navigation,
  selectedSubjects,
  allSubjects,
  onSelection,
  onSubmit,
  isFetching,
}) => (
  <SafeAreaView style={styles.mainWrapper}>
    <View style={styles.screenWrapper}>
      <ScrollView>
        <View>
          <Header
            label="Personalise your content"
            backAction={() => navigation.goBack()}
          />
          <LightText extendedStyles={styles.lightText}>
            These tags will affect your questions feed. You can re-visit this
            page in the future to re-personalise your feed!
          </LightText>
          {isFetching ? (
            <ActivityIndicator size="large" />
          ) : (
            <View style={styles.buttonsWrapper}>
              {allSubjects.map(subject => (
                <SubjectButton
                  key={subject._id}
                  onPress={() => onSelection(subject)}
                  subject={subject}
                  isSelected={selectedSubjects.includes(subject)}
                />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
      <View>
        <Button label="NEXT" onPress={onSubmit} />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: '#f5f5f5',
  },
  screenWrapper: {
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    height: '100%',
  },
  lightText: {
    marginVertical: 20,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  nextButton: {
    alignSelf: 'flex-end',
  },
});

export default SubjectsScreen;
