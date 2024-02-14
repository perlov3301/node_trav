console.log("os_demojs");
import os from 'node:os';
// platform: aix, darwin(macOS), freebsd
// openbsd, linux, sunos, win32(Windows)
console.log(`myplatform: ${os.platform()}`);
// CPU arch: arm, arm64, ia32,loong64, mips, mipsel
// ppc, ppc64, riscv64, s390, s390x, x64
console.log(`CPU Arch: ${os.arch()}`);
// CPU Core info:
const myarr = os.cpus();
const o0 = myarr[0];
console.log(`CPU Core: ${myarr.length} Objects`);
console.log(`keys[0]: ${Object.keys(o0)}`);
console.log(`o0;model: ${o0.model}`);
console.log(`o0;speed: ${o0.speed}`);
//free memory
let aM = os.freemem();
aM=Math.round(aM/1000000000);
console.log(`free memory: ${aM}GB`);
// total memory
let aMt = os.totalmem();
aMt=Math.round(aMt/1000000000);
console.log(`total memory: ${aMt}GB`);
// home dir
const aDir = os.homedir();
console.log(`home dir: ${aDir}`);
// how many time OS is up (uptime)
console.log(`uptime of OS: ${os.uptime()}`);


