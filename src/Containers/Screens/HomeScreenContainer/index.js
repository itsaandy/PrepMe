import React, {useEffect, useState} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Heading1 from '../../../Components/Common/Atoms/Heading1';

const RMLATER = JSON.parse(`[
      {
        "_id": "03926ced-4c62-4f19-af14-9f09bc6904e4",
        "answerIndex": 0,
        "options": [
          {
            "option": "A big, red rock eater."
          },
          {
            "option": "Small, red, rock eater"
          }
        ],
        "question": "What's big, red and eats rocks?",
        "questionNumber": 1,
        "subject": {
          "_id": "17f39002-de86-4e5d-85f3-18309282c908",
          "name": "Biology"
        },
        "year": 2018
      },
      {
        "_id": "795bc1c0-fd09-4098-b4fc-c97c0ab0aa81",
        "answerIndex": 1,
        "options": [
          {
            "option": "Obama"
          },
          {
            "option": "Scomo"
          },
          {
            "option": "Julia Gillard"
          }
        ],
        "question": "Who is the prime minister of Australia?",
        "questionNumber": 2,
        "subject": {
          "_id": "f07713fe-349e-4407-88f0-910f94df3d12",
          "name": "Physics"
        },
        "year": 2019
      }
    ]`);

const HomeScreenContainer = () => {
  const [allQuestions, setAllQuestions] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(RMLATER);
      }, 3000);
    }).then(res => {
      setAllQuestions(res);
      setHasLoaded(true);
    });
  }, []);

  return (
    <SafeAreaView>
      <Heading1>Your feed.</Heading1>
      {hasLoaded ? (
        <View>
          {allQuestions.map(q => (
            <Text>{q.question}</Text>
          ))}
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  );
};

export default HomeScreenContainer;
