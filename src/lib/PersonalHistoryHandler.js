const PERSONAL_HISTORY = 'PERSONAL_HISTORY';

export function getPersonalHistory() {
  return localStorage.getItem(PERSONAL_HISTORY) || [];
}

export function updateTodayHistory(score) {
  let date = new Date().toISOString().substring(0, 10);
  let currentHistories = getPersonalHistory();
  let found = false;
  currentHistories.forEach(function (value, i) {
    if (value.date === date) {
      value.score = score;
      currentHistories[i] = value;
      found = true;
    }
  });

  if (found) {
    localStorage.setItem(PERSONAL_HISTORY, currentHistories);
  } else {
    let history = { date, score };
    let newHistory = [history, ...currentHistories];
    localStorage.setItem(PERSONAL_HISTORY, newHistory);
  }
}
