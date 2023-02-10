export interface IAccordion {
  id: number;
  title: string;
  itemList?: IAccordion[];
  outerLink?: string;
  link?: string;
  data?: string;
}

export const accordionList: IAccordion[] = [
  {
    id: 0,
    title: "test1",
    data: "",
    link: "",
    outerLink: "",
    itemList: [
      {
        id: 0,
        title: "test1-1",
        data: "",
        link: "",
        outerLink: "",
        itemList: [
          {
            id: 0,
            title: "test1-1-1",
            data: "",
            link: "",
            outerLink: "",
          },
          {
            id: 1,
            title: "test1-1-2",
            data: "",
            link: "",
            outerLink: "",
          },
        ],
      },
      {
        id: 1,
        title: "test1-2",
        data: "",
        link: "",
        outerLink: "",
        itemList: [
          {
            id: 0,
            title: "test1-2-1",
            data: "",
            link: "",
            outerLink: "",
          },
          {
            id: 1,
            title: "test1-2-2",
            data: "",
            link: "",
            outerLink: "",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    title: "test2",
    data: "",
    link: "",
    outerLink: "",
    itemList: [
      {
        id: 0,
        title: "test2-1",
        data: "",
        link: "",
        outerLink: "",
        itemList: [
          {
            id: 0,
            title: "test2-1-1",
            data: "",
            link: "",
            outerLink: "",
          },
          {
            id: 1,
            title: "test2-1-2",
            data: "",
            link: "",
            outerLink: "",
          },
        ],
      },
      {
        id: 1,
        title: "test2-2",
        data: "",
        link: "",
        outerLink: "",
        itemList: [
          {
            id: 0,
            title: "test2-2-1",
            data: "",
            link: "",
            outerLink: "",
          },
          {
            id: 1,
            title: "test2-2-2",
            data: "",
            link: "",
            outerLink: "",
          },
        ],
      },
    ],
  },
];
