"use strict";(self.webpackChunklearninteractive=self.webpackChunklearninteractive||[]).push([[592],{75:(c,l,i)=>{i.d(l,{H:()=>u});var e=i(223),r=i(382);let u=(()=>{class s{constructor(){this.cribSrc="",this.questionsAndAnswers=[],this.currentQuestion="",this.currentAnswer="",this.answer="",this.rightAnswers=0,this.totalQuestions=0,this.percent="(no answers yet)",this.usedQuestionsIndexes=[]}onEscape(){this.focusOnInput()}ngOnInit(){this.showQuestion()}showQuestion(){let n=document.getElementById("meQuestion");const t=Math.floor(Math.random()*this.questionsAndAnswers.length);this.usedQuestionsIndexes.length===this.questionsAndAnswers.length&&(this.usedQuestionsIndexes.length=0),this.usedQuestionsIndexes.includes(t)?this.showQuestion():(this.currentAnswer=this.questionsAndAnswers[t].symbol,n.innerText=this.currentQuestion=this.questionsAndAnswers[t].et,this.usedQuestionsIndexes.push(t))}handleClick(n){("Enter"===n.code||"Enter"===n.key||13===n.keyCode)&&this.checkAnswer()}checkAnswer(){if(this.answer=this.answer.trim(),this.answer){this.answer===this.currentAnswer?(this.rightAnswers++,this.showQuestion()):(document.getElementById("wrongAnswerModalToggler").click(),document.getElementById("wrongAnswerModal").addEventListener("keypress",t=>{("Enter"===t.code||"Enter"===t.key||13===t.keyCode)&&(document.getElementById("wrongAnswerModalClose").click(),this.focusOnInput(),setTimeout(()=>{this.showQuestion()},120))}),document.addEventListener("keydown",t=>{("Escape"===t.code||"Escape"===t.key||27===t.keyCode)&&(console.log("show question if escaped was pushed"),this.showQuestion())})),this.totalQuestions++;const n=Math.round(this.rightAnswers/this.totalQuestions*100);this.percent=`(${n}%)`,this.answer=""}else this.focusOnInput()}focusOnInput(){document.getElementById("answer").focus()}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["li-one-input-test"]],hostBindings:function(n,t){1&n&&e.NdJ("keydown.escape",function(){return t.onEscape()},!1,e.evT)},inputs:{cribSrc:"cribSrc",questionsAndAnswers:"questionsAndAnswers"},decls:40,vars:6,consts:[["id","metalsModal","tabindex","-1","aria-labelledby","metalsModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered","translate-middle-x"],[1,"modal-content"],[1,"modal-body"],["alt","metal elements symbols",1,"img-fluid",3,"src"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["id","wrongAnswerModal","tabindex","-1","aria-labelledby","wrongAnswerModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-body","py-5"],[1,"text-center"],[1,"fs-1","text-center"],["id","wrongAnswerModalClose","type","button","data-bs-dismiss","modal",1,"btn","btn-secondary",3,"click"],[2,"background-color","#FED9AD"],[1,"row","gx-0","mt-4"],[1,"col-2"],[1,"col-8"],[1,"pt-5","text-center"],["id","help-buttons",1,"col-2"],["type","button",1,"btn","btn-dark","me-2"],["type","button","data-bs-toggle","modal","data-bs-target","#metalsModal",1,"btn","btn-dark"],["id","wrongAnswerModalToggler","type","button","data-bs-toggle","modal","data-bs-target","#wrongAnswerModal",2,"display","none"],[1,"metal-test-wrapper"],[1,"card",2,"width","18rem"],[1,"card-body"],["id","meQuestion",1,"card-title"],["id","answer","type","text","autofocus","",2,"width","8rem","height","8rem","font-size","xxx-large","text-align","center",3,"ngModel","ngModelChange","keydown"],[1,"card-footer","justify-content-between","d-flex"],["id","statistics",1,"pt-3"],[1,"btn","btn-dark","py-0",3,"click"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e.TgZ(6,"button",6),e._uU(7,"Close"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(8,"div",7),e.TgZ(9,"div",1),e.TgZ(10,"div",2),e.TgZ(11,"div",8),e.TgZ(12,"p",9),e._uU(13,"Right answer is:"),e.qZA(),e.TgZ(14,"p",10),e._uU(15),e.qZA(),e.qZA(),e.TgZ(16,"div",5),e.TgZ(17,"button",11),e.NdJ("click",function(){return t.focusOnInput()}),e._uU(18,"Close"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(19,"div",12),e.TgZ(20,"div",13),e._UZ(21,"div",14),e.TgZ(22,"div",15),e._UZ(23,"p",16),e.qZA(),e.TgZ(24,"div",17),e.TgZ(25,"button",18),e._uU(26," Abi "),e.qZA(),e.TgZ(27,"button",19),e._uU(28," Spikker "),e.qZA(),e._UZ(29,"button",20),e.qZA(),e.qZA(),e.TgZ(30,"div",21),e.TgZ(31,"div",22),e.TgZ(32,"div",23),e._UZ(33,"h2",24),e.TgZ(34,"input",25),e.NdJ("ngModelChange",function(a){return t.answer=a})("keydown",function(a){return t.handleClick(a)}),e.qZA(),e.qZA(),e.TgZ(35,"div",26),e.TgZ(36,"p",27),e._uU(37),e.qZA(),e.TgZ(38,"button",28),e.NdJ("click",function(){return t.checkAnswer()}),e._uU(39,"Check"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(4),e.s9C("src",t.cribSrc,e.LSH),e.xp6(11),e.Oqu(t.currentAnswer),e.xp6(19),e.Q6J("ngModel",t.answer),e.xp6(3),e.lnq("",t.rightAnswers," / ",t.totalQuestions," ",t.percent,""))},directives:[r.Fj,r.JJ,r.On],styles:[".metal-test-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin:15rem auto}.metal-test-wrapper[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.modal-dialog[_ngcontent-%COMP%]{transform:translate(30%)!important}#answer[_ngcontent-%COMP%]{border:0}#answer[type=text][_ngcontent-%COMP%]:focus{border:0;outline:none}"]}),s})()}}]);