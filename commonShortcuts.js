const commonShortcuts = {
  "padding-base": "pl-4 pr-2 py-2",
  "padding-sm": "pl-4 pr-2 py-2",
  "padding-lg": "pl-4 pr-2 py-3",
  'container': 'w-full max-w-7xl mx-auto tablet:px-6 <tablet:px-4',
  'header': 'w-full tablet:h-18 <tablet:h-18 <mobile:h-12 bg-secondary sticky top-0 left-0 z-50',
  'header-position': 'w-full sticky top-0 left-0 z-50',
  'header-style': 'tablet:h-18 <tablet:h-18 <mobile:h-12 bg-secondary',
  'main': '<tablet:min-h-[calc(100vh-4.5rem)] tablet:min-h-[calc(100vh-4.5rem)] <mobile:min-h-[calc(100vh-3rem)] relative',
  'footer': 'bg-secondary',
  "post-ad-label": "font-medium text-sm",
  container: "w-full max-w-7xl mx-auto tablet:px-6 <tablet:px-4",
  header:
    "w-full tablet:h-18 <tablet:h-18 <mobile:h-12 bg-secondary sticky top-0 left-0 z-50",
  "header-position": "w-full sticky top-0 left-0 z-50",
  "header-style": "tablet:h-18 <tablet:h-18 <mobile:h-12 bg-secondary",
  main: "<tablet:min-h-[calc(100vh-4.5rem)] tablet:min-h-[calc(100vh-4.5rem)] <mobile:min-h-[calc(100vh-3rem)] relative",
  footer: "bg-secondary",
  "mobile-base-icon":
    "<tablet:children:w-[6px] <tablet:children:h-[12px] <mobile:children:w-[6px] <mobile:children:h-[12px] mt-[5px]",
  "mobile-li":
    "p-3 flex justify-between hover:bg-gray-100 items-center first:border-t first:divide-red-500 last:border-t last:divide-red-500",
  "border-top-liner": "divide-y divide-gren-500 wrapper",
  "base-categoriy-icon":
    "flex bg-primary rounded-1/2 items-center justify-around <tablet:w-10 <tablet:h-10 <tablet:items-center <mobile:w-8 <mobile:h-8 ",
  input: {
    "@apply": "outline-none ring-offset-2 transition duration-300",
    // "&:focus": { "@apply": "ring-1 ring-primary" },
    // "&:focus-within": { "@apply": "ring-1 ring-primary" },
  },
  "input-dark": {
    "@apply": "outline-none ring-offset-2 transition duration-300",
    // "&:focus": { "@apply": "ring-1 ring-secondary" },
    // "&:focus-within": { "@apply": "ring-1 ring-secondary" },
  },
  "input-base": "padding-base rounded-sm text-sm h-[48px]",
  "input-sm": "padding-sm rounded-sm text-sm h-[38px]",
  "input-lg": "padding-lg rounded-sm text-lg h-[54px]",
  checkbox: "inline-flex items-center justify-center",
  "checkbox-base":
    "sibling:border-dark-400 sibling:border-2 sibling:rounded-sm sibling:checked:bg-dark-400 sibling:children:checked:text-white",
  "checkbox-asterisk":
    "sibling:children:checked:text-primary sibling:children:checked:opacity-100",
  switcher:
    "siblings:disabled:opacity-50 siblings:disabled:cursor-not-allowed siblings:checked:bg-white siblings:children:checked:bg-secondary siblings:children:checked:right-1/2 siblings:children:checked:border-white",
  "pagination-item":
    "p-1 cursor-pointer mr-2 text-gray-400 font-extrabold text-xs rounded-[2px] border-1 border-gray-400 h-6 min-w-6 inline-flex items-center justify-center",
  "pagination-disabled": "opacity-50 children:cursor-not-allowed",
  "pagination-active":
    "children:bg-blue-700 children:text-white children:border-transparent",
  button: "text-center rounded-sm",
  "button-tiny": "px-2.5 text-xs rounded-sm h-[24px]",
  "button-xs": "px-3 rounded-sm text-xs h-[32px]",
  "button-sm": "px-4 rounded-sm text-sm h-[38px]",
  "button-base": "px-4 rounded-sm text-base h-[48px]",
  "button-lg": "px-4 rounded-sm text-lg h-[54px]",
};

export default commonShortcuts;
