!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.apscExpand=t())}(self,(()=>(()=>{var e={"ckeditor5/src/core.js":(e,t,n)=>{e.exports=n("dll-reference CKEditor5.dll")("./src/core.js")},"ckeditor5/src/ui.js":(e,t,n)=>{e.exports=n("dll-reference CKEditor5.dll")("./src/ui.js")},"ckeditor5/src/widget.js":(e,t,n)=>{e.exports=n("dll-reference CKEditor5.dll")("./src/widget.js")},"dll-reference CKEditor5.dll":e=>{"use strict";e.exports=CKEditor5.dll}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};return(()=>{"use strict";n.d(r,{default:()=>l});var e=n("ckeditor5/src/core.js"),t=n("ckeditor5/src/widget.js");class s extends e.Command{constructor(e,t){super(e),this.attributeName=t}execute(e){const{model:t}=this.editor;t.change((e=>{t.insertContent(function(e,t){const n=e.createElement("apscExpand",{class:"my-molecule-2 md---mx-organism-2"}),r=e.createElement("apscExpandInner");return e.append(r,n),e.appendElement("paragraph",r),n}(e))}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,n=t.getFirstPosition().findAncestor("apscExpand"),r=e.schema.findAllowedParent(t.getFirstPosition(),"apscExpand");this.isEnabled=null!==r,this.value=!!n}}class o extends e.Plugin{static get requires(){return[t.Widget]}init(){this._defineSchema(),this._defineConverters(),this.editor.model.schema.extend("apscExpand",{allowAttributes:["class"]}),this.editor.conversion.attributeToAttribute({model:"class",view:"class"}),this.editor.commands.add("apscExpand",new s(this.editor))}_defineSchema(){const e=this.editor.model.schema;e.register("apscExpand",{isObject:!0,allowWhere:"$block",allowContentOf:"$root",allowChildren:["apscExpandInner"]}),e.register("apscExpandInner",{isLimit:!0,allowIn:"apscExpand",allowContentOf:"$root"}),e.addChildCheck(((e,t)=>{}))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").elementToElement({model:"apscExpand",view:{name:"div",classes:["widget-expand"]}}),e.for("upcast").elementToElement({model:"apscExpandInner",view:{name:"div"}}),e.for("dataDowncast").elementToElement({model:"apscExpand",view:(e,{writer:t})=>t.createContainerElement("div",{class:"widget-expand"})}),e.for("dataDowncast").elementToElement({model:"apscExpandInner",view:(e,{writer:t})=>t.createContainerElement("div")}),e.for("editingDowncast").elementToElement({model:"apscExpand",view:(e,{writer:n})=>{const r=n.createContainerElement("div",{class:"widget-expand"});return(0,t.toWidget)(r,n,{label:"APSC Expand widget",hasSelectionHandle:!0})}}),e.for("editingDowncast").elementToElement({model:"apscExpandInner",view:(e,{writer:n})=>{const r=n.createEditableElement("div");return(0,t.toWidgetEditable)(r,n)}})}}var i=n("ckeditor5/src/ui.js");class a extends e.Plugin{static get requires(){return[i.ContextualBalloon]}init(){const e=this.editor;e.ui.componentFactory.add("apscExpand",(t=>{const n=e.commands.get("apscExpand"),r=new i.ButtonView(t);return r.set({label:e.t("Expanded Width Region"),icon:'\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"><path d="M17.956 9.782a.586.586 0 0 0-.123-.186L15.547 7.31a.572.572 0 0 0-.808.808l1.31 1.31H3.951l1.31-1.31a.572.572 0 0 0-.808-.808L2.167 9.596a.57.57 0 0 0 0 .809l2.286 2.286a.568.568 0 0 0 .808 0 .572.572 0 0 0 0-.808l-1.31-1.31h12.098l-1.31 1.31a.572.572 0 0 0 .808.808l2.286-2.286a.57.57 0 0 0 .123-.623Z" fill="black"/></svg>',tooltip:!0,class:"cke5-apscexpand-insert-button"}),r.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(r,"execute",(()=>e.execute("apscExpand"))),r}))}}class d extends e.Plugin{static get requires(){return[o,a]}}const l={ApscExpand:d}})(),r=r.default})()));