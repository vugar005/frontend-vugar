export const MY_FORMATS = {
  parse: {
    dateInput: '20130208T08'
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};


export function switchToView(name: string) {
  const nav = document.querySelector(name);
  if (nav) {
    nav.scrollIntoView({
      behavior: 'smooth', block: 'start', inline: 'nearest'
    });
  }
}