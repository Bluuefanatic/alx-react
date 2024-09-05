// Function to get the current year
export function getFullYear() {
  return new Date().getFullYear();
}

// Function to get the footer copy based on the isIndex argument
export function getFooterCopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
