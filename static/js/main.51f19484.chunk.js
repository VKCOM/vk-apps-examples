(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);a(62),a(87);var n=a(0),r=a.n(n),i=a(31),l=a.n(i),c=a(54),o=a.n(c),u=a(55),s=a(56),g=a(59),m=a(57),h=a(60),p=a(8),d=a(5),v=(a(110),a(58)),f=a.n(v),b=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(g.a)(this,Object(m.a)(t).call(this,e))).state={image:"",text:"",imageViewer:"",lang:"rus",popout:null},a.recognize=a.recognize.bind(Object(p.a)(Object(p.a)(a))),a.imageChange=a.imageChange.bind(Object(p.a)(Object(p.a)(a))),a.changeLanguage=a.changeLanguage.bind(Object(p.a)(Object(p.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"changeLanguage",value:function(e){var t=this;this.setState({lang:e.currentTarget.value},function(){return t.recognize()})}},{key:"imageChange",value:function(e){var t=this;e.preventDefault();var a=new FileReader,n=e.target.files[0];a.onloadend=function(){t.setState({image:n,imageViewer:a.result},function(){return t.recognize()})},a.readAsDataURL(n)}},{key:"recognize",value:function(){var e=this;this.state.image&&this.state.lang&&window.Tesseract.recognize(this.state.image,{lang:this.state.lang}).progress(function(){return e.setState({popout:r.a.createElement(d.ScreenSpinner,null)})}).catch(function(e){return console.error(e)}).then(function(t){e.setState({text:t.text})}).finally(function(){e.setState({popout:null})})}},{key:"renderResultBlock",value:function(){return this.state.text?r.a.createElement(d.Group,{title:"\u0422\u0435\u043a\u0441\u0442"},r.a.createElement(d.Div,null,this.state.text)):""}},{key:"render",value:function(){var e=this.renderResultBlock(),t=this.state.imageViewer?r.a.createElement(d.Group,{title:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"},r.a.createElement(d.Div,{style:{textAlign:"center"}},r.a.createElement("img",{alt:"Source",src:this.state.imageViewer}))):"";return r.a.createElement(d.View,{popout:this.state.popout,activePanel:"main_panel"},r.a.createElement(d.Panel,{id:"main_panel"},r.a.createElement(d.PanelHeader,null,"\u0420\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u0430"),r.a.createElement(d.Group,{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},r.a.createElement(d.FormLayout,null,r.a.createElement(d.Select,{top:"\u042f\u0437\u044b\u043a",status:this.state.lang?"valid":"error",placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u044f\u0437\u044b\u043a",value:this.state.lang,onChange:this.changeLanguage},r.a.createElement("option",{value:"eng"},"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439"),r.a.createElement("option",{value:"rus"},"\u0420\u0443\u0441\u0441\u043a\u0438\u0439")),r.a.createElement(d.File,{top:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",size:"xl",before:r.a.createElement(f.a,null),onChange:this.imageChange},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0433\u0430\u043b\u0435\u0440\u0435\u044e"))),t,e))}}]),t}(r.a.Component);o.a.send("VKWebAppInit",{}),l.a.render(r.a.createElement(b,null),document.getElementById("root"))},61:function(e,t,a){e.exports=a(111)}},[[61,1,2]]]);
//# sourceMappingURL=main.51f19484.chunk.js.map