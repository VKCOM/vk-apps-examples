(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);a(62),a(87);var n=a(0),i=a.n(n),r=a(31),l=a.n(r),s=a(54),c=a.n(s),o=a(55),u=a(56),g=a(59),h=a(57),m=a(60),d=a(8),p=a(5),v=(a(110),a(58)),f=a.n(v),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(g.a)(this,Object(h.a)(t).call(this,e))).state={image:"",text:"",lang:"rus",status:"ready",popout:null},a.canvasRef=i.a.createRef(),a.recognize=a.recognize.bind(Object(d.a)(Object(d.a)(a))),a.imageChange=a.imageChange.bind(Object(d.a)(Object(d.a)(a))),a.changeLanguage=a.changeLanguage.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"changeLanguage",value:function(e){var t=this;this.setState({lang:e.currentTarget.value},function(){return t.recognize()})}},{key:"imageChange",value:function(e){var t=this;if(e.preventDefault(),e.target.files&&e.target.files[0]){var a=e.target.files[0],n=new FileReader,i=this.canvasRef.current.getContext("2d"),r=new Image;n.onloadend=function(){r.src=n.result},r.onload=function(){i.canvas.width=r.width,i.canvas.height=r.height,i.drawImage(r,0,0,i.canvas.width,i.canvas.height),t.setState({image:i},function(){return t.recognize()})},n.readAsDataURL(a)}}},{key:"recognize",value:function(){var e=this;this.state.image&&this.state.lang&&window.Tesseract.recognize(this.state.image,{lang:this.state.lang}).progress(function(){return e.setState({popout:i.a.createElement(p.ScreenSpinner,null),status:"progress",text:""})}).catch(function(e){return console.error(e)}).then(function(t){e.setState({text:t.text})}).finally(function(){e.setState({popout:null,status:"finished"})})}},{key:"renderResultBlock",value:function(){var e=this.state.text;return this.state.text||"finished"!==this.state.status||(e="\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0442\u044c \u0442\u0435\u043a\u0441\u0442. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435."),e?i.a.createElement(p.Group,{title:"\u0422\u0435\u043a\u0441\u0442"},i.a.createElement(p.Div,null,e)):""}},{key:"renderImageBlock",value:function(){return i.a.createElement(p.Group,{title:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}," ",i.a.createElement(p.Div,{style:{textAlign:"center"}},i.a.createElement("div",{style:{display:this.state.image?"":"none"}},i.a.createElement("canvas",{alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",style:{maxWidth:"100%",maxHeight:"100%"},ref:this.canvasRef})),i.a.createElement("div",{style:{display:this.state.image?"none":""}},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430 \ud83d\udcf7")))}},{key:"render",value:function(){var e=this.renderResultBlock(),t=this.renderImageBlock();return i.a.createElement(p.View,{popout:this.state.popout,activePanel:"main_panel"},i.a.createElement(p.Panel,{id:"main_panel"},i.a.createElement(p.PanelHeader,null,"\u0420\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u0430"),t,e,i.a.createElement(p.Group,{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},i.a.createElement(p.FormLayout,null,i.a.createElement(p.Select,{top:"\u042f\u0437\u044b\u043a",status:this.state.lang?"valid":"error",placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u044f\u0437\u044b\u043a",value:this.state.lang,onChange:this.changeLanguage},i.a.createElement("option",{value:"eng"},"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439"),i.a.createElement("option",{value:"rus"},"\u0420\u0443\u0441\u0441\u043a\u0438\u0439")),i.a.createElement(p.File,{top:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",accept:"image/*",size:"xl",before:i.a.createElement(f.a,null),onChange:this.imageChange},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0433\u0430\u043b\u0435\u0440\u0435\u044e")))))}}]),t}(i.a.Component);c.a.send("VKWebAppInit",{}),l.a.render(i.a.createElement(E,null),document.getElementById("root"))},61:function(e,t,a){e.exports=a(111)}},[[61,1,2]]]);
//# sourceMappingURL=main.af264561.chunk.js.map