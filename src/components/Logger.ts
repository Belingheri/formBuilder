/**
 * logga solo in ambiente di test
 * @param data
 */
function debug(...data: any[]): void {
  console.log(...data);
}

function info(...data: any[]): void {
  console.info(...data);
}

function error(...data: any[]): void {
  console.error(...data);
}

export { debug, info, error };
