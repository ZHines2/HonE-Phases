// AI Difficulty Levels for BLACK / WHITE

// Keep history for pattern-based AIs
let playerHistory = [];

function aiRandom() {
  return Math.random() < 0.5 ? 'B' : 'W';
}

function aiWeightedRandom() {
  // Favors player's less chosen side
  let b = playerHistory.filter(x=>x==='B').length;
  let w = playerHistory.filter(x=>x==='W').length;
  let favor = b > w ? 'W' : 'B';
  return Math.random() < 0.7 ? favor : (favor==='B'?'W':'B');
}

function aiCopycat() {
  // Copies player's last move
  if (playerHistory.length === 0) return aiRandom();
  return playerHistory[playerHistory.length-1];
}

function aiCounter() {
  // Picks opposite of last move
  if (playerHistory.length === 0) return aiRandom();
  return playerHistory[playerHistory.length-1] === 'B' ? 'W' : 'B';
}

function aiPattern2Back() {
  // Looks at last 2 moves, assumes repeat
  if (playerHistory.length < 2) return aiRandom();
  return playerHistory[playerHistory.length-1] === playerHistory[playerHistory.length-2]
    ? (playerHistory[playerHistory.length-1] === 'B' ? 'W' : 'B')
    : aiRandom();
}

function aiStreakPunisher() {
  // Counters if streak > 1
  if (playerHistory.length < 2) return aiRandom();
  let last = playerHistory[playerHistory.length-1];
  let streak = 1;
  for (let i=playerHistory.length-2; i>=0; i--) {
    if (playerHistory[i] === last) streak++;
    else break;
  }
  if (streak >= 2) return last === 'B' ? 'W' : 'B';
  return aiRandom();
}

function aiStreakExploiter() {
  // Always counters current streak, but if broken, does random
  if (playerHistory.length < 2) return aiRandom();
  let last = playerHistory[playerHistory.length-1];
  let streak = 1;
  for (let i=playerHistory.length-2; i>=0; i--) {
    if (playerHistory[i] === last) streak++;
    else break;
  }
  if (streak >= 3) return last === 'B' ? 'W' : 'B';
  return aiRandom();
}

function aiAdaptiveFrequency() {
  // Tracks last 5 moves, counters most common
  let lastN = playerHistory.slice(-5);
  let b = lastN.filter(x=>x==='B').length, w = lastN.length-b;
  if (b === w) return aiRandom();
  return b > w ? 'W' : 'B';
}

function aiMarkov() {
  // Markov prediction: P(next | last)
  if (playerHistory.length < 2) return aiRandom();
  let transitions = {'BB':0,'BW':0,'WB':0,'WW':0};
  for (let i=1; i<playerHistory.length; i++) {
    let pair = playerHistory[i-1] + playerHistory[i];
    if (transitions[pair] !== undefined) transitions[pair]++;
  }
  let last = playerHistory[playerHistory.length-1];
  let bProb = transitions[last+'B'], wProb = transitions[last+'W'];
  if (bProb === wProb) return aiRandom();
  return bProb > wProb ? 'W' : 'B';
}

function aiCheater(me) {
  // Knows player move (pass as arg)
  return me === 'B' ? 'W' : 'B';
}

// Main AI dispatcher
function getAiMove(level, me=null) {
  switch(level) {
    case 1: return aiRandom();
    case 2: return aiWeightedRandom();
    case 3: return aiCopycat();
    case 4: return aiCounter();
    case 5: return aiPattern2Back();
    case 6: return aiStreakPunisher();
    case 7: return aiStreakExploiter();
    case 8: return aiAdaptiveFrequency();
    case 9: return aiMarkov();
    case 10: return aiCheater(me); // needs me passed in
    default: return aiRandom();
  }
}

// To be called after every player move:
function recordPlayerMove(move) {
  playerHistory.push(move);
  if (playerHistory.length > 100) playerHistory.shift();
}

// To reset between games:
function resetPlayerHistory() { playerHistory = []; }

export {
  getAiMove, recordPlayerMove, resetPlayerHistory
};