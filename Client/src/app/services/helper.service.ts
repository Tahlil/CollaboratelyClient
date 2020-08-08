import { Injectable } from '@angular/core';
import { LoremIpsum } from "lorem-ipsum";

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  lorem;
  constructor() { 
    this.lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4
      },
      wordsPerSentence: {
        max: 16,
        min: 4
      }
    });
    
    
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

  generateRandomWord(): string{
    return this.lorem.generateWords(1);
  }

  getListOfWords(n): Array<string>{
    let wordList = [];
    for (let i = 0; i < n; i++) {
      wordList.push(this.generateRandomWord())
    }
    return wordList;
  }

  generateRandomSentence(): string{
    return this.lorem.generateSentences(this.getRandomInt(11, 31));   
  }

}
