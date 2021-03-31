export class Process {
  readonly illustration!: any
  readonly title!: string
  readonly body!: string
}

export const processes: Array<Process> = [
  {
    illustration: 'fs-how-eligibility',
    title: 'Step 1: Eligibility',
    body: 
    `
Either add your **CodeForces**, **Leetcode**, 
**HackerRank** or [InterviewBit](https://www.interviewbit.com/) 
handles, or go through our quick coding challenge.   

Users also need to sign up with your work email 
to verify you are from a top tech company.
Our deep network of FAANG engineers and recruiters
verify your salary band and seniority level.
    `
  },
  {
    illustration: 'fs-how-reg-2',
    title: 'Step 2: Registration',
    body: 
    `
Our profile-builder form has been designed after 
consultation with ex-Palantir data science engineers.    
We collect data points around your current job and past career 
trajectory as well as collecting intent and 
potential for future.   

Accurately filling the form is very important. You'll be surprised
how data-points like _typing speed_ and _variable naming_ patterns
correlate with matrimonial success!
    `
  },
  {
    illustration: 'fs-how-matchmaking',
    title: 'Step 3: Matchmaking',
    body: 
    `
With dataset of over 200k successful matches from matrimonial sites and mapping 
career trajectories of over 50k engineers we sat down with 
OpenAI to develop a custom matchmaking algorithm.   

Former Spotify and Netflix recommendation team PMs have validated our approach.  
While you get new recommendations everyday, you can also manually search for _**the one**_
    `
  }
]