!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.apscColorBox=t())}(self,(()=>(()=>{var e={"ckeditor5/src/core.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/core.js")},"ckeditor5/src/ui.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/ui.js")},"ckeditor5/src/utils.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/utils.js")},"ckeditor5/src/widget.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/widget.js")},"dll-reference CKEditor5.dll":e=>{"use strict";e.exports=CKEditor5.dll}},t={};function o(s){var l=t[s];if(void 0!==l)return l.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,o),n.exports}o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var s={};return(()=>{"use strict";o.d(s,{default:()=>Z});var e=o("ckeditor5/src/core.js"),t=o("ckeditor5/src/widget.js");const l=[{label:"Default",value:"bg-transparent"},{label:"White",value:"bg-white"},{label:"Light Grey",value:"bg-grey-100"},{label:"Unit Primary",value:"bg-unit-primary"},{label:"Unit Secondary",value:"bg-unit-secondary"},{label:"Unit Accent",value:"bg-unit-accent"},{label:"Unit Gradient",value:"bg-gradient--unit"},{label:"UBC Blue Gradient",value:"bg-gradient"},{label:"UBC Blue",value:"bg-ubc-blue"},{label:"UBC Sea Blue",value:"bg-ubc-blue-sea"},{label:"UBC Cobalt Blue",value:"bg-ubc-blue-cobalt"},{label:"UBC Neptune Blue",value:"bg-ubc-blue-neptune"},{label:"UBC Cornflower Blue",value:"bg-ubc-blue-cornflower"},{label:"UBC Polar Blue",value:"bg-ubc-blue-polar"}],n=[{label:"None",value:"my-0"},{label:"Atom 1",value:"my-atom-1"},{label:"Atom 2",value:"my-atom-2"},{label:"Atom 3",value:"my-atom-3"},{label:"Atom 4",value:"my-atom-4"},{label:"Molecule 1",value:"my-molecule-1"},{label:"Molecule 2",value:"my-molecule-2"},{label:"Molecule 3",value:"my-molecule-3"},{label:"Molecule 4",value:"my-molecule-4"},{label:"Organism 1",value:"my-organism-1"},{label:"Organism 2",value:"my-organism-2"},{label:"Organism 3",value:"my-organism-3"},{label:"Organism 4",value:"my-organism-4"}],a=[{label:"None",value:"p-0"},{label:"Atom 1",value:"p-atom-1"},{label:"Atom 2",value:"p-atom-2"},{label:"Atom 3",value:"p-atom-3"},{label:"Atom 4",value:"p-atom-4"},{label:"Molecule 1",value:"p-molecule-1"},{label:"Molecule 2",value:"p-molecule-2"},{label:"Molecule 3",value:"p-molecule-3"},{label:"Molecule 4",value:"p-molecule-4"},{label:"Organism 1",value:"p-organism-1"},{label:"Organism 2",value:"p-organism-2"},{label:"Organism 3",value:"p-organism-3"},{label:"Organism 4",value:"p-organism-4"}],i={alignclass:"align-center",backgroundclass:"bg-white",marginclass:"my-molecule-1",paddingclass:"p-molecule-1",shadowclass:"drop-shadow-none"};class r extends e.Command{constructor(e,t){super(e),this.attributeName=t}execute(){const e=this.editor,t=this.editor.model,o=e.model.document.selection,s=o.getSelectedElement();let l="";l=s&&s.is("element","colorBox")?s:o.getFirstPosition().findAncestor("colorBox"),t.change((e=>{t.insertContent(function(e){const t=e.createElement("apscColorBox",i,{class:"widget-color-box"}),o=e.createElement("apscColorBoxInner");return e.append(o,t),e.appendElement("paragraph",o),t}(e))}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,o=t.getFirstPosition().findAncestor("apscColorBox"),s=e.schema.findAllowedParent(t.getFirstPosition(),"apscColorBox");this.isEnabled=null!==s,this.value=!!o}}class c extends e.Plugin{static get requires(){return[t.Widget]}init(){const e=this.editor;this._defineSchema(),this._defineConverters(),e.commands.add("apscColorBox",new r(e))}_defineSchema(){const e=this.editor.model.schema;e.register("apscColorBox",{isObject:!0,allowWhere:"$block",allowChildren:["apscColorBoxInner"]}),e.register("apscColorBoxInner",{isLimit:!0,allowIn:"apscColorBox",allowContentOf:"$root"}),e.addChildCheck(((e,t)=>{}))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").elementToElement({model:"apscColorBox",view:{name:"div",classes:"widget-color-box"}}),e.for("upcast").elementToElement({model:"apscColorBoxInner",view:{name:"div",classes:["widget-content","first-child--mt-0"]}}),e.for("dataDowncast").elementToElement({model:"apscColorBox",view:(e,{writer:t})=>t.createContainerElement("div",{class:"widget-color-box"})}),e.for("dataDowncast").elementToElement({model:"apscColorBoxInner",view:(e,{writer:t})=>t.createContainerElement("div",{class:"widget-content first-child--mt-0"})}),e.for("editingDowncast").elementToElement({model:"apscColorBox",view:(e,{writer:o})=>{const s=o.createContainerElement("div",{class:"widget-color-box"});return(0,t.toWidget)(s,o,{label:"UBC Color Box widget",hasSelectionHandle:!0})}}),e.for("editingDowncast").elementToElement({model:"apscColorBoxInner",view:(e,{writer:o})=>{const s=o.createEditableElement("div",{class:"widget-content first-child--mt-0"});return(0,t.toWidgetEditable)(s,o)}})}}var d=o("ckeditor5/src/ui.js");class u extends e.Plugin{static get requires(){return[d.ContextualBalloon]}init(){const e=this.editor;e.ui.componentFactory.add("apscColorBox",(t=>{const o=e.commands.get("apscColorBox"),s=new d.ButtonView(t);return s.set({label:e.t("Color Box"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m11.374,14.437h-6.915c-.345,0-.625-.28-.625-.625s.28-.625.625-.625h6.915c.345,0,.625.28.625.625s-.28.625-.625.625Zm4.141-2.54H4.459c-.345,0-.625-.28-.625-.625s.28-.625.625-.625h11.056c.345,0,.625.28.625.625s-.28.625-.625.625Zm-1.2-2.54H4.42c-.309,0-.559-.28-.559-.625s.251-.625.559-.625h9.895c.309,0,.559.28.559.625s-.251.625-.559.625Zm1.227-2.54H4.485c-.345,0-.625-.28-.625-.625s.28-.625.625-.625h11.056c.345,0,.625.28.625.625s-.28.625-.625.625Z"/><path d="m17.671,17.998h-1.875c-.259,0-.469-.21-.469-.469s.21-.469.469-.469h1.406v-1.406c0-.259.21-.469.469-.469s.469.21.469.469v1.875c0,.259-.21.469-.469.469Z"/><path d="m14.148,17.998h-3.294c-.259,0-.469-.21-.469-.469s.21-.469.469-.469h3.294c.259,0,.469.21.469.469s-.21.469-.469.469Zm-4.942,0h-3.295c-.259,0-.469-.21-.469-.469s.21-.469.469-.469h3.295c.259,0,.469.21.469.469s-.21.469-.469.469Z"/><path d="m4.265,17.998h-1.875c-.259,0-.469-.21-.469-.469v-1.875c0-.259.21-.469.469-.469s.469.21.469.469v1.406h1.406c.259,0,.469.21.469.469s-.21.469-.469.469Z"/><path d="m2.39,14.495c-.259,0-.469-.21-.469-.469v-3.255c0-.259.21-.469.469-.469s.469.21.469.469v3.255c0,.259-.21.469-.469.469Zm0-4.883c-.259,0-.469-.21-.469-.469v-3.256c0-.259.21-.469.469-.469s.469.21.469.469v3.256c0,.259-.21.469-.469.469Z"/><path d="m2.39,4.729c-.259,0-.469-.21-.469-.469v-1.875c0-.259.21-.469.469-.469h1.875c.259,0,.469.21.469.469s-.21.469-.469.469h-1.406v1.406c0,.259-.21.469-.469.469Z"/><path d="m14.148,2.854h-3.294c-.259,0-.469-.21-.469-.469s.21-.469.469-.469h3.294c.259,0,.469.21.469.469s-.21.469-.469.469Zm-4.942,0h-3.294c-.259,0-.469-.21-.469-.469s.21-.469.469-.469h3.294c.259,0,.469.21.469.469s-.21.469-.469.469Z"/><path d="m17.671,4.729c-.259,0-.469-.21-.469-.469v-1.406h-1.406c-.259,0-.469-.21-.469-.469s.21-.469.469-.469h1.875c.259,0,.469.21.469.469v1.875c0,.259-.21.469-.469.469Z"/><path d="m17.671,14.495c-.259,0-.469-.21-.469-.469v-3.255c0-.259.21-.469.469-.469s.469.21.469.469v3.255c0,.259-.21.469-.469.469Zm0-4.883c-.259,0-.469-.21-.469-.469v-3.255c0-.259.21-.469.469-.469s.469.21.469.469v3.255c0,.259-.21.469-.469.469Z"/></svg>',tooltip:!0,class:"cke5-apsccolorbox-insert-button"}),s.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(s,"execute",(()=>e.execute("apscColorBox"))),s}))}}function m(e){const t=e.getSelectedElement();return t&&p(t)?t:null}function g(e){const t=e.getFirstPosition();if(!t)return null;let o=t.parent;for(;o;){if(o.is("element")&&p(o))return o;o=o.parent}return null}function p(e){return!!e.hasClass("widget-color-box")&&(0,t.isWidget)(e)}class b extends e.Plugin{static get requires(){return[t.WidgetToolbarRepository]}static get pluginName(){return"ApscColorBoxToolbar"}afterInit(){const e=this.editor,o=e.plugins.get(t.WidgetToolbarRepository),s=e.config.get("apscColorBox.contentToolbar"),l=e.config.get("apscColorBox.tableToolbar");s&&o.register("apscColorBoxContent",{ariaLabel:e.t("Color Box toolbar"),items:s,getRelatedElement:g}),l&&o.register("apscColorBox",{ariaLabel:e.t("Color Box toolbar"),items:l,getRelatedElement:m})}}class x extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:o}=this.editor,{selection:s}=t.model.document,l=s.getSelectedElement();let n="";const a=e.value,i="apscalignclass";n=l&&l.is("element","apscColorBox")?l:s.getFirstPosition().findAncestor("apscColorBox"),o.change((e=>{if(s.isCollapsed)a?e.setAttribute(i,a,n):e.removeAttribute(i,n);else{const t=o.schema.getValidRanges(s.getRanges(),i);for(const o of t)a?(e.setAttribute(i,a,o),this.isOn=!0):(e.removeAttribute(i,o),this.isOn=!1)}}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,o=t.getFirstPosition().findAncestor("apscColorBox"),s=e.schema.findAllowedParent(t.getFirstPosition(),"apscColorBox");this.isEnabled=null!==s,this.value=!!o&&o.getAttribute("apscalignclass")}}class h extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"ApscColorBoxAlignEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("apscColorBox",{allowAttributes:"apscalignclass"}),e.conversion.attributeToAttribute({model:"apscalignclass",view:"class"}),e.commands.add("apscColorBoxAlignment",new x(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\balign-[\S]+/},model:{key:"apscalignclass",value:e=>e.getAttribute("class").match(/\balign-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"apscalignclass",view:e=>({key:"class",value:e})})}}class v extends e.Plugin{static get requires(){return[d.ContextualBalloon]}static get pluginName(){return"ApscColorBoxAlignUI"}init(){const t=this.editor;t.ui.componentFactory.add("apscColorBoxAlignExpanded",(o=>{const s=t.commands.get("apscColorBoxAlignment"),l=new d.ButtonView(o);return l.set({label:t.t("Expand Width"),icon:e.icons.objectSizeFull,tooltip:!0,class:"cke5-apsccolorbox-align-expanded-button"}),l.bind("isEnabled").to(s),l.bind("isOn").to(s),this.listenTo(l,"execute",(()=>t.execute("apscColorBoxAlignment",{value:"align-expanded"}))),l})),t.ui.componentFactory.add("apscColorBoxAlignFull",(o=>{const s=t.commands.get("apscColorBoxAlignment"),l=new d.ButtonView(o);return l.set({label:t.t("Full Width"),icon:e.icons.objectFullWidth,tooltip:!0,class:"cke5-apsccolorbox-align-full-button"}),l.bind("isEnabled").to(s),l.bind("isOn").to(s),this.listenTo(l,"execute",(()=>t.execute("apscColorBoxAlignment",{value:"align-full"}))),l})),t.ui.componentFactory.add("apscColorBoxAlignLeft",(o=>{const s=t.commands.get("apscColorBoxAlignment"),l=new d.ButtonView(o);return l.set({label:t.t("Align left and wrap text"),icon:e.icons.objectLeft,tooltip:!0,class:"cke5-apsccolorbox-align-left-button"}),l.bind("isEnabled").to(s),l.bind("isOn").to(s),this.listenTo(l,"execute",(()=>t.execute("apscColorBoxAlignment",{value:"align-left"}))),l})),t.ui.componentFactory.add("apscColorBoxAlignCenter",(o=>{const s=t.commands.get("apscColorBoxAlignment"),l=new d.ButtonView(o);return l.set({label:t.t("Align Center"),icon:e.icons.objectCenter,tooltip:!0,class:"cke5-apsccolorbox-align-center-button"}),l.bind("isEnabled").to(s),l.bind("isOn").to(s),this.listenTo(l,"execute",(()=>t.execute("apscColorBoxAlignment",{value:"align-center"}))),l})),t.ui.componentFactory.add("apscColorBoxAlignRight",(o=>{const s=t.commands.get("apscColorBoxAlignment"),l=new d.ButtonView(o);return l.set({label:t.t("Align right and wrap text"),icon:e.icons.objectRight,tooltip:!0,class:"cke5-apsccolorbox-align-right-button"}),l.bind("isEnabled").to(s),l.bind("isOn").to(s),this.listenTo(l,"execute",(()=>{t.execute("apscColorBoxAlignment",{value:"align-right"})})),l}))}}class C extends e.Plugin{static get requires(){return[h,v]}static get pluginName(){return"ApscColorBoxAlign"}}class w extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:o}=this.editor,{selection:s}=t.model.document,l=s.getSelectedElement();let n="";const a=e.value,i="apscbackgroundclass";n=l&&l.is("element","apscColorBox")?l:s.getFirstPosition().findAncestor("apscColorBox"),o.change((e=>{if(s.isCollapsed)a?e.setAttribute(i,a,n):e.removeAttribute(i,n);else{const t=o.schema.getValidRanges(s.getRanges(),i);for(const o of t)a?e.setAttribute(i,a,o):e.removeAttribute(i,o)}}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,o=t.getFirstPosition().findAncestor("apscColorBox"),s=e.schema.findAllowedParent(t.getFirstPosition(),"apscColorBox");this.isEnabled=null!==s,this.value=!!o&&o.getAttribute("apscbackgroundclass")}}class B extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"ApscColorBoxBackgroundEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("apscColorBox",{allowAttributes:"apscbackgroundclass"}),e.conversion.attributeToAttribute({model:"apscbackgroundclass",view:"class"}),e.commands.add("apscColorBoxBackground",new w(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\bbg-[\S]+/},model:{key:"apscbackgroundclass",value:e=>e.getAttribute("class").match(/\bbg-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"apscbackgroundclass",view:e=>({key:"class",value:e})})}}var f=o("ckeditor5/src/utils.js");class A extends e.Plugin{static get pluginName(){return"ApscColorBoxBackgroundUI"}init(){const e=this.editor,t=e.t;l.map((e=>e)).value;const o=e.commands.get("apscColorBoxBackground");e.ui.componentFactory.add("apscColorBoxBackgroundOptions",(s=>{const n=(0,d.createDropdown)(s);return(0,d.addListToDropdown)(n,function(e,t){const o=new f.Collection,s="apscColorBoxBackground";let n=l.map((e=>e));for(const e of n){const l={type:"button",model:new d.Model({commandName:s,commandParam:e.value,label:e.label,withText:!0})};l.model.bind("isOn").to(t,"value",(t=>t===e.value||!(!t||!e.value)&&t.toLowerCase()===e.value.toLowerCase())),o.add(l)}return o}(0,o)),n.buttonView.set({label:t("Background Color"),tooltip:!0,withText:!0,class:"cke5-apsccolorbox-bgcolor-insert-button"}),n.extendTemplate({attributes:{class:"ck-background-options-dropdown"}}),n.bind("isEnabled").to(o),this.listenTo(n,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),n}))}}class P extends e.Plugin{static get requires(){return[B,A]}static get pluginName(){return"ApscColorBoxBackground"}}class y extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:o}=this.editor,{selection:s}=t.model.document,l=s.getSelectedElement();let n="";const a=e.value,i="apscpaddingclass";n=l&&l.is("element","apscColorBox")?l:s.getFirstPosition().findAncestor("apscColorBox"),o.change((e=>{if(s.isCollapsed)a?e.setAttribute(i,a,n):e.removeAttribute(i,n);else{const t=o.schema.getValidRanges(s.getRanges(),i);for(const o of t)a?(e.setAttribute(i,a,o),this.value=a):e.removeAttribute(i,o)}}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,o=t.getFirstPosition().findAncestor("apscColorBox"),s=e.schema.findAllowedParent(t.getFirstPosition(),"apscColorBox");this.isEnabled=null!==s,this.value=!!o&&o.getAttribute("apscpaddingclass")}}class E extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"ApscColorBoxPaddingEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("apscColorBox",{allowAttributes:"apscpaddingclass"}),e.conversion.attributeToAttribute({model:"apscpaddingclass",view:"class"}),e.commands.add("apscColorBoxPadding",new y(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\bp-[\S]+/},model:{key:"apscpaddingclass",value:e=>e.getAttribute("class").match(/\bp-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"apscpaddingclass",view:e=>({key:"class",value:e})})}}class k extends e.Plugin{static get pluginName(){return"ApscColorBoxPaddingUI"}init(){const e=this.editor,t=e.t;a.map((e=>e)).value;const o=e.commands.get("apscColorBoxPadding");e.ui.componentFactory.add("apscColorBoxPaddingOptions",(s=>{const l=(0,d.createDropdown)(s);return(0,d.addListToDropdown)(l,function(e,t){const o=new f.Collection,s="apscColorBoxPadding";let l=a.map((e=>e));for(const e of l){const l={type:"button",model:new d.Model({commandName:s,commandParam:e.value,label:e.label,withText:!0})};l.model.bind("isOn").to(t,"value",(t=>t===e.value||!(!t||!e.value)&&t.toLowerCase()===e.value.toLowerCase())),o.add(l)}return o}(0,o)),l.buttonView.set({label:t("Padding"),tooltip:!0,withText:!0,class:"cke5-apsccolorbox-padding-insert-button"}),l.extendTemplate({attributes:{class:"ck-padding-options-dropdown"}}),l.bind("isEnabled").to(o),this.listenTo(l,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),l}))}}class T extends e.Plugin{static get requires(){return[E,k]}static get pluginName(){return"ApscColorBoxPadding"}}class F extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:o}=this.editor,{selection:s}=t.model.document,l=s.getSelectedElement();let n="";const a=e.value,i="apscmarginclass";n=l&&l.is("element","apscColorBox")?l:s.getFirstPosition().findAncestor("apscColorBox"),o.change((e=>{if(s.isCollapsed)a?e.setAttribute(i,a,n):e.removeAttribute(i,n);else{const t=o.schema.getValidRanges(s.getRanges(),i);for(const o of t)a?e.setAttribute(i,a,o):e.removeAttribute(i,o)}}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,o=t.getFirstPosition().findAncestor("apscColorBox"),s=e.schema.findAllowedParent(t.getFirstPosition(),"apscColorBox");this.isEnabled=null!==s,this.value=!!o&&o.getAttribute("apscmarginclass")}}class S extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"ApscColorBoxMarginEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("apscColorBox",{allowAttributes:"apscmarginclass"}),e.conversion.attributeToAttribute({model:"apscmarginclass",view:"class"}),e.commands.add("apscColorBoxMargin",new F(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\bmy-[\S]+/},model:{key:"apscmarginclass",value:e=>e.getAttribute("class").match(/\bmy-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"apscmarginclass",view:e=>({key:"class",value:e})})}}class O extends e.Plugin{static get pluginName(){return"ApscColorBoxMarginUI"}init(){const e=this.editor,t=e.t;n.map((e=>e)).value;const o=e.commands.get("apscColorBoxMargin");e.ui.componentFactory.add("apscColorBoxMarginOptions",(s=>{const l=(0,d.createDropdown)(s);return(0,d.addListToDropdown)(l,function(e,t){const o=new f.Collection,s="apscColorBoxMargin";let l=n.map((e=>e));for(const e of l){const l={type:"button",model:new d.Model({commandName:s,commandParam:e.value,label:e.label,withText:!0})};l.model.bind("isOn").to(t,"value",(t=>t===e.value||!(!t||!e.value)&&t.toLowerCase()===e.value.toLowerCase())),o.add(l)}return o}(0,o)),l.buttonView.set({label:t("Margin"),tooltip:!0,withText:!0,class:"cke5-ubc-colorbox-margin-insert-button"}),l.extendTemplate({attributes:{class:"ck-margin-options-dropdown"}}),l.bind("isEnabled").to(o),this.listenTo(l,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),l}))}}class N extends e.Plugin{static get requires(){return[S,O]}static get pluginName(){return"ApscColorBoxMargin"}}class j extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:o}=this.editor,{selection:s}=t.model.document,l=s.getSelectedElement();let n="";const a="apscshadowclass";n=l&&l.is("element","apscColorBox")?l:s.getFirstPosition().findAncestor("apscColorBox");let i=n.getAttribute(a);o.change((e=>{"drop-shadow-md"===i?(e.setAttribute(a,"drop-shadow-none",n),this.isOn=!1):(e.setAttribute(a,"drop-shadow-md",n),this.isOn=!0)}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,o=t.getFirstPosition().findAncestor("apscColorBox"),s=e.schema.findAllowedParent(t.getFirstPosition(),"apscColorBox");this.isEnabled=null!==s,this.value=!!o&&o.getAttribute("apscshadowclass")}}class M extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"ApscColorBoxShadowEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("apscColorBox",{allowAttributes:"apscshadowclass"}),e.conversion.attributeToAttribute({model:"apscshadowclass",view:"class"}),e.commands.add("apscColorBoxShadow",new j(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/drop-shadow-[\S]+/},model:{key:"apscshadowclass",value:e=>e.getAttribute("class").match(/drop-shadow-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"apscshadowclass",view:e=>({key:"class",value:e})})}}class U extends e.Plugin{static get requires(){return[d.ContextualBalloon]}static get pluginName(){return"ApscColorBoxShadowUI"}init(){const e=this.editor;e.ui.componentFactory.add("apscColorBoxShadowToggle",(t=>{const o=e.commands.get("apscColorBoxShadow"),s=new d.ButtonView(t);return s.set({label:e.t("Toggle Shadow"),tooltip:!0,withText:!0,class:"cke5-apsccolorbox-shadow-insert-button"}),s.bind("isEnabled").to(o),s.bind("isOn").to(o),this.listenTo(s,"execute",(()=>e.execute("apscColorBoxShadow"))),s}))}}class q extends e.Plugin{static get requires(){return[M,U]}static get pluginName(){return"ApscColorBoxShadow"}}class W extends e.Plugin{static get requires(){return[c,u,b,C,P,T,q,N]}}const Z={ApscColorBox:W}})(),s=s.default})()));