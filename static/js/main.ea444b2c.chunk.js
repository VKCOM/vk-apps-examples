(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);a(68),a(93);var n=a(0),i=a.n(n),r=a(33),l=a.n(r),s=a(59),c=a.n(s),o=a(60),u=a(61),g=a(65),h=a(62),m=a(66),p=a(9),d=a(5),v=(a(116),a(63)),f=a.n(v),E=a(64),b=a.n(E),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(g.a)(this,Object(h.a)(t).call(this,e))).state={image:"",text:"",lang:"rus",status:"ready",popout:null},a.recognize=a.recognize.bind(Object(p.a)(Object(p.a)(a))),a.imageChange=a.imageChange.bind(Object(p.a)(Object(p.a)(a))),a.changeLanguage=a.changeLanguage.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"changeLanguage",value:function(e){var t=this;this.setState({lang:e.currentTarget.value},function(){return t.recognize()})}},{key:"imageChange",value:function(e){var t=this;if(e.preventDefault(),e.target.files&&e.target.files[0]){var a=e.target.files[0];b()(a,function(e){t.setState({image:e.toDataURL()},function(){return t.recognize()})},{canvas:!0})}}},{key:"recognize",value:function(){var e=this;this.state.image&&this.state.lang&&(this.setState({popout:i.a.createElement(d.ScreenSpinner,null),status:"progress",text:""}),window.Tesseract.recognize(this.state.image,{lang:this.state.lang}).catch(function(e){return console.error(e)}).then(function(t){e.setState({text:t.text})}).finally(function(){e.setState({popout:null,status:"finished"})}))}},{key:"renderResultBlock",value:function(){var e=this.state.text;return this.state.text||"finished"!==this.state.status||(e="\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0442\u044c \u0442\u0435\u043a\u0441\u0442. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435."),e?i.a.createElement(d.Group,{title:"\u0422\u0435\u043a\u0441\u0442"},i.a.createElement(d.Div,null,e)):""}},{key:"renderImageBlock",value:function(){return i.a.createElement(d.Group,{title:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}," ",i.a.createElement(d.Div,{style:{textAlign:"center"}},i.a.createElement("div",{style:{display:this.state.image?"":"none"}},i.a.createElement("img",{alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",style:{maxWidth:"100%",maxHeight:"100%"},src:this.state.image})),i.a.createElement("div",{style:{display:this.state.image?"none":""}},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430 \ud83d\udcf7")))}},{key:"render",value:function(){var e=this.renderResultBlock(),t=this.renderImageBlock();return i.a.createElement(d.View,{popout:this.state.popout,activePanel:"main_panel"},i.a.createElement(d.Panel,{id:"main_panel"},i.a.createElement(d.PanelHeader,null,"\u0420\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u0430"),t,e,i.a.createElement(d.Group,{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},i.a.createElement(d.FormLayout,null,i.a.createElement(d.Select,{top:"\u042f\u0437\u044b\u043a",status:this.state.lang?"valid":"error",placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u044f\u0437\u044b\u043a",value:this.state.lang,onChange:this.changeLanguage},i.a.createElement("option",{value:"eng"},"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439"),i.a.createElement("option",{value:"rus"},"\u0420\u0443\u0441\u0441\u043a\u0438\u0439")),i.a.createElement(d.File,{top:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",accept:"image/*",size:"xl",before:i.a.createElement(f.a,null),onChange:this.imageChange},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0433\u0430\u043b\u0435\u0440\u0435\u044e")))))}}]),t}(i.a.Component);c.a.send("VKWebAppInit",{}),l.a.render(i.a.createElement(y,null),document.getElementById("root"))},67:function(e,t,a){e.exports=a(121)}},[[67,1,2]]]);
//# sourceMappingURL=main.ea444b2c.chunk.js.map