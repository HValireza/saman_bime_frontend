import publicImg from "../../../assets/images/group/public_assembly.jpg";
import privateImg from "../../../assets/images/group/private_assembly.jpg";

const GroupsData = [
  {
    title: "مجامع",
    state: "assemblies",
    cards: [
      {
        title: "مجمع موسس",
        img: privateImg,
        linkTo: "/news/constituent",
      },
      {
        title: "مجمع عمومی و فوق العاده",
        img: publicImg,
        linkTo: "/news/general",
      },
    ],
  },
];

export default GroupsData;
