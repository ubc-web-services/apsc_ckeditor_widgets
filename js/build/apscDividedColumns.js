!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.apscDividedColumns=t())}(self,(()=>(()=>{var e={"ckeditor5/src/core.js":(e,t,s)=>{e.exports=s("dll-reference CKEditor5.dll")("./src/core.js")},"ckeditor5/src/ui.js":(e,t,s)=>{e.exports=s("dll-reference CKEditor5.dll")("./src/ui.js")},"ckeditor5/src/widget.js":(e,t,s)=>{e.exports=s("dll-reference CKEditor5.dll")("./src/widget.js")},"dll-reference CKEditor5.dll":e=>{"use strict";e.exports=CKEditor5.dll}},t={};function s(i){var o=t[i];if(void 0!==o)return o.exports;var d=t[i]={exports:{}};return e[i](d,d.exports,s),d.exports}s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};return(()=>{"use strict";s.d(i,{default:()=>c});var e=s("ckeditor5/src/core.js"),t=s("ckeditor5/src/widget.js");class o extends e.Command{constructor(e,t){super(e),this.attributeName=t}execute(e){const{model:t}=this.editor;t.change((e=>{t.insertContent(function(e){const t=e.createElement("apscDividedColumns",{class:"md--flex-grid keyline-v-short my-atom-1"}),s=e.createElement("apscDividedColumnsOne"),i=e.createElement("apscDividedColumnsTwo");return e.append(s,t),e.append(i,t),e.appendElement("paragraph",s),e.appendElement("paragraph",i),t}(e))}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,s=t.getFirstPosition().findAncestor("apscDividedColumns"),i=e.schema.findAllowedParent(t.getFirstPosition(),"apscDividedColumns");this.isEnabled=null!==i,this.value=!!s}}class d extends e.Plugin{static get requires(){return[t.Widget]}init(){const e=this.editor;this._defineSchema(),this._defineConverters(),e.model.schema.extend("apscDividedColumns",{allowAttributes:["class"]}),e.conversion.attributeToAttribute({model:"class",view:"class"}),e.commands.add("apscDividedColumns",new o(e))}_defineSchema(){const e=this.editor.model.schema;e.register("apscDividedColumns",{isObject:!0,allowWhere:"$block",allowChildren:["apscDividedColumnsOne","apscDividedColumnsTwo"]}),e.register("apscDividedColumnsOne",{isLimit:!0,allowIn:"apscDividedColumns",allowContentOf:"$root"}),e.register("apscDividedColumnsTwo",{isLimit:!0,allowIn:"apscDividedColumns",allowContentOf:"$root"}),e.addChildCheck(((e,t)=>{}))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").elementToElement({model:"apscDividedColumns",view:{name:"div",classes:["widget-divided-columns"]}}),e.for("upcast").elementToElement({model:"apscDividedColumnsOne",view:{name:"div",classes:["md--flex-1","first-child--mt-0"]}}),e.for("upcast").elementToElement({model:"apscDividedColumnsTwo",view:{name:"div",classes:["md--flex-2","first-child--mt-0"]}}),e.for("dataDowncast").elementToElement({model:"apscDividedColumns",view:(e,{writer:t})=>t.createContainerElement("div",{class:"widget-divided-columns"})}),e.for("dataDowncast").elementToElement({model:"apscDividedColumnsOne",view:(e,{writer:t})=>t.createContainerElement("div",{class:"md--flex-1 first-child--mt-0"})}),e.for("dataDowncast").elementToElement({model:"apscDividedColumnsTwo",view:(e,{writer:t})=>t.createContainerElement("div",{class:"md--flex-2 first-child--mt-0"})}),e.for("editingDowncast").elementToElement({model:"apscDividedColumns",view:(e,{writer:s})=>{const i=s.createContainerElement("div",{class:"widget-divided-columns"});return(0,t.toWidget)(i,s,{label:"APSC Divided Columns widget",hasSelectionHandle:!0})}}),e.for("editingDowncast").elementToElement({model:"apscDividedColumnsOne",view:(e,{writer:s})=>{const i=s.createEditableElement("div",{class:"md--flex-1 first-child--mt-0"});return(0,t.toWidgetEditable)(i,s)}}),e.for("editingDowncast").elementToElement({model:"apscDividedColumnsTwo",view:(e,{writer:s})=>{const i=s.createEditableElement("div",{class:"md--flex-2 first-child--mt-0"});return(0,t.toWidgetEditable)(i,s)}})}}var n=s("ckeditor5/src/ui.js");class l extends e.Plugin{static get requires(){return[n.ContextualBalloon]}init(){const e=this.editor;e.ui.componentFactory.add("apscDividedColumns",(t=>{const s=e.commands.get("apscDividedColumns"),i=new n.ButtonView(t);return i.set({label:e.t("Divided Columns"),icon:'<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:.5px;}.cls-2{opacity:.3;}</style></defs><g id="Layer_1"><path class="cls-2" d="m15.468,12.33h-3.632c-.181,0-.328-.147-.328-.328s.147-.328.328-.328h3.632c.181,0,.328.147.328.328s-.147.328-.328.328Zm2.175-1.334h-5.807c-.181,0-.328-.147-.328-.328s.147-.328.328-.328h5.807c.181,0,.328.147.328.328s-.147.328-.328.328Zm-.63-1.334h-5.197c-.162,0-.294-.147-.294-.328s.132-.328.294-.328h5.197c.162,0,.294.147.294.328s-.132.328-.294.328Zm.644-1.334h-5.808c-.181,0-.328-.147-.328-.328s.147-.328.328-.328h5.807c.181,0,.328.147.328.328s-.147.328-.328.328h0Z"/><path class="cls-2" d="m5.801,12.33h-3.632c-.181,0-.328-.147-.328-.328s.147-.328.328-.328h3.632c.181,0,.328.147.328.328s-.147.328-.328.328Zm2.175-1.334H2.169c-.181,0-.328-.147-.328-.328s.147-.328.328-.328h5.807c.181,0,.328.147.328.328s-.147.328-.328.328Zm-.63-1.334H2.149c-.162,0-.294-.147-.294-.328s.132-.328.294-.328h5.197c.162,0,.294.147.294.328s-.132.328-.294.328Zm.644-1.334H2.183c-.181,0-.328-.147-.328-.328s.147-.328.328-.328h5.807c.181,0,.328.147.328.328s-.147.328-.328.328h0Z"/></g><g id="Layer_2"><line class="cls-1" x1="10" y1="6.333" x2="10" y2="13.667"/></g></svg>',tooltip:!0,class:"cke5-apscdividedcolumns-insert-button"}),i.bind("isOn","isEnabled").to(s,"value","isEnabled"),this.listenTo(i,"execute",(()=>e.execute("apscDividedColumns"))),i}))}}class r extends e.Plugin{static get requires(){return[d,l]}}const c={ApscDividedColumns:r}})(),i=i.default})()));