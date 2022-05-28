import { TButton, TTable, TTag, TInput } from "vue-tailwind/dist/components";

const VueTailwindComponent = {
  "t-tag": {
    component: TTag,
  },
  "t-input": {
    component: TInput,
  },
  "t-table": {
    component: TTable,
    props: {
      classes: {
        table:
          "min-w-full divide-y divide-gray-100 shadow-sm border-gray-200 border",
        thead: "",
        theadTr: "",
        theadTh: "px-3 py-2 font-semibold text-left bg-gray-100 border-b",
        tbody: "bg-white divide-y divide-gray-100",
        tr: "",
        td: "px-3 py-2 whitespace-no-wrap text-left border-b",
        tfoot: "",
        tfootTr: "",
        tfootTd: "",
      },
      variants: {
        thin: {
          td: "p-1 whitespace-no-wrap text-sm",
          theadTh: "p-1 font-semibold text-left bg-gray-100 border-b text-sm",
        },
      },
    },
  },
  "t-button": {
    component: TButton,
  },
};

export default VueTailwindComponent;
