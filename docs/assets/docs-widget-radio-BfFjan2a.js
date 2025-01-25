import{c as R,a as W}from"./docs-components-DTArI6tC.js";import{d as g,o as m,c as _,b as o,C as n,u as v,t as s,w as b,h as p,D as d,r as f,f as y}from"./vendor-FsaNdzMQ.js";const G={class:"section"},k="WidgetRadio",V=g({__name:"A01.BasicUsage",setup(O){return(t,e)=>(m(),_("section",G,[e[2]||(e[2]=o("hgroup",{class:"section__title"},[o("h4",null,"Basic Usage")],-1)),n(v(R)),e[3]||(e[3]=o("code",{class:"widget-code--inline"},s("<WidgetRadio />"),-1)),e[4]||(e[4]=o("br",null,null,-1)),e[5]||(e[5]=o("br",null,null,-1)),e[6]||(e[6]=o("br",null,null,-1)),e[7]||(e[7]=o("br",null,null,-1)),n(v(R),{label:"Radio"}),e[8]||(e[8]=o("code",{class:"widget-code--inline"},s('<WidgetRadio label="Radio" />'),-1)),e[9]||(e[9]=o("br",null,null,-1)),e[10]||(e[10]=o("br",null,null,-1)),e[11]||(e[11]=o("br",null,null,-1)),e[12]||(e[12]=o("br",null,null,-1)),n(v(R),null,{default:b(()=>e[0]||(e[0]=[p(" Slot ")])),_:1}),e[13]||(e[13]=o("code",{class:"widget-code--inline"},s("<WidgetRadio> Slot </WidgetRadio>"),-1)),e[14]||(e[14]=o("br",null,null,-1)),e[15]||(e[15]=o("br",null,null,-1)),e[16]||(e[16]=o("br",null,null,-1)),e[17]||(e[17]=o("br",null,null,-1)),n(v(R),{label:"Label"},{default:b(()=>e[1]||(e[1]=[p(" Slot ")])),_:1}),e[18]||(e[18]=o("code",{class:"widget-code--inline"},s('<WidgetRadio label="Label"> Slot </WidgetRadio>'),-1))]))}}),X=Object.freeze(Object.defineProperty({__proto__:null,default:V,viewTitle:k},Symbol.toStringTag,{value:"Module"})),B={class:"section"},S=g({__name:"A02.PropertyCheckedAndDisabled",setup(O){return(t,e)=>{const a=d("WidgetGroup"),l=d("WidgetCode");return m(),_("section",B,[e[1]||(e[1]=o("hgroup",{class:"section__title"},[o("h4",null,"Property [ checked , disabled ] - State"),o("span",{class:"property-enums"},[o("span",{class:"default"},"unchecked"),o("span",null,"checked"),o("span",null,"disabled"),o("span",null,"checked-disabled")])],-1)),n(a,{gap:"4"},{default:b(()=>[n(v(R),{label:"unchecked"}),n(v(R),{label:"checked",checked:""}),n(v(R),{label:"disabled",disabled:""}),n(v(R),{label:"checked-disabled",checked:"",disabled:""})]),_:1}),n(l,null,{default:b(()=>e[0]||(e[0]=[p(s(`<WidgetRadio label="unchecked" />

<WidgetRadio
  label="checked"
  checked />

<WidgetRadio
  label="disabled"
  disabled />

<WidgetRadio
  label="checked-disabled"
  checked
  disabled />`))])),_:1})])}}}),Y=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),C={class:"section"},P="WidgetRadioGroup",j=g({__name:"B03.BasicUsage",setup(O){const t=f("Option 2"),e=[{label:"Option 1"},{label:"Option 2"},{label:"Option 3"},{label:"Option 4"}];return(a,l)=>{const i=d("WidgetRadioGroup"),r=d("WidgetCode");return m(),_("section",C,[l[2]||(l[2]=o("hgroup",{class:"section__title"},[o("h4",null,"Basic Usage")],-1)),n(i,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u),options:e},null,8,["modelValue"]),l[3]||(l[3]=o("br",null,null,-1)),l[4]||(l[4]=o("br",null,null,-1)),p(" checked: "+s(t.value)+" ",1),l[5]||(l[5]=o("br",null,null,-1)),l[6]||(l[6]=o("br",null,null,-1)),n(r,null,{default:b(()=>l[1]||(l[1]=[p(s(`<WidgetRadioGroup
  v-model="checked"
  :options="options" />

const checked = ref('Option 2');

const options = [
  { label: 'Option 1' },
  { label: 'Option 2' },
  { label: 'Option 3' },
  { label: 'Option 4' },
];`))])),_:1})])}}}),Z=Object.freeze(Object.defineProperty({__proto__:null,default:j,viewTitle:P},Symbol.toStringTag,{value:"Module"})),$={class:"section"},c=g({__name:"B04.AdvancedUsage",setup(O){const t=f(2),e=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3,disabled:!0},{label:"Option 4",value:4}];return(a,l)=>{const i=d("WidgetRadioGroup"),r=d("WidgetCode");return m(),_("section",$,[l[2]||(l[2]=o("hgroup",{class:"section__title"},[o("h4",null,"Advanced Usage")],-1)),n(i,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u),required:"",label:"Radio Group",options:e,direction:"column"},null,8,["modelValue"]),l[3]||(l[3]=o("br",null,null,-1)),l[4]||(l[4]=o("br",null,null,-1)),p(" checked: "+s(t.value)+" ",1),l[5]||(l[5]=o("br",null,null,-1)),l[6]||(l[6]=o("br",null,null,-1)),n(r,null,{default:b(()=>l[1]||(l[1]=[p(s(`<WidgetRadioGroup
  v-model="checked"
  required
  label="Radio Group"
  :options="options"
  direction="column" />

const checked = ref(2);

const options = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3, disabled: true },
  { label: 'Option 4', value: 4 },
];`))])),_:1})])}}}),h=Object.freeze(Object.defineProperty({__proto__:null,default:c},Symbol.toStringTag,{value:"Module"})),U={class:"section"},x=g({__name:"B05.PropertyButton",setup(O){const t=f("Option 2"),e=[{label:"Option 1"},{label:"Option 2",icon:"f06c"},{label:"Option 3",disabled:!0},{label:"Option 4"}];return(a,l)=>{const i=d("WidgetRadioGroup"),r=d("WidgetCode");return m(),_("section",U,[l[2]||(l[2]=o("hgroup",{class:"section__title"},[o("h4",null,"Property [ button ]")],-1)),n(i,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u),label:"Button Radio Group",options:e,button:""},null,8,["modelValue"]),l[3]||(l[3]=o("br",null,null,-1)),l[4]||(l[4]=o("br",null,null,-1)),p(" checked: "+s(t.value)+" ",1),l[5]||(l[5]=o("br",null,null,-1)),l[6]||(l[6]=o("br",null,null,-1)),n(r,null,{default:b(()=>l[1]||(l[1]=[p(s(`<WidgetRadioGroup
  v-model="checked"
  label="Button Radio Group"
  :options="options"
  button />

const checked = ref('Option 2');

const options = [
  { label: 'Option 1' },
  { label: 'Option 2', icon: 'f06c' },
  { label: 'Option 3', disabled: true },
  { label: 'Option 4' },
];`))])),_:1})])}}}),ll=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),z={class:"section"},w=g({__name:"B06.PropertyButtonShape",setup(O){const t=f("Option 2"),e=[{label:"Option 1"},{label:"Option 2"},{label:"Option 3",disabled:!0},{label:"Option 4"}];return(a,l)=>{const i=d("WidgetRadioGroup"),r=d("WidgetCode");return m(),_("section",z,[l[4]||(l[4]=o("hgroup",{class:"section__title"},[o("h4",null,"Property [ button.shape ]")],-1)),n(i,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u),label:"Rounded Button Radio Group",options:e,button:{shape:"rounded"}},null,8,["modelValue"]),l[5]||(l[5]=o("br",null,null,-1)),l[6]||(l[6]=o("br",null,null,-1)),n(i,{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=u=>t.value=u),label:"Capsule Button Radio Group",options:e,button:{shape:"capsule"},whole:""},null,8,["modelValue"]),l[7]||(l[7]=o("br",null,null,-1)),l[8]||(l[8]=o("br",null,null,-1)),n(i,{modelValue:t.value,"onUpdate:modelValue":l[2]||(l[2]=u=>t.value=u),label:"Line Button Radio Group",options:e,button:{shape:"line"},gap:"0"},null,8,["modelValue"]),l[9]||(l[9]=o("br",null,null,-1)),l[10]||(l[10]=o("br",null,null,-1)),n(r,null,{default:b(()=>l[3]||(l[3]=[p(s(`<WidgetRadioGroup
  v-model="checked"
  label="Rounded Button Radio Group"
  :options="options"
  :button="{
    shape: 'rounded',
  }" />

  <WidgetRadioGroup
  v-model="checked"
  label="Rounded Button Radio Group"
  :options="options"
  :button="{
    shape: 'capsule',
  }"
  whole />

  <WidgetRadioGroup
  v-model="checked"
  label="Rounded Button Radio Group"
  :options="options"
  :button="{
    shape: 'line',
  }"
  gap="0" />
`))])),_:1})])}}}),ol=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),T={class:"section",style:{"--label-min-width":"240px"}},M=g({__name:"B07.PropertyButtonSize",setup(O){const t=f("Option 2"),e=[{label:"Option 1"},{label:"Option 2"},{label:"Option 3",disabled:!0},{label:"Option 4"}];return(a,l)=>{const i=d("WidgetRadioGroup"),r=d("WidgetCode");return m(),_("section",T,[l[5]||(l[5]=o("hgroup",{class:"section__title"},[o("h4",null,"Property [ button.size ]")],-1)),n(i,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u),label:"Mini Button Radio Group",options:e,button:{size:"mini"}},null,8,["modelValue"]),l[6]||(l[6]=o("br",null,null,-1)),l[7]||(l[7]=o("br",null,null,-1)),n(i,{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=u=>t.value=u),label:"Normal Button Radio Group",options:e,button:""},null,8,["modelValue"]),l[8]||(l[8]=o("br",null,null,-1)),l[9]||(l[9]=o("br",null,null,-1)),n(i,{modelValue:t.value,"onUpdate:modelValue":l[2]||(l[2]=u=>t.value=u),label:"Large Button Radio Group",options:e,button:{size:"large"}},null,8,["modelValue"]),l[10]||(l[10]=o("br",null,null,-1)),l[11]||(l[11]=o("br",null,null,-1)),n(i,{modelValue:t.value,"onUpdate:modelValue":l[3]||(l[3]=u=>t.value=u),label:"Extra Button Radio Group",options:e,button:{size:"extra"}},null,8,["modelValue"]),l[12]||(l[12]=o("br",null,null,-1)),l[13]||(l[13]=o("br",null,null,-1)),n(r,null,{default:b(()=>l[4]||(l[4]=[p(s(`<WidgetRadioGroup
  v-model="checked"
  label="Mini Button Radio Group"
  :options="options"
  :button="{
    size: 'mini',
  }" />

<WidgetRadioGroup
  v-model="checked"
  label="Normal Button Radio Group"
  :options="options"
  button />

<WidgetRadioGroup
  v-model="checked"
  label="Large Button Radio Group"
  :options="options"
  :button="{
    size: 'large',
  }" />

<WidgetRadioGroup
  v-model="checked"
  label="Extra Button Radio Group"
  :options="options"
  :button="{
    size: 'extra',
  }" />`))])),_:1})])}}}),el=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),A={class:"section"},L=g({__name:"B08.PropertyButtonAndIcon",setup(O){const t=f("left"),e=y(()=>[{label:"Left",value:"left",icon:"e236",iconOnly:!0},{label:"Center",value:"center",icon:"e234",iconOnly:!0},{label:"Right",value:"right",icon:"e237",iconOnly:!0},{label:"Justify",value:"justify",icon:"e235",iconOnly:!0}].map(a=>a.value===t.value?{...a,iconOnly:!1}:a));return(a,l)=>{const i=d("WidgetRadioGroup"),r=d("WidgetCode");return m(),_("section",A,[l[2]||(l[2]=o("hgroup",{class:"section__title"},[o("h4",null,"Property [ button.shape, options.option.icon, options.option.iconOnly ]")],-1)),n(i,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u),label:"Align",options:e.value,button:{shape:"rounded"},whole:"",gap:"0"},null,8,["modelValue","options"]),l[3]||(l[3]=o("br",null,null,-1)),l[4]||(l[4]=o("br",null,null,-1)),n(r,null,{default:b(()=>l[1]||(l[1]=[p(s(`<WidgetRadioGroup
  v-model="align"
  label="Align"
  :options="alignOptions"
  :button="{
    shape: 'rounded',
  }"
  whole
  gap="0" />

const align = ref('left');

const alignOptions = computed(() =>
  [
    { label: 'Left', value: 'left', icon: 'e236', iconOnly: true },
    { label: 'Center', value: 'center', icon: 'e234', iconOnly: true },
    { label: 'Right', value: 'right', icon: 'e237', iconOnly: true },
    { label: 'Justify', value: 'justify', icon: 'e235', iconOnly: true },
  ].map((option) =>
    option.value === align.value
      ? {
          ...option,
          iconOnly: false,
        }
      : option,
  ),
);`))])),_:1})])}}}),tl=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"})),q={class:"section"},E={class:"section__title"},D=g({__name:"B09.PropertyReadonly",setup(O){const t=f("Option 2"),e=[{label:"Option 1"},{label:"Option 2"},{label:"Option 3"},{label:"Option 4"}];return(a,l)=>{const i=d("WidgetRadioGroup"),r=d("WidgetCode");return m(),_("section",q,[o("hgroup",E,[n(v(W),{widget:"WidgetGroup",prop:"readonly"})]),n(i,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u),label:"Readonly Radio Group",options:e,readonly:""},null,8,["modelValue"]),l[2]||(l[2]=o("br",null,null,-1)),l[3]||(l[3]=o("br",null,null,-1)),p(" checked: "+s(t.value)+" ",1),l[4]||(l[4]=o("br",null,null,-1)),l[5]||(l[5]=o("br",null,null,-1)),n(r,null,{default:b(()=>l[1]||(l[1]=[p(s(`<WidgetRadioGroup
  v-model="checked"
  :options="options"
  readonly />

