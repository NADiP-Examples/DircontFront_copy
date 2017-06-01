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
  // Меню для демонстрации макетов
  demo: [
    {
      link: '/demo',
      label: 'Все демки',
    },
    {
      link: '/demo/profile',
      label: 'Личные данные',
    },
    {
      link: '/demo/employees',
      label: 'Сотрудники',
      sub_items: [{
        link: '/demo/employees/tree',
        label: 'Дерево',
      }],
    },
    {
      link: '/demo/map',
      label: 'Карта Компетенций',
    },
    {
      link: '/demo/black-white-list',
      label: 'Черно-белый список поставщиков',
    },
    {
      link: '/demo/rates',
      label: 'Тарифы',
    },
    {
      link: '/demo/registers',
      label: 'Реестры',
      sub_items: [{
        link: '/demo/registers/clients',
        label: 'Клиентов',
      },{
        link: '/demo/registers/partners',
        label: 'Партнеров',
      },{
        link: '/demo/registers/pays',
        label: 'Поступлений и выплат',
      }, {
        link: '/demo/registers/indicators',
        label: 'Ключевых показателей',
      }
      ],
    },
    {
      link: '/demo/pay',
      label: 'Оплата',
    },
    {
      link: '/demo/FAQ',
      label: 'ЧаВо',
    },
  ],
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
      },]
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
