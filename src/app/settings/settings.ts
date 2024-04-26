export class Element_SETTING {
  id!: number
  name!:string
  routerLink!: string
  icon!: string
}

export const MENU_SETTING: Element_SETTING[] = [
  {
    id: 1, name: "user",
    routerLink: '/user', icon: 'perm_identity'
  }, {
    id: 2, name: "category",
    routerLink: '/category', icon: 'fastfood'
  }, {
    id: 3, name: "role",
    routerLink: '/role', icon: 'border_color'
  }, {
    id: 5, name: "ingredient",
    routerLink: '/ingredient', icon: 'local_dining',
  },{
    id: 5, name: "menu",
    routerLink: '/menu', icon: 'date_range',
  },{
    id: 5, name: "table",
    routerLink: '/table', icon: 'event_seat',
  },
];
