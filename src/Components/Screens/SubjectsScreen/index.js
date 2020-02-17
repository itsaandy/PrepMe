import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LightText from '../../Common/Atoms/LightText';
import Button from '../../Common/Atoms/Button';
import Header from '../../Common/Molecules/Header';

const SubjectButton = ({subject, onPress}) => (
  <TouchableOpacity
    style={{
      backgroundColor: '#E7E7E7',
      borderRadius: 14,
      height: 28,
      justifyContent: 'center',
      paddingHorizontal: 14,
      marginRight: 7,
      marginBottom: 5,
    }}>
    <Text
      style={{
        fontWeight: 'bold',
      }}>
      {subject.name}
    </Text>
  </TouchableOpacity>
);

const SubjectsScreen = ({subjects}) => (
  <SafeAreaView style={styles.mainWrapper}>
    <View style={styles.screenWrapper}>
      <ScrollView style={styles.scroll}>
        <View style={styles.topElements}>
          <Header label="Personalise your content" backAction={() => {}} />
          <LightText extendedStyles={styles.lightText}>
            These tags will affect your questions feed. You can re-visit this
            page in the future to re-personalise your feed!
          </LightText>
          <View style={styles.buttonsWrapper}>
            {subjects.map(subject => (
              <SubjectButton
                key={subject._id}
                onPress={() => {}}
                subject={subject}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <View>
        <Button label="NEXT" onPress={() => {}} />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: '#f5f5f5',
  },
  scroll: {},
  topElements: {},
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
