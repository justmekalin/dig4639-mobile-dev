
import React from 'react'; 

import questions from './questions.json'

import {StyleSheet, Text, Button, View } from 'react-native'; 

const TIME_LIMIT = 5
const TITLE_STATE = 0
const QUESTION_STATE = 1

// const FINAL_STATE = 2

class QuizQuestion extends React.Component {
  render() {
    return<>
      <Text>{this.props.question}</Text>

      {this.props.answers.map((v, i) =>

      <Button color="#9c886f" title={v.text} onPress={()=> this.props.nextQuestion(v.correct)} key={i}/>)}</>
  }
}

class TitlePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      titleText: "Test your knowledge",
      counter: 0,
      currentState: TITLE_STATE,
      currentQuestion: 0
    }
    this.timeLimit = TIME_LIMIT
  }
  nextQuestion(correct) {
    console.log("BUTTON PRESSED")
    if(correct){
      this.setState({score: this.state.score+1})
    }
    if(this.state.currentQuestion === questions.length - 1) {
      console.log("DONE")
    } else {
      clearInterval(this.timer)
        console.log(this.state.currentQuestion)
          this.setState({
          titleText:"You answers X",
          currentState: QUESTION_STATE,
          currentQuestion: this.state.currentQuestion +1
      })
    }
  }
  countdown() {
    console.log("Handling interval")
    console.log(this.state.counter)
    if(this.state.counter < this.timeLimit) {
      this.setState({
        titleText: 'Starting Quiz',
        counter: this.state.counter +1
      })
    } else {
        this.setState({
          titleText: "Starting Quiz!",
          currentState: QUESTION_STATE,
          counter: 0
        })
        if(this.state.currentState === TITLE_STATE) {
          this.timer = setInterval(() => this.countdown(), 1000)
          clearInterval(this.timer)
        } else {
          this.setState({titleText:"You answered!"})
        }
        }
      }
    start() {
      console.log("Starting!")
        this.setState({titleText: "Starting the Quiz!", counter: 0})
        this.timer = setInterval(() => this.countdown(), 1000)
    }
    render() {
      return (
        <>
        <Text>{this.timeLimit - this.state.counter}</Text>

        {((this.state.currentState === TITLE_STATE) ?
        <>
        <Text>{this.state.titleText}</Text>

        <Button color="#cb8034" title="Start" onPress={()=>this.start()} />
        </>
        :
          <QuizQuestion answers={questions[this.state.currentQuestion].possibleAnswers} question=
          {questions[this.state.currentQuestion].question} nextQuestion={(correct) => this.nextQuestion(correct)}
          ></QuizQuestion>)}

        <Text style={styles.Score}>Score: {this.state.score}</Text>
          </>)
    }
    }

    class App extends React.Component {

      render(){
        return (
        <View style = {styles.page}>

        <Text style={styles.travia}>Trivia Questions</Text>


        <TitlePage>Trivia Questions</TitlePage>

        
        </View>
  
    );
     }
  
    }

    export default App;

    const styles = StyleSheet.create({
      page: {
        flex: 1,
        alignItems: 'center', 
        backgroundColor: "#ddc08d", 
        justifyContent: 'center', 
      }, 
      travia:{
  
        color: "#66260b", 
        fontSize: "30px", 
      },
      Score: {
        color: "#66260b", 
        fontSize: "20px", 
      }
    }); 