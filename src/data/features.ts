export class Feature {
  readonly icon!: string
  readonly title!: string
  readonly description!: string
}

export const features: Array<Feature> = [
  {
    title: "Validated Profiles",
    icon: "shield-fill-check",
    description: 
    `All profiles have gone 
    through a mandatory
    \`FizzBuzz\` test and
    Linkedin-verified  for 
    current or past
    experience in a top tech
    company.`
  },
  {
    title: "AI-Powered Matchmaking",
    icon: "cpu-fill",
    description: 
    `More than 30 data points
    collected, and with a 
    hand-tuned GPT-4 
    powered model trained
    on over 5M+ users,
    we recommend matches 
    better than Netflix`
  },
  {
    title: "Fine-grained Filtering",
    icon: "search",
    description: 
    `Search, sort and filter
    based on **YoE** (years of experience),
    **CTC** (compensation), stocks vested,
    LeetCode rank.   
    Filter for L5 and above only? Possible.  
    Custom **GraphQL** console
    for power users`
  }
]