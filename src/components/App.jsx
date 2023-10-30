import Section from './section/Section';
import FeedbackOptions from './feedback/FeedbackOptions';
import Statistics from './statistics/Statistics';
import Notification from './notification/Notification';

import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
    options: ['good', 'neutral', 'bad'],
  };

  hendlerClick = form => {
    this.setState(prevState => ({
      [form]: prevState[form] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.good + prevState.neutral + prevState.bad,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        positivePercentage: Math.round(
          (prevState.good / prevState.total) * 100
        ),
      };
    });
  };

  render() {
    const { good, neutral, bad, total, positivePercentage, options } =
      this.state;
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
                  onLeaveFeedback={this.hendlerClick}
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
  }
}
export default App;
