# rock-paper-scissor-game step by step
Step 1:
First.
We need to make the computer return random values of Rock, Paper, Scissor 
by using getComputerChoice function. In order to do this, I used Math.random -> return random floating numbers from 0 to 1, not include 1 then times 3 because we have 3 values(rock, paper, scissor), then round it down to integer number using Math.floor -> we have 0, 1, 2. 
Next, using switch conditional to assign 0, 1, 2 to rock, paper, scissor -> return randomly rock, paper, scissor every time we execute getComputerChoice. 

Second.
Assign computerScore and playerScore as 0.
Next, to play a single round of the game, use playRound function with 2 parameters which are computerSelection and    playerSelection. Use if, else conditional to draw game's rules. 
If player win, playerScore + 1
If computer win, computerScore + 1

Third.
Loop play round into game function so we can play the game 5 times, and scores are counting. 

Finally. 
Use getResult function to check who has more points -> winner.

Step 2:
Using DOM to add UI to the game