const checked = ref('Option 2');

const options = [
  { label: 'Option 1' },
  { label: 'Option 2' },
  { label: 'Option 3' },
  { label: 'Option 4' },
];`))])),_:1})])}}}),nl=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"})),N={class:"section"},F={class:"section__title"},J=g({__name:"B10.PropertyDisabled",setup(O){const t=f("Option 2"),e=[{label:"Option 1"},{label:"Option 2"},{label:"Option 3"},{label:"Option 4"}];return(a,l)=>{const i=d("WidgetRadioGroup"),r=d("WidgetCode");return m(),_("section",N,[o("hgroup",F,[n(v(W),{widget:"WidgetRadioGroup",prop:"disabled"})]),n(i,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u),label:"Disabled Radio Group",options:e,disabled:""},null,8,["modelValue"]),l[2]||(l[2]=o("br",null,null,-1)),l[3]||(l[3]=o("br",null,null,-1)),p(" checked: "+s(t.value)+" ",1),l[4]||(l[4]=o("br",null,null,-1)),l[5]||(l[5]=o("br",null,null,-1)),n(r,null,{default:b(()=>l[1]||(l[1]=[p(s(`<WidgetRadioGroup
  v-model="checked"
  :options="options"
  disabled />

const checked = ref('Option 2');

