(()=>{var t={246:t=>{function e(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function i(t){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?e(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t){return t.slice(0,-1)}function r(t,e=0){return e?Array.from(Array(e-t).keys()).map((e=>e+t)):Array.from(Array(t).keys())}function o(t){return[...new Set(t)]}function a(t,e){const i=o(t.map((t=>t.set))).filter(Boolean),s=(n=r(1,t.length+1),a=i,[n,a].reduce(((t,e)=>t.filter((t=>!e.includes(t)))))).sort((()=>.5-e()));var n,a;t.filter((t=>!t.set)).forEach(((t,e)=>t.set=s[e]))}function h(t,e,i=.5){n(t).forEach(((s,n)=>{const r=t[n+1],o=s.set!==r.set,a=e()<=i;o&&a&&(function(t,e,i){t.forEach((t=>{t.set===e&&(t.set=i)}))}(t,r.set,s.set),s.right=!1,r.left=!1)}))}t.exports=function(t=8,e=t,s=!0,l=1){const c=function(t){return function(){let e=t+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296}}(l),u=[],g=r(t);for(let i=0;i<e;i+=1){const n=g.map((n=>({x:n,y:i,top:s||i>0,left:s||n>0,bottom:s||i<e-1,right:s||n<t-1})));u.push(n)}n(u).forEach(((t,e)=>{a(t,c),h(t,c),function(t,e,s){const n=Object.values(function(t,e){let s=o(t.map((t=>t.set))).reduce(((t,e)=>i(i({},t),{},{[e]:[]})),{});return t.forEach((t=>s[t.set].push(t))),s}(t)),{ceil:r}=Math;n.forEach((t=>{(function(t,e,i){e=null==e?1:e;const s=null==t?0:t.length;if(!s||e<1)return[];e=e>s?s:e;let n=-1;const r=s-1,o=[...t];for(;++n<e;){const t=n+Math.floor(i()*(r-n+1)),e=o[t];o[t]=o[n],o[n]=e}return o.slice(0,e)})(t,r(s()*t.length),s).forEach((t=>{if(t){const i=e[t.x];t.bottom=!1,i.top=!1,i.set=t.set}}))}))}(t,u[e+1],c)}));const d=(m=u)[m.length-1];var m;return a(d,c),h(d,c,1),u}}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,i),r.exports}(()=>{"use strict";class t{constructor(){this.canvas=document.getElementById("canvas"),this.ctx=canvas.getContext("2d")}draw(){}}t.BACKGROUND_COLOR="#895530",t.GRID_SIZE=60;class e extends t{x;y;moving;startTime;speedAnim;Direction;DirectioOld;constructor(t=0,e=0){super(),this.x=t,this.y=e,this.startTime=(new Date).getTime(),this.speedAnim=8,this.Direction=3,this.DirectioOld=this.Direction}getTime(){return((new Date).getTime()-this.startTime)/1e3}updateTime(){this.startTime=(new Date).getTime()}update(){if(this.moving){const t=Math.abs(this.x-this.moving.targetX),i=Math.abs(this.y-this.moving.targetY);if(t<=e.SPEED&&i<=e.SPEED)this.x=this.moving.targetX,this.y=this.moving.targetY,this.moving=null;else{let t=e.SPEED*Math.cos(this.moving.angle),i=e.SPEED*Math.sin(this.moving.angle);Math.abs(t)>Math.abs(i)?t<0?(this.Direction=1,this.DirectioOld=this.Direction):t>0&&(this.Direction=3,this.DirectioOld=this.Direction):i<0?this.Direction=2:i>0&&(this.Direction=4),this.x+=t,this.y+=i}}}draw(){const t=2521/18;let i=0;null!=this.moving?(i=Math.trunc(this.getTime()*this.speedAnim),i>8&&(this.updateTime(),i=0),2==this.Direction||4==this.Direction?3==this.DirectioOld&&(i+=9):1==this.Direction||3==this.Direction&&(i+=9)):i=3==this.DirectioOld?9:8,this.ctx.drawImage(e.IMAGE,t*i,0,t,198,this.x-20,this.y-35,100,100)}move(t,e){if(this.moving)return;const i=t-this.x,s=e-this.y,n=Math.atan2(s,i);this.moving={targetX:t,targetY:e,angle:n}}}const s=new Image(2521,198);s.src="images/krtek_pohybFix.png",e.IMAGE=s,e.SPEED=10,e.js;class n extends t{x;y;constructor(t=0,e=0){super(),this.x=t,this.y=e}draw(){this.ctx.fillStyle="black",this.ctx.drawImage(n.IMAGE,this.x-20,this.y-20,100,100)}}const r=new Image(1182,1137);r.src="images/bed.png",n.IMAGE=r;class o extends t{x;y;width;height;constructor(e=0,i=0,s=t.GRID_SIZE,n=t.GRID_SIZE){super(),this.x=e,this.y=i,this.width=s,this.height=n,this.wallType=Math.floor(Math.random()*o.IMAGES.length),this.draw()}draw(){this.ctx.drawImage(o.IMAGES[this.wallType],this.x,this.y,60,60)}}const a=new Image(100,100);a.src="images/wall_1.png";const h=new Image(100,100);h.src="images/wall_2.png";const l=new Image(100,100);l.src="images/wall_3.png",o.IMAGES=[a,h,l];class c extends t{x;y;width;height;constructor(e=0,i=0,s=t.GRID_SIZE,n=t.GRID_SIZE){super(),this.x=e,this.y=i,this.width=s,this.height=n,this.draw()}draw(){this.ctx.fillStyle=t.HIGHLIGHT_COLOR,this.ctx.drawImage(c.IMAGE,this.x,this.y,60,60)}}const u=new Image(100,100);u.src="images/highlight_2.png",c.IMAGE=u;const g=i(246);class d extends t{player;target;walls=[];highlights=[];possibleMovesHighlighted=!1;width=7;height=10;map=[];clicksCount=0;wrongCount=0;visited=[];victory=!1;constructor(){super(),this.createMaze(),this.player=new e(60,60),this.target=new n(1140,780),this.createWalls()}createMaze(){const t=this.width,e=this.height,i=g(t,e,!0,1e4*Math.random()),s=new Array(2*e+1).fill(1).map((()=>new Array(2*t+1).fill(1)));this.visited=new Array(2*e+1).fill(0).map((()=>new Array(2*t+1).fill(0)));for(let t=0;t<i.length;t++)for(let e=0;e<i[t].length;e++){const n=2*t+1,r=2*e+1,o=i[t][e];s[n][r]=0,0==o.top&&(s[n-1][r]=0),0==o.bottom&&(s[n+1][r]=0),0==o.left&&(s[n][r-1]=0),0==o.right&&(s[n][r+1]=0)}this.map=s}createWalls(){const e=new Array(this.map.length);for(let i=0;i<this.map.length;i++){e[i]=new Array(this.map[i].length);for(let s=0;s<this.map[i].length;s++)1==this.map[i][s]&&(e[i][s]=new o(i*t.GRID_SIZE,s*t.GRID_SIZE))}this.walls=e}update(){if(this.player.update(),!this.possibleMovesHighlighted&&!this.player.moving){this.highlights=[];const e=Math.floor(this.player.x/t.GRID_SIZE),i=Math.floor(this.player.y/t.GRID_SIZE);if(e==2*this.height-1&&i==2*this.width-1)return this.victory=!0,void(this.possibleMovesHighlighted=!0);for(let s=0;s<=2*Math.PI;s+=Math.PI/2)for(let n=1;n<=d.MAX_GRIDS_MOVE;n++){const r=Math.round(e+Math.cos(s)*n),o=Math.round(i+Math.sin(s)*n);if(1==this.map[r][o])break;this.highlights.push(new c(r*t.GRID_SIZE,o*t.GRID_SIZE))}this.possibleMovesHighlighted=!0}}draw(){this.ctx.fillStyle=t.BACKGROUND_COLOR,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.possibleMovesHighlighted&&this.highlights.forEach((t=>t.draw())),this.walls.forEach((t=>t.forEach((t=>t.draw())))),this.target.draw(),this.player.draw()}click=t=>{const e=this.canvas.getBoundingClientRect(),i=(t.clientX-e.left)*this.canvas.width/e.width,s=(t.clientY-e.top)*this.canvas.height/e.height;this.player.moving||this.handleClick(i,s)};handleClick(e,i){const s=Math.floor(e/t.GRID_SIZE),n=Math.floor(i/t.GRID_SIZE);for(const e of this.highlights){const i=Math.floor(e.x/t.GRID_SIZE),r=Math.floor(e.y/t.GRID_SIZE);if(s==i&&n==r){this.possibleMovesHighlighted=!1,this.player.move(s*t.GRID_SIZE,n*t.GRID_SIZE),this.clicksCount++,this.visited[s]&&this.visited[s][n]&&this.wrongCount++,this.visited[s][n]=1;break}}}}d.GRIDS_WIDTH=20,d.GRIDS_HEIGHT=15,d.MAX_GRIDS_MOVE=3;const m=document.querySelector("#gui #menu-icon"),y=document.querySelector("#gui #game-ui"),p=document.querySelector("#gui #menu"),f=document.querySelector("#gui #menu #menu-img"),w=document.querySelector("#gui #menu #menu-img-victory"),I=document.querySelector("#gui"),M=document.querySelector("#gui #new-game"),v=document.querySelector("#gui #continue-game"),D=document.querySelector("#gui #results"),E=document.querySelectorAll("#gui .time-passed"),S=document.querySelectorAll("#gui .clicks-count"),b=document.querySelectorAll("#gui .wrong-count"),x=document.querySelector("#gui #score"),G=document.querySelector("#gui #victory");let k,O,_=0;const A=new class{newGameCallback;pauseGameCallback;showStats;score;constructor(){m.onclick=t=>{"none"==p.style.display?this.toggleMenu(!0):this.toggleMenu(!1)},M.onclick=t=>{this.toggleMenu(!1),this.newGameCallback(0),v.style.display="block",G.style.display="none",x.innerText="",D.style.display="block",w.style.display="none",f.style.display="block"},v.onclick=t=>{this.toggleMenu(!1)}}gameEnd(){v.style.display="none"}toggleMenu(t=!0){t?(I.classList.add("dark"),p.style.display="flex",y.style.display="none",this.pauseGameCallback(!0)):(I.classList.remove("dark"),p.style.display="none",y.style.display="block",this.pauseGameCallback(!1))}updateStats(t,e,i){E.forEach((e=>e.innerText=Math.round(t/1e3)+"s")),S.forEach((t=>t.innerText=e)),b.forEach((t=>t.innerText=i)),this.score=1e6/Math.sqrt(Math.round(t/1e3))/Math.log(e)/(i+1)}victory(){G.style.display="block",v.style.display="none",x.innerText=this.score.toFixed(),w.style.display="block",f.style.display="none",this.toggleMenu(!0)}};A.newGameCallback=t=>{k=new d(t),O=!1,_=0,T=Date.now(),q()},A.pauseGameCallback=t=>{O=t};const R=1e3/30;let C,T,Z;function q(){requestAnimationFrame(q),C=Date.now(),Z=C-T,Z>R&&(T=C-Z%R,k.update(),k.draw(),O||(_+=Z),A.updateStats(_,k.clicksCount,k.wrongCount),!O&&k.victory&&A.victory())}document.body.addEventListener("click",(t=>{!O&&k&&k.click(t)}))})()})();