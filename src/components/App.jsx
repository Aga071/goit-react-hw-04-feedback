import Section from './section/Section';
import FeedbackOptions from './feedback/FeedbackOptions';
import Statistics from './statistics/Statistics';
import Notification from './notification/Notification';

import React, { useState, useEffect } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const hendlerClick = form => {
    if (form === 'good') {
      setGood(prev => prev + 1);
    } else if (form === 'neutral') {
      setNeutral(prev => prev + 1);
    } else {
      setBad(prev => prev + 1);
    }
  };

  useEffect(() => {
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  }, [good, neutral, bad]);

  const countTotalFeedback = () => {
    setTotal(good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
    setPositivePercentage(Math.round((good / (good + neutral + bad)) * 100));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <>
        <Section title="Please leave feedback">
          <div style={{ display: 'flex', gap: 10 }}>
            {options.map(option => (
              <FeedbackOptions
                key={option}
                options={option}
                onLeaveFeedback={hendlerClick}
              />
            ))}
          </div>
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    </div>
  );
};

export default App;