const options = [
  { label: 'Option 1' },
  { label: 'Option 2' },
  { label: 'Option 3' },
  { label: 'Option 4' },
];`))])),_:1})])}}}),ul=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),I={class:"section"},H=g({__name:"B11.PropertyErrorAndPrompt",setup(O){const t=f(void 0),e=[{label:"Option 1"},{label:"Option 2"},{label:"Option 3"},{label:"Option 4"}];return(a,l)=>{const i=d("WidgetRadioGroup"),r=d("WidgetCode");return m(),_("section",I,[l[3]||(l[3]=o("hgroup",{class:"section__title"},[o("h4",null,"Property [ error, prompt ]")],-1)),n(i,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u),required:"",label:"Error Radio Group",options:e,error:"",prompt:"Field is required"},null,8,["modelValue"]),l[4]||(l[4]=o("br",null,null,-1)),l[5]||(l[5]=o("br",null,null,-1)),l[6]||(l[6]=o("br",null,null,-1)),l[7]||(l[7]=o("br",null,null,-1)),n(i,{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=u=>t.value=u),required:"",label:"Error Radio Group",options:e,button:"",error:"",prompt:"Field is required"},null,8,["modelValue"]),n(r,null,{default:b(()=>l[2]||(l[2]=[p(s(`<WidgetRadioGroup
  v-model="checked"
  :options="options"
  error />

const checked = ref(undefined);

const options = [
  { label: 'Option 1' },
  { label: 'Option 2' },
  { label: 'Option 3' },
  { label: 'Option 4' },
];`))])),_:1})])}}}),il=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));export{X as _,Y as a,Z as b,h as c,ll as d,ol as e,el as f,tl as g,nl as h,ul as i,il as j};
//# sourceMappingURL=docs-widget-radio-BfFjan2a.js.map
