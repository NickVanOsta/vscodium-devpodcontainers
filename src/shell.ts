export const isWindows = process.platform === "win32";
export default isWindows ? "powershell.exe" : undefined;
