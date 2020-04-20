import React from 'react';
import { data } from '../datasets/Data.js'

var unknown = data
var learning = []
var known = []

//repeat trials of 5 until game is won

//For each trial - present 4 known, 1 learning

//if fewer than 4 in known, present all there are, then 1 learning, then distractor

//if learning is empty, present unknown as errorless then move that to learning

//if unknown is also empty, game is won

//points - 1 point for each correct answer (e.g., coins)
//1 special point (e.g., bucks) for correct answer if learning

//error correction: (insert - does not count in 5 trials above) - errorless trial, 
//distractor, represent as learning. if fail on represent, repeat error correction; 
//if succeed, keep in learning, provide coin (not buck) and continue with trial. 
//If it was a known, we should not provide a buck the next time it is moved to known.

var problemData = data[0]
var choicesData = [data[0], data[1], data[2], data[3]]

export { problemData, choicesData }

