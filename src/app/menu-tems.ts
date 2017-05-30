// ROLES (http://wiki.dircont.com/pages/viewpage.action?pageId=1277979)
// АТП [superuser]
//  Бухгалтер [accountant]
//  Эксперт [expert]
// Партнер [partner]
// АП [admin_of_user]
//  АН[admin_of_direction]
//    Оператор [operator]
//

export const MENU_ITEMS = {
  unknown: [],
  admin_of_user: [
    {
      link: '/personal_data',
      label: 'Личные данные(Old)',
    },
    {
      link: '/profile',
      label: 'Личные данные',
      sub_items: [{
        link: '/profile/one',
        label: 'Подпункт-1',
      }, {
        link: '/profile/two',
        label: 'Подпункт-2',
      }, {
        link: '/profile/three',
        label: 'Подпункт-3',
      }]
    },
    {
      link: '/employees',
      label: 'Сотрудники',
      sub_items: [{
        link: '/employees/tree',
        label: 'Дерево сотрудников',
      }, ]
    },
    {
      link: '/black-white-list',
      label: 'Черно-белый список'
    },
    {
      link: '/faq',
      label: 'ЧАВО'
    },
  ],
  admin_of_direction: [
    {
      link: '/personal_data',
      label: 'Личные данные'
    },
    {
      link: '/employees',
      label: 'Сотрудники'
    },
    {
      link: 'disable',
      label: 'Черно-белый список'
    },
    {
      link: 'disable',
      label: 'ЧАВО'
    },
  ],
  operator: [
    {
      link: '/personal_data',
      label: 'Личные данные'
    },
    {
      link: 'disable',
      label: 'Черно-белый список'
    },
    {
      link: 'disable',
      label: 'ЧАВО'
    },
  ],
  partner: [
    {
      link: '/personal_data',
      label: 'Личные данные'
    },
    {
      link: 'disable',
      label: 'Черно-белый список'
    },
    {
      link: 'disable',
      label: 'ЧАВО'
    },
  ],
  superuser: [
    {
      link: '/personal_data',
      label: 'Личные данные'
    },
    {
      link: '/employees',
      label: 'Сотрудники'
    },
    {
      link: 'disable',
      label: 'Пользователи'
    },
    {
      link: '/file-sharing',
      label: 'Файлообменник'
    },
    {
      link: 'disable',
      label: 'ЧАВО'
    },
  ],
  accountant: [
    {
      link: '/personal_data',
      label: 'Личные данные'
    },
    {
      link: 'disable',
      label: 'Черно-белый список'
    },
    {
      link: 'disable',
      label: 'ЧАВО'
    },
  ],
  expert: [
    {
      link: '/personal_data',
      label: 'Личные данные'
    },
    {
      link: 'disable',
      label: 'Черно-белый список'
    },
    {
      link: 'disable',
      label: 'ЧАВО'
    },
  ]
};
